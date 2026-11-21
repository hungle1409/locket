/*
 * Locket AI Filter Groups - learning / local-response experiment
 * Based on structural ideas visible in sb-doanthai/Locket2, NOT copied from it.
 * Only adjusts the UI filter catalog in Firebase Remote Config response.
 * Does NOT unlock subscriptions, alter user accounts, or generate AI effects.
 * Filter IDs may be unsupported on a particular Locket version/server.
 */

// Existing filter IDs observed in the public reference repository.
// Rename titles or rearrange IDs to customize the menu.
var MY_GROUPS = [
  {
    title: "Hài Hước 😂",
    ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"]
  },
  {
    title: "Ngoại Hình ✨",
    ids: ["blonde_bleached", "beard", "bob_cut", "buns", "mohawk", "braces", "tatted"]
  },
  {
    title: "Đáng Yêu 💗",
    ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"]
  },
  {
    title: "Lễ Hội 🎉",
    ids: ["disco_lights", "happy_birthday", "princess", "wedding", "cowboy_cowgirl"]
  }
];

// If Locket's reply has no camera_filter_config key, add a minimal one.
// This is inspired by the reference project, NOT verified with a real iPhone.
var ADD_CONFIG_IF_MISSING = true;

function uniqueStrings(xs) {
  var seen = {};
  var out = [];
  (xs || []).forEach(function (x) {
    if (typeof x === "string" && x && !seen[x]) {
      seen[x] = true;
      out.push(x);
    }
  });
  return out;
}

function rewriteRemoteConfig(body) {
  var data = JSON.parse(body);
  if (!data || typeof data !== "object" || !data.entries || typeof data.entries !== "object") {
    return body;
  }
  var value = data.entries.camera_filter_config;
  var config;
  if (typeof value === "string") {
    try { config = JSON.parse(value); } catch (e) { return body; }
  } else if (value && typeof value === "object") {
    config = value;
  } else if (ADD_CONFIG_IF_MISSING) {
    config = {};
  } else {
    return body;
  }
  if (!config || typeof config !== "object" || Array.isArray(config)) return body;

  // Preserve other existing sections. Replace only groups with these titles.
  var titles = {};
  MY_GROUPS.forEach(function (g) { titles[g.title] = true; });
  var originals = Array.isArray(config.sheet_filters) ? config.sheet_filters : [];
  var kept = originals.filter(function (g) {
    return !(g && g.title && titles[g.title.en]);
  });
  var groups = MY_GROUPS.map(function (g) {
    return { title: { en: g.title, vn: g.title }, filter_ids: uniqueStrings(g.ids) };
  });
  var allIds = [];
  if (Array.isArray(config.picker_filters)) allIds = allIds.concat(config.picker_filters);
  groups.forEach(function (g) { allIds = allIds.concat(g.filter_ids); });

  // UI catalog only. No account / subscription / paywall modification.
  config.sheet_filters = groups.concat(kept);
  config.picker_filters = uniqueStrings(allIds);
  config.show_filter_button = true;
  config.sheet_enabled = true;
  data.entries.camera_filter_config = JSON.stringify(config);
  return JSON.stringify(data);
}

try {
  if (typeof $response !== "undefined" && typeof $response.body === "string") {
    var updated = rewriteRemoteConfig($response.body);
    $done(updated === $response.body ? {} : { body: updated });
  } else {
    $done({});
  }
} catch (e) {
  // Fail open: do not break Locket if response schema changes.
  $done({});
}

/*
 * Locket AI Custom - conservative filter grouping example
 * Version: 0.1 (2026-11-21)
 *
 * Only rearranges IDs that are already present in an existing
 * camera_filter_config response. Does not add new AI models,
 * bypass payment, or send any data to external servers.
 */

// EDIT HERE: Rename groups and choose existing filter IDs.
// Unknown filter IDs are ignored intentionally.
var MY_GROUPS = [
  {
    name: "AI Của Tôi",
    ids: ["okay_wig", "toothless", "bye_brows", "cowboy_cowgirl"]
  },
  {
    name: "Hiệu Ứng Vui",
    ids: ["flower_crown", "sticker_face", "disco_lights", "happy_birthday"]
  }
];

function safeDone(output) {
  $done(output || {});
}

try {
  var original = JSON.parse($response.body);
  var entries = original && original.entries;
  var raw = entries && entries.camera_filter_config;

  if (typeof raw !== "string") {
    safeDone();
  } else {
    var filterConfig = JSON.parse(raw);
    if (!filterConfig || !Array.isArray(filterConfig.sheet_filters)) {
      safeDone();
    } else {
      var available = {};
      var i, j;

      if (Array.isArray(filterConfig.picker_filters)) {
        for (i = 0; i < filterConfig.picker_filters.length; i++) {
          if (typeof filterConfig.picker_filters[i] === "string") {
            available[filterConfig.picker_filters[i]] = true;
          }
        }
      }
      for (i = 0; i < filterConfig.sheet_filters.length; i++) {
        var oldGroup = filterConfig.sheet_filters[i];
        var oldIds = oldGroup && oldGroup.filter_ids;
        if (Array.isArray(oldIds)) {
          for (j = 0; j < oldIds.length; j++) {
            if (typeof oldIds[j] === "string") available[oldIds[j]] = true;
          }
        }
      }

      var titles = {};
      for (i = 0; i < MY_GROUPS.length; i++) titles[MY_GROUPS[i].name] = true;
      var existingGroups = filterConfig.sheet_filters.filter(function (group) {
        var title = group && group.title;
        return !(title && titles[title.en]);
      });
      var newGroups = [];

      for (i = 0; i < MY_GROUPS.length; i++) {
        var group = MY_GROUPS[i];
        var selectedIds = [];
        for (j = 0; j < group.ids.length; j++) {
          var id = group.ids[j];
          if (available[id] && selectedIds.indexOf(id) === -1) {
            selectedIds.push(id);
          }
        }
        if (selectedIds.length > 0) {
          newGroups.push({title: {en: group.name}, filter_ids: selectedIds});
        }
      }

      if (newGroups.length > 0) {
        filterConfig.sheet_filters = newGroups.concat(existingGroups);
        entries.camera_filter_config = JSON.stringify(filterConfig);
        safeDone({body: JSON.stringify(original)});
      } else {
        safeDone();
      }
    }
  }
} catch (e) {
  // Leave Locket's response untouched if its JSON format changes.
  safeDone();
}

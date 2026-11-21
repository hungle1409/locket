const VIP_STORE_KEY = "LOCKET_VIP_COMMUNITY";
const SELF_UID_KEY = "LOCKET_SELF_UID";
const SELF_USERNAME_KEY = "LOCKET_SELF_USERNAME";
const BASE_VIP_USERS = ["hungle1409"];

function applyGoldBadge(target) {
    if (!target || typeof target !== "object") return;
    target.badge = "locket_gold"; target.is_gold = true; target.has_gold = true;
    target.gold = true; target.gold_subscription = true; target.tier = "gold";
    target.subscription_status = "active";
}

function isNodeVip(target, vSet) {
    if (!target || typeof target !== "object") return false;
    const candidates = [target.uid, target.user_id, target.id, target.friend_uid, target.friend_id, target.username, target.friend_username, target.display_name, target.first_name, target.name, target.user?.uid, target.user?.id, target.user?.username, target.user?.display_name, target.friend?.uid, target.friend?.username];
    for (const c of candidates) {
        if (c && typeof c === "string") {
            const clean = c.toLowerCase().trim();
            if (clean && vSet.has(clean)) return true;
        }
    }
    return false;
}

if (typeof $response === "undefined") {
    const headers = Object.assign({}, $request.headers || {});
    for (const k of Object.keys(headers)) {
        const low = k.toLowerCase();
        if (low === "if-none-match" || low === "if-modified-since" || low === "x-revenuecat-etag") delete headers[k];
    }
    headers["X-App-Region"] = "US"; headers["X-Country-Code"] = "US";
    $done({ headers, body: $request.body });
} else {
    let body = $response.body;
    let status = $response.status || $response.statusCode || 200;
    const vipSet = new Set(BASE_VIP_USERS.map(u => String(u).toLowerCase().trim()));
    
    if (typeof $persistentStore !== "undefined") {
        try {
            const rawVip = $persistentStore.read(VIP_STORE_KEY);
            if (rawVip) { const list = JSON.parse(rawVip); if (Array.isArray(list)) list.forEach(id => { if (id) vipSet.add(String(id).toLowerCase().trim()); }); }
            const myUid = $persistentStore.read(SELF_UID_KEY); if (myUid) vipSet.add(String(myUid).toLowerCase().trim());
            const myUname = $persistentStore.read(SELF_USERNAME_KEY); if (myUname) vipSet.add(String(myUname).toLowerCase().trim());
        } catch (e) {}
    }

    if (body && typeof body === "string") {
        try {
            let obj = JSON.parse(body);
            function transformNode(node) {
                if (!node || typeof node !== "object") return;
                if (Array.isArray(node)) { for (let i = 0; i < node.length; i++) transformNode(node[i]); return; }
                
                const isSelf = ("email" in node) || ("phone_number" in node) || ("push_token" in node);
                if (isSelf) {
                    applyGoldBadge(node);
                    const uid = String(node.uid || node.user_id || node.id || "").toLowerCase().trim();
                    const username = String(node.username || "").toLowerCase().trim();
                    if (typeof $persistentStore !== "undefined") { if (uid) $persistentStore.write(uid, SELF_UID_KEY); if (username) $persistentStore.write(username, SELF_USERNAME_KEY); }
                    if (uid) vipSet.add(uid); if (username) vipSet.add(username);
                } else {
                    if (isNodeVip(node, vipSet)) {
                        applyGoldBadge(node);
                        if (node.user && typeof node.user === "object") applyGoldBadge(node.user);
                        if (node.friend && typeof node.friend === "object") applyGoldBadge(node.friend);
                    }
                }

                // Gỡ mờ ảnh (Unblur)
                const clearUrl = node.unblurred_url || node.unlocked_url || node.result_url || node.image_url || node.url;
                if (clearUrl && typeof clearUrl === "string" && clearUrl.startsWith("http")) {
                    if ("blurred_url" in node) node.blurred_url = clearUrl;
                    if ("blurred_image_url" in node) node.blurred_image_url = clearUrl;
                    if ("preview_url" in node) node.preview_url = clearUrl;
                }

                for (const k of Object.keys(node)) {
                    if (k === "badge" || k === "is_gold" || k === "has_gold" || k === "tier" || k === "gold") continue;
                    transformNode(node[k]);
                }
            }
            transformNode(obj);
            body = JSON.stringify(obj);
        } catch (e) {}
    }
    $done({ status: status, headers: Object.assign({}, ($response && $response.headers) || {}, { "content-type": "application/json" }), body: body });
}
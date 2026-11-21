/* ═══════════════════════════════════════════════════════════════════════
🎭  LOCKET — GOLD + FILTER PACK UNLOCKER (ANTI-CRASH VERSION)
═══════════════════════════════════════════════════════════════════════ */
let obj = {};
try { 
    obj = JSON.parse($response.body || "{}"); 
} catch (e) { 
    obj = {}; 
}

// Nếu không phải object hợp lệ, tạo mới để tránh crash
if (!obj || typeof obj !== "object") {
    obj = { subscriber: { subscriptions: {}, entitlements: {} } };
}

obj.Attention = "Chuc mung ban! Vui long khong su dung cho muc dich thuong mai!";
const FAR_FUTURE = "9999-01-09T10:10:14Z";
const PAST = "2020-01-01T10:10:14Z";

function makeSub(productId, priceAmount, priceCurrency) {
    return {
        auto_resume_date: null,
        display_name: productId,
        is_sandbox: false,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal",
        price: { amount: priceAmount, currency: priceCurrency },
        expires_date: FAR_FUTURE,
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: PAST,
        purchase_date: PAST,
        store: "app_store",
        store_transaction_id: "2000001108724193"
    };
}

function makeEnt(productId) {
    return {
        grace_period_expires_date: null,
        purchase_date: PAST,
        product_identifier: productId,
        expires_date: FAR_FUTURE
    };
}

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

// Mở khóa Locket Gold
const goldProduct = "locket_1600_1y";
obj.subscriber.subscriptions[goldProduct] = makeSub(goldProduct, 399000.0, "VND");
obj.subscriber.entitlements["Gold"] = makeEnt(goldProduct);

// Mở khóa Filter Pack (Tuỳ chọn)
const pack10Product = "com.locket.Locket.FilterPack_10Photos_400";
obj.subscriber.subscriptions[pack10Product] = makeSub(pack10Product, 0.0, "USD");
obj.subscriber.entitlements["effect_pack_10"] = makeEnt(pack10Product);

$done({ body: JSON.stringify(obj) });

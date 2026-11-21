let obj = {};
try { 
    obj = JSON.parse($response.body || "{}"); 
} catch (e) { 
    obj = {}; 
}
if (!obj || typeof obj !== "object") {
    obj = { subscriber: { subscriptions: {}, entitlements: {} } };
}

const FAR_FUTURE = "9999-01-09T10:10:14Z";
const PAST = "2020-01-01T10:10:14Z";

function makeSub(p, a, c) { 
    return { 
        auto_resume_date: null, 
        display_name: p, 
        is_sandbox: false, 
        ownership_type: "PURCHASED", 
        billing_issues_detected_at: null, 
        management_url: "https://apps.apple.com/account/subscriptions", 
        period_type: "normal", 
        price: { amount: a, currency: c }, 
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

function makeEnt(p) { 
    return { 
        grace_period_expires_date: null, 
        purchase_date: PAST, 
        product_identifier: p, 
        expires_date: FAR_FUTURE 
    }; 
}

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

const goldProduct = "locket_1600_1y";
obj.subscriber.subscriptions[goldProduct] = makeSub(goldProduct, 399000.0, "VND");
obj.subscriber.entitlements["Gold"] = makeEnt(goldProduct);

$done({ body: JSON.stringify(obj) });

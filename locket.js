/* ─────────────────────────  🔧 KHỞI TẠO & CHỐNG CACHE  ───────────────────────── */
let obj = {};
try { obj = JSON.parse($response.body || "{}"); } catch (e) { obj = {}; }
if (!obj || typeof obj !== "object") obj = {};

obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.Attention = "Chuc mung ban! Vui long khong ban hoac chia se cho nguoi khac!";
obj.entries = obj.entries || {};
obj.entries.cache_ttl_seconds = "0";
obj.entries.client_cache_ttl_sec = "0";

/* ═══════════════════════════════════════════════════════════════════════
§1  👑  GOLD · FEATURE GATES · PAYWALL
═══════════════════════════════════════════════════════════════════════ */
Object.assign(obj.entries, {
    feature_gates: JSON.stringify({
        app_icon_picker: "enabled",
        camera_roll: "enabled",
        camera_theme: "enabled",
        locket_views: "enabled",
        long_captions: "enabled",
        longer_video: "enabled",
        unlimited_friends: "enabled",
        priority_support: "enabled",
        profile_badge: "enabled",
        remove_ads: "enabled",
        video: "enabled",
        custom_widget_frames: "enabled",
        streak_recovery: "enabled",
        camera_filters: "enabled",
        camera_filter: "enabled",
        filter: "enabled",
        filters: "enabled",
        holiday_effects: "enabled",
        holiday_filters: "enabled",
        holiday_filter: "enabled",
        ar_filters: "enabled",
        ai_filters: "enabled",
        ai_filter: "enabled",
        photo_filters: "enabled",
        face_filters: "enabled",
        profile_cover: "enabled",
        profile_cover_photo: "enabled",
        profile_customization: "enabled"
    }),
    upsell_features: JSON.stringify({
        app_icon_picker: false,
        camera_roll: false,
        camera_theme: false,
        locket_views: false,
        remove_ads: false,
        custom_widget_frames: false,
        filter: false,
        filters: false,
        camera_filter: false,
        camera_filters: false,
        holiday_filter: false,
        holiday_filters: false,
        holiday_effects: false,
        ai_filter: false,
        ai_filters: false
    }),
    country_code: "US",
    region_code: "US",
    is_us_user: "true",
    camera_filters_enabled: "true",
    camera_filter_enabled: "true",
    holiday_filters_enabled: "true",
    ai_filters_enabled: "true",
    camera_filter_gold_only: "false",
    camera_filters_gold_only: "false",
    holiday_filters_gold_only: "false",
    filter_paywall_enabled: "false",
    camera_filter_paywall_enabled: "false",
    filter_upsell_enabled: "false",
    require_gold_for_filters: "false",
    free_filters_enabled: "true",
    camera_filter_sheet_selection_enabled: "true",
    sheet_filters_selectable: "true",
    dismiss_filter_sheet_on_select: "true",
    camera_filter_max_count: "50",
    max_camera_filters: "50",
    paywall_presentation_config: JSON.stringify({
        uid: "paywall_testflight",
        onboarding: false,
        after_sent_moment: false,
        after_moment: false,
        after_capture: false,
        on_foreground: false,
        holiday_effects: false,
        camera_filters: false,
        filters: false,
        interval: 2592000,
        profile_banner: true
    }),
    feature_discovery_popup_config: JSON.stringify({
        tag: "LOCKET GOLD",
        tag_gradient: true,
        tag_style: "gold_gradient",
        title: "Len LocketGold roi do 🤫 😎",
        feature_set: [{
            title: "✨",
            body: "💛",
            imageURL: ""
        }],
        primary_button_title: "Xong",
        campaign: "locket_gold_welcome_v3",
        start_at: "2020-01-01T00:00:00",
        end_at: "2099-12-31T23:59:59",
        use_local_time_zone: true
    }),
    android_subscribe_gold_button_enabled: "false",
    profile_badge_visible: "true",
    lunar_new_year_app_icon_enabled: "true",
    settings_tiktok_url: "https://www.tiktok.com/@tqthh0511?_r=1&_t=ZS-9B3m8unRCqK"
});

/* ═══════════════════════════════════════════════════════════════════════
§2  🚫  CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
═══════════════════════════════════════════════════════════════════════ */
Object.assign(obj.entries, {
    history_ads_mode: "off",
    history_ads_prefetch_count: "0",
    history_ads_prefetch_immediate: "false",
    history_ads_prefetch_reroute: "false",
    history_ads_dynamic_insertion: "false",
    history_ads_refresh_prefetch_on_foreground: "false",
    history_ads_floor_price: "0",
    history_ads_floor_price_att: "0",
    history_ad_log_displayed_on_background: "false",
    history_ads_debug_menu: "false",
    sentry_sample_rate: "0",
    sentry_network_tracing: "false",
    sentry_performance_tracking: "false",
    sentry_trace_sample_rate: "0",
    sentry_profiles_sample_rate: "0"
});

/* ═══════════════════════════════════════════════════════════════════════
§3  📷  CAMERA · VIDEO 60s · ÂM THANH · FILTERS
═══════════════════════════════════════════════════════════════════════ */
const MY_VIDEO_DURATION = 60.0;
const MAX_SIZE_BYTES = 104857600;
const durationStr = MY_VIDEO_DURATION.toString();

const cameraConfig = {
    gold_max_duration: MY_VIDEO_DURATION,
    goldMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION,
    maxDuration: MY_VIDEO_DURATION,
    ultra_wide: true,
    ultraWide: true,
    volume_button: true,
    volumeButton: true,
    flash_button: true,
    telephoto: true,
    srgb: true,
    lanczos: true,
    quality_mbps: 0.2,
    qualityMbps: 0.2
};

const cameraRollConfig = {
    gold_max_duration: MY_VIDEO_DURATION,
    goldMaxDuration: MY_VIDEO_DURATION,
    video_max_duration: MY_VIDEO_DURATION,
    videoMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION,
    maxDuration: MY_VIDEO_DURATION,
    trim_max_duration: MY_VIDEO_DURATION,
    trimMaxDuration: MY_VIDEO_DURATION,
    camera_roll_max_duration: MY_VIDEO_DURATION,
    camera_roll_video_max_duration: MY_VIDEO_DURATION,
    max_file_size: MAX_SIZE_BYTES,
    max_upload_bytes: MAX_SIZE_BYTES,
    max_size

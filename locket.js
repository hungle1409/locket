let obj = {};
try { obj = JSON.parse($response.body || "{}"); } catch (e) { obj = {}; }
if (!obj || typeof obj !== "object") obj = {};

obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.entries = obj.entries || {};
obj.entries.cache_ttl_seconds = "0";
obj.entries.client_cache_ttl_sec = "0";

Object.assign(obj.entries, {
    feature_gates: JSON.stringify({ 
        app_icon_picker: "enabled", camera_roll: "enabled", camera_theme: "enabled",
        locket_views: "enabled", long_captions: "enabled", longer_video: "enabled",
        unlimited_friends: "enabled", priority_support: "enabled", profile_badge: "enabled",
        remove_ads: "enabled", video: "enabled", custom_widget_frames: "enabled",
        streak_recovery: "enabled", camera_filters: "enabled", camera_filter: "enabled",
        filter: "enabled", filters: "enabled", holiday_effects: "enabled",
        holiday_filters: "enabled", ar_filters: "enabled", ai_filters: "enabled",
        photo_filters: "enabled", face_filters: "enabled", profile_cover: "enabled",
        profile_customization: "enabled" 
    }),
    upsell_features: JSON.stringify({ 
        app_icon_picker: false, camera_roll: false, camera_theme: false,
        locket_views: false, remove_ads: false, custom_widget_frames: false,
        filter: false, filters: false, camera_filter: false, camera_filters: false,
        holiday_filter: false, holiday_filters: false, holiday_effects: false,
        ai_filter: false, ai_filters: false 
    }),
    country_code: "US", region_code: "US", is_us_user: "true", 
    camera_filters_enabled: "true", camera_filter_enabled: "true",
    filter_paywall_enabled: "false", require_gold_for_filters: "false", 
    free_filters_enabled: "true", camera_filter_sheet_selection_enabled: "true",
    sheet_filters_selectable: "true", dismiss_filter_sheet_on_select: "true",
    camera_filter_max_count: "50", max_camera_filters: "50",
    paywall_presentation_config: JSON.stringify({ 
        uid: "paywall_testflight", onboarding: false, after_sent_moment: false,
        after_moment: false, after_capture: false, on_foreground: false,
        holiday_effects: false, camera_filters: false, filters: false,
        interval: 2592000, profile_banner: true 
    }),
    feature_discovery_popup_config: JSON.stringify({ 
        tag: "LOCKET GOLD", tag_gradient: true, tag_style: "gold_gradient",
        title: "Len LocketGold roi do 🤫 😎",
        feature_set: [{ title: "✨", body: "💛", imageURL: "" }],
        primary_button_title: "Xong", campaign: "locket_gold_welcome_v3",
        start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59", use_local_time_zone: true 
    }),
    android_subscribe_gold_button_enabled: "false", 
    profile_badge_visible: "true", lunar_new_year_app_icon_enabled: "true"
});

Object.assign(obj.entries, { 
    history_ads_mode: "off", history_ads_prefetch_count: "0",
    sentry_sample_rate: "0", sentry_network_tracing: "false",
    sentry_performance_tracking: "false", sentry_trace_sample_rate: "0" 
});

const MY_VIDEO_DURATION = 60.0;
const MAX_SIZE_BYTES = 104857600;
const durationStr = MY_VIDEO_DURATION.toString();

Object.assign(obj.entries, {
    camera: JSON.stringify({ 
        gold_max_duration: MY_VIDEO_DURATION, max_duration: MY_VIDEO_DURATION,
        ultra_wide: true, volume_button: true, flash_button: true, telephoto: true,
        srgb: true, lanczos: true, quality_mbps: 0.2 
    }),
    camera_roll: JSON.stringify({ 
        gold_max_duration: MY_VIDEO_DURATION, video_max_duration: MY_VIDEO_DURATION,
        max_duration: MY_VIDEO_DURATION, trim_max_duration: MY_VIDEO_DURATION,
        max_file_size: MAX_SIZE_BYTES, max_upload_bytes: MAX_SIZE_BYTES,
        quality_mbps: 0.2, flash_button: true 
    }),
    camera_filter_config: JSON.stringify({
        allows_custom_filters: true, show_filter_button: true,
        sheet_enabled: true, open_sheet_immediately: true,
        sheet_filters: [
            { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
            { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces"] },
            { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
            { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
            { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
            { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "bearded", "leprechaun", "lucky_face", "santa_cutout", "frosty"] }
        ],
        picker_filters: ["okay_wig", "influencer", "toothless", "bye_brows", "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "slimed", "princess", "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face", "flower_crown", "love_bug"]
    }),
    camera_roll_preview_enabled: "true", camera_roll_video_enabled: "true",
    camera_roll_video_max_duration: durationStr, camera_roll_max_duration: durationStr,
    max_file_size: MAX_SIZE_BYTES.toString(), max_upload_bytes: MAX_SIZE_BYTES.toString(),
    video_quality_mbps: "0.2", video_sound_enabled: "true", microphone_enabled: "true"
});

Object.assign(obj.entries, { 
    max_friends_count: "999999", friend_limit_mode: "0",
    soft_friend_limit_threshold_count: "999999", show_friend_limit_on_cam: "false",
    celebrity_inbox_limit: "999999", celebrity_inbox_enabled: "true",
    new_friends_monitoring_enabled: "true", show_friend_suggestions_by_default: "true",
    hide_friends_enabled: "true", show_all_contacts: "true", signup_allow_skip_add_friends: "true",
    moment_views_enabled: "true", moment_views_v2: "true",
    record_moment_views: "true", notify_moment_views: "true",
    chat_reactions_enabled: "true", typing_indicators_enabled: "true",
    unsend_message_enabled: "true", conversations_enabled: "true",
    groups_enabled: "true", rollcall_enabled: "true" 
});

Object.assign(obj.entries, {
    custom_widget_frames: "enabled", custom_widget_frames_enabled: "true",
    widget_frames_config: JSON.stringify({ 
        enabled: true, allow_custom_frames: true, unlock_all_styles: true,
        default_style: "royal_gold_vip",
        styles: [
            { id: "royal_gold_vip", name: "👑 VIP Royal Gold", border_style: "ornate_gold", crown_badge: true, badge_text: "VIP", corner_radius: 28.0, glow_effect: true, glow_color: "#FFD700" },
            { id: "verified_blue_vip", name: "💎 Verified VIP", border_style: "ornate_gold", crown_badge: true, badge_text: "VERIFIED", corner_radius: 28.0, glow_effect: true, glow_color: "#1D9BF0" }
        ] 
    }),
    qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }), 
    custom_profile_pics: "true", profile_menu_v2_enabled: "true"
});

$done({ body: JSON.stringify(obj) });
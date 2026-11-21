let obj = {};
try { obj = JSON.parse($response.body || "{}"); } catch (e) { obj = {}; }
if (!obj || typeof obj !== "object") obj = {};

obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.entries = obj.entries || {};
obj.entries.cache_ttl_seconds = "0";
obj.entries.client_cache_ttl_sec = "0";

// 1. MỞ KHÓA TÍNH NĂNG (Đã sửa lỗi cú pháp, xóa khoảng trắng thừa)
Object.assign(obj.entries, {
    feature_gates: JSON.stringify({ 
        app_icon_picker: "enabled", camera_roll: "enabled", camera_theme: "enabled",
        locket_views: "enabled", long_captions: "enabled", longer_video: "enabled",
        unlimited_friends: "enabled", priority_support: "enabled", profile_badge: "enabled",
        remove_ads: "enabled", video: "enabled", custom_widget_frames: "enabled",
        streak_recovery: "enabled", profile_cover: "enabled", profile_customization: "enabled" 
    }),
    upsell_features: JSON.stringify({ 
        app_icon_picker: false, camera_roll: false, camera_theme: false,
        locket_views: false, remove_ads: false, custom_widget_frames: false
    }),
    country_code: "US", region_code: "US", is_us_user: "true", 
    paywall_presentation_config: JSON.stringify({ 
        uid: "paywall_testflight", onboarding: false, after_sent_moment: false,
        after_moment: false, after_capture: false, on_foreground: false,
        interval: 2592000, profile_banner: true 
    }),
    feature_discovery_popup_config: JSON.stringify({ 
        tag: "LOCKET GOLD", tag_gradient: true, tag_style: "gold_gradient",
        title: "Len LocketGold roi do 🤫 😎",
        feature_set: [{ title: "Mod by ThaiDev09 ✨", body: "Tele: @devmmo14 💛", imageURL: "" }],
        primary_button_title: "Xong", campaign: "locket_gold_welcome_v3",
        start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59", use_local_time_zone: true 
    }),
    profile_badge_visible: "true"
});

// 2. CHẶN QUẢNG CÁO
Object.assign(obj.entries, { 
    history_ads_mode: "off", history_ads_prefetch_count: "0",
    sentry_sample_rate: "0", sentry_network_tracing: "false"
});

// 3. VIDEO 60s & CÓ TIẾNG
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
    camera_roll_preview_enabled: "true", camera_roll_video_enabled: "true",
    camera_roll_video_max_duration: durationStr, camera_roll_max_duration: durationStr,
    max_file_size: MAX_SIZE_BYTES.toString(), max_upload_bytes: MAX_SIZE_BYTES.toString(),
    video_quality_mbps: "0.2", video_sound_enabled: "true", microphone_enabled: "true" // ← BẬT TIẾNG
});

// 4. BẠN BÈ & LƯỢT XEM
Object.assign(obj.entries, { 
    max_friends_count: "999999", friend_limit_mode: "0",
    celebrity_inbox_limit: "999999", celebrity_inbox_enabled: "true",
    moment_views_enabled: "true", moment_views_v2: "true",
    record_moment_views: "true", notify_moment_views: "true",
    chat_reactions_enabled: "true", typing_indicators_enabled: "true",
    unsend_message_enabled: "true", conversations_enabled: "true"
});

// 5. WIDGET VIP
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
    custom_profile_pics: "true", profile_menu_v2_enabled: "true"
});

// 6. CAPTION (CÓ HƯỚNG DẪN TỰ THÊM)
Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true",
    music_caption_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify(["standard", "music", "location", "weather", "time", "custom_my_own"]),
    overlay_items: JSON.stringify([
        /* ═══════════════════════════════════════════════════════════
           📝 HƯỚNG DẪN TỰ THÊM CAPTION CỦA BẠN:
           1. Copy toàn bộ block từ { overlay_id: ... } đến },
           2. Dán vào ngay dưới block này.
           3. Đổi "overlay_id", "text", "text_color" (mã màu HEX), và "icon".
           ═══════════════════════════════════════════════════════════ */
        {
            section: "📝 Caption Của Tôi (Tự thêm)",
            items: [
                {
                    overlay_id: "caption:custom_1", source: "remote",
                    caption: {
                        background: { colors: ["#FF0000", "#0000FF"] }, // Màu nền gradient (đỏ sang xanh)
                        icon: { data: "🔥", type: "emoji" },            // Icon hiển thị
                        max_lines: 1,
                        text: "Viết caption của bạn vào đây",           // ← SỬA TEXT Ở ĐÂY
                        text_color: "#FFFFFF",                          // Màu chữ (Trắng)
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:custom_2", source: "remote",
                    caption: {
                        background: { colors: ["#11998E", "#38EF7D"] }, 
                        icon: { data: "💸", type: "emoji" },            
                        max_lines: 1,
                        text: "Caption thứ 2 của tôi",                  // ← SỬA TEXT Ở ĐÂY
                        text_color: "#000000",                          
                        type: "static_content"
                    }
                }
            ]
        },
        
        /* ── 💕 Một số caption mẫu giữ lại ───────────────────────── */
        {
            section: "💕 Tình yêu",
            items: [
                {
                    overlay_id: "caption:yeu_em", source: "remote",
                    caption: {
                        background: { colors: ["#FF8FAB", "#FFC2D1"] },
                        icon: { data: "💗", type: "emoji" }, max_lines: 1,
                        text: "Yêu em nhiều", text_color: "#8A304F", type: "static_content"
                    }
                }
            ]
        }
    ])
});

$done({ body: JSON.stringify(obj) });
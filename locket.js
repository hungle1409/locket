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
§1  👑  GOLD · FEATURE GATES · PAYWALL (ĐÃ SỬA LỖI)
═══════════════════════════════════════════════════════════════════════ */
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
        feature_set: [{ title: "Mod by ThaiDev09 ✨", body: "Tele: @devmmo14 💛", imageURL: "" }],
        primary_button_title: "Xong", campaign: "locket_gold_welcome_v3",
        start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59", use_local_time_zone: true 
    }),
    android_subscribe_gold_button_enabled: "false", 
    profile_badge_visible: "true", lunar_new_year_app_icon_enabled: "true"
});

/* ═══════════════════════════════════════════════════════════════════════
§2  🚫  CHẶN QUẢNG CÁO & TRACKING
═══════════════════════════════════════════════════════════════════════ */
Object.assign(obj.entries, { 
    history_ads_mode: "off", history_ads_prefetch_count: "0",
    sentry_sample_rate: "0", sentry_network_tracing: "false",
    sentry_performance_tracking: "false", sentry_trace_sample_rate: "0" 
});

/* ═══════════════════════════════════════════════════════════════════════
§3  📷  CAMERA & VIDEO 60s CÓ TIẾNG (ĐÃ SỬA durationStr)
═══════════════════════════════════════════════════════════════════════ */
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
    video_quality_mbps: "0.2", video_sound_enabled: "true", microphone_enabled: "true"
});

/* ═══════════════════════════════════════════════════════════════════════
§4  👥  BẠN BÈ & LƯỢT XEM
═══════════════════════════════════════════════════════════════════════ */
Object.assign(obj.entries, { 
    max_friends_count: "999999", friend_limit_mode: "0",
    celebrity_inbox_limit: "999999", celebrity_inbox_enabled: "true",
    moment_views_enabled: "true", moment_views_v2: "true",
    record_moment_views: "true", notify_moment_views: "true",
    chat_reactions_enabled: "true", typing_indicators_enabled: "true",
    unsend_message_enabled: "true", conversations_enabled: "true"
});

/* ═══════════════════════════════════════════════════════════════════════
§5  👑  WIDGET VIP
═══════════════════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════════════════
§6  🎨  100 CAPTION HOT TREND CÓ DẤU
═══════════════════════════════════════════════════════════════════════ */
Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true",
    music_caption_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify(["standard", "music", "location", "weather", "time", "hot_trend_2024"]),
    overlay_items: JSON.stringify([

        /* ═══════════════════════════════════════════════════════════
           🔥 NHÓM 1: FLEX & SELF LOVE (15 caption)
           ═══════════════════════════════════════════════════════════ */
        {
            section: "🔥 Flex & Self Love",
            items: [
                { overlay_id: "caption:flex1", source: "remote", caption: { background: { colors: ["#FF0080", "#7928CA"] }, icon: { data: "✨", type: "emoji" }, max_lines: 1, text: "Flex nhẹ cái cho đời nó keo", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex2", source: "remote", caption: { background: { colors: ["#FFD700", "#FF8C00"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Main character energy", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:flex3", source: "remote", caption: { background: { colors: ["#FF416C", "#FF4B2B"] }, icon: { data: "💎", type: "emoji" }, max_lines: 1, text: "Đỉnh chóp của sự đỉnh chóp", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex4", source: "remote", caption: { background: { colors: ["#00C6FF", "#0072FF"] }, icon: { data: "🌟", type: "emoji" }, max_lines: 1, text: "Sống là phải chất, không chất thì đừng sống", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex5", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, icon: { data: "💅", type: "emoji" }, max_lines: 1, text: "Xinh đẹp tuyệt vời", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:flex6", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Keo lỳ chưa bà con", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex7", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "🔋", type: "emoji" }, max_lines: 1, text: "Năng lượng tích cực (và cả tiêu cực)", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex8", source: "remote", caption: { background: { colors: ["#FC5C7D", "#6A82FB"] }, icon: { data: "💖", type: "emoji" }, max_lines: 1, text: "Yêu bản thân trước đã", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex9", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, icon: { data: "🕶️", type: "emoji" }, max_lines: 1, text: "Cool ngầu nhưng vẫn dễ thương", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex10", source: "remote", caption: { background: { colors: ["#FFAFBD", "#FFC3A0"] }, icon: { data: "🌸", type: "emoji" }, max_lines: 1, text: "Không hoàn hảo nhưng đủ đầy", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:flex11", source: "remote", caption: { background: { colors: ["#000428", "#004e92"] }, icon: { data: "🌀", type: "emoji" }, max_lines: 1, text: "Hơi bị cuốn đấy", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex12", source: "remote", caption: { background: { colors: ["#FF512F", "#F09819"] }, icon: { data: "🔥", type: "emoji" }, max_lines: 1, text: "Cháy hết mình cho thanh xuân", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex13", source: "remote", caption: { background: { colors: ["#654EA3", "#EAAFC8"] }, icon: { data: "🎭", type: "emoji" }, max_lines: 1, text: "Diễn vai người bình thường hơi mệt", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex14", source: "remote", caption: { background: { colors: ["#FDC830", "#F37335"] }, icon: { data: "⭐", type: "emoji" }, max_lines: 1, text: "Sao sáng giữa bầu trời bình thường", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:flex15", source: "remote", caption: { background: { colors: ["#FF00CC", "#333399"] }, icon: { data: "💜", type: "emoji" }, max_lines: 1, text: "Tự tin là vũ khí lợi hại nhất", text_color: "#FFFFFF", type: "static_content" } }
            ]
        },

        /* ═══════════════════════════════════════════════════════════
           💕 NHÓM 2: TÌNH YÊU & CRUSH (15 caption)
           ═══════════════════════════════════════════════════════════ */
        {
            section: "💕 Tình Yêu & Crush",
            items: [
                { overlay_id: "caption:love1", source: "remote", caption: { background: { colors: ["#FF6B81", "#FF8E9E"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "Em nhớ anh nhiều lắm", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:love2", source: "remote", caption: { background: { colors: ["#F0B5CB", "#DCCAF0"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "Nhớ anh tới mức hơi phiền", text_color: "#70445A", type: "static_content" } },
                { overlay_id: "caption:love3", source: "remote", caption: { background: { colors: ["#FF8FAB", "#FFC2D1"] }, icon: { data: "💘", type: "emoji" }, max_lines: 1, text: "I love you nhiều lắm", text_color: "#8A304F", type: "static_content" } },
                { overlay_id: "caption:love4", source: "remote", caption: { background: { colors: ["#F2B5C8", "#F6E5D2"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "Yêu cục dàng của em", text_color: "#754454", type: "static_content" } },
                { overlay_id: "caption:love5", source: "remote", caption: { background: { colors: ["#B8C9F2", "#E8CFF0"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "Yêu anh hơn yêu bản thân", text_color: "#414C72", type: "static_content" } },
                { overlay_id: "caption:love6", source: "remote", caption: { background: { colors: ["#FFB6C1", "#FF1493"] }, icon: { data: "🧸", type: "emoji" }, max_lines: 1, text: "Baby love của em ơi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:love7", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "🫂", type: "emoji" }, max_lines: 1, text: "Muốn được ôm anh thật chặt", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:love8", source: "remote", caption: { background: { colors: ["#C4C8EF", "#EBCDE4"] }, icon: { data: "💤", type: "emoji" }, max_lines: 1, text: "Mê anh hơn mê ngủ", text_color: "#4F4770", type: "static_content" } },
                { overlay_id: "caption:love9", source: "remote", caption: { background: { colors: ["#FFD166", "#FFF3D0"] }, icon: { data: "🤭", type: "emoji" }, max_lines: 1, text: "Iu thì nói, đừng có ngại", text_color: "#704510", type: "static_content" } },
                { overlay_id: "caption:love10", source: "remote", caption: { background: { colors: ["#A0C4FF", "#DFF3FF"] }, icon: { data: "🥹", type: "emoji" }, max_lines: 1, text: "Anh có thương em thiệt hông", text_color: "#23466F", type: "static_content" } },
                { overlay_id: "caption:love11", source: "remote", caption: { background: { colors: ["#B7E4C7", "#F0FFF1"] }, icon: { data: "🫡", type: "emoji" }, max_lines: 1, text: "Yêu em là nhiệm vụ cả đời", text_color: "#24563A", type: "static_content" } },
                { overlay_id: "caption:love12", source: "remote", caption: { background: { colors: ["#CDB4DB", "#F3E5F5"] }, icon: { data: "🫠", type: "emoji" }, max_lines: 1, text: "Crush nhìn em một cái là xong", text_color: "#593B68", type: "static_content" } },
                { overlay_id: "caption:love13", source: "remote", caption: { background: { colors: ["#80CBC4", "#E0F2F1"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "Anh là ngoại lệ của em", text_color: "#205953", type: "static_content" } },
                { overlay_id: "caption:love14", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "💭", type: "emoji" }, max_lines: 1, text: "Đang bận tương tư", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:love15", source: "remote", caption: { background: { colors: ["#EE9CA7", "#FFDDE1"] }, icon: { data: "💘", type: "emoji" }, max_lines: 1, text: "Mắc bẫy tình yêu rồi", text_color: "#000000", type: "static_content" } }
            ]
        },

        /* ═══════════════════════════════════════════════════════════
           😂 NHÓM 3: HÀI HƯỚC & MEME (15 caption)
           ═══════════════════════════════════════════════════════════ */
        {
            section: "😂 Hài Hước & Meme",
            items: [
                { overlay_id: "caption:funny1", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Xin vĩnh biệt cụ", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny2", source: "remote", caption: { background: { colors: ["#D31027", "#EA384D"] }, icon: { data: "🏃", type: "emoji" }, max_lines: 1, text: "Chạy ngay đi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny3", source: "remote", caption: { background: { colors: ["#56AB2F", "#A8E063"] }, icon: { data: "🥔", type: "emoji" }, max_lines: 1, text: "Cứ từ từ khoai sẽ nhừ", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:funny4", source: "remote", caption: { background: { colors: ["#B71C1C", "#FF5722"] }, icon: { data: "🏃", type: "emoji" }, max_lines: 1, text: "Ai sợ thì đi về", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny5", source: "remote", caption: { background: { colors: ["#D7CCC8", "#8D6E63"] }, icon: { data: "🧶", type: "emoji" }, max_lines: 1, text: "Còn cái nịt", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny6", source: "remote", caption: { background: { colors: ["#607D8B", "#37474F"] }, icon: { data: "😔", type: "emoji" }, max_lines: 1, text: "Thân chưa mà dỡn", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny7", source: "remote", caption: { background: { colors: ["#FFF59D", "#80DEEA"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "Hay ra dẻ quá à!", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:funny8", source: "remote", caption: { background: { colors: ["#FFB74D", "#F8BBD0"] }, icon: { data: "😭", type: "emoji" }, max_lines: 1, text: "Mắc cỡ quá hai ơi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny9", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "🛞", type: "emoji" }, max_lines: 1, text: "Mình là lốp", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny10", source: "remote", caption: { background: { colors: ["#FF5722", "#FFC107"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Đẹp trai có gì sai", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:funny11", source: "remote", caption: { background: { colors: ["#E53935", "#FF7043"] }, icon: { data: "🥊", type: "emoji" }, max_lines: 1, text: "Đấm nhau không", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny12", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "👻", type: "emoji" }, max_lines: 1, text: "Dự án ma", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny13", source: "remote", caption: { background: { colors: ["#FF5F6D", "#FFC371"] }, icon: { data: "😤", type: "emoji" }, max_lines: 1, text: "Dỗi rồi nha", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny14", source: "remote", caption: { background: { colors: ["#FFB75E", "#ED8F03"] }, icon: { data: "🐤", type: "emoji" }, max_lines: 1, text: "Mỏ hỗn nhưng tâm hiền", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:funny15", source: "remote", caption: { background: { colors: ["#0F0C29", "#302B63"] }, icon: { data: "💰", type: "emoji" }, max_lines: 1, text: "Có tiền làm phiền thiên hạ", text_color: "#FFFFFF", type: "static_content" } }
            ]
        },

        /* ═══════════════════════════════════════════════════════════
           💼 NHÓM 4: ĐỜI SỐNG & ĐI LÀM (15 caption)
           ═══════════════════════════════════════════════════════════ */
        {
            section: "💼 Đời Sống & Đi Làm",
            items: [
                { overlay_id: "caption:work1", source: "remote", caption: { background: { colors: ["#ED213A", "#93291E"] }, icon: { data: "🔥", type: "emoji" }, max_lines: 1, text: "Deadline dí tụt quần", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work2", source: "remote", caption: { background: { colors: ["#FDC830", "#F37335"] }, icon: { data: "🤡", type: "emoji" }, max_lines: 1, text: "Đi làm vì đam mê (và vì nghèo)", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work3", source: "remote", caption: { background: { colors: ["#4E342E", "#8D6E63"] }, icon: { data: "☕", type: "emoji" }, max_lines: 1, text: "Cà phê sáng mới tỉnh", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work4", source: "remote", caption: { background: { colors: ["#0F2027", "#203A43"] }, icon: { data: "💸", type: "emoji" }, max_lines: 1, text: "Lúc nào có tiền thì mới đi á", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work5", source: "remote", caption: { background: { colors: ["#1E90FF", "#00D4FF"] }, icon: { data: "💳", type: "emoji" }, max_lines: 1, text: "Đọc số tài khoản đi em", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work6", source: "remote", caption: { background: { colors: ["#4CAF50", "#00BCD4"] }, icon: { data: "🎮", type: "emoji" }, max_lines: 1, text: "Giảm sức mạnh con tướng", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work7", source: "remote", caption: { background: { colors: ["#FFCCBC", "#FF8A80"] }, icon: { data: "🍽️", type: "emoji" }, max_lines: 1, text: "Ăn cơm chưa mọi người", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work8", source: "remote", caption: { background: { colors: ["#B3E5FC", "#FFFFFF"] }, icon: { data: "🛍️", type: "emoji" }, max_lines: 1, text: "Shopping time rồi", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:work9", source: "remote", caption: { background: { colors: ["#FFF9C4", "#F8BBD0"] }, icon: { data: "🍦", type: "emoji" }, max_lines: 1, text: "Mixue time rồi nè", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:work10", source: "remote", caption: { background: { colors: ["#1A237E", "#455A64"] }, icon: { data: "🎬", type: "emoji" }, max_lines: 1, text: "Cinema time thôi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work11", source: "remote", caption: { background: { colors: ["#E1BEE7", "#F8BBD0"] }, icon: { data: "🌴", type: "emoji" }, max_lines: 1, text: "Chilling time rồi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work12", source: "remote", caption: { background: { colors: ["#1A237E", "#283593"] }, icon: { data: "🎓", type: "emoji" }, max_lines: 1, text: "Chúc mừng tốt nghiệp", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work13", source: "remote", caption: { background: { colors: ["#ECEFF1", "#B3E5FC"] }, icon: { data: "📷", type: "emoji" }, max_lines: 1, text: "Locket time rồi nè", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:work14", source: "remote", caption: { background: { colors: ["#654EA3", "#EAAFC8"] }, icon: { data: "🎲", type: "emoji" }, max_lines: 1, text: "Kiểm tra nhân phẩm", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:work15", source: "remote", caption: { background: { colors: ["#9C27B0", "#E91E63"] }, icon: { data: "🎤", type: "emoji" }, max_lines: 1, text: "Cảnh báo có hát", text_color: "#FFFFFF", type: "static_content" } }
            ]
        },

        /* ═══════════════════════════════════════════════════════════
           🧠 NHÓM 5: GEN Z & TREND (15 caption)
           ═══════════════════════════════════════════════════════════ */
        {
            section: "🧠 Gen Z & Trend",
            items: [
                { overlay_id: "caption:genz1", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, icon: { data: "🤯", type: "emoji" }, max_lines: 1, text: "Overthinking vai chưởng", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz2", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "🥬", type: "emoji" }, max_lines: 1, text: "Oách xà lách", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz3", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "💅", type: "emoji" }, max_lines: 1, text: "Rồi lét luôn", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:genz4", source: "remote", caption: { background: { colors: ["#FF6EC7", "#7873F5"] }, icon: { data: "🌈", type: "emoji" }, max_lines: 1, text: "Rồi gay luôn", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz5", source: "remote", caption: { background: { colors: ["#FF416C", "#FF4B2B"] }, icon: { data: "🙉", type: "emoji" }, max_lines: 1, text: "Tuyệt đối không nghe", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz6", source: "remote", caption: { background: { colors: ["#FFDEE9", "#B5FFFC"] }, icon: { data: "🪞", type: "emoji" }, max_lines: 1, text: "Cha này tự luyến ghê", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:genz7", source: "remote", caption: { background: { colors: ["#FF512F", "#F09819"] }, icon: { data: "🚨", type: "emoji" }, max_lines: 1, text: "Có biến có biến", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz8", source: "remote", caption: { background: { colors: ["#8A2387", "#E94057"] }, icon: { data: "🍿", type: "emoji" }, max_lines: 1, text: "Hóng drama", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz9", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, icon: { data: "😂", type: "emoji" }, max_lines: 1, text: "Cười vcl m ơi", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:genz10", source: "remote", caption: { background: { colors: ["#1F1C2C", "#928DAB"] }, icon: { data: "😳", type: "emoji" }, max_lines: 1, text: "Vl m ơi?", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz11", source: "remote", caption: { background: { colors: ["#EE9CA7", "#FFDDE1"] }, icon: { data: "🤫", type: "emoji" }, max_lines: 1, text: "Nói hết bí mật thì có yêu hông", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:genz12", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, icon: { data: "💎", type: "emoji" }, max_lines: 1, text: "Flex đến hơi thở cuối", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:genz13", source: "remote", caption: { background: { colors: ["#870000", "#190A05"] }, icon: { data: "🙄", type: "emoji" }, max_lines: 1, text: "Chan bố mày đi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz14", source: "remote", caption: { background: { colors: ["#FBD3E9", "#6A0572"] }, icon: { data: "💔", type: "emoji" }, max_lines: 1, text: "Lại phải lọ", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:genz15", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, icon: { data: "📞", type: "emoji" }, max_lines: 1, text: "Ủa alo?", text_color: "#FFFFFF", type: "static_content" } }
            ]
        },

        /* ═══════════════════════════════════════════════════════════
           😢 NHÓM 6: BUỒN & TÂM TRẠNG (10 caption)
           ═══════════════════════════════════════════════════════════ */
        {
            section: "😢 Buồn & Tâm Trạng",
            items: [
                { overlay_id: "caption:sad1", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, icon: { data: "🥀", type: "emoji" }, max_lines: 1, text: "Hôm nay tôi buồn", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sad2", source: "remote", caption: { background: { colors: ["#1F1C2C", "#928DAB"] }, icon: { data: "🫠", type: "emoji" }, max_lines: 1, text: "Trầm cảm nhẹ", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sad3", source: "remote", caption: { background: { colors: ["#546E7A", "#263238"] }, icon: { data: "🌧️", type: "emoji" }, max_lines: 1, text: "Hồi chiều trời mưa...", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sad4", source: "remote", caption: { background: { colors: ["#2C3E50", "#3498DB"] }, icon: { data: "🏳️", type: "emoji" }, max_lines: 1, text: "Bất lực thật sự", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sad5", source: "remote", caption: { background: { colors: ["#F6D365", "#FDA085"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "Xin lỗi được chưa", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:sad6", source: "remote", caption: { background: { colors: ["#1CB5E0", "#000046"] }, icon: { data: "😭", type: "emoji" }, max_lines: 1, text: "Rớt nước mắt", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sad7", source: "remote", caption: { background: { colors: ["#3A1C71", "#D76D77"] }, icon: { data: "📉", type: "emoji" }, max_lines: 1, text: "Gục ngã rồi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sad8", source: "remote", caption: { background: { colors: ["#C33764", "#1D2671"] }, icon: { data: "🌪️", type: "emoji" }, max_lines: 1, text: "Tiền đình nổi lên rồi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sad9", source: "remote", caption: { background: { colors: ["#FF5349", "#EB0C00"] }, icon: { data: "⭐", type: "emoji" }, max_lines: 1, text: "Chưa đủ wow", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:sad10", source: "remote", caption: { background: { colors: ["#607D8B", "#455A64"] }, icon: { data: "❌", type: "emoji" }, max_lines: 1, text: "Này là hết cứu", text_color: "#FFFFFF", type: "static_content" } }
            ]
        },

        /* ═══════════════════════════════════════════════════════════
           💪 NHÓM 7: ĐỘNG LỰC & SỐNG CHẤT (10 caption)
           ═══════════════════════════════════════════════════════════ */
        {
            section: "💪 Động Lực & Sống Chất",
            items: [
                { overlay_id: "caption:motive1", source: "remote", caption: { background: { colors: ["#FFD700", "#FF8C00"] }, icon: { data: "✨", type: "emoji" }, max_lines: 1, text: "Tinh hoa hội tụ", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:motive2", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, icon: { data: "🕶️", type: "emoji" }, max_lines: 1, text: "Phụ tình không phụ bản", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:motive3", source: "remote", caption: { background: { colors: ["#2980B9", "#2C3E50"] }, icon: { data: "👌", type: "emoji" }, max_lines: 1, text: "Nhìn là biết uy tín", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:motive4", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, icon: { data: "🤡", type: "emoji" }, max_lines: 1, text: "Luôn vui tươi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:motive5", source: "remote", caption: { background: { colors: ["#434343", "#000000"] }, icon: { data: "🗿", type: "emoji" }, max_lines: 1, text: "Không cảm xúc", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:motive6", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, icon: { data: "🙈", type: "emoji" }, max_lines: 1, text: "Phụ huynh đừng xem", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:motive7", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "📺", type: "emoji" }, max_lines: 1, text: "Check VAR liền", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:motive8", source: "remote", caption: { background: { colors: ["#F38181", "#FCE38A"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "Quá nhiều sự dễ thương", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:motive9", source: "remote", caption: { background: { colors: ["#3A1C71", "#D76D77"] }, icon: { data: "🌪️", type: "emoji" }, max_lines: 1, text: "Sóng gió phủ đời trai", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:motive10", source: "remote", caption: { background: { colors: ["#FF5722", "#E64A19"] }, icon: { data: "⚡", type: "emoji" }, max_lines: 1, text: "Đủ bá khí chưa", text_color: "#FFFFFF", type: "static_content" } }
            ]
        },

        /* ═══════════════════════════════════════════════════════════
           🍜 NHÓM 8: FOOD & DRINK (10 caption)
           ═══════════════════════════════════════════════════════════ */
        {
            section: "🍜 Food & Drink",
            items: [
                { overlay_id: "caption:food1", source: "remote", caption: { background: { colors: ["#FF9800", "#F57C00"] }, icon: { data: "🍽️", type: "emoji" }, max_lines: 1, text: "Ăn cơm chưa mọi người", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:food2", source: "remote", caption: { background: { colors: ["#4E342E", "#8D6E63"] }, icon: { data: "☕", type: "emoji" }, max_lines: 1, text: "Coffee time rồi nè", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:food3", source: "remote", caption: { background: { colors: ["#FFF9C4", "#F8BBD0"] }, icon: { data: "🍦", type: "emoji" }, max_lines: 1, text: "Mixue time rồi", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:food4", source: "remote", caption: { background: { colors: ["#FFCCBC", "#FF8A80"] }, icon: { data: "🍽️", type: "emoji" }, max_lines: 1, text: "Dinner time thôi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:food5", source: "remote", caption: { background: { colors: ["#FFEB3B", "#FF9800"] }, icon: { data: "🍕", type: "emoji" }, max_lines: 1, text: "Pizza time rồi", text_color: "#000000", type: "static_content" } },
                { overlay_id: "caption:food6", source: "remote", caption: { background: { colors: ["#8BC34A", "#4CAF50"] }, icon: { data: "🥗", type: "emoji" }, max_lines: 1, text: "Eat clean ngày mới", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:food7", source: "remote", caption: { background: { colors: ["#FF5722", "#FF9800"] }, icon: { data: "🌶️", type: "emoji" }, max_lines: 1, text: "Cay muốn khóc", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:food8", source: "remote", caption: { background: { colors: ["#795548", "#A1887F"] }, icon: { data: "🍫", type: "emoji" }, max_lines: 1, text: "Ngọt ngào quá đi", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:food9", source: "remote", caption: { background: { colors: ["#00BCD4", "#0097A7"] }, icon: { data: "🧋", type: "emoji" }, max_lines: 1, text: "Trà sữa chữa lành", text_color: "#FFFFFF", type: "static_content" } },
                { overlay_id: "caption:food10", source: "remote", caption: { background: { colors: ["#E91E63", "#F44336"] }, icon: { data: "🍰", type: "emoji" }, max_lines: 1, text: "Sweet like cake", text_color: "#FFFFFF", type: "static_content" } }
            ]
        }
    ])
});

/* ─────────────────────────  📤 TRẢ KẾT QUẢ  ───────────────────────── */
$done({ body: JSON.stringify(obj) });
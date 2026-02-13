// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Daniela,",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        roses: ['🌹']                             // Rose emojis
    },

    // Floating images in the background (same float animation as emojis)
    // Use image URLs (local paths or full URLs). Optional "size" in px (default 50px).
    // Image sizes reduced by 70% (30% of original) for subtler background
    floatingImages: [
        { url: "images/chip.jpg", size: "42px" },
        { url: "images/IMG_0035.JPG", size: "42px" },
        { url: "images/IMG_0145.JPG", size: "42px" },
        { url: "images/IMG_0159.JPG", size: "42px" },
        { url: "images/IMG_1261.JPG", size: "42px" },
        { url: "images/IMG_2187.JPG", size: "42px" },
        { url: "images/IMG_2977.JPG", size: "42px" },
        { url: "images/IMG_3280.JPG", size: "42px" },
        { url: "images/IMG_3561.JPG", size: "42px" },
        { url: "images/IMG_3649.JPEG", size: "42px" },
        { url: "images/IMG_4996.JPG", size: "42px" },
        { url: "images/IMG_6044.JPG", size: "42px" },
        { url: "images/IMG_6094.JPEG", size: "42px" },
        { url: "images/IMG_6095.JPEG", size: "42px" }
    ],

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "YOU BROKE THE SCALE!!!!",  // Shows above 5000%
        high: "Not too much!",               // Shows above 1000%
        normal: "Thats it??"                 // Shows above 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "You didn't have a choice anyways!.",  // Celebration title
        message: "C U @ 229W 109th",                  // Celebration message
        emojis: "❤️💕❤️💕❤️💕"                        // Celebration emojis
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dkytnsa9a/video/upload/v1771021221/Coldplay_-_Yellow_Lyrics_exk5qv.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Category from "@/models/Category";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectDB();

    // پاک کردن اطلاعات قبلی
    await Product.deleteMany({});
    await Category.deleteMany({});

    // ساخت دسته‌بندی‌ها
    const categories = await Category.insertMany([
      {
        name: "Audio",
        slug: "audio",
        icon: "Headphones",
      },
      {
        name: "Computer Accessories",
        slug: "computer-accessories",
        icon: "Keyboard",
      },
      {
        name: "Computer Hardware",
        slug: "computer-hardware",
        icon: "Cpu",
      },
      {
        name: "Desktop",
        slug: "desktop",
        icon: "Monitor",
      },
      {
        name: "Gadget",
        slug: "gadget",
        icon: "Smartphone",
      },
      {
        name: "Gaming Console",
        slug: "gaming-console",
        icon: "Gamepad2",
      },
      {
        name: "Laptop",
        slug: "laptop",
        icon: "Laptop",
      },
      {
        name: "Monitor",
        slug: "monitor",
        icon: "Monitor",
      },
      {
        name: "Networking",
        slug: "networking",
        icon: "Router",
      },
      {
        name: "Smartphone",
        slug: "smartphone",
        icon: "Smartphone",
      },
    ]);

    const getCategoryId = (name: string) =>
      categories.find((c) => c.name === name)!._id;

    await Product.insertMany([
      {
        name: "Apple Watch Ultra 3",
        slug: "apple-watch-ultra-3",
        description: `Apple Watch Ultra 3
        The Apple Watch Ultra 3 is designed for people who live an active, demanding lifestyle and want the most powerful smartwatch Apple has ever made. From athletes and hikers to divers and health-conscious users, this watch delivers strength, accuracy, and advanced health tracking in one premium device.
        If you are searching for the Apple Watch Ultra 3 price in Bangladesh, this detailed guide will help you understand why it stands out.`,
        price: 98200,
        regularPrice: 104999,
        avgRating: 0,
        images: [
          "/images/apple-watch-ultra-3/Apple-Watch-Ultra-3-1.webp",
          "/images/apple-watch-ultra-3/Apple-Watch-Ultra-3-2.webp",
          "/images/apple-watch-ultra-3/Apple-Watch-Ultra-3-3.webp",
        ],

        mainImage:
          "/images/apple-watch-ultra-3/Apple-Watch-Ultra-3-preview.webp",

        category: getCategoryId("Gadget"),

        brand: "Apple",

        stock: 3,
        code: "B6F8DE",

        keyFeatures: [
          {
            title: "Processor & Performance",
            value: "Verified Premium",
          },
          {
            title: "Chipset",
            value: "S10 chip with 64-bit dual-core processor",
          },
          {
            title: "Neural Engine",
            value: "4-core (Enhanced for on-device Siri and health tracking)",
          },
          {
            title: "Capacity",
            value: "64GB Internal Storage",
          },
          {
            title: "Operating System",
            value: "watchOS",
          },
        ],

        technicalSpecifications: [
          {
            title: "Processor & Performance",
            value: "Verified Premium",
          },
          {
            title: "Chipset",
            value: "S10 chip with 64-bit dual-core processor",
          },
          {
            title: "Neural Engine",
            value: "4-core (Enhanced for on-device Siri and health tracking)",
          },
          {
            title: "Capacity",
            value: "64GB Internal Storage",
          },
          {
            title: "Operating System",
            value: "watchOS",
          },
          {
            title: "Type",
            value: "Always-On Retina Display (Wide-angle OLED with LTPO3)",
          },
          {
            title: "Brightness",
            value: "Up to 3000 nits Peak / 1 nit Minimum",
          },
          {
            title: "Resolution",
            value: "422 x 514 pixels (326 ppi)",
          },
          {
            title: "Protection",
            value: "Flat Sapphire Crystal Display",
          },
          {
            title: "Special Features",
            value:
              "1Hz Refresh rate, Night Mode for Ultra faces, 1245 sq mm display area",
          },
          {
            title: "Normal Use",
            value: "Up to 42 hours",
          },
          {
            title: "Low Power Mode",
            value: "Up to 72 hours",
          },
          {
            title: "Fast Charging",
            value: "* 0% to 80% in ~45 minutes, 15 mins for 12 hours of use",
          },
          {
            title: "GPS",
            value:
              "L1 and L5 precision dual-frequency (GPS, GLONASS, Galileo, QZSS, BeiDou)",
          },
          {
            title: "Cellular",
            value: "5G and LTE support with International Roaming",
          },
          {
            title: "Wireless",
            value: "Wi-Fi 4 (Dual-band 2.4GHz/5GHz), Bluetooth 5.3",
          },
          {
            title: "Ultra-Wideband",
            value: "Second-generation chip (U2) for precision finding",
          },
          {
            title: "Sensors",
            value:
              "Electrical heart sensor, 3rd Gen Optical heart sensor, Blood Oxygen, Depth Gauge, Water Temperature, High-g Accelerometer, and Always-on Altimeter",
          },
          {
            title: "Health Monitoring",
            value:
              "Blood Oxygen, ECG, Sleep Apnea notifications, Hypertension alerts, Cycle Tracking (Ovulation estimates)",
          },
          {
            title: "Safety Features",
            value:
              "Satellite Connectivity (Emergency SOS, Find My), Crash/Fall Detection, 86-decibel Siren, and Backtrack",
          },
          {
            title: "Audio",
            value: "Three-microphone array with beamforming; Dual speakers",
          },
          {
            title: "Material",
            value: "Grade 5 Titanium Case",
          },
          {
            title: "Water Resistance",
            value: "100m (Swim-proof); Recreational Scuba to 40m (EN13319)",
          },
          {
            title: "Dust Resistance",
            value: "IP6X",
          },
          {
            title: "Durability",
            value:
              "Tested to MIL-STD 810H (Extreme temperature, altitude, and shock)",
          },
          {
            title: "Physical",
            value:
              "Customizable Action Button, Digital Crown with Haptic Feedback, Side Button",
          },
          {
            title: "Gestures",
            value: "Double tap and wrist flick support",
          },
          {
            title: "Dimensions",
            value: "49mm (H) x 44mm (W) x 12mm (D)",
          },
          {
            title: "Weight",
            value: "~61.8 grams",
          },
          {
            title: "Wrist Fit",
            value: "Fits 130–210mm wrists",
          },
          {
            title: "Color",
            value: "Natural Titanium, Black Titanium",
          },
          {
            title: "Warranty Details",
            value: "No Warranty (As per provided info)",
          },
        ],
      },

      {
        name: "MX Brio",
        slug: "mx-brio",
        description: `Logitech MX Brio Ultra HD 4K Webcam The Logitech MX Brio Ultra HD 4K Webcam is a cutting-edge webcam designed to provide superior video quality and audio clarity for professional video conferencing and content production.
        This webcam features USB 3.0 connectivity, 4K Ultra HD recording at 30fps, and Full HD 1080p recording at 60fps for exceptionally smooth and detailed video.
        The MX Brio includes dual beamforming microphones with advanced noise reduction technology to capture clear voice while minimizing background noise.
        Additional features include RightLight 3 with HDR technology, advanced autofocus, a built-in privacy shutter, and Logi Options+ software for full manual camera controls such as ISO, white balance, exposure, tint, vibrance, and more.`,
        price: 21000,
        regularPrice: 22000,
        avgRating: 0,
        images: [
          "/images/mx-brio/MX-Brio-1.webp",
          "/images/mx-brio/MX-Brio-2.webp",
        ],

        mainImage: "/images/mx-brio/MX-Brio-preview.webp",

        category: getCategoryId("Computer Accessories"),

        brand: "Logitech",

        stock: 10,
        code: "ACA380",

        keyFeatures: [
          {
            title: "Resolution",
            value: "4K Ultra HD",
          },
          {
            title: "Frame Rate",
            value: "4K30 / 1080p60",
          },
          {
            title: "Microphones",
            value: "Dual Beamforming",
          },
          {
            title: "Connection",
            value: "USB Type-C",
          },
        ],

        technicalSpecifications: [
          {
            title: "Sensor",
            value: "Sony STARVIS CMOS",
          },
          {
            title: "Max Resolution",
            value: "3840 × 2160",
          },
          {
            title: "Video Modes",
            value: "4K30 / 1080p60 / 720p60",
          },
          {
            title: "Field of View",
            value: "90° / 78° / 65°",
          },
          {
            title: "Focus",
            value: "Autofocus",
          },
          {
            title: "HDR",
            value: "RightLight 5 HDR",
          },
          {
            title: "Microphones",
            value: "Dual Beamforming Noise Reduction",
          },
          {
            title: "Interface",
            value: "USB-C (USB 3.0)",
          },
          {
            title: "Privacy Shutter",
            value: "Built-in",
          },
          {
            title: "Compatibility",
            value: "Windows / macOS",
          },
        ],
      },

      {
        name: "ROG Rapture GT-AX11000 Pro",
        slug: "rog-rapture-gt-ax11000-pro",
        description: `Asus ROG Rapture GT-AX11000 Pro Tri-Band 11000 Mbps Gigabit WiFi Gaming Router
        The Asus ROG Rapture GT-AX11000 Pro is a premium tri-band gaming router built for gamers and enthusiasts who demand maximum speed, stability, and ultra-low latency.
        Powered by a 2.0GHz quad-core processor with 1GB DDR4 RAM, it delivers WiFi 6 (802.11ax) performance with a combined wireless speed of up to 10,756Mbps.
        The router features two ultra-fast WAN ports, including a 2.5Gbps WAN and a dedicated 10Gbps WAN/LAN port, making it ideal for multi-gig internet connections and high-performance gaming setups.
        Advanced technologies such as OFDMA, MU-MIMO, Beamforming, RangeBoost Plus, WPA3 security, ASUSWRT, AiMesh compatibility, and gaming acceleration ensure exceptional wireless coverage and optimized online gameplay.`,
        price: 60000,
        regularPrice: 61000,
        avgRating: 5,
        images: [
          "/images/rog-rapture-gt-ax11000-pro/ROG-Rapture-GT-AX11000-Pro-1.webp",
          "/images/rog-rapture-gt-ax11000-pro/ROG-Rapture-GT-AX11000-Pro-2.webp",
          "/images/rog-rapture-gt-ax11000-pro/ROG-Rapture-GT-AX11000-Pro-3.webp",
          "/images/rog-rapture-gt-ax11000-pro/ROG-Rapture-GT-AX11000-Pro-4.webp",
        ],

        mainImage:
          "/images/rog-rapture-gt-ax11000-pro/ROG-Rapture-GT-AX11000-Pro-preview.webp",

        category: getCategoryId("Networking"),

        brand: "Asus",

        stock: 10,
        Code: "515A52",

        keyFeatures: [
          {
            title: "WiFi",
            value: "WiFi 6 Tri-Band",
          },
          {
            title: "Processor",
            value: "2.0GHz Quad-Core",
          },
          {
            title: "WAN",
            value: "10G + 2.5G",
          },
          {
            title: "Antennas",
            value: "8 External Antennas",
          },
        ],

        technicalSpecifications: [
          {
            title: "CPU",
            value: "2.0GHz Quad-Core",
          },
          {
            title: "RAM",
            value: "1GB DDR4",
          },
          {
            title: "Flash",
            value: "256MB NAND",
          },
          {
            title: "WiFi Standard",
            value: "WiFi 6 (802.11ax)",
          },
          {
            title: "Wireless Speed",
            value: "Up to 11000Mbps",
          },
          {
            title: "Frequency",
            value: "Tri-Band",
          },
          {
            title: "WAN Ports",
            value: "1×10G + 1×2.5G",
          },
          {
            title: "LAN Ports",
            value: "4×Gigabit",
          },
          {
            title: "USB",
            value: "USB 3.2 Gen1 + USB 2.0",
          },
          {
            title: "Security",
            value: "WPA3, WPA2",
          },
        ],
      },

      {
        name: "Mac Studio M4 Max",
        slug: "mac-studio-m4-max",
        description: `Apple Mac Studio M4 Max
        The Apple Mac Studio M4 Max is Apple’s most advanced compact desktop, designed for professionals who need workstation-level performance in a sleek, space-saving design.
        Powered by the M4 Max chip, this Mac Studio combines a 14-core CPU, 32-core GPU, and 16-core Neural Engine to deliver extreme speed for creative workflows, AI tasks, and high-end productivity.
        With support for up to five displays, Thunderbolt 5 connectivity, and 10Gb Ethernet, the Apple Mac Studio M4 Max is built to be the ultimate hub for video editors, 3D artists, developers, and content creators.`,
        price: 285000,
        regularPrice: 313500,
        avgRating: 0,
        images: [
          "/images/mac-studio-m4-max/Mac-Studio-M4-Max-1.webp",
          "/images/mac-studio-m4-max/Mac-Studio-M4-Max-2.webp",
          "/images/mac-studio-m4-max/Mac-Studio-M4-Max-3.webp",
        ],

        mainImage: "/images/mac-studio-m4-max/Mac-Studio-M4-Max-preview.webp",

        category: getCategoryId("Desktop"),

        brand: "Apple",

        stock: 10,
        code: "EB676E",

        keyFeatures: [
          {
            title: "Chip",
            value: "Apple M4 Max",
          },
          {
            title: "CPU",
            value: "14-Core",
          },
          {
            title: "GPU",
            value: "32-Core",
          },
          {
            title: "Memory",
            value: "36GB Unified",
          },
        ],

        technicalSpecifications: [
          {
            title: "Processor",
            value: "Apple M4 Max",
          },
          {
            title: "CPU",
            value: "14-Core",
          },
          {
            title: "GPU",
            value: "32-Core",
          },
          {
            title: "Neural Engine",
            value: "16-Core",
          },
          {
            title: "Memory",
            value: "36GB Unified Memory",
          },
          {
            title: "Storage",
            value: "1TB SSD",
          },
          {
            title: "Ports",
            value: "Thunderbolt 5, HDMI, USB-C",
          },
          {
            title: "Networking",
            value: "Wi-Fi 6E, Bluetooth 5.3, 10Gb Ethernet",
          },
          {
            title: "Operating System",
            value: "macOS",
          },
          {
            title: "Color",
            value: "Silver",
          },
        ],
      },

      {
        name: "ROG Azoth Extreme",
        slug: "rog-azoth-extreme",
        description: `Asus ROG Azoth Extreme RGB Tri-Mode Wireless Mechanical Gaming Keyboard
        The Asus ROG Azoth Extreme is a premium mechanical gaming keyboard designed for enthusiasts who demand maximum performance and customization.
        It features ROG NX pre-lubed mechanical switches, hot-swappable switch support, an 8000Hz polling rate, Speed Tap Mode, full N-key rollover, and per-key Aura Sync RGB lighting.
        The keyboard also includes a built-in OLED touchscreen display, a three-way control knob, tri-mode connectivity (USB-C, Bluetooth, and 2.4GHz SpeedNova wireless), and a premium detachable wrist rest.
        Compatible with Windows 11 and macOS, the ROG Azoth Extreme combines professional-grade gaming performance with luxury design and advanced customization through Armoury Crate.`,
        price: 63999,
        regularPrice: 66000,
        avgRating: 0,
        images: [
          "/images/rog-azoth-extreme/ROG-Azoth-Extreme-1.webp",
          "/images/rog-azoth-extreme/ROG-Azoth-Extreme-2.webp",
          "/images/rog-azoth-extreme/ROG-Azoth-Extreme-3.webp",
          "/images/rog-azoth-extreme/ROG-Azoth-Extreme-4.webp",
        ],

        mainImage: "/images/rog-azoth-extreme/ROG-Azoth-Extreme-preview.webp",

        category: getCategoryId("Computer Accessories"),

        brand: "Asus",

        stock: 10,
        code: "06EB87",

        keyFeatures: [
          {
            title: "Switches",
            value: "ROG NX Mechanical",
          },
          {
            title: "Connectivity",
            value: "Tri-Mode Wireless",
          },
          {
            title: "Display",
            value: "OLED Touchscreen",
          },
          {
            title: "Polling Rate",
            value: "8000Hz",
          },
        ],

        technicalSpecifications: [
          {
            title: "Keyboard Type",
            value: "Mechanical Gaming Keyboard",
          },
          {
            title: "Switches",
            value: "ROG NX Hot-Swappable",
          },
          {
            title: "Connectivity",
            value: "USB-C, Bluetooth, 2.4GHz",
          },
          {
            title: "Polling Rate",
            value: "8000Hz",
          },
          {
            title: "Lighting",
            value: "Per-Key Aura RGB",
          },
          {
            title: "Display",
            value: "OLED Touchscreen",
          },
          {
            title: "Battery",
            value: "Long-life Rechargeable",
          },
          {
            title: "Compatibility",
            value: "Windows / macOS",
          },
          {
            title: "Software",
            value: "Armoury Crate",
          },
          {
            title: "Extras",
            value: "Detachable Wrist Rest",
          },
        ],
      },

      {
        name: "PlayStation 5 Ghost of Yōtei Gold Edition",
        slug: "playstation-5-ghost-of-yotei-gold-edition",
        description: `Sony PlayStation 5 Ghost of Yōtei Gold Limited Edition Gaming Console
        The Sony PlayStation 5 Ghost of Yōtei Gold Edition is a stunning limited-edition PS5 featuring a laser-etched metallic gold design inspired by Ghost of Yōtei.
        Built on Sony's next-generation PlayStation 5 hardware, it delivers ultra-fast SSD performance, ray tracing, 4K gaming at up to 120Hz, Tempest 3D AudioTech, and immersive DualSense adaptive triggers and haptic feedback.
        This special edition includes a custom DualSense wireless controller, 1TB ultra-high-speed SSD, support for over 4,000 PS4 games, and Astro's Playroom with an exclusive Ghost of Yōtei digital theme.
        Perfect for collectors and gamers who want a premium PlayStation experience with exclusive aesthetics and top-tier gaming performance.`,
        price: 87000,
        regularPrice: 95700,
        avgRating: 0,
        images: [
          "/images/playstation-5-ghost-of-yotei-gold-edition/PlayStation-5-Ghost-of-Yotei-Gold-Edition-1.webp",
          "/images/playstation-5-ghost-of-yotei-gold-edition/PlayStation-5-Ghost-of-Yotei-Gold-Edition-2.webp",
          "/images/playstation-5-ghost-of-yotei-gold-edition/PlayStation-5-Ghost-of-Yotei-Gold-Edition-3.webp",
          "/images/playstation-5-ghost-of-yotei-gold-edition/PlayStation-5-Ghost-of-Yotei-Gold-Edition-4.webp",
        ],

        mainImage:
          "/images/playstation-5-ghost-of-yotei-gold-edition/PlayStation-5-Ghost-of-Yotei-Gold-Edition-preview.webp",

        category: getCategoryId("Gaming Console"),

        brand: "Sony",

        stock: 10,
        code: "F2CFB5",

        keyFeatures: [
          {
            title: "Storage",
            value: "1TB Ultra High-Speed SSD",
          },
          {
            title: "Graphics",
            value: "4K Gaming up to 120Hz",
          },
          {
            title: "Controller",
            value: "DualSense Wireless Controller",
          },
          {
            title: "Edition",
            value: "Ghost of Yōtei Gold Limited Edition",
          },
        ],

        technicalSpecifications: [
          {
            title: "CPU",
            value: "AMD Zen 2 8-Core",
          },
          {
            title: "GPU",
            value: "AMD RDNA 2",
          },
          {
            title: "Storage",
            value: "1TB SSD",
          },
          {
            title: "Video Output",
            value: "Up to 4K 120Hz / 8K Supported",
          },
          {
            title: "Ray Tracing",
            value: "Supported",
          },
          {
            title: "Audio",
            value: "Tempest 3D AudioTech",
          },
          {
            title: "Controller",
            value: "DualSense",
          },
          {
            title: "Network",
            value: "Wi-Fi 6, Bluetooth",
          },
          {
            title: "Backward Compatibility",
            value: "PS4 Games Supported",
          },
          {
            title: "Edition",
            value: "Limited Gold Edition",
          },
        ],
      },

      {
        name: "iPhone 17 Pro Max",
        slug: "iphone-17-pro-max",
        description: `iPhone 17 Pro Max Price in Bangladesh
        Experience the future of smartphones with the Apple iPhone 17 Pro Max.
        Powered by the latest Apple A19 Pro chip, the iPhone 17 Pro Max delivers flagship performance, advanced AI capabilities, and incredible power efficiency.
        The device features a stunning 6.9-inch LTPO Super Retina XDR OLED display with ProMotion 120Hz refresh rate, Always-On Display support, and up to 3000 nits peak brightness.
        Its professional camera system includes a 48MP main camera, 48MP ultra-wide camera, and a 48MP periscope telephoto lens capable of advanced optical zoom and 8K video recording.
        Combined with a premium titanium body, USB-C connectivity, Wi-Fi 7, Apple Intelligence, and all-day battery life, the iPhone 17 Pro Max is Apple's most advanced smartphone yet.`,
        price: 230000,
        regularPrice: 249999,
        avgRating: 0,
        images: [
          "/images/iphone-17-pro-max/iPhone-17-Pro-Max-1.webp",
          "/images/iphone-17-pro-max/iPhone-17-Pro-Max-2.webp",
          "/images/iphone-17-pro-max/iPhone-17-Pro-Max-3.webp",
          "/images/iphone-17-pro-max/iPhone-17-Pro-Max-4.webp",
        ],

        mainImage: "/images/iphone-17-pro-max/iPhone-17-Pro-Max-preview.webp",

        category: getCategoryId("Smartphone"),

        brand: "Apple",

        stock: 10,
        code: "842468",

        keyFeatures: [
          {
            title: "Display",
            value: "6.9-inch LTPO OLED 120Hz",
          },
          {
            title: "Chip",
            value: "Apple A19 Pro",
          },
          {
            title: "Camera",
            value: "Triple 48MP Pro Camera",
          },
          {
            title: "Body",
            value: "Grade 5 Titanium",
          },
        ],

        technicalSpecifications: [
          {
            title: "Display",
            value: "6.9-inch LTPO Super Retina XDR OLED",
          },
          {
            title: "Resolution",
            value: "2868 × 1320",
          },
          {
            title: "Processor",
            value: "Apple A19 Pro",
          },
          {
            title: "RAM",
            value: "12GB",
          },
          {
            title: "Storage",
            value: "256GB / 512GB / 1TB / 2TB",
          },
          {
            title: "Main Camera",
            value: "48MP + 48MP + 48MP",
          },
          {
            title: "Front Camera",
            value: "24MP",
          },
          {
            title: "Battery",
            value: "Up to 30 Hours Video Playback",
          },
          {
            title: "Operating System",
            value: "iOS 19",
          },
          {
            title: "Protection",
            value: "IP68",
          },
        ],
      },

      {
        name: "GeForce RTX 5090 32G LIGHTNING Z",
        slug: "geforce-rtx-5090-32g-lightning-z",
        description: `MSI GeForce RTX 5090 32G LIGHTNING Z GDDR7 Graphics Card
        The MSI GeForce RTX 5090 LIGHTNING Z is MSI's flagship graphics card, built for extreme gaming, AI workloads, 3D rendering, and professional content creation.
        Powered by NVIDIA's latest architecture, it features 21,760 CUDA cores, 32GB of ultra-fast GDDR7 memory, and a massive 512-bit memory interface for exceptional bandwidth and performance.
        Its premium liquid cooling solution keeps temperatures under control while maintaining maximum boost clocks during demanding workloads.
        With support for 8K resolution, DisplayPort 2.1a, HDMI, PCIe 5.0 power delivery, and advanced ray tracing technologies, the RTX 5090 LIGHTNING Z is designed for enthusiasts who demand uncompromising performance.`,
        price: 990000,
        regularPrice: 995000,
        avgRating: 5,
        images: [
          "/images/geforce-rtx-5090-32g-lightning-z/GeForce-RTX-5090-32G-LIGHTNING-Z-1.webp",
          "/images/geforce-rtx-5090-32g-lightning-z/GeForce-RTX-5090-32G-LIGHTNING-Z-2.webp",
          "/images/geforce-rtx-5090-32g-lightning-z/GeForce-RTX-5090-32G-LIGHTNING-Z-3.webp",
          "/images/geforce-rtx-5090-32g-lightning-z/GeForce-RTX-5090-32G-LIGHTNING-Z-4.webp",
        ],

        mainImage:
          "/images/geforce-rtx-5090-32g-lightning-z/GeForce-RTX-5090-32G-LIGHTNING-Z-preview.webp",

        category: getCategoryId("Computer Hardware"),

        brand: "MSI",

        stock: 10,
        code: "515A3C",

        keyFeatures: [
          {
            title: "GPU",
            value: "NVIDIA RTX 5090",
          },
          {
            title: "Memory",
            value: "32GB GDDR7",
          },
          {
            title: "Cooling",
            value: "Liquid Cooling",
          },
          {
            title: "CUDA Cores",
            value: "21760",
          },
        ],

        technicalSpecifications: [
          {
            title: "CUDA Cores",
            value: "21760",
          },
          {
            title: "Boost Clock",
            value: "2730 MHz",
          },
          {
            title: "Extreme Clock",
            value: "2775 MHz",
          },
          {
            title: "Memory",
            value: "32GB GDDR7",
          },
          {
            title: "Memory Bus",
            value: "512-bit",
          },
          {
            title: "Display Outputs",
            value: "3× DisplayPort 2.1a + HDMI",
          },
          {
            title: "Power Connector",
            value: "16-pin PCIe 5.0",
          },
          {
            title: "Cooling",
            value: "Liquid Cooling System",
          },
          {
            title: "API",
            value: "DirectX 12 Ultimate",
          },
          {
            title: "Maximum Resolution",
            value: "7680 × 4320",
          },
        ],
      },

      {
        name: "Odyssey Neo G9",
        slug: "odyssey-neo-g9",
        description: `Samsung Odyssey Neo G9 LS57CG950NWXXL 57" 240Hz 1ms Dual 4K UHD Curved Gaming Monitor
        The Samsung Odyssey Neo G9 is one of the world's most advanced gaming monitors, featuring an enormous 57-inch ultra-wide display with Dual UHD (7680 × 2160) resolution.
        Its 1000R curved Quantum Mini LED panel delivers breathtaking immersion with VESA DisplayHDR 1000, HDR10+, over 2,300 local dimming zones, and outstanding color accuracy.
        With an ultra-fast 240Hz refresh rate, 1ms GTG response time, AMD FreeSync Premium Pro, and DisplayPort 2.1 support, it is built for next-generation gaming and professional productivity.
        Additional features such as KVM Switch, CoreSync lighting, Picture-by-Picture, USB hub, ergonomic stand adjustments, and premium build quality make it one of the most capable flagship monitors available today.`,
        price: 320000,
        regularPrice: 340000,
        avgRating: 0,
        images: [
          "/images/odyssey-neo-g9/Odyssey-Neo-G9-1.webp",
          "/images/odyssey-neo-g9/Odyssey-Neo-G9-2.webp",
          "/images/odyssey-neo-g9/Odyssey-Neo-G9-3.webp",
          "/images/odyssey-neo-g9/Odyssey-Neo-G9-4.webp",
        ],

        mainImage: "/images/odyssey-neo-g9/Odyssey-Neo-G9-preview.webp",

        category: getCategoryId("Monitor"),

        brand: "Samsung",

        stock: 10,
        code: "515A35",

        keyFeatures: [
          {
            title: "Size",
            value: "57-inch Dual UHD",
          },
          {
            title: "Refresh Rate",
            value: "240Hz",
          },
          {
            title: "Panel",
            value: "Quantum Mini LED",
          },
          {
            title: "Response Time",
            value: "1ms",
          },
        ],

        technicalSpecifications: [
          {
            title: "Display Size",
            value: "57-inch",
          },
          {
            title: "Resolution",
            value: "7680 × 2160",
          },
          {
            title: "Panel",
            value: "VA Mini LED",
          },
          {
            title: "Refresh Rate",
            value: "240Hz",
          },
          {
            title: "Response Time",
            value: "1ms GTG",
          },
          {
            title: "HDR",
            value: "DisplayHDR 1000",
          },
          {
            title: "Adaptive Sync",
            value: "FreeSync Premium Pro",
          },
          {
            title: "Ports",
            value: "DisplayPort 2.1 + 3× HDMI 2.1",
          },
          {
            title: "USB Hub",
            value: "2× USB 3.0",
          },
          {
            title: "Curvature",
            value: "1000R",
          },
        ],
      },

      {
        name: "Starlink Flat High Performance",
        slug: "starlink-flat-high-performance",
        description: `Starlink Flat High Performance Kit
        The Starlink Flat High Performance Kit is a premium satellite internet solution engineered for high-performance connectivity in demanding environments.
        Featuring an electronic phased-array antenna with a 140° field of view, this system delivers reliable internet access with Wi-Fi 5 dual-band networking, support for up to 128 connected devices, and mesh networking with up to 12 Starlink nodes.
        The weather-resistant antenna is capable of surviving winds up to 280 km/h and automatically melts snow at rates of up to 75mm per hour, ensuring reliable operation in extreme conditions.
        With official Starlink hardware, premium build quality, and flexible deployment, the Flat High Performance Kit is an excellent choice for remote homes, businesses, RVs, marine installations, and mission-critical internet connectivity.`,
        price: 185000,
        regularPrice: 185000,
        avgRating: 0,
        images: [
          "/images/starlink-flat-high-performance/Starlink-Flat-High-Performance-1.webp",
          "/images/starlink-flat-high-performance/Starlink-Flat-High-Performance-2.webp",
        ],

        mainImage:
          "/images/starlink-flat-high-performance/Starlink-Flat-High-Performance-preview.webp",

        category: getCategoryId("Networking"),

        brand: "Starlink",

        stock: 10,
        code: "6F2DA6",

        keyFeatures: [
          {
            title: "Antenna",
            value: "Electronic Phased Array",
          },
          {
            title: "Coverage",
            value: "Up to 185m²",
          },
          {
            title: "Devices",
            value: "Supports 128 Devices",
          },
          {
            title: "Weather",
            value: "Extreme Weather Resistant",
          },
        ],

        technicalSpecifications: [
          {
            title: "Antenna Type",
            value: "Electronic Phased Array",
          },
          {
            title: "Field of View",
            value: "140°",
          },
          {
            title: "Wi-Fi",
            value: "Wi-Fi 5 Dual-Band",
          },
          {
            title: "Coverage",
            value: "Up to 185m²",
          },
          {
            title: "Device Capacity",
            value: "128 Devices",
          },
          {
            title: "Mesh Support",
            value: "Up to 12 Nodes",
          },
          {
            title: "Wind Resistance",
            value: "Up to 280 km/h",
          },
          {
            title: "Snow Melt",
            value: "75 mm/hour",
          },
          {
            title: "Dish Rating",
            value: "IP56",
          },
          {
            title: "Router Rating",
            value: "IP54",
          },
        ],
      },

      {
        name: "Lifestyle 650",
        slug: "lifestyle-650",
        description: `Bose Lifestyle 650 Home Entertainment Speaker System
        The Bose Lifestyle 650 is a premium 5.1-channel home entertainment system engineered to deliver cinema-quality sound with elegant, modern design.
        The system includes four compact OmniJewel speakers, an OmniJewel center speaker, and the powerful Acoustimass wireless bass module that delivers deep, rich, room-filling bass.
        With support for six HDMI connections, ARC, Bluetooth streaming, ADAPTiQ room calibration, and SoundTouch integration, the Lifestyle 650 provides exceptional flexibility for movies, music, sports, and gaming.
        Its premium glass console, wireless rear speaker connectivity, and high-quality Bose audio processing make it one of the most advanced home theater systems available for immersive entertainment.`,
        price: 660000,
        regularPrice: 665000,
        avgRating: 0,
        images: [
          "/images/lifestyle-650/Lifestyle-650-1.webp",
          "/images/lifestyle-650/Lifestyle-650-2.webp",
          "/images/lifestyle-650/Lifestyle-650-3.webp",
          "/images/lifestyle-650/Lifestyle-650-4.webp",
        ],

        mainImage: "/images/lifestyle-650/Lifestyle-650-preview.webp",

        category: getCategoryId("Audio"),

        brand: "Bose",

        stock: 10,
        code: "4DE06D",

        keyFeatures: [
          {
            title: "Speaker System",
            value: "5.1 Channel Home Entertainment",
          },
          {
            title: "Speakers",
            value: "OmniJewel Speaker System",
          },
          {
            title: "Bass Module",
            value: "Wireless Acoustimass Module",
          },
          {
            title: "Connectivity",
            value: "Bluetooth + HDMI ARC",
          },
        ],

        technicalSpecifications: [
          {
            title: "Center Speaker",
            value: "OmniJewel Centre Speaker",
          },
          {
            title: "Satellite Speakers",
            value: "4 × OmniJewel Speakers",
          },
          {
            title: "Bass Module",
            value: "Wireless Acoustimass Bass Module",
          },
          {
            title: "Audio Technology",
            value: "ADAPTiQ Room Calibration",
          },
          {
            title: "HDMI",
            value: "1× HDMI ARC Output + 5× HDMI Inputs",
          },
          {
            title: "Digital Audio",
            value: "2× Optical + 2× Coaxial",
          },
          {
            title: "Bluetooth",
            value: "Supported",
          },
          {
            title: "Ethernet",
            value: "1× RJ45",
          },
          {
            title: "USB",
            value: "Software Updates Only",
          },
          {
            title: "Warranty",
            value: "1 Year Service Warranty",
          },
        ],
      },

      {
        name: "HERO11 Black Creator Edition",
        slug: "hero11-black-creator-edition",
        description: `GoPro HERO11 Black Creator Edition 27MP 5.3K Waterproof Touch Screen Action Camera

        The GoPro HERO11 Black Creator Edition is an all-in-one content creation solution designed for vloggers, filmmakers, streamers, and professional creators.
        It captures stunning 5.3K videos and 27MP still images using a high-performance CMOS sensor while delivering industry-leading HyperSmooth 5.0 stabilization for incredibly smooth footage.
        The Creator Edition includes enhanced audio, built-in LED lighting, long battery life with the Enduro battery, dual LCD displays, and waterproof durability up to 10 meters without additional housing.
        With Wi-Fi, Bluetooth, USB-C connectivity, HDR support, slow-motion recording, and rugged construction, the HERO11 Creator Edition is built for creators who demand professional-quality content anywhere.`,
        price: 45000,
        regularPrice: 48400,
        avgRating: 0,
        images: [
          "/images/hero11-black-creator-edition/HERO11-Black-Creator-Edition-1.webp",
          "/images/hero11-black-creator-edition/HERO11-Black-Creator-Edition-2.webp",
          "/images/hero11-black-creator-edition/HERO11-Black-Creator-Edition-3.webp",
          "/images/hero11-black-creator-edition/HERO11-Black-Creator-Edition-4.webp",
        ],

        mainImage:
          "/images/hero11-black-creator-edition/HERO11-Black-Creator-Edition-preview.webp",

        category: getCategoryId("Gadget"),

        brand: "GoPro",

        stock: 10,
        code: "528102",

        keyFeatures: [
          {
            title: "Camera",
            value: "27MP Action Camera",
          },
          {
            title: "Video",
            value: "5.3K Recording",
          },
          {
            title: "Display",
            value: "Dual LCD Displays",
          },
          {
            title: "Waterproof",
            value: "Up to 10m",
          },
        ],

        technicalSpecifications: [
          {
            title: "Sensor",
            value: '1/1.9" CMOS',
          },
          {
            title: "Photo Resolution",
            value: "27MP",
          },
          {
            title: "Video Resolution",
            value: "5.3K",
          },
          {
            title: "Slow Motion",
            value: "Up to 8×",
          },
          {
            title: "Rear Display",
            value: '2.27" Touch LCD',
          },
          {
            title: "Front Display",
            value: '1.4" Color LCD',
          },
          {
            title: "Battery",
            value: "1720mAh Enduro Battery",
          },
          {
            title: "Connectivity",
            value: "Wi-Fi + Bluetooth + USB-C",
          },
          {
            title: "Storage",
            value: "microSD (V30/UHS-3)",
          },
          {
            title: "Water Resistance",
            value: "10m",
          },
        ],
      },

      {
        name: "Mini 5 Pro Fly More Combo Plus",
        slug: "mini-5-pro-fly-more-combo-plus",
        description: `DJI Mini 5 Pro Fly More Combo Plus (with RC2)

        The DJI Mini 5 Pro Fly More Combo Plus delivers professional aerial photography in an ultra-portable drone weighing under 249 grams with the standard battery.
        Equipped with a large 1-inch 50MP CMOS sensor, it captures breathtaking photos and cinematic 4K video at up to 120fps with support for D-Log M and HLG color profiles.
        Advanced features such as omnidirectional obstacle sensing, LiDAR-assisted navigation, ActiveTrack 360°, MasterShots, QuickShots, and DJI O4+ transmission provide exceptional flight safety and creative freedom.
        The Fly More Combo Plus includes three Intelligent Flight Battery Plus units, a Two-Way Charging Hub, spare propellers, carrying bag, and the DJI RC2 controller with a built-in display for a complete premium flying experience.`,
        price: 97000,
        regularPrice: 120000,
        avgRating: 5,
        images: [
          "/images/mini-5-pro-fly-more-combo-plus/Mini-5-Pro-Fly-More-Combo-Plus-1.webp",
          "/images/mini-5-pro-fly-more-combo-plus/Mini-5-Pro-Fly-More-Combo-Plus-2.webp",
          "/images/mini-5-pro-fly-more-combo-plus/Mini-5-Pro-Fly-More-Combo-Plus-3.webp",
          "/images/mini-5-pro-fly-more-combo-plus/Mini-5-Pro-Fly-More-Combo-Plus-4.webp",
        ],

        mainImage:
          "/images/mini-5-pro-fly-more-combo-plus/Mini-5-Pro-Fly-More-Combo-Plus-preview.webp",

        category: getCategoryId("Gadget"),

        brand: "DJI",

        stock: 10,
        code: "20A51A",

        keyFeatures: [
          {
            title: "Camera",
            value: "50MP 1-inch CMOS",
          },
          {
            title: "Video",
            value: "4K 120fps",
          },
          {
            title: "Flight Time",
            value: "Up to 52 Minutes",
          },
          {
            title: "Controller",
            value: "DJI RC2",
          },
        ],

        technicalSpecifications: [
          {
            title: "Sensor",
            value: "1-inch CMOS",
          },
          {
            title: "Resolution",
            value: "50MP",
          },
          {
            title: "Lens",
            value: "24mm f/1.8",
          },
          {
            title: "Video",
            value: "4K 120fps / FHD 240fps",
          },
          {
            title: "Flight Time",
            value: "52 Minutes",
          },
          {
            title: "Transmission",
            value: "DJI O4+ (20km)",
          },
          {
            title: "Obstacle Avoidance",
            value: "Omnidirectional + LiDAR",
          },
          {
            title: "Controller",
            value: "DJI RC2",
          },
          {
            title: "Battery",
            value: "Intelligent Flight Battery Plus",
          },
          {
            title: "Weight",
            value: "<249g / 290g (Plus Battery)",
          },
        ],
      },

      {
        name: "ROG Strix SCAR 18 (2025)",
        slug: "rog-strix-scar-18-2025",
        description: `ASUS ROG Strix SCAR 18 (2025)

        The ASUS ROG Strix SCAR 18 (2025) is one of the most powerful gaming laptops ever produced, built for elite gamers, creators, and AI workloads.
        Powered by the Intel Core Ultra 9 275HX processor and NVIDIA GeForce RTX 5090 Laptop GPU with 24GB GDDR7 memory, it delivers desktop-class gaming and creative performance.
        The stunning 18-inch 2.5K 240Hz display offers ultra-smooth gameplay, Dolby Vision HDR, 100% DCI-P3 color accuracy, and Pantone validation for professional content creation.
        Combined with 64GB DDR5 memory, a 1TB PCIe Gen4 SSD, Wi-Fi 7, Thunderbolt 5, Dolby Atmos speakers, RGB keyboard, and premium cooling, the ROG Strix SCAR 18 is engineered for users who demand absolute flagship performance.`,
        price: 649000,
        regularPrice: 649900,
        avgRating: 0,
        images: [
          "/images/rog-strix-scar/ROG-Strix-SCAR-1.webp",
          "/images/rog-strix-scar/ROG-Strix-SCAR-2.webp",
          "/images/rog-strix-scar/ROG-Strix-SCAR-3.webp",
          "/images/rog-strix-scar/ROG-Strix-SCAR-4.webp",
        ],

        mainImage: "/images/rog-strix-scar/Rog-Strix-Scar-preview.webp",

        category: getCategoryId("Laptop"),

        brand: "Asus",

        stock: 10,
        code: "D1040E",

        keyFeatures: [
          {
            title: "Processor",
            value: "Intel Core Ultra 9 275HX",
          },
          {
            title: "Display",
            value: '18" 2.5K 240Hz OLED',
          },
          {
            title: "Graphics",
            value: "RTX 5090 Laptop 24GB",
          },
          {
            title: "Memory",
            value: "64GB DDR5 + 1TB SSD",
          },
        ],

        technicalSpecifications: [
          {
            title: "CPU",
            value: "Intel Core Ultra 9 275HX",
          },
          {
            title: "Frequency",
            value: "2.7GHz up to 5.4GHz",
          },
          {
            title: "Display",
            value: '18" WQXGA OLED 240Hz',
          },
          {
            title: "Graphics",
            value: "RTX 5090 Laptop 24GB GDDR7",
          },
          {
            title: "Memory",
            value: "64GB DDR5 5600MHz",
          },
          {
            title: "Storage",
            value: "1TB PCIe Gen4 NVMe SSD",
          },
          {
            title: "Battery",
            value: "90Wh",
          },
          {
            title: "Networking",
            value: "Wi-Fi 7 + Bluetooth 5.4 + 2.5G LAN",
          },
          {
            title: "Operating System",
            value: "Windows 11 Home",
          },
          {
            title: "Warranty",
            value: "2 Years International",
          },
        ],
      },

      {
        name: "MacBook Air 15",
        slug: "macbook-air-15",
        description: `Apple MacBook Air 15-inch (M3)
        The Apple MacBook Air 15-inch with the M3 chip combines exceptional performance with an incredibly thin and lightweight design.
        Featuring a stunning 15.3-inch Liquid Retina display with True Tone technology, P3 wide color support, and 500 nits brightness, it delivers vibrant visuals for work and entertainment.
        Powered by Apple's M3 processor with an 8-core CPU, up to a 10-core GPU, and a 16-core Neural Engine, it provides fast performance for productivity, creative work, and everyday computing while maintaining impressive battery life of up to 18 hours.
        With MagSafe charging, Thunderbolt connectivity, Touch ID security, premium aluminum construction, and macOS, the MacBook Air 15 is an ideal laptop for professionals, students, and creators who want power in an ultra-portable package.`,
        price: 98000,
        regularPrice: 107800,
        avgRating: 5,
        images: [
          "/images/macbook-air-15/MacBook-Air-15-1.webp",
          "/images/macbook-air-15/MacBook-Air-15-2.webp",
          "/images/macbook-air-15/MacBook-Air-15-3.webp",
          "/images/macbook-air-15/MacBook-Air-15-4.webp",
        ],

        mainImage: "/images/macbook-air-15/MacBook-Air-15-preview.webp",

        category: getCategoryId("Laptop"),

        brand: "Apple",

        stock: 10,
        code: "EE9481",

        keyFeatures: [
          {
            title: "Display",
            value: "15.3-inch Liquid Retina",
          },
          {
            title: "Processor",
            value: "Apple M3 Chip",
          },
          {
            title: "Battery",
            value: "Up to 18 Hours",
          },
          {
            title: "Design",
            value: "Ultra-Thin Aluminum Body",
          },
        ],

        technicalSpecifications: [
          {
            title: "Display",
            value: "15.3-inch Liquid Retina",
          },
          {
            title: "Resolution",
            value: "2880 × 1864",
          },
          {
            title: "Processor",
            value: "Apple M3",
          },
          {
            title: "CPU",
            value: "8-Core",
          },
          {
            title: "GPU",
            value: "Up to 10-Core",
          },
          {
            title: "Memory",
            value: "8GB / 16GB / 24GB Unified Memory",
          },
          {
            title: "Storage",
            value: "256GB / 512GB / 1TB / 2TB SSD",
          },
          {
            title: "Battery Life",
            value: "Up to 18 Hours",
          },
          {
            title: "Connectivity",
            value: "2× Thunderbolt / USB4, MagSafe 3",
          },
          {
            title: "Operating System",
            value: "macOS",
          },
        ],
      },
    ]);

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Seed failed",
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 },
    );
  }
}

import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE
  // =========================
  presence: {
    status: "online",
    activities: [
      {
        name: "Custom Status",
        state: "💜 خدمة السيرفر بأفضل أداء",
        type: 4, // Custom
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],
    defaultCooldown: 3,
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // AUTO ROLE SETTINGS
  // =========================
  autoRole: {
    enabled: true,
    // ضع ID الرتبة التلقائية للأعضاء الجدد هنا أو استخدم متغير البيئة
    defaultRoles: process.env.AUTO_ROLE_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    defaultQuestions: [
      { question: "ما هو اسمك؟", required: true },
      { question: "كم عمرك؟", required: true },
      { question: "لماذا ترغب في الانضمام للإدارة؟", required: true },
    ],
    statusColors: {
      pending: "#8E24AA",  // Violet Purple
      approved: "#7B1FA2", // Deep Purple Accent
      denied: "#4A148C",   // Dark Plum
    },
    applicationCooldown: 24,
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,
    managerRoles: [],
  },

  // =========================
  // EMBED COLORS & BRANDING (DEEP PURPLE THEME)
  // =========================
  embeds: {
    colors: {
      // Main Deep Purple Brand Colors
      primary: "#36013F",   // Deep Purple الأساسي
      secondary: "#2E0036", // درجة أغمق للخلفيات والتفاصيل
      accent: "#5C0668",    // درجة أفتح للتأكيد والإبراز

      // Status Colors tuned to match Deep Purple Aesthetic
      success: "#6A1B9A",   // Royal Purple
      error: "#4A148C",     // Dark Violet/Plum
      warning: "#AB47BC",   // Bright Lilac
      info: "#8E24AA",      // Medium Purple

      // Neutral utility colors
      light: "#F3E5F5",     // Very light purple-white
      dark: "#120015",      // Near black purple
      gray: "#7E57C2",      // Soft purple-gray

      // Discord-style palette shortcuts
      blurple: "#5865F2",
      green: "#6A1B9A",
      yellow: "#AB47BC",
      fuchsia: "#E1BEE7",
      red: "#4A148C",
      black: "#000000",

      // Feature-specific colors
      giveaway: {
        active: "#8E24AA",
        ended: "#36013F",
      },
      ticket: {
        open: "#6A1B9A",
        claimed: "#8E24AA",
        closed: "#36013F",
        pending: "#4A148C",
      },
      economy: "#AB47BC",
      birthday: "#E1BEE7",
      moderation: "#5C0668",

      // Ticket priority color mapping
      priority: {
        none: "#7E57C2",
        low: "#8E24AA",
        medium: "#7B1FA2",
        high: "#5C0668",
        urgent: "#36013F",
      },
    },
    footer: {
      text: "Titan Bot • Deep Purple System",
      icon: null,
    },
    thumbnail: null,
    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      name: "عملة",
      namePlural: "عملات",
      symbol: "🔮",
    },
    startingBalance: 0,
    baseBankCapacity: 100000,
    dailyAmount: 100,
    workMin: 10,
    workMax: 100,
    begMin: 5,
    begMax: 50,
    cooldowns: {
      daily: 24 * 60 * 60 * 1000,
      work: 60 * 60 * 1000,
      crime: 2 * 60 * 60 * 1000,
      rob: 4 * 60 * 60 * 1000,
    },
    robSuccessRate: 0.4,
    robFailJailTime: 3600000,
  },

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    defaultCategory: process.env.TICKET_CATEGORY_ID || null,
    supportRoles: process.env.TICKET_SUPPORT_ROLES?.split(",") || [],
    panel: {
      title: "🔮 مركز الدعم الفني والبطاقات",
      description: "مرحباً بك! إذا كنت بحاجة إلى مساعدة أو لديك استفسار، يرجى الضغط على الزر أدناه لفتح تذكرة وسيتم الرد عليك من قبل فريق الدعم.",
      buttonText: "فتح تذكرة",
      buttonEmoji: "📩",
    },
    priorities: {
      none: { emoji: "⚪", color: "#7E57C2", label: "عادي" },
      low: { emoji: "🟣", color: "#8E24AA", label: "منخفض" },
      medium: { emoji: "🟣", color: "#7B1FA2", label: "متوسط" },
      high: { emoji: "🔮", color: "#5C0668", label: "عالي" },
      urgent: { emoji: "🚨", color: "#36013F", label: "طارئ" },
    },
    defaultPriority: "none",
    archiveCategory: null,
    logChannel: process.env.TICKET_LOG_CHANNEL_ID || null,
  },

  // =========================
  // ANNOUNCEMENT SETTINGS
  // =========================
  announcements: {
    defaultChannel: process.env.ANNOUNCEMENT_CHANNEL_ID || null,
    title: "🔮 إعلان مهم",
    embedColor: "#36013F",
    mentionEveryone: false,
  },

  // =========================
  // RULES SETTINGS
  // =========================
  rules: {
    title: "📜 قوانين السيرفر",
    description: "يرجى الالتزام بالقوانين التالية للحفاظ على مجتمع آمن وممتع للجميع:",
    embedColor: "#36013F",
    list: [
      "1️⃣ الاحترام المتبادل بين جميع الأعضاء وعدم الإساءة.",
      "2️⃣ يمنع نشر الإعلانات أو الروابط الخارجية بدون إذن الإدارة.",
      "3️⃣ يمنع السبام والتكرار المزعج في الشات.",
      "4️⃣ الالتزام بمواضيع روم المحادثات المخصصة.",
      "5️⃣ اتباع تعليمات طاقم الإدارة فوراً.",
    ],
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    defaultDuration: 86400000,
    minimumWinners: 1,
    maximumWinners: 10,
    minimumDuration: 300000,
    maximumDuration: 2592000000,
    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    defaultRole: null,
    announcementChannel: null,
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    defaultMessage: "اضغط على الزر أدناه للتحقق من حسابك والدخول إلى السيرفر!",
    defaultButtonText: "تأكيد الحساب",
    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,
      maxAccountAge: 365,
      sendDMNotification: true,
      criteria: {
        account_age: "يجب أن يكون الحساب أقدم من الأيام المحددة",
        server_size: "تفعيل تلقائي إذا كان عدد الأعضاء أقل من 1000",
        none: "تفعيل تلقائي لجميع الأعضاء فوراً"
      }
    },
    verificationCooldown: 5000,
    maxVerificationAttempts: 3,
    attemptWindow: 60000,
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    cooldownCleanupInterval: 300000,
    maxAuditMetadataBytes: 4096,
    maxInMemoryAuditEntries: 1000,
    logAllVerifications: true,
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES
  // =========================
  welcome: {
    defaultWelcomeMessage: "أهلاً بك {user} في سيرفر {server}! 🔮\nأنت العضو رقم **{memberCount}** معنا. نرجو لك وقتاً ممتعاً!",
    defaultGoodbyeMessage: "غادر {user} السيرفر. أصبح عددنا الآن **{memberCount}** عضواً.",
    defaultWelcomeChannel: process.env.WELCOME_CHANNEL_ID || null,
    defaultGoodbyeChannel: process.env.GOODBYE_CHANNEL_ID || null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      name: "عداد {name}",
      description: "عداد سيرفر {name}",
      type: "voice",
      channelName: "🔮 {name}: {count}",
    },
    permissions: {
      deny: ["VIEW_CHANNEL"],
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      created: "✅ تم إنشاء العداد **{name}**",
      deleted: "🗑️ تم حذف العداد **{name}**",
      updated: "🔄 تم تحديث العداد **{name}**",
    },
    types: {
      members: {
        name: "👥 الأعضاء",
        description: "إجمالي الأعضاء في السيرفر",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 البوتات",
        description: "إجمالي البوتات في السيرفر",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 البشر",
        description: "إجمالي الأعضاء الحقيقيين",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES
  // =========================
  messages: {
    noPermission: "ليس لديك الصلاحية لاستخدام هذا الأمر.",
    cooldownActive: "يرجى الانتظار {time} قبل استخدام هذا الأمر مرة أخرى.",
    errorOccurred: "حدث خطأ أثناء تنفيذ هذا الأمر.",
    missingPermissions: "لا أملك الصلاحيات الكافية لتنفيذ هذا الإجراء.",
    commandDisabled: "تم تعطيل هذا الأمر حالياً.",
    maintenanceMode: "البوت في وضع الصيانة حالياً.",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  features: {
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,
    autoRole: true,
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,
    verification: true,
    reactionRoles: true,
    joinToCreate: true,
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
    music: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required (DISCORD_TOKEN or TOKEN environment variable)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required (CLIENT_ID environment variable)");
  }

  if (process.env.NODE_ENV === 'production') {
    const hasConnectionUrl = Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);

    if (!hasConnectionUrl) {
      if (!process.env.POSTGRES_HOST) {
        errors.push("PostgreSQL connection is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_HOST)");
      }
      if (!process.env.POSTGRES_USER) {
        errors.push("PostgreSQL user is required in production (set DATABASE_URL/POSTGRES_USER)");
      }
      if (!process.env.POSTGRES_PASSWORD) {
        errors.push("PostgreSQL password is required in production (set DATABASE_URL/POSTGRES_PASSWORD)");
      }
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

const COMMAND_CATEGORY_FEATURE_MAP = {
  birthday: "birthday",
  community: "community",
  economy: "economy",
  fun: "fun",
  giveaway: "giveaways",
  jointocreate: "joinToCreate",
  leveling: "leveling",
  logging: "logging",
  moderation: "moderation",
  music: "music",
  reaction_roles: "reactionRoles",
  search: "search",
  serverstats: "counter",
  ticket: "tickets",
  tools: "tools",
  utility: "utility",
  verification: "verification",
  welcome: "welcome",
  autorole: "autoRole",
};

function normalizeCategoryKey(category) {
  return String(category || "").trim().toLowerCase().replace(/\s+/g, "_");
}

export function getCommandPrefix() {
  return botConfig.commands?.prefix ?? "!";
}

export function getBotOwners() {
  return (botConfig.commands?.owners ?? [])
    .map((id) => String(id).trim())
    .filter(Boolean);
}

export function isBotOwner(userId) {
  if (!userId) {
    return false;
  }

  return getBotOwners().includes(String(userId));
}

export function isMaintenanceMode() {
  return botConfig.commands?.maintenanceMode === true;
}

export function getBotMessage(key, replacements = {}) {
  let message = botConfig.messages?.[key] || key;

  for (const [placeholder, value] of Object.entries(replacements)) {
    message = message.replace(new RegExp(`\\{${placeholder}\\}`, "g"), String(value));
  }

  return message;
}

export function isFeatureEnabled(featureKey) {
  if (!featureKey) {
    return true;
  }

  return botConfig.features?.[featureKey] !== false;
}

export function isCommandCategoryEnabled(category) {
  const normalized = normalizeCategoryKey(category);

  if (!normalized || normalized === "core") {
    return true;
  }

  const featureKey = COMMAND_CATEGORY_FEATURE_MAP[normalized];
  if (!featureKey) {
    return true;
  }

  return isFeatureEnabled(featureKey);
}

export function getApplicationStatusColor(status) {
  const colors = botConfig.applications?.statusColors || {};
  const hex = colors[status];
  return hex ? getColor(hex) : getColor(status === "approved" ? "success" : status === "denied" ? "error" : "warning");
}

export function getDefaultApplicationQuestions() {
  return (botConfig.applications?.defaultQuestions || []).map((entry) =>
    typeof entry === "string" ? entry : entry.question,
  ).filter(Boolean);
}

export function getColor(path, fallback = "#36013F") {
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );

  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;

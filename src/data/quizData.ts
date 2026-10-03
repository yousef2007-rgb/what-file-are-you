export interface FileTypeProfile {
  id: string;
  extension: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  quote: string;
  atariColor: string; // Background color
  atariTextColor: string; // Text color
  borderColor: string;
  badgeBg: string;
  mimeType: string;
  typicalSize: string;
  volatility: string; // LOW, MEDIUM, CRITICAL, HAZARDOUS
  dangerRating: number; // 1 to 5
  stats: {
    structure: number; // 0 - 100
    chaos: number; // 0 - 100
    aesthetics: number; // 0 - 100
    durability: number; // 0 - 100
    sociability: number; // 0 - 100
  };
  strengths: string[];
  weaknesses: string[];
  allies: { ext: string; reason: string }[];
  rivals: { ext: string; reason: string }[];
  naturalHabitat: string;
  warningLabel: string;
  pixelArt: string[]; // 8-row retro ascii / pixel icon
}

export interface QuizOption {
  letter: "A" | "B" | "C" | "D";
  text: string;
  subtext: string;
  tag: string;
  scores: Record<string, number>;
}

export interface QuizQuestion {
  id: number;
  title: string;
  situation: string;
  flavor: string;
  options: QuizOption[];
}

export const FILE_TYPES: Record<string, FileTypeProfile> = {
  xml: {
    id: "xml",
    extension: ".xml",
    name: "eXtensible Markup Language",
    title: "THE RIGID BUREAUCRAT",
    tagline: "If it is not properly closed and schema-validated, it does not exist.",
    description:
      "You do not live life; you follow an immutable specification document approved by a committee in 1998. You have a 47-page SOP for making toast. You cannot go to sleep unless every conversation has been explicitly terminated with an end tag. People think you are pedantic, but when civilization collapses, your schema definitions will be the only readable artifacts left.",
    quote: "Error at line 428: Sentiment tag was opened but never closed. Processing halted.",
    atariColor: "#FFE600",
    atariTextColor: "#000000",
    borderColor: "#CCB800",
    badgeBg: "#D4AF37",
    mimeType: "application/xml",
    typicalSize: "840 MB (Contains 4 lines of actual data)",
    volatility: "VERY LOW (RESISTS CHANGE)",
    dangerRating: 2,
    stats: {
      structure: 100,
      chaos: 5,
      aesthetics: 20,
      durability: 95,
      sociability: 35,
    },
    strengths: [
      "Impervious to ambiguity and spontaneous madness",
      "Documentation so thick it doubles as body armor",
      "Enterprise systems will rely on you until the heat death of the universe",
    ],
    weaknesses: [
      "Takes 45 minutes to explain a 'yes' or 'no' question",
      "Breaks down into tears when someone uses shorthand",
      "Everyone secretly avoids inviting you to casual dinner parties",
    ],
    allies: [
      { ext: ".xsd", reason: "Validates your every obsessive impulse." },
      { ext: ".sql", reason: "Understands the sanctity of strict schemas." },
    ],
    rivals: [
      { ext: ".json", reason: "Too casual, lacks closing tags, practically barbarian." },
      { ext: ".php", reason: "An offense to civil order and sanitation." },
    ],
    naturalHabitat: "Dusty banking servers and enterprise Java middleware running since 2002.",
    warningLabel: "CAUTION: May require 5 signed authorization forms before making eye contact.",
    pixelArt: [
      "  +-----+  ",
      "  | <XML> |",
      "  | </..> |",
      "  | [===] |",
      "  +-------+",
    ],
  },

  css: {
    id: "css",
    extension: ".css",
    name: "Cascading Style Sheets",
    title: "THE DRAMATIC AESTHETE",
    tagline: "I don't care if the engine is on fire, the typography is exquisite.",
    description:
      "You are 90% aesthetic, 10% emotional breakdown, and 100% committed to the bit. You will spend 6 hours debating whether an accent border should be 2px or 3px solid, but you haven't checked your bank balance in 3 weeks. You solve personal conflicts by slapping !important on your opinion and setting your emotional boundaries to z-index: 999999.",
    quote: "I am not having a crisis, I am simply applying a 0.3s ease-in-out transition.",
    atariColor: "#00F0FF",
    atariTextColor: "#000000",
    borderColor: "#00A3AD",
    badgeBg: "#00B4D8",
    mimeType: "text/css",
    typicalSize: "14 KB (Requires 250 MB of imported web fonts)",
    volatility: "HIGH (FRAGILE ON SAFARI)",
    dangerRating: 3,
    stats: {
      structure: 45,
      chaos: 70,
      aesthetics: 100,
      durability: 40,
      sociability: 85,
    },
    strengths: [
      "Everything around you looks immaculate and photogenic",
      "Can transform a landfill into an artisanal mid-century lounge",
      "Master of optical illusions and mood curation",
    ],
    weaknesses: [
      "One unexpected margin collapse sends you into a 3-day spiral",
      "Refuses to function if the lighting isn't cinematic",
      "Completely breaks down on slightly older hardware",
    ],
    allies: [
      { ext: ".gif", reason: "Appreciates dynamic visual drama." },
      { ext: ".md", reason: "Provides a clean, blank canvas for your art." },
    ],
    rivals: [
      { ext: ".csv", reason: "Ugly, square, hates gradients, has zero soul." },
      { ext: ".exe", reason: "Crude, utilitarian, cares only about blunt execution." },
    ],
    naturalHabitat: "Artisan coffee roasters, Figma boards, and 4K displays calibrated to 100% DCI-P3.",
    warningLabel: "FRAGILE: Do not resize the window or inspect element without emotional support.",
    pixelArt: [
      "  *  .  *  ",
      "  | {CSS} |",
      "  | :glow |",
      "  | !imp! |",
      "  *--*--*  ",
    ],
  },

  php: {
    id: "php",
    extension: ".php",
    name: "Hypertext Preprocessor",
    title: "THE UNKILLABLE TRASHFIRE",
    tagline: "Everyone makes fun of me, yet I run 77% of the entire world.",
    description:
      "You are chaotic, resourceful, completely unhinged, and mysteriously indestructible. Your code is held together by bubble gum, inline HTML, and global variables, but when the pristine fancy apps crash under pressure, you are still chugging along on Apache 2.4. You have survived cancellation 14 times and you will outlive us all.",
    quote: "Parse error: unexpected '$feelings' in /brain/logic.php on line 69.",
    atariColor: "#FF007F",
    atariTextColor: "#FFFFFF",
    borderColor: "#B30059",
    badgeBg: "#E60073",
    mimeType: "application/x-httpd-php",
    typicalSize: "73 KB (Contains HTML, CSS, SQL, and 2004 jokes in one file)",
    volatility: "CRITICAL (LIVES ON THE EDGE)",
    dangerRating: 4,
    stats: {
      structure: 20,
      chaos: 95,
      aesthetics: 15,
      durability: 100,
      sociability: 90,
    },
    strengths: [
      "Cannot be killed; survives on literal radioactive sludge",
      "Gets things shipped before purists finish drafting their architecture diagram",
      "Zero imposter syndrome because you have already seen rock bottom",
    ],
    weaknesses: [
      "Leaves trail of security vulnerabilities wherever you roam",
      "Mixing business logic with raw presentation like a mad scientist",
      "People talk behind your back at tech meetups",
    ],
    allies: [
      { ext: ".sh", reason: "Fellow rebel who runs directly on the server without permission." },
      { ext: ".tar.gz", reason: "Helps you hoard 20 gigabytes of legacy backups." },
    ],
    rivals: [
      { ext: ".rs", reason: "Judgey perfectionist who vomits at the sight of your variables." },
      { ext: ".xml", reason: "Thinks you belong in a federal quarantine facility." },
    ],
    naturalHabitat: "Shared cPanel hosting accounts with MySQL root password set to 'password123'.",
    warningLabel: "BIOHAZARD: Contains unfiltered $_GET parameters and unfiltered hot takes.",
    pixelArt: [
      "  \u2588\u2588\u2588\u2588\u2588\u2588\u2588  ",
      "  |$PHP$|  ",
      "  | ?>  |  ",
      "  | \u2620\ufe0f\u26a0\ufe0f  |  ",
      "  \u2588\u2588\u2588\u2588\u2588\u2588\u2588  ",
    ],
  },

  json: {
    id: "json",
    extension: ".json",
    name: "JavaScript Object Notation",
    title: "THE UNIVERSAL DIPLOMAT",
    tagline: "Just keep it key-value and nobody gets hurt.",
    description:
      "You are the peacemaker of the digital universe. Clean, organized, lightweight, and universally understood. You can speak to frontends, backends, mobile apps, smart fridges, and extraterrestrial probes. However, you are secretly walking on eggshells: one single trailing comma or misplaced quote will send you into a complete nervous breakdown.",
    quote: "SyntaxError: Unexpected token , in JSON at position 1337.",
    atariColor: "#00FF66",
    atariTextColor: "#000000",
    borderColor: "#00B347",
    badgeBg: "#00E65C",
    mimeType: "application/json",
    typicalSize: "4.8 KB (Strictly minimal, zero fat)",
    volatility: "MEDIUM (ONE COMMA AWAY FROM COLLAPSE)",
    dangerRating: 2,
    stats: {
      structure: 85,
      chaos: 20,
      aesthetics: 60,
      durability: 75,
      sociability: 100,
    },
    strengths: [
      "Can get along with literally anyone from Python to Swift",
      "Clear, readable, and doesn't waste anyone's time",
      "Every modern web API adores your presence",
    ],
    weaknesses: [
      "Cannot handle comments or informal side notes (bottles everything up)",
      "Zero tolerance for trailing commas: one flaw and you freeze",
      "Sometimes people treat you like an emotionless data courier",
    ],
    allies: [
      { ext: ".py", reason: "Translates effortlessly into native dictionaries." },
      { ext: ".md", reason: "Respects clean, lightweight plain text sanity." },
    ],
    rivals: [
      { ext: ".xml", reason: "Obsolete, bloated, and spends 80% of its time repeating tags." },
      { ext: ".exe", reason: "Opaque binary monster who refuses to share raw data." },
    ],
    naturalHabitat: "REST API endpoints, npm packages, and Postman collections.",
    warningLabel: "FRAGILE: Strictly NO trailing commas. Do not speak to me in circular references.",
    pixelArt: [
      "  {-----}  ",
      "  |:JSON|  ",
      "  |\"k\":\"v\"|",
      "  | [1,2] |",
      "  {-----}  ",
    ],
  },

  py: {
    id: "py",
    extension: ".py",
    name: "Python Script",
    title: "THE INDENTED MINIMALIST",
    tagline: "Why write 50 lines of boilerplate when 'import magic' exists?",
    description:
      "You believe elegance is a virtue and curly braces are an insult to human dignity. You look clean and serene on the outside, but you have 18 conflicting virtual environments lurking in your basement. You love to automate everything, including your own personal relationships, and you get deeply agitated when somebody uses 3 spaces instead of 4.",
    quote: "IndentationError: unexpected indent. My mood is ruined for the day.",
    atariColor: "#FFD000",
    atariTextColor: "#000000",
    borderColor: "#C7A200",
    badgeBg: "#E6BC00",
    mimeType: "text/x-python",
    typicalSize: "3.2 KB (Imports 4.8 GB of pip dependencies)",
    volatility: "LOW (UNTIL PIP BREAKS)",
    dangerRating: 2,
    stats: {
      structure: 80,
      chaos: 30,
      aesthetics: 75,
      durability: 70,
      sociability: 85,
    },
    strengths: [
      "Solves complex problems in 4 lines of readable code",
      "Beloved by data scientists, AI pioneers, and lazy geniuses alike",
      "Refuses to participate in pointless ceremonial syntax",
    ],
    weaknesses: [
      "Spends 3 hours fixing local environment and package dependencies",
      "Slow runner when pushed into heavy physical athletics",
      "Superiority complex regarding syntax readability",
    ],
    allies: [
      { ext: ".csv", reason: "Feeds effortlessly into pandas DataFrame." },
      { ext: ".json", reason: "Feels just like a Python dict among friends." },
    ],
    rivals: [
      { ext: ".rs", reason: "Constantly bragging about memory ownership and borrow checker." },
      { ext: ".sh", reason: "Too sloppy, lacks proper object-oriented etiquette." },
    ],
    naturalHabitat: "Jupyter notebooks, AI research labs, and MacBook Pros running PyTorch.",
    warningLabel: "WARNING: Do NOT mix tabs and spaces under any circumstances.",
    pixelArt: [
      "  .-===.   ",
      "  | .PY |  ",
      "  | === |  ",
      "  | import|",
      "  '---='   ",
    ],
  },

  rs: {
    id: "rs",
    extension: ".rs",
    name: "Rust Source File",
    title: "THE PARANOID PERFECTIONIST",
    tagline: "I refused to leave bed this morning because my socks failed borrow check.",
    description:
      "You do not trust anyone, not even yourself. You spend 45 minutes thinking through every single consequence before uttering a sentence. You are terrified of memory leaks, race conditions, and casual commitments. You suffer from extreme compiler anxiety, but once you finally commit, you are lightning fast, impenetrable, and morally superior.",
    quote: "error[E0502]: cannot borrow `patience` as mutable more than once.",
    atariColor: "#FF5500",
    atariTextColor: "#FFFFFF",
    borderColor: "#B83D00",
    badgeBg: "#D44700",
    mimeType: "text/rust",
    typicalSize: "28 KB (Compiles into a 60 MB rock-solid binary)",
    volatility: "MINIMAL (IF IT COMPILES, IT CANNOT DIE)",
    dangerRating: 3,
    stats: {
      structure: 98,
      chaos: 5,
      aesthetics: 40,
      durability: 100,
      sociability: 45,
    },
    strengths: [
      "Zero-cost abstractions and fear-free concurrency",
      "Once you say yes, it is mathematically guaranteed to work",
      "Will protect your secrets with military-grade memory safety",
    ],
    weaknesses: [
      "Takes 3 months to compile a simple decision",
      "Tells everyone within earshot that they should rewrite their life in Rust",
      "Deep trauma induced by the Borrow Checker",
    ],
    allies: [
      { ext: ".exe", reason: "Produces the cleanest, fastest binaries on earth." },
      { ext: ".md", reason: "Needs thousands of pages to document safe lifetimes." },
    ],
    rivals: [
      { ext: ".php", reason: "Pure horror. The literal antithesis of memory safety." },
      { ext: ".sh", reason: "Runs wild with root permissions and no type checking." },
    ],
    naturalHabitat: "High-frequency trading engines, kernel drivers, and GitHub discussions about crab memes.",
    warningLabel: "NOTICE: All memory borrowed must be returned before end of scope.",
    pixelArt: [
      "  (\\_(\\_   ",
      "  | .RS |  ",
      "  | CARGO |",
      "  | SAFE! |",
      "  (_/(_/   ",
    ],
  },

  sh: {
    id: "sh",
    extension: ".sh",
    name: "Shell Script",
    title: "THE DANGEROUS YOLOMANCER",
    tagline: "I don't need a test environment, production IS my test environment.",
    description:
      "You are the cyber-samurai who operates with zero brakes and total impunity. You live directly in the Linux terminal with root permissions. You don't ask for permission; you pipe stdout into sudo bash and let fate decide. You are one missing space character away from wiping out the entire operating system, but until that happens, you are a god.",
    quote: "sudo rm -rf /* --no-preserve-root # Just fixing a minor issue.",
    atariColor: "#FF003C",
    atariTextColor: "#FFFFFF",
    borderColor: "#990024",
    badgeBg: "#CC0030",
    mimeType: "application/x-sh",
    typicalSize: "820 Bytes (Pure concentrated lethal energy)",
    volatility: "HAZARDOUS (DEFCON 1)",
    dangerRating: 5,
    stats: {
      structure: 35,
      chaos: 100,
      aesthetics: 10,
      durability: 85,
      sociability: 60,
    },
    strengths: [
      "Unmatched speed: automates an entire company before breakfast",
      "Zero bureaucratic friction; answers only to the Linux kernel",
      "Feared and respected by everyone in DevOps",
    ],
    weaknesses: [
      "One typo can erase 10 years of business records",
      "No rollback, no undo button, no remorse",
      "Unreadable syntax that looks like a cat walking on a keyboard",
    ],
    allies: [
      { ext: ".tar.gz", reason: "Pipes everything into tar and sends it to Antarctica." },
      { ext: ".php", reason: "Mutual appreciation for operating without safety harnesses." },
    ],
    rivals: [
      { ext: ".xml", reason: "Too many tags, too slow, wastes precious terminal space." },
      { ext: ".rs", reason: "Takes too long to compile; bash executes right NOW." },
    ],
    naturalHabitat: "Headless Ubuntu server consoles at 3:42 AM with a red SSH prompt.",
    warningLabel: "EXTREME DANGER: Never run me without checking every single space character.",
    pixelArt: [
      "  ######   ",
      "  |#!/SH|  ",
      "  |SUDO!|  ",
      "  |rm -rf| ",
      "  ######   ",
    ],
  },

  md: {
    id: "md",
    extension: ".md",
    name: "Markdown Document",
    title: "THE CHILL ZEN MASTER",
    tagline: "If it can't be said in bullet points, it is not worth saying.",
    description:
      "You are the most grounded, uncomplicated creature in the software universe. You despise drama, excessive decoration, and corporate buzzwords. Give you a `# Heading`, a few bullet points, and a cup of tea, and you are in heaven. You are readable on a state-of-the-art supercomputer, an antique terminal, or a piece of parchment.",
    quote: "# Calm\n- Drink water\n- Keep it simple\n- Avoid meetings",
    atariColor: "#A7F3D0",
    atariTextColor: "#000000",
    borderColor: "#34D399",
    badgeBg: "#6EE7B7",
    mimeType: "text/markdown",
    typicalSize: "1.2 KB (100% Signal, 0% Noise)",
    volatility: "VERY LOW (TIMELESS WISDOM)",
    dangerRating: 1,
    stats: {
      structure: 70,
      chaos: 10,
      aesthetics: 60,
      durability: 95,
      sociability: 90,
    },
    strengths: [
      "Universal readability that never goes out of style",
      "Low maintenance; zero dependencies, zero compiler bugs",
      "Calms down tense meetings with clear, concise notes",
    ],
    weaknesses: [
      "Refuses to build complex animations or interactive flashy buttons",
      "Can seem too plain to people who require high visual stimulation",
      "Sometimes a little too detached from high-stakes drama",
    ],
    allies: [
      { ext: ".json", reason: "Shares a mutual respect for clean plain-text simplicity." },
      { ext: ".py", reason: "Appreciates readability and minimal clutter." },
    ],
    rivals: [
      { ext: ".exe", reason: "Opaque binary monstrosity with zero transparency." },
      { ext: ".xml", reason: "Why use 50 brackets when one hashmark does the trick?" },
    ],
    naturalHabitat: "GitHub READMEs, Obsidian vaults, and quiet minimalist study desks.",
    warningLabel: "SAFE: May cause sudden realization that meetings could have been an email.",
    pixelArt: [
      "  [=====]  ",
      "  | #.MD|  ",
      "  | * one |",
      "  | * two |",
      "  [=====]  ",
    ],
  },

  csv: {
    id: "csv",
    extension: ".csv",
    name: "Comma-Separated Values",
    title: "THE EXCEL WORKAHOLIC",
    tagline: "Let's take this offline and align our columns in a pivot table.",
    description:
      "You view the entire universe as rows and columns. You don't have hobbies; you have structured datasets with quarterly performance metrics. You are practical, hardworking, and indispensable to corporate survival, but Microsoft Excel constantly ruins your life by turning your ID numbers into scientific notation and your birthdays into random dates.",
    quote: "Please do not put a comma inside that field or I will literally explode.",
    atariColor: "#34D399",
    atariTextColor: "#000000",
    borderColor: "#059669",
    badgeBg: "#10B981",
    mimeType: "text/csv",
    typicalSize: "45 MB (300,000 rows of user telemetry)",
    volatility: "MEDIUM (MICROSOFT EXCEL IS WAITING TO CORRUPT YOU)",
    dangerRating: 2,
    stats: {
      structure: 90,
      chaos: 25,
      aesthetics: 15,
      durability: 80,
      sociability: 70,
    },
    strengths: [
      "Can summarize an entire company's fortune in 3 columns",
      "Importable into literally every database since 1974",
      "Incredible work ethic that keeps financial systems running",
    ],
    weaknesses: [
      "Dates get mangled into unrecognizable timestamps by Excel",
      "Zero artistic flair; rejects gradients, shadows, and vibes",
      "A rogue comma ruins your entire day",
    ],
    allies: [
      { ext: ".sql", reason: "Speaks fluent tabular data and relational keys." },
      { ext: ".py", reason: "Eats data with pandas without breaking a sweat." },
    ],
    rivals: [
      { ext: ".css", reason: "Spends money on font weights instead of revenue projections." },
      { ext: ".gif", reason: "Wastes bandwidth on moving pictures with zero ROI." },
    ],
    naturalHabitat: "Finance department desktops and automated daily export folders.",
    warningLabel: "CAUTION: Keep commas enclosed in quotes or risk immediate column shift.",
    pixelArt: [
      "  +-----+  ",
      "  | A|B |  ",
      "  |-.CSV|  ",
      "  | 1|2 |  ",
      "  +-----+  ",
    ],
  },

  gif: {
    id: "gif",
    extension: ".gif",
    name: "Graphics Interchange Format",
    title: "THE HYPERACTIVE MEME ENGINE",
    tagline: "I loop the exact same 3 seconds of emotion over and over and over.",
    description:
      "You are loud, expressive, nostalgic, and impossible to ignore. You communicate exclusively through reaction memes, pop culture references, and repeated dances. You are mathematically obsolete and 10x larger than modern video formats, but the world loves you anyway because you bring pure joy and 256 colors of unfiltered dopamine.",
    quote: "It is pronounced GIF with a hard G. I will defend this on the playground.",
    atariColor: "#FF3366",
    atariTextColor: "#FFFFFF",
    borderColor: "#CC0033",
    badgeBg: "#E6004C",
    mimeType: "image/gif",
    typicalSize: "18.4 MB (For a 1.5-second clip of a cat falling off a counter)",
    volatility: "HIGH (LOOPS INFINITELY)",
    dangerRating: 3,
    stats: {
      structure: 25,
      chaos: 90,
      aesthetics: 85,
      durability: 50,
      sociability: 100,
    },
    strengths: [
      "The undisputed life of the party in every group chat",
      "Expresses complex human emotions in 12 frames per second",
      "Universally supported by every device manufactured since 1989",
    ],
    weaknesses: [
      "Horrendously inefficient file size that chokes mobile data plans",
      "Limited to 256 colors; subtly crusty dithering artifacts",
      "Incapable of staying still or taking serious moments seriously",
    ],
    allies: [
      { ext: ".css", reason: "Loves flashy visual spectacles and animated flourishes." },
      { ext: ".php", reason: "Shared survivor from the golden 90s GeoCities era." },
    ],
    rivals: [
      { ext: ".csv", reason: "Deadsoul spreadsheet with zero sense of humor." },
      { ext: ".xml", reason: "Demands strict validation; hates spontaneous fun." },
    ],
    naturalHabitat: "Discord reaction channels, Tumblr archives, and 90s fan pages.",
    warningLabel: "WARNING: High frame rate may cause uncontrollable nostalgia and giggles.",
    pixelArt: [
      "  \u2554\u2550\u2550\u2550\u2550\u2550\u2557  ",
      "  \u2551.GIF \u2551  ",
      "  \u2551 \u25d5\u203f\u25d5 \u2551  ",
      "  \u2551 \u27f3 8b\u2551  ",
      "  \u255a\u2550\u2550\u2550\u2550\u2550\u255d  ",
    ],
  },

  targz: {
    id: "targz",
    extension: ".tar.gz",
    name: "Gzipped Tape Archive",
    title: "THE DIGITAL HOARDER",
    tagline: "I have every document you signed in 2011 compressed into a cold tomb.",
    description:
      "You throw away nothing. Receipts, old chat histories, half-baked side projects from high school, and broken cables are all vacuum-sealed in your archive. People need esoteric cheat codes like 'tar -zxvf' just to figure out what you are hiding. You are difficult to unpack, but when a crisis strikes, you are the sole guardian of lost history.",
    quote: "Hold on, give me 35 minutes to decompress my childhood memories.",
    atariColor: "#D97706",
    atariTextColor: "#FFFFFF",
    borderColor: "#92400E",
    badgeBg: "#B45309",
    mimeType: "application/gzip",
    typicalSize: "148.9 GB (Heavily compressed, contains 4 million files)",
    volatility: "LOW (FROZEN IN TIME)",
    dangerRating: 2,
    stats: {
      structure: 80,
      chaos: 40,
      aesthetics: 20,
      durability: 100,
      sociability: 40,
    },
    strengths: [
      "Unmatched historical recall; nothing is ever truly deleted",
      "Ultra-dense storage capacity; packs a mountain into a shoebox",
      "The ultimate insurance policy against catastrophic data loss",
    ],
    weaknesses: [
      "Nobody can remember the flags to extract your personality without googling",
      "Emotionally closed off; requires decompression before sharing feelings",
      "Hoards sentimental junk that nobody will ever inspect",
    ],
    allies: [
      { ext: ".sh", reason: "Knows the sacred arcane spells to create and extract you." },
      { ext: ".php", reason: "Safely archives old WordPress backups forever." },
    ],
    rivals: [
      { ext: ".md", reason: "Too casual, throws away metadata without remorse." },
      { ext: ".css", reason: "Doesn't understand why anyone would keep legacy archives." },
    ],
    naturalHabitat: "Cold AWS Glacier deep storage and dusty external hard drives in shoeboxes.",
    warningLabel: "NOTICE: Do not attempt extraction without verifying sufficient disk space.",
    pixelArt: [
      "  +====+   ",
      "  |TAR |   ",
      "  |[GZ]|   ",
      "  |ZIP!|   ",
      "  +====+   ",
    ],
  },

  exe: {
    id: "exe",
    extension: ".exe",
    name: "Windows Executable",
    title: "THE SUSPICIOUS OVERLORD",
    tagline: "Windows protected your PC... Run anyway? You bet you will.",
    description:
      "You are intimidating, powerful, and slightly untrustworthy. You refuse to explain what you are doing in the background; people just have to trust that you aren't a trojan horse. You demand full Administrator access for the most routine requests. When you enter a room, Windows Defender screams, but everyone double-clicks you anyway because they crave the adrenaline.",
    quote: "User Account Control: Do you want to allow this app to take over your life? [YES]",
    atariColor: "#E11D48",
    atariTextColor: "#FFFFFF",
    borderColor: "#9F1239",
    badgeBg: "#BE123C",
    mimeType: "application/x-msdownload",
    typicalSize: "412 MB (Might be Doom, might be ransomware, find out now!)",
    volatility: "CRITICAL (RUN AS ADMINISTRATOR)",
    dangerRating: 5,
    stats: {
      structure: 60,
      chaos: 85,
      aesthetics: 35,
      durability: 80,
      sociability: 50,
    },
    strengths: [
      "Can execute direct arbitrary operations at maximum machine speed",
      "Commands attention; triggers security modals wherever you walk",
      "Direct bridge between user intent and silicon execution",
    ],
    weaknesses: [
      "Antivirus programs treat you like a bioweapon until proven innocent",
      "Refuses to run on macOS or Linux without a 4GB translation layer",
      "Can accidentally crash the entire operating system in a fit of rage",
    ],
    allies: [
      { ext: ".rs", reason: "Appreciates being compiled from fast, memory-safe code." },
      { ext: ".sh", reason: "Fellow executive who respects raw computational power." },
    ],
    rivals: [
      { ext: ".json", reason: "Thinks data without executable code is sterile and boring." },
      { ext: ".md", reason: "Passive, powerless text with zero ability to seize CPU cycles." },
    ],
    naturalHabitat: "C:\\Program Files\\ or the dark corners of the Downloads folder.",
    warningLabel: "ALERT: Signature unrecognized. Double-click at your own existential peril.",
    pixelArt: [
      "  /\\____/\\ ",
      "  | .EXE | ",
      "  | [RUN]| ",
      "  | !UAC!| ",
      "  \\/    \\/ ",
    ],
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: "DESKTOP HYGIENE PROTOCOL",
    situation: "Take an honest look at your current physical workspace or computer desktop:",
    flavor: "SECTOR 01: SYSTEM ORGANIZATION MATRIX",
    options: [
      {
        letter: "A",
        text: "Strict nested taxonomy. Every folder has a checksum, date format YYYY-MM-DD, and 0 loose files.",
        subtext: "Order is the only thing keeping the void from consuming us.",
        tag: "BUREAUCRACY",
        scores: { xml: 3, rs: 2, csv: 1 },
      },
      {
        letter: "B",
        text: "Curated aesthetic moodboard. 4 neon ambient lights, matching mechanical keyboard, custom fonts.",
        subtext: "If it doesn't look like a cyberpunk indie film, I cannot think.",
        tag: "AESTHETICS",
        scores: { css: 3, gif: 2 },
      },
      {
        letter: "C",
        text: "An apocalyptic warzone. 400 icons named 'final_v3_reallyfinal.tmp', half-eaten snacks, it just works.",
        subtext: "Chaos is my armor. Nobody can hack me if I don't know where my files are.",
        tag: "CHAOS TRASH",
        scores: { php: 3, sh: 2, targz: 1 },
      },
      {
        letter: "D",
        text: "Pure minimalist void. Just one laptop, a black coffee, and a single plain text note file.",
        subtext: "Material possessions and visual noise are spiritual bloat.",
        tag: "MINIMALISM",
        scores: { md: 3, py: 2, json: 1 },
      },
    ],
  },
  {
    id: 2,
    title: "CRITICISM COMPILATION ERROR",
    situation: "A peer gives you unexpected, sharp criticism about something you built:",
    flavor: "SECTOR 02: EXCEPTION HANDLING",
    options: [
      {
        letter: "A",
        text: "Syntax Error! I demand to see the RFC specification where their criticism was formally approved.",
        subtext: "If you cannot cite the exact clause, your opinion is invalid.",
        tag: "RULES LAWYER",
        scores: { xml: 3, rs: 2 },
      },
      {
        letter: "B",
        text: "Immediately redesign my whole aesthetic, change my avatar, and post a cryptic neon story.",
        subtext: "I will suffer in style with high contrast and moody synth chords.",
        tag: "DRAMA QUEEN",
        scores: { css: 3, gif: 2 },
      },
      {
        letter: "C",
        text: "Ignore it completely. I am currently functioning in production, your opinion changes nothing.",
        subtext: "Bark all you want; the server hasn't restarted since 2018.",
        tag: "INDESTRUCTIBLE",
        scores: { php: 3, exe: 2, sh: 1 },
      },
      {
        letter: "D",
        text: "Parse the constructive data into a clean JSON key-value object and discard the emotional baggage.",
        subtext: "Feelings are unparsed telemetry; extract the payload and move on.",
        tag: "PRAGMATIST",
        scores: { json: 3, py: 2, md: 1 },
      },
    ],
  },
  {
    id: 3,
    title: "AUTHORITY & PERMISSIONS",
    situation: "You encounter a locked digital door or a strict bureaucratic rule at work/school:",
    flavor: "SECTOR 03: PRIVILEGE ESCALATION",
    options: [
      {
        letter: "A",
        text: "Submit Form 109-B in triplicate, wait 14 business days, and thank the security guard for the wait.",
        subtext: "Without boundaries, the universe devolves into memory corruption.",
        tag: "COMPLIANCE",
        scores: { xml: 3, csv: 2, rs: 1 },
      },
      {
        letter: "B",
        text: "Override the door's appearance with custom CSS until it looks open, even if it's physically locked.",
        subtext: "Perception IS reality if you have z-index supremacy.",
        tag: "ILLUSIONIST",
        scores: { css: 3, gif: 1 },
      },
      {
        letter: "C",
        text: "Type 'sudo' or kick the door off its hinges with zero regard for warranty or collateral damage.",
        subtext: "Who has time for permissions? Run as root and deal with the ashes later.",
        tag: "YOLOMANCER",
        scores: { sh: 3, exe: 3, php: 1 },
      },
      {
        letter: "D",
        text: "Find the back entrance documented in a plain text note that everyone else was too lazy to read.",
        subtext: "Keep it simple. Read the documentation instead of smashing doors.",
        tag: "ZEN DISCOVERY",
        scores: { md: 3, py: 2, json: 1 },
      },
    ],
  },
  {
    id: 4,
    title: "VACATION EXPEDITION PROTOCOL",
    situation: "You are coordinating a group trip with 5 volatile friends. Your role:",
    flavor: "SECTOR 04: LOGISTICAL CORE DUMP",
    options: [
      {
        letter: "A",
        text: "A 16-tab spreadsheet with hourly cost matrices, fuel consumption curves, and backup itineraries.",
        subtext: "Spontaneity is just another word for poor operational planning.",
        tag: "SPREADSHEET GOD",
        scores: { csv: 3, xml: 2, rs: 1 },
      },
      {
        letter: "B",
        text: "Curate the Spotify vibes, scout 15 aesthetic photography spots, and enforce the dress code.",
        subtext: "If we don't look iconic in the photos, what was the trip even for?",
        tag: "VIBE CURATOR",
        scores: { css: 3, gif: 3 },
      },
      {
        letter: "C",
        text: "Pack zero luggage, show up 4 minutes before the flight, bring weird gas station snacks, survive.",
        subtext: "Somehow I end up having the best night of anyone on the trip.",
        tag: "GREMLIN LUCK",
        scores: { php: 3, sh: 2, exe: 1 },
      },
      {
        letter: "D",
        text: "Send a clean markdown checklist with the meeting point and departure time. Do not add me to group chats.",
        subtext: "I will be there on time. Keep the chat notifications silenced.",
        tag: "QUIET EFFICIENCY",
        scores: { md: 3, py: 2, json: 2 },
      },
    ],
  },
  {
    id: 5,
    title: "EMOTIONAL TRANSACTION PROTOCOL",
    situation: "You get into a heated late-night dispute with a close friend or partner:",
    flavor: "SECTOR 05: CONFLICT RESOLUTION",
    options: [
      {
        letter: "A",
        text: "We cannot conclude until every grievance has an explicit closing statement and signed reconciliation.",
        subtext: "Unclosed emotional tags will leak into tomorrow's thread.",
        tag: "CLOSING TAGS",
        scores: { xml: 3, rs: 2 },
      },
      {
        letter: "B",
        text: "Spam them with 14 animated meme reactions and hyper-dramatic looping GIFs until they laugh.",
        subtext: "Words fail; 12 frames of a screaming raccoon convey my soul.",
        tag: "MEME DIPLOMACY",
        scores: { gif: 3, css: 2 },
      },
      {
        letter: "C",
        text: "Zip up all my feelings into a password-protected archive and bury it in deep cold storage.",
        subtext: "I will decompress this trauma in approximately seven years.",
        tag: "COLD STORAGE",
        scores: { targz: 3, php: 1, exe: 1 },
      },
      {
        letter: "D",
        text: "Structure our conversation in bullet points: 1) What happened, 2) Root cause, 3) Action items.",
        subtext: "De-escalate with structured, non-violent plain text clarity.",
        tag: "OBJECTIVE PARSER",
        scores: { json: 3, md: 2, py: 1 },
      },
    ],
  },
  {
    id: 6,
    title: "PRIME TIME SATURDAY PROTOCOL",
    situation: "You have a completely free Saturday night with no obligations. You choose:",
    flavor: "SECTOR 06: IDLE CYCLE ALLOCATION",
    options: [
      {
        letter: "A",
        text: "Deep audit of personal finances, filing taxes 6 months early, reorganizing my spices alphabetically.",
        subtext: "Peace of mind is a balanced ledger and zero dangling variables.",
        tag: "AUDITOR",
        scores: { xml: 2, csv: 3, rs: 1 },
      },
      {
        letter: "B",
        text: "Going to a dark underground synth club wearing an outfit that defies the laws of Euclidean geometry.",
        subtext: "Maximum glow, maximum visual impact, zero regrets.",
        tag: "NIGHTCRAWLER",
        scores: { css: 3, gif: 2 },
      },
      {
        letter: "C",
        text: "Gremlin mode: 85 open browser tabs, cold pizza at 2 AM, hacking together something that shouldn't work.",
        subtext: "The sweet intoxicating smell of spaghetti code and high-voltage tinkering.",
        tag: "GREMLIN HACKER",
        scores: { php: 3, sh: 3, exe: 1 },
      },
      {
        letter: "D",
        text: "Cozy tea mug, rain tapping on the window, reading a dense book or writing clean Python scripts.",
        subtext: "The golden equilibrium of low CPU utilization and maximum mental clarity.",
        tag: "COZY CODER",
        scores: { py: 3, md: 3, json: 1 },
      },
    ],
  },
  {
    id: 7,
    title: "TOXIC BUG IDENTIFICATION",
    situation: "If someone forced you to confess your most annoying personal flaw:",
    flavor: "SECTOR 07: KERNEL DIAGNOSTICS",
    options: [
      {
        letter: "A",
        text: "I am physically incapable of letting go if someone misquotes a fact or formats a date incorrectly.",
        subtext: "It burns my optic nerves to see invalid syntax go unpunished.",
        tag: "PEDANTIC GLITCH",
        scores: { xml: 3, rs: 2, csv: 1 },
      },
      {
        letter: "B",
        text: "I prioritize how things look over whether they actually function 95% of the time.",
        subtext: "If it's beautiful, does it really need to work? Think about it.",
        tag: "SHALLOW GLOW",
        scores: { css: 3, gif: 2 },
      },
      {
        letter: "C",
        text: "I wing literally everything on pure adrenaline, zero preparation, and stubborn refusal to fail.",
        subtext: "Spaghetti solutions that work once are good enough for permanent production.",
        tag: "UNFILTERED SPAGHETTI",
        scores: { php: 3, sh: 3 },
      },
      {
        letter: "D",
        text: "I refuse to communicate like a normal human; I over-automate and condense everything into bullets.",
        subtext: "Why have an intimate conversation when we could have a standardized API endpoint?",
        tag: "DETACHED DATA",
        scores: { json: 3, md: 2, py: 1 },
      },
    ],
  },
  {
    id: 8,
    title: "STRANGER WAYFINDING ENCOUNTER",
    situation: "A confused tourist on the street asks you how to get to the train station:",
    flavor: "SECTOR 08: ROUTING TABLE LOOKUP",
    options: [
      {
        letter: "A",
        text: "Provide exact compass heading, distance in meters, 3 cross-street landmarks, and hazard warnings.",
        subtext: "Navigation without precise tolerances is criminal negligence.",
        tag: "HUMAN GPS",
        scores: { xml: 3, rs: 2 },
      },
      {
        letter: "B",
        text: "Describe the scenic route with the prettiest architectural facades and romantic golden hour lighting.",
        subtext: "The shortest path is boring; take the path with better aesthetic vibes.",
        tag: "VIBE GUIDE",
        scores: { css: 3, gif: 1 },
      },
      {
        letter: "C",
        text: "'Hop on my scooter, we're cutting through two alleyways and running three yellow lights, hold on tight!'",
        subtext: "High risk, maximum velocity, zero guarantee of legal arrival.",
        tag: "TAXI MADNESS",
        scores: { sh: 3, exe: 3, php: 1 },
      },
      {
        letter: "D",
        text: "'Walk three blocks north, turn right.' Turn around and continue walking in serene silence.",
        subtext: "Direct, unambiguous, zero conversational bloat.",
        tag: "TERSE ROUTER",
        scores: { py: 3, md: 3, json: 2 },
      },
    ],
  },
  {
    id: 9,
    title: "DIGITAL HOARDING INDEX",
    situation: "What does your computer's Downloads or Archive folder look like right now?",
    flavor: "SECTOR 09: MEMORY ALLOCATION PROFILE",
    options: [
      {
        letter: "A",
        text: "Zero items. Everything is indexed, tagged, validated, and filed into dedicated repositories daily.",
        subtext: "Entropy is a choice, and I choose order.",
        tag: "CLEANROOM",
        scores: { xml: 2, rs: 3, json: 1 },
      },
      {
        letter: "B",
        text: "Gigabytes of high-res fonts, wallpaper packs, texture packs, and color palette screenshots.",
        subtext: "I might need this grain gradient for a project in 2031.",
        tag: "TEXTURE HOARDER",
        scores: { css: 3, gif: 2 },
      },
      {
        letter: "C",
        text: "I haven't cleared Downloads since Obama's first term. 8,000 files, duplicate installers, unknown zip files.",
        subtext: "If I delete anything, the load-bearing psychic balance of my machine will collapse.",
        tag: "LANDFILL OPERATOR",
        scores: { php: 3, targz: 3, exe: 2 },
      },
      {
        letter: "D",
        text: "Plain text markdown notes, a few lightweight scripts, and zero bloated software suites.",
        subtext: "Clean, lean, and easily cloned to a fresh machine in 60 seconds.",
        tag: "PORTABLE NOMAD",
        scores: { md: 3, py: 2, json: 2 },
      },
    ],
  },
  {
    id: 10,
    title: "THE ULTIMATE EPITAPH",
    situation: "When your system finally encounters a fatal shutdown, what should be carved on your headstone?",
    flavor: "SECTOR 10: TERMINAL SYSTEM LOG",
    options: [
      {
        letter: "A",
        text: "'Every tag was properly closed. Every specification was fulfilled. Process exited with code 0.'",
        subtext: "The final validation check passed without warnings.",
        tag: "SPECIFICATION MET",
        scores: { xml: 3, rs: 3 },
      },
      {
        letter: "B",
        text: "'It may have broken on Internet Explorer, but for one brief shining moment, it was breathtaking.'",
        subtext: "Art is never finished, only abandoned with stylish drop shadows.",
        tag: "GLAMOROUS SHUTDOWN",
        scores: { css: 3, gif: 2 },
      },
      {
        letter: "C",
        text: "'Nobody understood how it worked, nobody dare touch it, yet it outlived all of its critics.'",
        subtext: "The spaghetti legacy echoes across eternity.",
        tag: "IMMORTAL TRASH",
        scores: { php: 3, sh: 2, exe: 2 },
      },
      {
        letter: "D",
        text: "'Keep it lightweight. No bloat. No unneeded dependencies. See README.md for details.'",
        subtext: "Return quietly to the universal void.",
        tag: "PLAIN TEXT ETERNITY",
        scores: { md: 3, py: 2, json: 2 },
      },
    ],
  },
];

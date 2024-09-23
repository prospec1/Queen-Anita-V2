//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349065525024";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FjWnZXTUFQb2lzR0hSVGoxdWVreUhJZ0xtYTBEZFNWdzhCWk1YL3YxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQy9yNGpjY1lFWWhWR1doS0Q2WU5HYmFSQXlqdWtSUnJWZlZuaCtBdUZCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4STYram04aTdRR2JQQ08yOGxmK1pEVVVsSjdsZGJnR2cwclhLMk1KV2xjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvcDJBQlRlcEtSWXhYa0dPLzRQMmpWR2hySFRNRFA3MHFRcFkvVm1pL0VjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFdlVUZFV0Mmc0Z2NqWUoxcGs2WktoQ056eWVXZWExdWZPM3lzMDh3R0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRCbmpYOURSeTdobVdZaWp3d2w0MTFSN2tpOE9LZVVmekVnUldVVG1qMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0EvRUIwOVppbjFOS0hCbmFtbG00OVJlUE5FRGNFdWp6YzZ0TmhEQ2hGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXY5WW9OVy9BbzFKTXhOY1ZQblVlblNTRmNPZCtvTXlEamJpOCtmdE9FOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBqZFU5bzZzMXJZWi9ycnNlKzdPbjl3b3JFQUltdWtUSlQ3cUNPSkZiditKTjYxaVJYdDcvS2V1cGd3NEZPWnJhOHBMVUFQNVBBV1JBaGkxdVNxdGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6InBIN0dPQWZkc0czZnY1U0hIa3pubEJkVjhNTnRpTnJMRDNHc2ZEMGF4K2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJaX3JuQ1R1VC1DQTN6Mk1tSHlpeGciLCJwaG9uZUlkIjoiZmQyNWUxYWEtYTFlOS00YjdiLTkzZGYtYjk3Yzg1YTgxM2I4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFtNVRORWpHaENMU2tGS1o0bUVmaFA3Nzh3ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzS3pyMktCd0R5cTBtNTR2Sm9NS3lrWktyRWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0xYWkVQNFYiLCJtZSI6eyJpZCI6IjIzNDkwNjU1MjUwMjQ6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUHJvc3BlcidzIE1lZGlhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQLzYrdDBHRU5EOHdyY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzMVptVmxZWVlDb2JvRGVIS1hKRmp2UWhVQzd6YTlzUkhJbDc2UXZPaTJvPSIsImFjY291bnRTaWduYXR1cmUiOiJCQng4cnEvbWdPMU1odklicjVMVndtK0h6ajl0QjFlcmlNZUpDSzNNSktvL3hmTXFVMlU4ekxpUVdjVmlaQVJYem1EZ2pMV0paUExTN0RValM2L05BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZFBxc1ZyeUlnYmYrYUNqbXNEMHpXVEUzMHkyRVFGZ0JnbFJ1cVE0b2hpWk9HdFVYVjI5OVJTNHdCM3FtZCszcnI5S29LdDhseFpQN1R2aFBObHQ2akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDY1NTI1MDI0OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ5V1psWldHR0FxRzZBM2h5bHlSWTcwSVZBdTgydmJFUnlKZStrTHpvdHEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjcwNTM0MDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTG14In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

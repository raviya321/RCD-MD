//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01uNkErNU1MSDZpTFhFemtQaVRXc1lkVll5YUlBYkxVaDNrbExiMTUzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVVmU21HeW9sRXdMeW03c1ZZQ0dzeEZEdS9oNENQQTZtRnFkclNGMzUwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSjFXNENLM2VWeWk5clIzbGFTcERsam5MYVI5MmVBanNrTUZ3WkwrTlhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2VlRlNmFMOXpPTFk2WEkrYU9PY3JnenNHQWRIeDBVcTBCajFuYkJEUVQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKbmdkcDlkNjBxTzArbzZ0S2FvSXgraWxGK3U1ejRpMlNHTDgxTTJnbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA0N1hoVldneXhLeW5STDJWM1liV0Nhek9Wbmo0OHl1Zlo0b2lFSEtZd0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUszTkpHdGFUaGtRMmJvcFN1ZFpOM1BGaGdQaFNadjZyUE1kV1lXN0cwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHBqU2licUlkeUdJWEV0MDBHMU5SVktaRGg0b2ZtNWgxalN3dlBtZGFEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY0YTgwclpPRTF5Y05aZTZzSmM2cXhnRkkzanJRVE12eW8vMHBPYXlGMVM1QUovaUIzdy95dk00SnlpYTVPQ2hobGE0ZzIzSVlQdVdoa0p6aWRvYmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJScUZGU0wzYkRlTTdEWDJMdk5FeW9jMEoyMXJtVlZzM1hxZEZZU1MvQ3FnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU3NjYwNzg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEyNTBDMDZGMDdBMzYxMkVFNUVCOTJCQ0IwNkFDNTlBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTg5NDEyNjN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU3NjYwNzg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFFREZCRkYyRjQ5NDRDRTNBRDc4MDMzOTZCNDU2NUFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTg5NDEyNjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU3NjYwNzg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNDNkM0MkM3QTc2MjNDMDgyMEU0QUQ1MTM3OEM0NTE1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTg5NDEyNjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU3NjYwNzg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBBMjc1RjFEQTFFNDM0MzczNzk2N0E5NDk1QTU2OUVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTg5NDEyNjZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRLM1FMeXlUUjRlUmhEZXh2ZUhHMWciLCJwaG9uZUlkIjoiYzQ4MWNmZjktNTk1NC00NTdmLTgwYjYtYTU5ODA0NjQ1NzNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9zNkUvKy93MVNrR01LZmdNYUVieGsrQ1M2ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6anhuMVR3dDROUGliNDZISDVYbEx5N2R3S0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTFON1RQTkUiLCJtZSI6eyJpZCI6Ijk0NzU3NjYwNzg4OjYxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKrt+KmgVJFQUxfS0lOR19SQVZJX01E4qaB4qu4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT24zN3NERU1IczA3TUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJydUc4anZiVTlLbjRaREgzQ0FqMEwzK2x6djgwMmxRNElxMnpTakFMYUhrPSIsImFjY291bnRTaWduYXR1cmUiOiJkSk91QVRCZ1c5TE9jaVpzZzUrNU42am1yK0dQOC9kZi9SdllxKzVXbXFzN3ZFWUl1WlpPemhkdThBYXYzMlB4Q3NqTUdLUE8rSlZXamw2U0E1eUhCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU0lJQy9vUGZacU5TVTFSSytMbElFNXh3WUh4TGJ1eXNuYTk1U092TmwrTTdqdlUvd1dnOU1Ka2hDeHMrWjh0RHNlemFBNWI4SERFYnA5RGg0L2JwakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NzY2MDc4ODo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhN2h2STcyMVBTcCtHUXg5d2dJOUM5L3BjNy9OTnBVT0NLdHMwb3dDMmg1In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4OTQxMjYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtFdCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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

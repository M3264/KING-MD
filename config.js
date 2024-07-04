const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("2347013159244")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://korret:Iyanu1234@cluster0.bwbhfie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '2347013159244'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Kehinde' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxNUlJzZStYWWJFVnVNakVqUWQvaU5VZjdydWdudUhWVlRseHM0NjgxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3BEV0tycFdGZHhYNDkwelhhN1JySGc0aWM4K0hlUFg3V2FWbWJkWk8zTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSlhsS0orOW1FTEU1NS9jRy9qZHJ6eUdCYWpYSXJkTjBYSG1PWFNCYldvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2WjJITWZiWThzNU8vcm9BSmdSQjVhdElGdjVGaENDNkVZZTVKMENrVXcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCMTJwNkdpcWhLL0loalplSTZVN1Frb2l3QlAxaTE3R09JS201NWNxRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVYNFd4TURJQ2RWRStBK0lsOEw2YnhjbXBIaGE4bTRjc3dEbVVIaVV0M0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdwQW0xVGY3Y05STVloSDVhVVpwdnY4S1ZkRU45aEJsOFY2Nk4rWWhVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnd4RTkvV1BnTlBMV3V6eTU0UFpsemc4ODFIQWlVSkdjeFZGQ0p5TEV6ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJKVldLdWNuejZKbW5kYWpzeWc3TE9Id295VU1IUjhxb0Vmb1QrbmhLOTFyTGZzMENhM1V1WFRETVU0SzF2emc0OGZVa0pZdnRNTi9hMzUxdTV5cUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJ5SWszSHYvUXBLUHR4WHBoZjlRUGw4S05vT1ZZK3NDWnBzczg1MklRMFhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxdkdOSE9BM1JoaVJJUjU0enpLdFJnIiwicGhvbmVJZCI6IjM2NThiMTg2LTE3OTItNDZmZC05NDc4LWRlNzg1YTQ0ZTFmYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSjUvVFNkdjNYSHhEdmwvSWorcU5QOFlEcDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmlDTnI3N0NoNU5OMGdIb3BNOGorajluVDhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilc5TTFFQTk4IiwibWUiOnsiaWQiOiIyMzQ3MDEzMTU5MjQ0OjQxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGVmeKBoCjigaDCoOKBoMKg4oGg4oCi4oGgwqDigaDigL/igaDCoOKBoOKAouKBoMKg4oGgwqDigaAp4oGg4ZWXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKT1IxZFlFRUlXejhiTUdHQ3NnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnMVhNUURZZlBycHc3UVR0NWZoOVRiVWlhMVg5UytGYXM0eklUb0F3c1RRPSIsImFjY291bnRTaWduYXR1cmUiOiJQRHpUejZ6cEhPSWt2cS90cDhYSUd6dWhWQnJmRGQwaGVwcVNhczhkZGNkZDdJTTRxdzR4NjNsc01kOHlyUDZQSWR0c1V6NDZpM3NUVkVlTTJzWUhCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVlhoSCs1SUZ4Zkh5Y3pkY01iSXdIdHNjOVFsakgxTlFEd21qc2l0cVhibXF2NUJDWlJJNnYvc1hrODhBMUNsN1hZTG9Ybk1KdnFEQm9PdEMxdTNVRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDEzMTU5MjQ0OjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllOVnpFQTJIejY2Y08wRTdlWDRmVTIxSW10Vi9VdmhXck9NeUU2QU1MRTAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk0MjU0MjZ9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

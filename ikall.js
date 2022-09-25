;

//This is Script Multi Device

//><><><><><><><><><><><><><><><>< [ MULTI DEVICE ] <><><><><><><><><><><><><><><><><><><><><><><><>

require('./pengaturan_/konfigurasi')
const { 
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto,
generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { 
smsg, 
formatp, 
tanggal, 
formatDate, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom } = require('./folderfungsi/fungsiperintah')

//database read files
global.db = JSON.parse(fs.readFileSync('./jsonfiles_/database.json'))
if (global.db) global.db = {} //Masi kosong kakak
sticker: {},
database: {},
...(global.db || {})
}


/*><><><><><><><><><><><><><> MODULE EKSPORTS <>><<>><><>><><><>><>><><<><><><><><>><>><>><>><><
*/
module.exports = ikall = async (ikall, m, chatUpdate, store) => {
try {
 var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await ikall.decodeJid(ikall.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)	
// Group
const groupMetadata = m.isGroup ? await ikall.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
// Public & Self
if (!ikall.public) {
if (!m.key.fromMe) return
}
const ftroli ={key: {fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "6289609927539-1604595598@g.us"},
"message": {orderMessage: 
{itemCount: 2022,
status: 200, 
thumbnail: kalimage, 
surface: 200, message: `© ${ownername}`,
orderTitle: 'NUSANTARA-BOT',
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {"forwardingScore":999,"isForwarded":true},
sendEphemeral: true}    
// Push Message To Console && Auto Read
if (m.message) {
ikall.sendReadReceipt(m.chat, m.sender, [m.key.id])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: ikall.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ikall.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
ikall.ev.emit('messages.upsert', msg)
}

let runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

var ase = new Date();
var jamm = ase.getHours();
switch (jamm) {
case 0:
jamm = "Jangan gadang kak😁"; 
break;
case 1: 
jamm = "Jangan gadang kak😁";
break;
case 2: 
jamm = "Jangan gadang kak😁"; 
break;
case 3: 
jamm = "Jangan gadang kak😁"; 
break;
case 4: 
jamm = "Pagi 🌄 Jangan lupa sholat Subuh kak😇"; 
break;
case 5: 
jamm = "Selamat pagi🌅"; 
break;
case 6: 
jamm = "Selamat pagi 🌄"; 
break;
case 7: 
jamm = "Selamat pagi🌄"; 
break;
case 8: 
jamm = "Selamat pagi🌄"; 
break;
case 9: 
jamm = "Selamat pagi🌄"; 
break;
case 10: 
jamm = "Selamat pagi🌄"; 
break;
case 11: 
jamm = "Selamat siang🌞"; 
break;
case 12: 
jamm = "Siang 🌞 Jangan lupa sholat Zuhur kak😇"; 
break;
case 13: 
jamm = "Selamat siang🌞"; 
break;
case 14: 
jamm = "Selamat sore🌇"; 
break;
case 15: 
jamm = "Sore🌇Jangan lupa sholat Ashar kak😇"; 
break;
case 16: 
jamm = "Selamat sore🌇"; 
break;
case 17: 
jamm = "Selamat sore🌇"; 
break;
case 18:
jamm = "Selamat malam🌙"; 
break;
case 19: 
jamm = "Malam 🌙 Jangan lupa sholat Isya kak😇"; 
break;
case 20: 
jamm = "Selamat malam🌙"; 
break;
case 21: 
jamm = "Selamat malam🌙"; 
break;
case 22:
jamm = "Selamat malam 🌙"; 
break;
case 23: 
jamm = "Selamat malam🌙"; 
break;
}

var tampilUcapan = "" + jamm;
let locale = "id";
let d = new Date();
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
var weton = 
[
'Pahing', 
'Pon',
'Wage',
'Kliwon',
'Legi'
]
[Math.floor(((d * 1) + gmt) / 84600000) % 5]
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d);
let week = d.toLocaleDateString(locale, { weekday: "long" });
let date = d.toLocaleDateString(locale, {
day: "numeric",
month: "long",
year: "numeric",
});
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

const listcmd = `
*Anonymous Menu*
• _${prefix}anonymous_ ✅
• _${prefix}start_ ✅
• _${prefix}next_ ✅
• _${prefix}keluar_ ✅
• _${prefix}sendkontak_ ✅
`


//====================== COMMAND ===================================\\

switch(command) {

case 'test': {
m.reply('hai aku bot md')
}
break

case 'menu': {
m.reply(`*❎ NO PROBLEM FEATURES\n✅ ALL FEATURES WORK WELL*`)
anu = `
Hai ${pushname} ${ucapanWaktu}
Ini adalah List Fitur (Menu)
*SELAMAT MENCOBA 🙏*

✅ = *Works fine*
❌ = *In trouble*

_Hai Sobat, Apakah Kamu Udah Tersenyum Hari ini? 😳_ 
*#jangan Lupa Senyum*

*List Menu*
${listcmd}

•${week} ${date}\n•${dateIslamic}*
`
let message = await prepareWAMessageMedia
({ 
image: fs.readFileSync('./poto/haikal.jpg') }, 
{ 
upload: ikall.waUploadToServer 
})
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `NusantaraBot Multi-Device`,
hydratedFooterText: anu,
hydratedButtons: [{
urlButton: 
{
  displayText: 'Web-RunBot 🌐',
   url: 'https://heroku.app.com'
    }
     },
{
  quickReplyButton: {
   displayText: 'Owner Contact 📱',
    id: 'owner'
     }  
      }, 
{
  quickReplyButton: {
   displayText: 'Dashboard 🏠',
    id: 'menu'
}
}]
}
}
}), 
{ 
userJid: m.chat, quoted: m 
})
ikalll.relayMessage(m.chat, template.message, 
{ 
messageId: template.key.id 
})
}
break

case 'home':
case 'dashboard':{
anu = `
Hai ${pushname} ${ucapanWaktu}
Ini adalah Bot *Multidevice*

• Wib : ${wib}
• Wita : ${wita}
• Wit : ${wit}

◎ Server Run : *https://Heroku.app.com*
◎ Device : *Xiaomi Redmi Note 2*
◎ Ram Internal : *2/16GB ( 1,06Gb/2,00GB )*
◎ Android Version : *5.0.1 (Lolipop)*
◎ MIUI Version : *MIUI Global 9.6 | Stabil 9.6.3(LHMMIFD)*
◎ CPU : *Octa-core Max 1,95GHz*
◎ Chipset : *MEDIATEK X10 (MTK)*
◎ Lib : _() Baileys - Multi-Device_
◎ Terbit : *2022*

Thank You To ✨ :
• Allah Swt
• Ortu√
• DikaArdnt√
• Baileys√
• Adiwajshing√
• Kahfz√
• Fadz√
• Lord Ridho√
• Zeeone Ofc√

Bot ini masi dalam tahap pengembangan
jadi maaf jika masi banyak fitur yang error

*PILIH BUTTONNYA KAK*
`
let message = await prepareWAMessageMedia
({ 
image: fs.readFileSync('./poto/haikal.jpg') 
}, 
{ 
upload: ikall.waUploadToServer 
})
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: anu,
hydratedFooterText: `•${week} ${date}\n•${dateIslamic}`,
hydratedButtons: [{
urlButton: 
{
  displayText: 'Web-RunBot 🌐',
   url: 'https://heroku.app.com'
    }
     },
{
  quickReplyButton: {
   displayText: 'Owner Contact 📱',
    id: 'owner'
     }  
      }, 
{
  quickReplyButton: {
   displayText: 'Menu 📖',
    id: 'menu'
}
}]
}
}
}), 
{ 
userJid: m.chat, quoted: m 
})
ikall.relayMessage(m.chat, template.message, 
{ 
messageId: template.key.id 
})
}
break



case 'anonymous': {
if (m.isGroup) return m.reply('Command Tidak bisa Jika di Dalam Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = 
[
       { 
         buttonId: 'start', 
           buttonText: 
            { 
             displayText: 'Start' 
              }, 
               type: 1 
                }
]

ikall.sendButtonText(m.chat, buttons,`Hi ${await ikall.getName(m.sender)} Ini adalah Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner`, ikall.user.name, m)
}
break

case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Command Tidak bisa Jika di Dalam Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = 
[
       { 
         buttonId: 'keluar', 
           buttonText: 
            { 
             displayText: 'Stop' 
              }, 
               type: 1 
                }
]

await ikall.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, ikall.user.name, m)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = 
[
   { 
    buttonId: 'next', 
     buttonText: 
      { 
       displayText: 'Skip' 
        }, 
         type: 1 
          },
     { 
      buttonId: 'keluar', 
       buttonText: 
        { 
         displayText: 'Stop' 
          }, type: 1 
           }
]
                   
await ikall.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ikall.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await ikall.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ikall.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = 
[
     { 
      buttonId: 'keluar', 
       buttonText: 
        { 
         displayText: 'Stop' 
          }, 
           type: 1 
            }
]

await ikall.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ikall.user.name, m)
}
break
}

case 'next': {
if (m.isGroup) return m.reply('Command Tidak bisa Jika di Dalam Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = 
[
       { 
         buttonId: 'keluar', 
           buttonText: 
            { 
             displayText: 'Stop' 
              }, 
               type: 1 
                }
]

await ikall.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
throw false
}
let other = romeo.other(m.sender)
if (other) await ikall.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons =
[
   { 
    buttonId: 'next', 
     buttonText: 
      { 
       displayText: 'Skip' 
        }, 
         type: 1 
          },
     { 
      buttonId: 'keluar', 
       buttonText: 
        { 
         displayText: 'Stop' 
          }, type: 1 
           }
]
                    
await ikall.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ikall.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await ikall.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ikall.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = 
[
     { 
      buttonId: 'keluar', 
       buttonText: 
        { 
         displayText: 'Stop' 
          }, 
           type: 1 
            }
]

await ikall.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ikall.user.name, m)
}
break
}

case  'menfess':
case 'pesanrahasia':{
if (args.length < 1) return m.reply(`Penggunaan ${prefix}menfess 62xnxx|dari siapa|pesan rahasia`)
if (args[0].startsWith('08')) return m.reply('Awali nomor dengan 62') 
var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
var org = q.split("|")[1];
var dari = q.split("|")[2];
var pesan = `hai, kamu dapet pesan rahasia nihh\n\ndari: *${org}* \nIsi pesan: \n "${dari}"`
let buttons = 
[

  {
   "buttonId": `${prefix}mulai ${pushmame}`,
    "buttonText": 
     {"displayText": `ngobrol dengan dia secara anonymous`},
      "type": "RESPONSE"
        }
]

ikall.sendMessage(nomor+'@s.whatsapp.net', {text: pesan, buttons})   
m.reply(`Sukses mengirim pesan rahasia:\n${pesan} ke nomer ${nomor}`)
break

//-------------------------------- Command sticker -------------------------

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ikall.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ikall.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break


//========================== DEFAULT FITUR ! =============================\\

default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
ikall.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
m.reply(util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
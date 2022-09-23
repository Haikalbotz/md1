/**
 • Created : haikalaja
 • MyGithub : https://github.com/Haikalbotz
 "MINIMAL FOLOW LA YAH, MINIMAL !"
 
**/

const fs = require('fs')
const chalk = require('chalk')
//Global owner number
global.owner =
[
'6289609927539',
'6289609927539'
]
//Global Web Api WhatsAppBot
global.APIs = {
lolhuman: 'https://lolhuman.xyz',
}
//Apikey From Web Api
global.APIKeys = {
'https://lolhuman.xyz': 'BelumBeli',
}
//Sett Bot
global.packname = 'Nusantara-[ MULTI DEVICE ]'
global.prefa = ['','!','.','/']
global.sessionName = 'Nusantara'
global.sp = '🐨'
global.mess = {
succes: '✅ Success',
admin: 'Fitur Ini Untuk admin Group Saja !',
botAdmin: 'Bot Di Haruskan Menjadi Admin Dahulu !',
owner: 'Fitur Ini Khusus Developer Bot Nusantara !',
group: 'Fitur Hanya Bisa Di Gunakan Di Dalam Group !!',
private: 'Fitur Digunakan Hanya Di Chat Pribadi/Private',
bot: 'Fitur Hanya Khusus Pengguna Nomor Bot',
wait: 'L O A D I N G...',
global.thumb = fs.readFileSync('-+')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`perbarui'${__filename}'`))
delete require.cache[file]
require(file)
})


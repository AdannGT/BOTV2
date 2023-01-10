import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `*BIG THANKS TO*
    
Terutama Terimakasih Teruntuk:
➸ @${'6285697467632'.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ 0@s.whatsapp.net

─────────────────────
• 𝙍𝙖𝙢𝙙𝙖𝙣𝘽𝙊𝙏 𝙑𝟮.𝟬
•𝙯𝙇𝙪𝙘𝙞𝙛𝙚𝙧 𝙏𝙚𝙖𝙢
•𝘼𝙡𝙡 𝙏𝙚𝙖𝙢 𝙋𝙧𝙤𝙥𝙖𝙜𝙖𝙣𝙙𝙖
•𝘼𝙡𝙡 𝙏𝙚𝙖𝙢 𝙇𝙞𝙣𝙪𝙭
•𝘼𝙡𝙡 𝙏𝙚𝙖𝙢 𝙆𝙖𝙡𝙞𝙣𝙚𝙩𝙝𝙪𝙣𝙩𝙚𝙧
•𝘼𝙙𝙞𝙬𝙖𝙟𝙨𝙝𝙞𝙣𝙜
•𝙉𝙪𝙧𝙪𝙩𝙤𝙢𝙤
•𝙍𝙖𝙢𝙙𝙖𝙣𝙇𝙊𝙇
•𝙄𝙣𝙜𝙖𝙩 𝘼𝙡𝙡𝙖𝙝
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://youtu.be/dd2FWLD6H9Q'},
'mimetype':global.ddocx,
'fileName':'𝙍𝙖𝙢𝙙𝙖𝙣-𝙈𝘿',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtu.be/hklv-Ysqqac',
'mediaType':2,
'previewType':'pdf',
'title':`𝙍𝙖𝙢𝙙𝙖𝙣-𝙈𝘿: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':`By Ramdan`,
'thumbnail':await(await fetch('https://telegra.ph/file/7f2f5a345f0c58d953baa.jpg')).buffer(),
'sourceUrl':'https://youtu.be/dd2FWLD6H9Q'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Telah Berpatisipasi

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'▣ Mҽɳυ ▣'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'🎈Hαʅʅσ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
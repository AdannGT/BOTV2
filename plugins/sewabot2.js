let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/7f2f5a345f0c58d953baa.jpg'
let text = `━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
┃
┃✾ 10 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
┃✾ 15 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ
┃✾ 25 ʜᴀʀɪ 25ᴋ / ɢʀᴏᴜᴘ
┃✾ 30 ʜᴀʀɪ 30ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 100ᴋ / ɢʀᴏᴜᴘ (𝘽𝙚𝙡𝙪𝙢 𝙏𝙚𝙧𝙨𝙚𝙙𝙞𝙖)
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
┃
┃✾ 10 ʜᴀʀɪ 10ᴋ 
┃✾ 15 ʜᴀʀɪ 15ᴋ 
┃✾ 25 ʜᴀʀɪ 25ᴋ 
┃✾ 30 ʜᴀʀɪ 30ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 50ᴋ (𝘽𝙚𝙡𝙪𝙢 𝙏𝙚𝙧𝙨𝙚𝙙𝙞𝙖)
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 450+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/6285697467632?text=Hallo Kak 𝙍𝙖𝙢𝙙𝙖𝙣, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk)$/i

export default handler

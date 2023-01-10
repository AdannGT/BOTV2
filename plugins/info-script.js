let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

📮 S&K
1. Jangan diperjual belikan Script ini
2. Jangan salah gunakan script ini!
3. Jangan lupa Follow Instagram
4. Jangan di per jual belikan
• Jika ada eror di sc hub https://wa.me/6285697467632

--------Thanks to ✨---------
𝙍𝙖𝙢𝙙𝙖𝙣𝘽𝙊𝙏 𝙑𝟮.𝟬
𝙯𝙇𝙪𝙘𝙞𝙛𝙚𝙧 𝙏𝙚𝙖𝙢
𝘼𝙡𝙡 𝙏𝙚𝙖𝙢 𝙋𝙧𝙤𝙥𝙖𝙜𝙖𝙣𝙙𝙖
𝘼𝙡𝙡 𝙏𝙚𝙖𝙢 𝙇𝙞𝙣𝙪𝙭
𝘼𝙡𝙡 𝙏𝙚𝙖𝙢 𝙆𝙖𝙡𝙞𝙣𝙚𝙩𝙝𝙪𝙣𝙩𝙚𝙧
𝘼𝙙𝙞𝙬𝙖𝙟𝙨𝙝𝙞𝙣𝙜
𝙉𝙪𝙧𝙪𝙩𝙤𝙢𝙤
𝙍𝙖𝙢𝙙𝙖𝙣𝙇𝙊𝙇
𝙄𝙣𝙜𝙖𝙩 𝘼𝙡𝙡𝙖𝙝
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'http://www.desilauo.com/upimg/editorimg/file/20221227/20221227130015_84437.html'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler

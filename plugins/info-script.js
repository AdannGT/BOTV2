let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

๐ฎ S&K
1. Jangan diperjual belikan Script ini
2. Jangan salah gunakan script ini!
3. Jangan lupa Follow Instagram
4. Jangan di per jual belikan
โข Jika ada eror di sc hub https://wa.me/6285697467632

--------Thanks to โจ---------
๐๐๐ข๐๐๐ฃ๐ฝ๐๐ ๐๐ฎ.๐ฌ
๐ฏ๐๐ช๐๐๐๐๐ง ๐๐๐๐ข
๐ผ๐ก๐ก ๐๐๐๐ข ๐๐ง๐ค๐ฅ๐๐๐๐ฃ๐๐
๐ผ๐ก๐ก ๐๐๐๐ข ๐๐๐ฃ๐ช๐ญ
๐ผ๐ก๐ก ๐๐๐๐ข ๐๐๐ก๐๐ฃ๐๐ฉ๐๐ช๐ฃ๐ฉ๐๐ง
๐ผ๐๐๐ฌ๐๐๐จ๐๐๐ฃ๐
๐๐ช๐ง๐ช๐ฉ๐ค๐ข๐ค
๐๐๐ข๐๐๐ฃ๐๐๐
๐๐ฃ๐๐๐ฉ ๐ผ๐ก๐ก๐๐
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
handler.helpย =ย ['sc'] 
 handler.tagsย =ย ['info'] 
 handler.commandย =ย /^(s(ourcode|c))$/i 
  
 exportย defaultย handler

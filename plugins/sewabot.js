let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '10'
let sn = '20'
let ss = '50'
let sp = '35'
let sv = '40'
//premium
let ph = '5'
let pn = '20'
let pp = '25'
let pv = '35'
let ppm = '50'
//jasa run
let ri = '30'
let pk = '40'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (7 Hari)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_                                         
┊⫹⫺ *permanen:* = _${sv}k/grup (unlimited)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (5 Hari)_
┊⫹⫺ *Normal:* _${pn}k (20 Hari)_                                       
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG SEWA* 」
┊⫹⫺ *Hemat:* _3k (3 Hari)_
┊⫹⫺ *Normal:* _6k ( bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG PREMIUM* 」
┊⫹⫺ *Hemat:* _3k (3 Hari)_
┊⫹⫺ *Normal:* _6k (6 Hari)_                                       
╰═┅═━––––––๑
╭━━━━「 *JASARUN* 」
┊⫹⫺ *Hemat:* _${ri}k (7 Hari)_
┊⫹⫺ *Normal:* _${pk}k (25 Hari)_                                       
╰═┅═━––––––๑
༅ _*FITUR BOT*

✧ *Virtex Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅*
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *Anti Toxic↗️*
✧ *DLL*
✧ *MEMBELI BERATI SETUJU*

_Total Fitur:_ 570++

*⫹⫺ PAYMENT:*
• *Dana:085697467632*
• *Pulsa:085697467632*
• *Ovo:085697467632*
• *QRIS*
• *ALL PAYMENT*
–––––– *🐾 Kebijakan* ––––––
🗣️: *Kak, Kok harganya mahal banget?*
💬: *Mau tawar menawar? boleh, silahkan chat owner aja*

🗣️: *Scam ga nih kak?*
💬: *Enggalah, Owner 100% Tepati janji #STAYHALAL*

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* 5K • Sewa', description: 'PRICE: ' + sh + 'k (7 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* 10K • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 Permanen", rowId: '.order *Paket:* 40K • Sewa', description: 'PRICE: ' + sv + 'k (Permanen)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 5K • Premium', description: 'PRICE: ' + ph + 'k (7 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 10K • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* 35K • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    }, {
        title: `${htjava} JASA RUN ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 25K • Jasarun', description: 'PRICE: ' + ri + 'k (25 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 30K • Jasarun', description: 'PRICE: ' + pk + 'k (1 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
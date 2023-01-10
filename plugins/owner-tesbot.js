import fetch from 'node-fetch'
import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
    const ultah = new Date('September 14 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let sewa = `𝙍𝙖𝙢𝙙𝙖𝙣 𝘽𝙊𝙏 𝘼𝙆𝙏𝙄𝙁

${wm}
${botdate}
`
        let img1 = fs.readFileSync('./thumbnail.jpg');
        let img2 = fs.readFileSync('./media/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, await (await fetch(`https://telegra.ph/file/7f2f5a345f0c58d953baa.jpg`)).buffer(), [["🗳️MENU", usedPrefix + "menu"], ["🔭DONASI", usedPrefix + "donasi"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `Yoi : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Follow My Instagram`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://i.ibb.co/RTnnbMm/k.jpg`)).buffer(),
                        sourceUrl: 'https://www.instagram.com/rmdanlol_'
            }
        }
    })
}
handler.help = ['tesbot']
handler.tags = ['owner']
handler.command = ['tesbot']
handler.owner = true
export default handler

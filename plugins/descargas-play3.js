import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[โ๐๐๐๐โ] ๐ฝ๐พ๐ผ๐ฑ๐๐ด ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ ๐ต๐ฐ๐ป๐๐ฐ๐ฝ๐๐ด, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐ธ๐ฝ๐ถ๐๐ด๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ฝ๐พ๐ผ๐ฑ๐๐ด/๐๐ธ๐๐๐ป๐พ ๐ณ๐ด ๐๐ฝ๐ฐ ๐ฒ๐ฐ๐ฝ๐ฒ๐ธ๐พ๐ฝ*\n\n*โโ ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '๐ต ๐๐๐๐๐๐๐๐ ๐ต' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '๐ฅ ๐๐๐๐๐๐๐๐ ๐ฅ' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐๐ ๐' }, type: 1 }, ] 
let texto1 = `*โญโโโโช~*โโแฐฑโขโขโขโโจออPออฬธLอฬธAออฬธYออฬธโฉโโขโขโขแฐฑโโ*~*
โโ๐ *๐ง๐ถ๐๐๐น๐ผ:* ${title}
โโ๐ *๐ฃ๐๐ฏ๐น๐ถ๐ฐ๐ฎ๐ฐ๐ถ๐ผ๐ป:* ${publishedTime}
โโโ *๐ฟ๐ช๐ง๐๐๐๐ค๐ฃ:* ${durationH}
โโ๐ *๐ฉ๐ถ๐๐๐ฎ๐:* ${viewH}
โโ๐ *๐ฟ๐๐จ๐๐ง๐๐ฅ๐๐๐ค๐ฃ:* ${description}
โโ๐ *๐๐๐ฃ๐ :* ${urll}
โโ
โโ                *The LoliBot-MD*
โโย ย ย ย ย ย ย  *โโโโโโโโโโโโโ%100*
โฐโโขโโโโขโขโขโฆ๐โณโฆโขโขโขโโโโขโโฏโค`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": 'โ ๐ฟ สแดแดสแดแดแดแดแดแดส แดแด สแดแดแดแดสแด', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `*โญโโโโช~*โโแฐฑโขโขโขโโจออPออฬธLอฬธAออฬธYออฬธโฉโโขโขโขแฐฑโโ*~*
โโ๐ *๐ง๐ถ๐๐๐น๐ผ:* ${title}
โโ๐ *๐ฃ๐๐ฏ๐น๐ถ๐ฐ๐ฎ๐ฐ๐ถ๐ผ๐ป:* ${published}
โโ๐ *๐ฉ๐ถ๐๐๐ฎ๐:* ${views}
โโ๐ *๐๐๐ฃ๐ :* ${url}
โโ
โโ                *The LoliBot-MD*
โโย ย ย ย ย ย ย  *โโโโโโโโโโโโโ%100*
โฐโโขโโโโขโขโขโฆ๐โณโฆโขโขโขโโโโขโโฏโค`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐๐ ๐'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*แดษดแด ษชแดษดแดแด แดแดแดษชแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[โ๐๐๐๐โ] ๐ด๐๐๐พ๐, ๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐๐ด๐ป๐๐ฐ ๐ฐ ๐ธ๐ฝ๐๐ด๐ฝ๐๐ฐ๐๐ป๐พ*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
handler.money = 80
export default handler

import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `*[âđđđđâ] đŊđžđŧđąđđ´ đŗđ´ đģđ° đ˛đ°đŊđ˛đ¸đžđŊ đĩđ°đģđđ°đŊđđ´, đŋđžđ đĩđ°đđžđ đ¸đŊđļđđ´đđ´ đ´đģ đ˛đžđŧđ°đŊđŗđž đŧđ°đ đ´đģ đŊđžđŧđąđđ´/đđ¸đđđģđž đŗđ´ đđŊđ° đ˛đ°đŊđ˛đ¸đžđŊ*\n\n*ââ đ´đšđ´đŧđŋđģđž:*\n*${usedPrefix + command} Begin you*`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Video đĨ', `${usedPrefix}ytmp4 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Videodoc đĨ', `${usedPrefix}ytmp4doc ${v.url}`, `descargar: ${v.title} (${v.url})`],    
['Audio đ§', `${usedPrefix}ytmp3 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Audiodoc đ§', `${usedPrefix}ytmp3doc ${v.url}`, `descargar: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, ' ã đ đ¨đĻđđđ đĨđđđđđđĸđĄđđđ ã', `đđŽđŦđĸđđ đĢđđĨđđđĸđ¨đ§đđđ đđ¨đ§: ${args.join(" ")}`, 'đđĨđĸđŖđ đŽđ§đ đ¨đŠđđĸđ¨đ§ đ˛ đŠđĢđđđĸđ¨đ§đ đđ§đ¯đĸđđĢ', '[âĻ đđđđđđđđđđ âĻ]', listSections, m)
} catch {
try {     
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = `đđŽđŦđĸđđ đĢđđĨđđđĸđ¨đ§đđđ đđ¨đ§: ${args.join(" ")}`
const sections = [{ title: `|īŧīŧīŧīŧīŧ{ īŧĄīŧĩīŧ¤īŧŠīŧ¯ }īŧīŧīŧīŧīŧ|`, rows: listSerch }, { title: `|īŧīŧīŧīŧīŧ{ īŧļīŧŠīŧ¤īŧĨīŧ¯ }īŧīŧīŧīŧīŧ|`, rows: listSerch2 }, { title: `|īŧīŧ{ īŧ¤īŧ¯īŧŖīŧĩīŧ­īŧĨīŧŽīŧ´īŧ¯  īŧ­īŧ°īŧ }īŧīŧ|`, rows: listSerch3 }, { title: `|īŧīŧ{ īŧ¤īŧ¯īŧŖīŧĩīŧ­īŧĨīŧŽīŧ´īŧ¯  īŧ­īŧ°īŧ }īŧīŧ|`, rows: listSerch4 }]
for (let x of get_result2) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc https://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc https://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: 'đđĨđĸđŖđ đŽđ§đ đ¨đŠđđĸđ¨đ§ đ˛ đŠđĢđđđĸđ¨đ§đ đđ§đ¯đĸđđĢ', title: " ã đ đ¨đĻđđđ đĨđđđđđđĸđĄđđđ ã", buttonText: "[âĻ đđđđđđđđđđ âĻ]", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
} catch {    
await m.reply('*[âđđđđâ] đ´đđđžđ, đŋđžđ đĩđ°đđžđ đđđ´đģđđ° đ° đ¸đŊđđ´đŊđđ°đđģđž đ˛đžđŊ đžđđđž đŊđžđŧđąđđ´ đŗđ´ đđŊđ° đ˛đ°đŊđ˛đ¸đžđŊ*')
}}}
handler.command = /^playlist|playlist2$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}

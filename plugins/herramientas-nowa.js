/*---------------------------------------------------------------------------------------
  π β’ By https://github.com/ALBERTO9883
  π β’ βAlberto Y Ashlyβ
-----------------------------------------------------------------------------------------*/
let handler = async (m, { conn, text, usedPrefix, command }) => {
let regex = /x/g
if (!text) throw 'β οΈ π ππ‘ π£πͺΜπ’ππ§π€π€'
if (!text.match(regex)) throw `*π¬ππππππ πππ πππ: ${usedPrefix + command} 521999340434x*`
let random = text.match(regex).length, total = Math.pow(10, random), array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch(_ => {})
array.push({ exists: true, jid: result, ...info })
} else {
array.push({ exists: false, jid: result })
}}
let txt = 'πΉπππππππππ\n\n' + array.filter(v => v.exists).map(v => `β’ π΅πΜππππ: wa.me/${v.jid.split('@')[0]}\n*β’ π«πππ:* ${v.status || 'Sin descripcion'}\n*β’ π­ππππ:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*π΅π ππππππππππ*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
m.reply(txt)
}
handler.command = /^nowa$/i
export default handler
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })}

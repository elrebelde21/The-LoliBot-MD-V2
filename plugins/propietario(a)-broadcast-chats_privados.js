import fs from 'fs'
let handler = async (m, { conn, text }) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
for (let id of chats) { 
conn.sendButton(id, `*β­ββ[ πΎπ€π’πͺπ£πππππ€ ]ββββ¬£*\n*β*\n*βπ* ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`, 'β *πͺπππππππππ πππππππ*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentasgb'],['π πππ£πͺ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'π»ππ π³ππππ©ππ-π΄π«',
body: 'πΊππππ πππ πΎπππππ¨ππ', 
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} β *π¬π πππππππ πππ πππππππ π ${chats.length} πͺππππ π·πππππππ*\n*π¬π πππππππ πππ ππ ππ ππππ πππππππ π πππππ πππ πͺππππ π·πππππππ. π«πππππππ.*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicarpv|anunciopv|annunciopv|broadcastchats?|bcc(hats?)?)$/i
handler.exp = 500
handler.rowner = true
export default handler
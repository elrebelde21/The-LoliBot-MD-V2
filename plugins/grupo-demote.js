let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `ððĐð ðĢðĪ ðĻðĪðŪ ððððŦððĢðĪ.\n ðððð ðð ðŠðĻðð§ ðð ððĻðĐð ðĒððĢðð§ð:\nððððĒðĨðĄðĪ\n*${usedPrefix}quitaradmin @tag*\n*${usedPrefix}quitaradmin responder a un mensaje*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `ðŽðð ððĖðððð ðð ðððððððððð, ððððððð ððð ððððð`, m)
  
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.sendHydrated(m.chat, `ðððð ðŪð ðððððĻðĐð ðð ðĻðð§ ðððĒððĢðĻ ðĢðĪ ððŠððĻðĐð ððŠððĢ ðððĒððĢ :ðŦ ð§`, wm, null, md, 'ðŧðð ðģððððĐðð-ðīðŦ', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', '/menu']
], m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'demote ' + v) 
handler.tags = ['group']
handler.command = /^(demote|quitarpoder|quitaradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler

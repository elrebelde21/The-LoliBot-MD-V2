let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}


if (m.isGroup) {
//if (!text) throw await conn.reply(m.chat, `${mg}๐ฟ๐๐ฝ๐ ๐ฟ๐ ๐๐๐พ๐๐๐ฝ๐๐ ๐๐ผ ๐๐ผ๐๐๐ ๐ฟ๐ ๐๐ผ ๐๐๐๐ผ๐พ๐๐๐\n\n๐๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐ผ๐๐๐ ๐๐๐ ๐๐๐ ๐๐๐๐`, fkontak,  m)	
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)}
conn.vote = conn.vote ? conn.vote : {}
let id = m.chat

if (id in conn.vote) { 
return await conn.sendButton(m.chat, `๐๏ธ ๐๐ค๐๐๐ซ๐ฬ๐ ๐๐๐ฎ ๐ซ๐ค๐ฉ๐๐๐๐คฬ๐ฃ ๐ฅ๐๐ฃ๐๐๐๐ฃ๐ฉ๐ ๐๐ก ๐๐จ๐ฉ๐ ๐๐ง๐ช๐ฅ๐ค!!`, wm, null, [
['๐งพ ๐ญ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐ฬ๐', `${usedPrefix}-vote`]], fkontak, m)}
  
await conn.sendButton(m.chat, `โด๏ธ ๐๐ช๐๐ซ๐๐จ ๐ซ๐ค๐ฉ๐๐๐๐คฬ๐ฃ โด๏ธ\n\n*๐ช๐๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐ฬ๐*\n๐ @${conn.getName(m.sender)}\n\n*๐๐ค๐ฉ๐๐ซ๐ค๐จ โซ* ${text}`, `
*Puede usar los comandos de abajo o los botones para hacer una acciรณn en la votaciรณn!!*

${htjava} ๐ฟ๐ช๐ง๐๐ฃ๐ฉ๐ ๐ก๐ ๐ซ๐ค๐ฉ๐๐๐๐คฬ๐ฃ ${htjava}
${dmenub} *${usedPrefix}sivotar | upvote* 
${dmenub} _Estar de acuerdo : Agree_
${dmenub2} *โโโโโโโโโโโโ*
${dmenub} *${usedPrefix}novotar | devote*
${dmenub} _Estar en desacuerdo : Disagree_
${dmenub2} *โโโโโโโโโโโโ*
${dmenub} *${usedPrefix}vervotos | cekvoto*
${dmenub} _Comprobar el voto : Check the vote_
${dmenub2} *โโโโโโโโโโโโ*
${dmenub} *${usedPrefix}delvoto | deletevoto*
${dmenub} _Borrar votos : Delete votes_
${dmenuf}`, null, [
['โ ๐๐๐๐ผ๐ ๐ผ ๐๐ผ๐๐๐', `${usedPrefix}upvote`],
['โ ๐๐๐๐ผ๐ ๐๐ ๐พ๐๐๐๐๐ผ', `${usedPrefix}devote`],
['๐ฐ ๐๐๐๐๐๐ผ๐ ๐ผ ๐๐๐๐ผ๐', `${usedPrefix}pedirayuda โด๏ธ @${conn.getName(m.sender)} *ESTA INVITANDO A QUE SE UNAN A LA VOTACIรN!!*\n*USEN EL COMANDO ${usedPrefix}vervotos PARA VOTAR!!*`]
], fkontak, m) 
conn.vote[id] = [
text,
[],
[]
]
}

handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|crear|iniciar|empezar|\+)voto$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
handler.register = true
handler.level = 4
handler.register = true
handler.limit = 1

export default handler 

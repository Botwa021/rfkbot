function handler(m) {
  m.reply('Ada perlu apa kak cari owner?, chat *P* tidak akan di balas')
  this.sendContact(m.chat, '6288233832771@s.whatsapp.net', 'Mursid (Owner)', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

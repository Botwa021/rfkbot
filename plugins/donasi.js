let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Pulsa 〕
├ Smartfren : 088233832771
├ Tri : 089612698583
└────
┌〔 Donasi • Non Pulsa 〕
├ Dana : 088233832771
├ QR : https://a.top4top.io/p_2212zqtaa0.jpg
├ Donasi Hubungi : wa.me//6288233832771
├ MAKASIH YANG SUDAH DONASI
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

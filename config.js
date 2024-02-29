global.owner = ['6285794908894']  
global.mods = ['6285794908894'] 
global.prems = ['6285794908894']
global.nameowner = 'ɪɴᴏʀʏ ᴀɴᴅ ᴡᴀʜᴀʙ'
global.numberowner = '6285794908894' 
global.mail = '-' 
global.dana = '6285794908894'
global.pulsa = '6283164864536'
global.gopay = '6285794908894'
global.namebot = 'Kιɳα Bσƚ'
global.gc = 'https://whatsapp.com/channel/0029VaACVbGDuMRk7zy6vI3a'
global.web = 'ɢᴀᴋ ᴀᴅᴀ'
global.instagram = 'iky_alwaysgood'
global.wm = '© Kιɳα Bσƚ'
global.watermark = wm
global.wm2 = '⫹⫺ Kιɳα Bσƚ'
global.wm3 = '© Kιɳα Bσƚ'
global.wm4 = '© Kιɳα Bσƚ'
global.wait = '_*ᴛᴜɴɢɢᴜ sᴇᴅᴀɴɢ ᴅɪ ᴘʀᴏsᴇs...*_'
global.eror = '_*sᴇʀᴠᴇʀ ᴇʀᴏʀ*_'
global.benar = 'ʙᴇɴᴀʀ ✅\n'
global.salah = 'sᴀʟᴀʜ ❌\n'
global.stiker_wait = '*⫹⫺ sᴛɪᴋᴇʀ sᴇᴅᴀɴɢ ᴅɪʙᴜᴀᴛ...*'
global.packname = 'mαdє wíth'
global.author = 'Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ'
global.alpiskey = '8ecfc216' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'ikyalwaysgood' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'aBFHC7jn' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.lannn.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'ikyalwaysgood' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

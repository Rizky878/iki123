/*
* JANGAN UBAH-UBAH INFO!!!
* "JANGAN MODAL NAMA DOANG BRO!!!"
* SCRIPT BY ARIS187 ID
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YG MEMBUAT SCRIPT INI BOSQ
* JANGAN UBAH-UBAH INFO!!!
* ARIS187 ID
* BOLEH UBAH TAPI KECUALI INFO!!!
*/
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const vcard = 'BEGIN:VCARD\n' // metad ko ata of the contact card
            + 'VERSION:3.0\n' 
            + 'Aris\n' // full name
            + 'ORG:C/O RIZKY BOT ;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6285722553839:+62 857-2255-3839\n' // WhatsApp ID + phone number
            + 'END:VCARD'
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

const config = {
    A187: 'RIZKY BOT',
    instagram: 'https://instagram.com/_rizkyfadilah8',
    nomer: 'wa.me/6282387804410',
    aktif: 'Tergantung owner ON',
    youtube: 'https://www.youtube.com/channel/UCwuFtaAemHVPO67Aopv6BXg',
    whatsapp: 'https://chat.whatsapp.com/FROF0hmWUuwD4WKgcyIEH9',
    tanggal: `TANGGAL: ${moment().format('DD')} ${bulan} ${moment().format('YYYY')}`,
    waktu: time
}

const { A187, tanggal, waktu, instagram, whatsapp, youtube, nomer, aktif, ontime } = config

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys")

const {
    help,
    rumah,
    beruang,
    laknat,
    love,
    info,
    donate,
    alay,
    artinama,
    corona,
    kbbi,
    downloadimage,
    igStalk,
    jodoh,
    jsholat,
    lirik,
    nulis,
    readTextInimage,
    pantun,
    quotes,
    searchYoutube,
    surah,
    tiktokdl,
    tweetdl,
    wiki,
    ytdl,
    bucin,
    cersex,
    cerpen,
    puisi1,
    randomkis,
    renungan,
    gltext,
    cuaca, 
    texthunder,
    memecrate,
    waifu2,
    blackpink,
    text3d,
    randomcry,
    logogaming,
    puisi2,
    joox,
    resep,
    namaninja,
    bitly,
    nekonime,
    cektanggal,
    chord,
    zodiak,
    fb,
    simi,
    gtts,
    wikien,
    spamsms,
    spamcall,
    spamgmail,
    covidcountry,
    infoanime,
    gay,
    ytmp3,
    ssweb,
    infogempa,
    indohot,
    loli,
    ttp,
    map,
    waifu
} = require('./lib')

//Chat XP-TN
if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}
else if (text == '.owner'){
conn.sendMessage(id, 'Owner BOTRzky wa.me/+6282387804410' ,MessageType.text);
}
else if (text == 'Rizky'){
conn.sendMessage(id, 'aku pembuat Rzky bot' ,MessageType.text);
}
else if (text == 'kurumi'){
conn.sendMessage(id, 'pacar Rizky🏃' ,MessageType.text);
}
else if (text == 'bangsat'){
conn.sendMessage(id, 'toxic terdeteksi' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pengin ngentod?' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik !help' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == '.ttp'){
conn.sendMessage(id, ' *COMMAND PREMIUM CHAT WA https://wa.me/6287804410* ' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Eoy'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot e ' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, Ketik !help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == '.frendsowner'){
conn.sendMessage(id, 'kawan1 Rasya and Stephen wa.me/+6282387804410' ,MessageType.text);
}
else if (text == '.coowner'){
conn.sendMessage(id, 'kawan2 testing script wa.me/+6282387804410' ,MessageType.text);
}
else if (text == '.groupbot'){
conn.sendMessage(id, 'group bot whatsapp https://chat.whatsapp.com/FROF0hmWUuwD4WKgcyIEH9' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, Ketik .help untuk melihat fitur fitur bot' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'owner lu mana'){
conn.sendMessage(id, 'cie rindu owner ku yaa ciee😳' ,MessageType.text);
}
else if (text == 'tohka'){
conn.sendMessage(id, 'pacar Stephen🏃' ,MessageType.text);
}
else if (text == 'chizuru'){
conn.sendMessage(id, 'pacar Rasya🏃' ,MessageType.text);
}

const { animPict, cewePict, cowoPict } = require('./lib/pict')

const { exec } = require("child_process")

const client = new WAConnection()

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready, subscribe Aris187 ID`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@_sadboy.ig`)

client.on('message-status-update', json => {
   const participant = json.participant ? ' (' + json.participant + ')' : ''
   console.log(`[ ${time} ] => bot by ig:@_sadboy.ig`)
})

client.on('message-new', async (m) => {
   const messageContent = m.message
   const text = m.message.conversation
   const messageType = Object.keys(messageContent)[0]

   const re = /[\#\!\@\/\?\%\$\.]/

   const value = text.split(' ').splice(1).join(' ')

   let id = m.key.remoteJid
   let imageMessage = m.message.imageMessage

   const prefix = messageType === 'imageMessage' ? imageMessage.caption.split(' ')[0].split(re)[1] : text.split(' ')[0].split(re)[1] // multiple prefix

   console.log(`[ ${time} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`); 
 
	
   switch (prefix) {
       case 'help':
           client.sendMessage(id, help.help(id, A187, tanggal, whatsapp, youtube, instagram, nomer),MessageType.text)
           break      
      case 'donate':
           client.sendMessage(id, donate.donate(id, A187, tanggal),MessageType.text)
           break          
      case 'info':
           client.sendMessage(id, info.info(id, A187, tanggal),MessageType.text)
           break
       case 'ytmp3':
           ytdl('mp3', value)
               .then(data => {
                   const { judul, size, hasil: link } = data
                   let hasil = `✅ Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${judul}\n\nUkuran audio: ${size}\n\nLink: ${link}`
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m })
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'ytmp4':
           ytdl('mp4', value)
               .then(data => {
                   const { judul, size, hasil: link } = data
                   let hasil = `✅ Video Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${judul}\n\nUkuran audio: ${size}\n\nLink: ${link}`
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m })
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'twt':
           tweetdl(value)
               .then(data => {
                    const { size, hasil: link } = data
                    let hasil = `✅ Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\nKlik link dibawah🗡️\n\nSize: ${size}\n\nLink: ${link}`
                    client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m })
                    client.sendMessage(id, hasil ,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'tiktok':
           tiktokdl(value)
               .then(data => {
                    const { url, nama, durasi, deskripsi } = data
                    let hasil = `✅ Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya! \nKlik link dibawah🗡️\n\nJudul: ${deskripsi} \n\nDurasi: ${durasi}\n\nNama: ${nama}\n\nUrl: ${url}`;
                    client.sendMessage(id, hasil,MessageType.text { quoted: m })
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'wiki':
           wiki(value)
               .then(data => {
                    const { hasil: res } = data
                    let hasil = `📝Menurut Wikipedia:\n\n${res}`
                    client.sendMessage(id, hasil,MessageType.text { quoted: m })
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sholat':
           jsholat(value)
               .then(data => {
                   const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = data
                   let hasil = `Jadwal sholat di *${value}* hari ini adalah\n\n⚡Imsyak : ${Imsyak}\n⚡Subuh : ${Subuh} WIB\n⚡Dzuhur : ${Dzuhur}WIB\n⚡Ashar : ${Ashar} WIB\n⚡Maghrib : ${Maghrib}\n⚡Isya : ${Isya} WIB\n⚡Tengah malam : ${Dhuha} WIB`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quran':
           surah(value)
               .then(data => {
                   const re = /{(.*?)}/gi
                   const { acak, surat } = data

                   const keterangan = acak.id.ayat.replace(re, '')
                   const arText = acak.ar.teks
                   const idText = acak.id.teks
                   const surah= surat.nama

                   let hasil = `[${keterangan}]   ${arText}\n\n${idText}(QS.${surah}, Ayat ${keterangan})`;
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } );
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pantun':
           pantun(value)
               .then(data => {
                   client.sendMessage(id, data,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
       case 'tagme':
               .var nomor = m.participant
 const options = {
       text: `@${nomor.split("@s.whatsapp.net")[0]} nieh dah aku tag!`,
       contextInfo: { mentionedJid: [nomor] }
 })
                   client.sendMessage(id, data,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })        
      case 'opengc':
let hasil = `${id.split("@s.whatsapp.net")[0]}`;
   client.groupSettingChange (hasil, GroupSettingChange.messageSend, false);
client.sendMessage(id, 'SUCCES, admin telah membuka grub' ,MessageType.text { quoted: m } );
})
               .catch(err => {
                   console.log(err)
               })     
           break
case 'closegc':
 let hasil = `${id.split("@s.whatsapp.net")[0]}`;
   client.groupSettingChange (hasil, GroupSettingChange.messageSend, true);
client.sendMessage(id, 'SUCCES, admin TELAH MENUTUP GRUB' ,MessageType.text { quoted: m } );
})
               .catch(err => {
                   console.log(err)
               })     
           break
case 'setnamegc':
    let nama = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    client.groupUpdateSubject(idgrup, nama);
client.sendMessage(id, 'Admin Telah mengganti nama Grub' ,MessageType.text { quoted: m } );

})
               .catch(err => {
                   console.log(err)
               })     
           break
case 'desc':
    let desk = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    client.groupUpdateDescription(idgrup, desk)
client.sendMessage(id, 'suksess descripsi grup' ,MessageType.text { quoted: m } );

})
               .catch(err => {
                   console.log(err)
               })     
           break    
          case 'renungan':
           renungan(value)
               .then(data => {
                   client.sendMessage(id, data,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })     
           break
       case 'covid':
           corona(value)
               .then(data => {
                   const { meninggal, sembuh, positif } = data
                   let hasil = `📌DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n📍Positif ==> ${positif} \n📍Sembuh ==> ${sembuh} \n📍Meninggal ==> ${meninggal}`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quotes':
           quotes(value)
               .then(data => {
                   const { author, quotes } = data
                   let hasil = `_${quotes}_\n\n~${author}`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'nama':
           artinama(value)
               .then(data => {
                   const { result: arti } = data
                   let hasil = `\nArti nama mu adalah\n\n***********************************\n\n       _${value}_ ${arti}\n\n***********************************`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pasangan':
           jodoh(value)
               .then(data => {
                   const { positif, negatif } = data
                   const nama = value.split(/[\&\-\/\+]/)
                   let hasil = `\nKecocokan jodoh\n\n************************************\n\nPasangan 1: *${nama[0].trim(value)}*\nPasangan 2: *${nama[1].trim()}*\n\nsisi positif: ${positif}\nsisi negatif: ${negatif}\n\n***********************************`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pict':
           switch (value) {
               case 'cewek':
                   cewePict(value)
                       .then(buffer => {
                           client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                           client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               case 'cowok':
                   cowoPict(value)
                       .then(buffer => {
                           client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                           client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               default:
                   client.sendMessage(id, 'ulangi dengan  !pict cewek/cowok\n\nMisal: !pict cowok',MessageType.text { quoted: m } )
                   break
           }
           break
       case 'animepict':
           animPict(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'creator':
       case 'owner':
       client.sendMessage(id, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
       client.sendMessage(id, 'Nieh nomer pacarku...Eeh maksudku nomer owner/creator,chat ajah terus di save, nanti di back kok kak ><',MessageType.text { quoted: m } )
           await client.sendMessage(id, value,MessageType.text { quoted: m } )
           break    
       case 'lirik':
           lirik(value)
               .then(data => {
                   const { hasil: lirik } = data
                   let hasil = `📍lirik lagu📍 *${value}* \n\n\n${lirik}`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'fb':
           fb(value)
               .then(data => {
                   const { resultHD, resultSD } = data
                   let hasil = `Pilih resolusi nya sayang😙 \n\n\n HD ${resultHD} \n\n\n SD ${resultSD}`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break       
       case 'alay':
           alay(value)
               .then(data => {
                   const { hasil: alay } = data
                   client.sendMessage(id, alay,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sticker':
           const image = await client.downloadAndSaveMediaMessage(m)
           exec('cwebp -q 50 ' + image + ' -o temp/' + time + '.webp', (error, stdout, stderr) => {
               let result = fs.readFileSync('temp/' + time + '.webp')
               client.sendMessage(id, result, MessageType.sticker)
           })
           break
       case 'ocr':
           const media = await client.downloadAndSaveMediaMessage(m)
           readTextInImage(media)
               .then(data => {
                   client.sendMessage(id, `*Read Data Text in Image* \n\nHasil: \n\n${data}`,MessageType.text { quoted: m } );
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'igstalk':
           igStalk(value)
               .then(data => {
                   const { Username, Jumlah_Followers, Jumlah_Following, Name, Jumlah_Post } = data
                   client.sendMessage(id, '[WAIT] Stalking...⏳',MessageType.text { quoted: m } )
                   let hasil = `✨Biodata Instagram _${value}_ \n\n 🧶 *Username* : ${Username}_ \n 🌀 *Nama* : _${Name}_ \n 🌟 *Jumlah Followers* : _${Jumlah_Followers}_ \n 🌠 *Jumlah_Following* : _${Jumlah_Following}_ \n ⭐ *Jumlah_Post* : _${Jumlah_Post}_ `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   client.sendMessage(id, err,MessageType.text { quoted: m } )
               })
           break
           case 'cerpen':
           cerpen(value)
               .then(data => {
                   const { result } = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi1':
           puisi1(value)
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi2':
           puisi2(value)
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'infogempa':
           infogempa(value)
               .then(data => {
                   const { lokasi, kedalaman, koordinat, magnitude, waktu } = data
                   let hasil = `*INFO GEMPA* \n\ *Lokasi* : _${lokasi}_ \n *Kedalaman* : _${kedalaman}_ \n *Koordinat* : _${koordinat}_ \n *Magnitude* : _${magnitude}_ \n *Waktu* : _${waktu}_`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'chord':
           chord(value)
               .then(data => {
                   const { result } = data
                   let hasil = `Nih chord lagu *${value}* sayang ♥️\n\n  _${result}_ `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
   case 'kbbi':
           kbbi(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*${value}* menurut KBBI ️\n\n  _${result}_ `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break        
           
           case 'zodiak':
 zodiak(value)
               .then(data => {
                   const { lahir, ultah, usia, zodiak } = data
                   let hasil = `*Lahir* : _${lahir}_ n\n *Ultah* : _${ultah}_ \n *Usia* : _${usia}_:\n *Zodiak* : _${zodiak}_ `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'simi':
            simi(value)
               .then(data => {
                   const { result } = data
                   let hasil = ` ${result} `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'wikien':
           wikien(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*♻️According to Wikipedia🗿:* \n\n  _${result}_ `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'spamgmail':
           spamgmail(value)
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'spamcall':
           spamcall(value)
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'spamsms':
           spamsms(value)
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'joox':
           joox(value)
               .then(data => {
                   const { judul,mp3 } = data
                   let hasil = `*judul* : ${judul} \n*mp3* :${mp3}`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break    
           case 'renungan':
           renungan(value)
               .then(data => {
                   const { judul,isi,pesan } = data
                   let hasil = `Isi : ${isi} \njudul : ${judul} \npesan : ${pesan}`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break    
      case 'cuaca':
           cuaca(value)
               .then(data => {
                   const { tempat,suhu,angin,kelembapan,cuaca } = data
                   let hasil = `Tempat : ${tempat}\nCuaca : ${cuaca}\nAngin : ${angin}\nSuhu : ${suhu}\nKelembapan : ${kelembapan}`
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break         
 case 'covidcountry':
           covidcountry(value)
               .then(data => {
                   const { country, active, casesPerOneMillion, critical, deathsPerOneMillion, recovered, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest } = data
                   let hasil = `*Negara* : _${country}_ \n\n *Active* : _${active}_ \n *CasesPerOneMillion* : _${casesPerOneMillion}_ \n *Critical* : ${critical}\n *DeathsPerOneMillion* : _${deathsPerOneMillion}_ \n *Recovered* : _${recovered}_ \n *TestPerOneMillion* : _${testPerOneMillion}_ \n *TodayCases* : _${todayCases}_ \n *TodayDeath : _${todayDeath}\n *TotalCases* : _${totalCases}_ \n  *TotalTest* : _${totalTest}_ `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'infoanime':
           infoanime(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*INFO ANIME ${value} :* \n\n _${result}_  `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'gay':
           gay(value)
               .then(data => {
                   const { desc, persen } = data
                   let hasil = `*${desc} \n\n *Persen Gay Lo Su!!!* _${persen}_  `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'indohot':
           indohot(value)
               .then(data => {
                   const { judul, genre, durasi, url } = data
                   let hasil = `Tobat GOBLOK😙* \n\n *Judul* _${judul}_ \n\n *Status* _${genre}_ \n\n *Durasi* _${durasi}_ \n\n *Link Bosq* _${url}_  `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'filmanime':
           filmanime(value)
               .then(data => {
                   const { title, rating, sinopis, video } = data
                   let hasil = `*Film Anime ${value} :* \n\n *Judul* _${title}_ \n\n *Rating* _${rating}_ \n\n *Info* _${sinopsis}_ \n\n *Link Video* _${video}_  `
                   client.sendMessage(id, hasil, MessageType.txext)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'resep':
           resep(value)
               .then(data => {
                   const { title, user,  datePublished, dificulty, times, serving, bahan, tutor } = data
                   let hasil = `*Judul:* ${title}\n*Penulis:* ${user}\n*Rilis:* ${datePublished}\n*Level:* ${dificulty}\n*Waktu:* ${times}\n*Porsi:* ${servings}\n\n*Bahan-bahan:*\n${ingredient}\n\n*Step-by-step:*\n ${step} `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'namaninja':
           namaninja(value)
               .then(data => {
                   const { ninja } = data
                   let hasil = `Nama Ninja *${value}*💡:\n\n _${ninja}_ `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'cektanggal':
           cektanggal(value)
               .then(data => {
                   const { tanggal, keterangan } = data
                   let hasil = `Menurut tanggal ${value} adalah\n\n *Tanggal* : _${tanggal}_ \n *Keterangan* : _${keterangan}_  `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'bitly':
           bitly(value)
               .then(data => {
                   const { result } = data
                   let hasil = `Nih kak udah jadi☣️ :) \n\n${result} `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'cersex':
           cersex(value)
               .then(data => {
                   const { result } = data
                   let hasil = `CERSEX \n\n${result} `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
    case 'bucin':
           bucin(value)
               .then(data => {
                   const { desc } = data
                   let hasil = `_${desc}_ `
                   client.sendMessage(id, hasil,MessageType.text { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'map':
           map(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'waifu':
           waifu(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
        case 'waifu2':
           waifu2(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break  
       case 'randomcry':
           randomcry(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
              case 'randomkis':
           randomkis(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.imagegif, { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               }) 
           break    
          case 'texthunder':
           texthunder(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break     
      case 'loli':
           loli(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break     
        case 'logogaming':
           logogaming(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break       
           case 'ssweb':
           ssweb(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
         case 'memecreate':
           memecreate(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })    
           break  
   case 'gltext':
           gltext(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })        
          case 'blackpink':
           blackpink(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break   
     case 'cooltext':
           cooltext(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break      
           case 'ttp':
           ttp(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           case 'pokemon':
           pokemon(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'nekonime':
           nekonime(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
       case 'randomkis':
           randomkis(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })        
           break
           case 'ytmp3':
           mp3(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT sayang🖤',MessageType.text { quoted: m } )
                   client.sendMessage(id, buffer, ,MessageType.image { quoted: m } )
               })
               .catch(err => {
                   console.log(err)
               })
           break
         
      case 'gtts':
            rendom = `${Math.floor(Math.random() * 10000)}.mp3`
					random = `${Math.floor(Math.random() * 20000)}.ogg`
					if (args.length < 1) return client.sendMessage(from, 'Masukkan kode bahasanya juga mas e', MessageType.text {quoted: mek})
					const gtts = require('./lib/gtts')(args[1])
					const dtt = body.slice(8)
					if (!dtt) return client.sendMessage(from, 'Masukkan teks buat di jadiin suaranya juga mas e', MessageType.text {quoted: mek})
					if (dtt.length > 600) return client.sendMessage(from, 'Ngotak mas', MessageType.text {quoted: mek})
					gtts.save(rendom, dtt, function () {
						exec(`ffmpeg -i ${rendom} -ar 48000 -vn -c:a libopus ${random}`, (error, stdout, stder) => {
							let res = fs.readFileSync(random)
							client.sendMessage(from, res, MessageType.audio, {ptt: true})
							fs.unlinkSync(random)
							fs.unlinkSync(rendom)
						})
            break     
     case 'sticker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break       
       default:
           break
   }
})

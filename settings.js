//
//project_name : XPLOADER 
// @author : Joshuamambo1
// @youtube : https://www.youtube.com/@Joshuamambo1
// @instagram  : Joshuamambo1 
// @telegram : t.me/JoshKing01
// @github : tanyaMashamba01
// @tiktok : Joshuamambo1 
// @whatsapp : +263716729222
//*
//*
//=================================================//
const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//=================================================//

global.ytname = process.env.YT_NAME || "YT: Joshuamambo1"
//Enter your YouTube channel name

//=================================================//

global.socialm = process.env.MEDIA || "GitHub: tanyaMashamba01"
//Enter your GitHub or Instagram username 

//=================================================//

global.location = process.env.GL_INFO || "Zimbabwe, Gweru"
 //Type your location location

//=================================================//

global.botname = process.env.BOT_NAME || 'Joshuamambo1new' 
//Your desured bot name

//=================================================//

global.ownernumber = process.env.OWNER_NUMBER || '263716729222'
//Type your number here

//=================================================//


global.ownername = process.env.OWNER_NAME || 'Joshuamambo1new' 
//Type your name here

//=================================================//

global.websitex = process.env.YT_LINK || "https://youtube.com/@Joshuamambo1"

//=================================================//

global.wagc = process.env.GL_PUSH || "https://whatsapp.com/channel/0029VamSWUx77qVNJDy1Jf11"

//=================================================//

global.themeemoji = process.env.GL_EMOJI || '□'

//=================================================//

global.wm = process.env.GL_WM || "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭"

//=================================================//

global.packname = process.env.PACK_NAME || "Joshuamambo"
//The sticker pack name 

//=================================================//

global.author = process.env.AUTHOR_NAME || "Joshuamambo1Bot"
//The sticker author name 

//=================================================//

global.creator = process.env.GL_DEVS || "254754783972@s.whatsapp.net"

//=================================================//

global.xprefix = process.env.PREFIX || '/'
//Set your desired prefix

//=================================================//

global.premium = process.env.PREMIUM_VIP || ["254796180105"] 
//Premium User

//=================================================//

global.hituet = 0

//=================================================//

global.timezones = process.env.TIMEZONE || "Africa/Zimbabwe" //Don't edit this if you don't know!

//=================================================//

global.typemenu = process.env.MENU_DESIGN || 'v2' 
//Choose a menu type 'v1' for iOS and Android user's or 'v2' for Android user's only 

//=================================================//

global.typereply = process.env.REPLY_TYPE || 'v2' 
//Bot's reply type 'v1' to 'v3'

//=================================================//

global.autoblocknumber = process.env.AUTO_BAN || '' 
//set autoblock country code

//=================================================//

global.antiforeignnumber = process.env.AUTO_BLOCK || '' 
//set anti foreign number country code

//=================================================//

global.welcome = process.env.WELCOME_MSG || false 
//Set true to enable and false to disable welcome/left messages in groups

//=================================================//

global.anticall = process.env.ANTI_CALL || false 
//Set true to enable and false to disable bot blocking user's who call you

//=================================================//

global.autoswview = process.env.AUTO_STATUS_SEEN || false 
//Set true to enable and false to disable auto status view

//=================================================//

global.adminevent = process.env.ANNOUNCE_MSG  || false 
//show promote/demote messages

//=================================================//

global.groupevent = process.env.GROUP_ANNOUNCE_MSG || false 
//show group changes message in group chat

//=================================================//

//=================================================//

//Replies
global.mess = {
	limit: '*Your limit is used up!*',
	nsfw: '*Tell the admin to enable NSFW first!*',
    done: '*Done*',
    error: '*Sorry, I cannot perform that action!*',
    success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*',
    owner: '*Apologies, only my owner can use this command!*',
    group: '*This feature becomes available when you use it in a group!"',
    admin: '*You’ll unlock this feature with me as an admin!*',
    notadmin: '*This feature will work once you become an admin. A way of ensuring order!*'
}

//=================================================//

//thumbnail
global.thumb = fs.readFileSync('./XploaderMedia/theme/Xploader.jpg')

//=================================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Updated'${__filename}'`))
    delete require.cache[file]
    require(file)
})
//=================================================//

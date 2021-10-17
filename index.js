//Import all important packages
const Discord = require('discord.js');
const client = new Discord.Client();

const { MessageActionRow } = require('discord-buttons');
const disbut = require("discord-buttons")
disbut(client)

//Login into the bot
client.login("ODk5MDI4OTM5NzY1MzQ2MzA0.YWsz8g.Wsn3M0g7p-eKjBV3zkfA-5JSzdE")

//Status Details
const clientDetail = {
  guilds: client.guilds.cache.size,
  users: client.users.cache.size,
  channels: client.channels.cache.size
};

//Config the status of the bot
client.on("ready", (_ready) => {
    console.log("-- Bot Maker is online --")
    client.user.setActivity(`b!help | ${client.guilds.cache.size} Server`)

})

//Help Command
client.on("message", message => {
  if (message.content == "b!help"){
    setTimeout(function () {
      message.delete()
   }, 5000)
    var helpEmbed = new Discord.MessageEmbed()
      .setTitle("🚀 HOW TO CREATE A BOT")
      .setDescription("> To create a bot, type `b!create` and choose what you want.\n\n>>> After that, if you click a button the bot will send a ZIP file.\nDownload it and open it with **[Visual Studio Code](https://code.visualstudio.com/)**.\nCreate an **[application](https://discord.com/developers/applications)** for your bot and copy the token in the **BOT** section.")
      .setColor("#f4ff26")
      .setFooter("Bot Maker", client.user.displayAvatarURL())
      .setTimestamp()
    message.channel.send(helpEmbed)
  }
})


//Create Bots Command
client.on("message", message => {
    if (message.content == "b!create"){
      setTimeout(function () {
        message.delete()
     }, 5000)
        var createEmbed = new Discord.MessageEmbed()
          .setTitle("What Bot do you want?")
          .setDescription("📒 == Create a **COMMAND HANDLER** Discord Bot\n\n📕 == Create a **MODMAIL** Discord Bot\n\n📘 == Create a **JOIN TO CREATE** Discord Bot\n\n**In 40 seconds this message will be deleted**")
          .setColor("#f4ff26")
          .setFooter("Bot Maker", client.user.displayAvatarURL())
          .setTimestamp()
        let handlerButton = new disbut.MessageButton()
          .setLabel("Command Handler")
          .setStyle("grey")
          .setID("handlerButton")
        let modmailButton = new disbut.MessageButton()
          .setLabel("ModMail")
          .setStyle("grey")
          .setID("modmailButton")
          let joinButton = new disbut.MessageButton()
            .setLabel("Join To Create")
            .setStyle("grey")
            .setID("joinButton")
        var row = new MessageActionRow()
          .addComponent(handlerButton)
          .addComponent(modmailButton)
          .addComponent(joinButton)
        message.channel.send(createEmbed, row)
           .then(msg => {
             msg.delete({ timeout: 40000 })
            })
  }
})

//Send the Command Handler file
client.on("clickButton", async (button) => {
  button.reply.defer()
  if (button.id == "handlerButton"){
     button.message.channel.send("**Command Handler:**", { files: ["Handler.zip"]})
       .then(msg => {
         msg.delete({ timeout: 50000 })
 })

   var howToUseEmbed = new Discord.MessageEmbed()
     .setTitle("How to use")
     .setDescription("1. Download the ZIP file.\n2. Extract the ZIP file into a folder.\n3. Open a new terminal / cmd or powershell in this directory.\n4. Type in the terminal: `npm install` to install all needed packages.\n5. Type in the terminal: `node index.js`  *or*  `node .` and your bot will start\n\nNow invite your bot in your server.\n\nYou can see al commands of the bot with `(prefix) help`.")
     .setColor("#f4ff26")
     .setFooter("Bot Maker", + client.user.displayAvatarURL())
     .setTimestamp()
  
     await button.message.channel.send(howToUseEmbed)
       .then(msg => {
         msg.delete({ timeout: 50000 })
})
     await button.message.channel.send("This file will be deleted after **50 SECONDS**.\nPlease, make sure you download it!")
       .then(msg => {
         msg.delete({ timeout: 50000 })
  })
  }
})

//Send the ModMail file
client.on("clickButton", async (button) => {
  button.reply.defer()
  if (button.id == "modmailButton"){
     button.message.channel.send("**ModMail:**", { files: ["ModMail.zip"]})
       .then(msg => {
         msg.delete({ timeout: 50000 })
 })

   var howToUseEmbed = new Discord.MessageEmbed()
     .setTitle("How to use")
     .setDescription("1. Download the ZIP file.\n2. Extract the ZIP file into a folder.\n3. Open a new terminal / cmd or powershell in this directory.\n4. Type in the terminal: `npm install` to install all needed packages.\n5. Type in the terminal: `node index.js`  *or*  `node .` and your bot will start\n\nNow invite your bot in your server.\n\nYou can see al commands of the bot with `(prefix) help`.")
     .setColor("#f4ff26")
     .setFooter("Bot Maker", + client.user.displayAvatarURL())
     .setTimestamp()
  
     await button.message.channel.send(howToUseEmbed)
       .then(msg => {
         msg.delete({ timeout: 50000 })
})
     await button.message.channel.send("This file will be deleted after **50 SECONDS**.\nPlease, make sure you download it!")
       .then(msg => {
         msg.delete({ timeout: 50000 })
  })
  }
})

//Send the Join To Create file
client.on("clickButton", async (button) => {
  button.reply.defer()
  if (button.id == "joinButton"){
     button.message.channel.send("**Join To Create:**", { files: ["JoinToCreate.zip"]})
       .then(msg => {
         msg.delete({ timeout: 50000 })
 })

   var howToUseEmbed = new Discord.MessageEmbed()
     .setTitle("How to use")
     .setDescription("1. Download the ZIP file.\n2. Extract the ZIP file into a folder.\n3. Open a new terminal / cmd or powershell in this directory.\n4. Type in the terminal: `npm install` to install all needed packages.\n5. Type in the terminal: `node index.js`  *or*  `node .` and your bot will start\n\nNow invite your bot in your server.\n\nYou can see al commands of the bot with `(prefix) help`.")
     .setColor("#f4ff26")
     .setFooter("Bot Maker", + client.user.displayAvatarURL())
     .setTimestamp()
  
     await button.message.channel.send(howToUseEmbed)
       .then(msg => {
         msg.delete({ timeout: 50000 })
})
     await button.message.channel.send("This file will be deleted after **50 SECONDS**.\nPlease, make sure you download it!")
       .then(msg => {
         msg.delete({ timeout: 50000 })
  })
  }
})


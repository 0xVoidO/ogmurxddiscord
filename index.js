const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("with Hubert", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}report`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

    bot.on('ready', function() {
      console.log(bot.user.username);
  });

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

  if(cmd === `${prefix}withdraw`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Wrong format! Use: !withdraw @withdrawer <item>");
    let rreason = args.join(" ").slice(22);
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("official item")
    .setColor("#15f153")
    .addField("Request By", `${message.author} with ID: ${message.author.id}`)
    .addField("Item", rreason);

    let reportschannel = message.guild.channels.find(`name`, "withdraws");
    if(!reportschannel) return message.channel.send("withdraws");

    bot.on('ready', function() {
      console.log(bot.user.username);
  });

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;

}

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}anonping`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("You've sucesfully anonpingd somebody", "anonping sucessfull");

    bot.on('ready', function() {
      console.log(bot.user.username);
  });

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}nanoping`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("You've sucesfully anonpingd somebody", "anonping sucessfull");

    bot.on('ready', function() {
      console.log(bot.user.username);
  });

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}fight`){

    let licon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Official Battle Simulator")
    .setColor("#15f153")
    .setThumbnail(licon)
    .addField(winState);

    let foo = Math.floor(math.random()*2);
    if(foo === 0){
        let winState = 'You have won the battle!';
    }
    else
    {
        let winState = "You have lost the battle!";

        return message.channel.send(serverembed);
}
}

  if(cmd === `${prefix}aidanisgay`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("official player information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Aidan Countler", "is very gay");

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}pray`){

    let sicon = "http://cdn.differencebetween.net/wp-content/uploads/2016/10/Christ_by_Heinrich_Hofmann.jpg";
    let serverembed = new Discord.RichEmbed()
    .setDescription("official player information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("+1 prayer", "thank you for praying kind soul.");

    return message.channel.send(serverembed);
  }

  if(message.member.roles.find("name", "Administrator")){
    if(cmd === `${prefix}megapray`){
  let dicon = "https://www.mormonnewsroom.org/media/orig/jesuschristredrobe_large.jpg";
  let serverembed = new Discord.RichEmbed()
  .setDescription("official player information")
  .setColor("#8B0000")
  .setThumbnail(dicon)
  .addField("+5 prayers", "thank you for mega praying kind soul.");

  return message.channel.send(serverembed);
    }}

 if(cmd === `${prefix}megapray`){
  let dicon = "https://miro.medium.com/max/510/1*39h5GN7jaHvB6aJ7M9W7_w.png";
  let serverembed = new Discord.RichEmbed()
  .setDescription("official player information")
  .setColor("#8B0000")
  .setThumbnail(dicon)
  .addField("+0 prayers", "bad permissions");

  return message.channel.send(serverembed);

}


  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

});

bot.login(botconfig.token);

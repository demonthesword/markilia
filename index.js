const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = ".";

client.login("NTM0ODA5MTM2MTAyMjQ0MzYy.Dx_C9w.INgvL3PnytlQNb09Ls5cIuiiEzs");

client.on("ready", () => {console.log("prêt"); client.user.setGame("se faire respecter :D")});

client.on('message', message => {
    if(message.content === prefix + "bjr"){
        message.reply("Bonjour");
        console.log('Bonjour à été dis');
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("Mes Commandes")
        .setDescription("Bot de Markilia, mes commandes dispo sont:")
        .addField(".aide", "affiche les commandes du bot")
        .addField(".bjr", "dire bonjour au bot")
        .setFooter("Menu d'aide - Markilia")
        message.channel.sendMessage(help_embed);
        console.log("user menu help")
    }

    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("vous n'avez pas la permission! ");
        if(message.mentions.users.size === 0) {return message.channel.send("vous devez mentionner la personne à kick, merci")};
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick){ return message.channel.send("Je ne sais pas si l'utilisateur existe") };
        kick.kick().then(member => { message.channel.send("L'utilisateur a été kick")});
    }});

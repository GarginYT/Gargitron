const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    // If the message is in the roles channel
    if (message.channel.id == '575068038387335198') {
        // If the message is !lfg
        if (message.content == "!lfg") {
            let currentRole = message.guild.roles.get('575102690393063424');
            message.member.addRole(currentRole);
            message.channel.send("Success! You have been assigned the LFG role.");
        }
        // If the message is !updates
        if (message.content == "!updates") {
            let currentRole = message.guild.roles.get('575102622776950804');
            message.member.addRole(currentRole);
            message.channel.send("Success! You have been assigned the Updates role.");
        }
        // If the message is !video
        if (message.content == "!video") {
            let currentRole = message.guild.roles.get('575067316753137674');
            message.member.addRole(currentRole);
            message.channel.send("Success! You have been assigned the Video Announcements role.");
        }
        // If the message is !remove
        if (message.content == "!remove") {
            message.member.removeRoles(['575102690393063424', '575102622776950804', '575067316753137674']);
            message.channel.send("Your roles have been successfully removed!");
        }
        message.delete(3000);
    }
    if (message.content.startsWith("!purge")) {
        //message.channel.send("test");
        let splitCommand = message.content.split(" ");
        message.channel.fetchMessages({ limit: 1}).then(messages => {
            foreach(message i in messages){
                messages[i].delete(100);
            }
        });
        
    }
});

client.login(process.env.BOT_TOKEN);

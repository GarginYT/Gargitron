const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    logger.info('Gargitron activated.');
});



client.on('message', message => {
    // If the message is in the roles channel
    if (message.channel.id == '575068038387335198') {
        // If the message is !lfg
        if (message.content == "!lfg")
        {
            let role = message.member.guild.roles.get('575102690393063424');
            message.member.addRole(role);
        }
        // If the message is !updates
        if (message.content == "!updates")
        {
            let role = message.member.guild.roles.get('575102622776950804');
            message.member.addRole(role);
        }
        // If the message is !video
        if (message.content == "!video") {
            let role = message.member.guild.roles.get('575067316753137674');
            message.member.addRole(role);
        } 
        // If the message is !remove
        if (message.content == "!remove")
        {
            message.member.removeRoles(['575102690393063424', '575102622776950804', '575067316753137674']);
        }
        message.delete(100);
    }
});

client.login(process.env.BOT_TOKEN);

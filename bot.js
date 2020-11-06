const Discord = require('discord.js');
const client = new Discord.Client();

//const SWEAR_CIPHER = "123456789zxcvbnmasdfghjklq";
//const SWEAR_CHECK = "abcdefghijklmnopqrstuvwxyz";

client.on('guildMemberAdd', member => {
    // Adding the Members role to new members
    let currentRole = member.guild.roles.find('name', 'Members');
    member.addRole(currentRole);
    // Messaging Gargin the member count
    let gargin = member.guild.owner;
    gargin.send('New member ' + member.user.username + " has joined! The member count of the server is now " + member.guild.memberCount + "! Yay :D");
});

client.on('message', message => {
    // If the message is in the roles channel
    if (message.channel.id == '575068038387335198') {
        // If the message is !lfg
        if (message.content == "!lfg") {
            // Adding the LFG role
            let currentRole = message.guild.roles.get('575102690393063424');
            message.member.addRole(currentRole);
            message.channel.send("Success! You have been assigned the LFG role.");
        }
        // If the message is !updates
        if (message.content == "!updates") {
            // Adding the Updates role
            let currentRole = message.guild.roles.get('575102622776950804');
            message.member.addRole(currentRole);
            message.channel.send("Success! You have been assigned the Updates role.");
        }
        // If the message is !video
        if (message.content == "!video") {
            // Adding the Video Announcements role
            let currentRole = message.guild.roles.get('575067316753137674');
            message.member.addRole(currentRole);
            message.channel.send("Success! You have been assigned the Video Announcements role.");
        }
        // If the message is !stream
        if (message.content == "!stream") {
            // Adding the Stream Announcements role
            let currentRole = message.guild.roles.get('774343304476098580');
            message.member.addRole(currentRole);
            message.channel.send("Success! You have been assigned the Stream Announcements role.")
        }
        // If the message is !remove
        if (message.content == "!remove") {
            // Removing the roles
            message.member.removeRoles(['575102690393063424', '575102622776950804', '575067316753137674']);
            message.channel.send("Your roles have been successfully removed!");
        }
        // Deleting the message in 3 seconds
        message.delete(3000);
    }

    // Clean chat filter
    if (message.channel.id == '577242141126819860') {
        console.log ("recieved");
        let currentMessage = profanityCipher(message.content);
        if (checkProfanity(currentMessage) == true) {
            message.delete();
        } else {
            console.log ("failed");
        }
    }

    if (message.member.roles.has('575056660997865475')) {
        // Admin and Mod commands go here
        if (message.content.startsWith("!purge")) {
            // Spliting the command and finding the number after !purge
            let splitCommand = message.content.split(" ");
            // Deleting the messages
            message.channel.bulkDelete(splitCommand[1]).catch(error => message.channel.send('Error: ${error}'));
        }

        if (message.member.roles.has('575053814047178782')) {
            // Only Admin commands go here
        }
    }
});

// For if anyone ever looks through this source code. No need to see a bunch of swearing lol.
function profanityCipher(originalMessage) {

    let splitCode = "123456789zxcvbnmasdfghjklq";
    let splitCodeArray = splitCode.split('');
    
    let splitCodeAlt = "abcdefghijklmnopqrstuvwxyz";
    let splitCodeAltArray = splitCodeAlt.split('');

    let newMessage = "";

    for (var i = 0; i < originalMessage.length; i++) {
        let currentCharacter = originalMessage.charAt(i);

        if (splitCodeAltArray.indexOf(currentCharacter).toLowerCase !== -1) {
            let translatedCharacter = splitCodeArray[splitCodeAltArray.indexOf(currentCharacter.toLowerCase())];
            newMessage = newMessage + translatedCharacter;
            continue;
        }
        newMessage = newMessage + currentCharacter;
    }
    console.log (newMessage);
    return newMessage;
}

function checkProfanity(code) {

    let swears = ["6g3x", "d89f", "29f38", "mgddl", "3gbf", "1dd", "493x", "3n3x"];

    for (var i = 0; i < swears.length; i++) {
        let swear = swears[i];
        if (code.includes(swear)) {
            return true;
        }
    }
}

client.login(process.env.BOT_TOKEN);

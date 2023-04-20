const Discord = require('discord.js')
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
    ],
});

const TOKEN = 'PUT THE DISCORD BOT TOKEN HERE';
const prefix = "PUT THE PREFIX HERE"



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
 if (message.content.startsWith(prefix + "log")) {
     message.reply({
      files: [{
          attachment: './tchat-log.txt',
          name: 'logs.txt'}]})};
   if (message.content.startsWith(prefix + "modlog")) {
     message.reply({
      files: [{
          attachment: './mod-log.txt',
          name: 'logs.log'}]})};
});

client.on('messageCreate', message => {
  const logMessage = `${new Date().toLocaleString()} - Message - ${message.author.tag} in ${message.channel.name}: ${message.content}\n`;
  fs.appendFile('tchat-log.txt', logMessage, (err) => {
    if (err) throw err;
  });
});

client.on('applicationCommandCreate', command => {
  const logMessage = `${new Date().toLocaleString()} - Application command created - ${command.name}\n`;
  fs.appendFile('autres-log.txt', logMessage, (err) => {
    if (err) throw err;
  });
});

client.on('applicationCommandDelete', command => {
    const logMessage = `${new Date().toLocaleString()} - Application command deleted - ${command.name}\n`;
    fs.appendFile('autres-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
});

client.on('applicationCommandUpdate', (oldCommand, newCommand) => {
    const logMessage = `${new Date().toLocaleString()} - Application command updated - ${oldCommand.name} => ${newCommand.name}\n`;
    fs.appendFile('autres-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
});

client.on('channelCreate', channel => {
    const logMessage = `${new Date().toLocaleString()} - Channel created - ${channel.name}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
});

client.on('channelDelete', channel => {
    const logMessage = `${new Date().toLocaleString()} - Channel deleted - ${channel.name}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
});

client.on('channelPinsUpdate', (channel, time) => {
    const logMessage = `${new Date().toLocaleString()} - Channel pins updated - ${channel.name} at ${time}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
});

client.on('channelUpdate', (oldChannel, newChannel) => {
    const logMessage = `${new Date().toLocaleString()} - Channel updated - ${oldChannel.name} => ${newChannel.name}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
});

client.on('emojiCreate', emoji => {
    const logMessage = `${new Date().toLocaleString()} - Emoji created - ${emoji.name}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
});

client.on('emojiDelete', emoji => {
    const logMessage = `${new Date().toLocaleString()} - Emoji deleted - ${emoji.name}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
});

client.on('emojiUpdate', (oldEmoji, newEmoji) => {
    const logMessage = `${new Date().toLocaleString()} - Emoji Updated - ${oldEmoji.name} -> ${newEmoji.name} (${newEmoji.guild.name})\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('guildBanAdd', (guild, user) => {
    const logMessage = `${new Date().toLocaleString()} - Member Banned - ${user.tag} (${user.id}) in ${guild.name}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('guildMemberAdd', member => {
    const logMessage = `${new Date().toLocaleString()} - Member Joined - ${member.user.tag} (${member.id})\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('guildMemberRemove', member => {
    const logMessage = `${new Date().toLocaleString()} - Member Left - ${member.user.tag} (${member.id})\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('inviteDelete', invite => {
    const logMessage = `${new Date().toLocaleString()} - Invite Deleted - ${invite.code}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('messageDelete', message => {
    const logMessage = `${new Date().toLocaleString()} - Message Deleted - ${message.author.tag} in ${message.channel.name}: ${message.content}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('messageUpdate', (oldMessage, newMessage) => {
    const logMessage = `${new Date().toLocaleString()} - Message Updated - ${oldMessage.author.tag} in ${oldMessage.channel.name}: ${oldMessage.content} -> ${newMessage.content}\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('roleCreate', role => {
    const logMessage = `${new Date().toLocaleString()} - Role Created - ${role.name} (${role.id})\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('roleDelete', role => {
    const logMessage = `${new Date().toLocaleString()} - Role Deleted - ${role.name} (${role.id})\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });
  
  client.on('roleUpdate', (oldRole, newRole) => {
    const logMessage = `${new Date().toLocaleString()} - Role Updated - ${oldRole.name} -> ${newRole.name} (${newRole.guild.name})\n`;
    fs.appendFile('mod-log.txt', logMessage, (err) => {
      if (err) throw err;
    });
  });

  client.login(TOKEN)

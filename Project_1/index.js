// Create a discord bot
//..will be able to greet a person
//Language parser
//Hello (English)- Hi
//Tere (Estonia)- Terevist
//Bawo (Yoruba)- Se dadi
//Privet(Russian)- kak dila

const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/* client.on('message', msg => {
  if (msg.content === 'Privet') {
    msg.reply('kak dila');
  }
      else if (msg.content === 'Tere!') {
        msg.reply('Terevist');
      }
    else if (msg.content === 'Bawo') {
        msg.reply('Se daa ni');  
    } 
        
    else if (msg.content === 'Bawo') {
        msg.reply('Se daa ni') 
        }

    else if (msg.content === 'ping') {
      msg.reply('pong');
    }
  }); */
  
  client.on('message', msg => {
    if(!msg.author.bot){
         switch(msg.content){
            case 'Hello':
                 msg.reply('Hi');
                 break;
            case 'Tere':
                 msg.reply('Tervist');
                 break;
            case 'Privet':
                 msg.reply('Privet');
                 break;     
            default:
                 msg.reply('Check again!');
         };
     }
});
  
client.login('NzE3MDU5NDQwMTI5NDc0Njkw.XtU0Aw.qd4HKrdGjoj08_OuDstlD-vNZio');
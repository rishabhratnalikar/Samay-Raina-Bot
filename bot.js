const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () =>{
  
  console.log('Samay Raina Bot is online')
  
})

client.on('message', msg=>{
  
  
  if(msg.content ===  "fake laugh"){
    msg.channel.send('https://tenor.com/view/samay-raina-fake-laugh-comicstaan-samay-raina-laugh-samay-raina-fake-laugh-gif-18576907')
  }
  
  if(msg.content ===  "kuch bhi"){
  msg.channel.send('https://tenor.com/view/comicstaan-comicstaan-season2-amazon-prime-video-amazon-prime-video-in-comicstaan2-gif-14558803')
  }
  
  if(msg.content ===  "welcome"){
    msg.channel.send('https://tenor.com/view/samay-samay-raina-witamin-d-chess-streamer-gif-18479173')
  }
  
  if(msg.content ===  "wait karo"){
    msg.channel.send('https://tenor.com/view/comicstaan-comicstaan-season2-amazon-prime-video-amazon-prime-video-in-comicstaan2-gif-14558674')
  }
 
  if(msg.content ===  "besharamo"){
    msg.channel.send('https://tenor.com/view/samay-raina-comicstaan-standup-comedy-standup-indian-comedian-gif-17498964')
  }
  
})

client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 

//heroku
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setPresence({ game: { name: 'Canal TronerBoy', type: 3, url: 'https://www.youtube.com/watch?v=PiCl7tuTR3Q'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // coamdno ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }

  if(comando === "awdawt") {
    const m = await message.channel.send("Youtube?");
    m.edit(`embed=discord.Embed()
    embed.set_author(name="Canal Tronerboy", url="https://www.youtube.com/user/GamerTronerboy",, icon_url="https://www.youtube.com/user/GamerTronerboy")
    embed.set_thumbnail(url="https://yt3.ggpht.com/a/AGF-l7_Qr0VFJoc55ngihDWDCOwIDhlAN9AnL__iIg=s900-mo-c-c0xffffffff-rj-k-no")
    embed.add_field(name=Canal Troneboy, value=Já viu meu canal no Youtube? Se inscreva-se em : , inline=True)
    embed.add_field(name=, value=https://www.youtube.com/user/GamerTronerboy, inline=True)
    embed.set_footer(text="2019")
    await self.bot.say(embed=embed)`);
  }
   
  if(comando == "yt"){
    const embed = {
        "title": "Canal TRONERBOY",
        "description": "Já assistiu meu ultimo video?  [Acesse aqui](https://www.youtube.com/results?search_query=Tronerboy) e fique por dentro de todo meu conteúdo de Games!. ```\nInteraja, jogue, escute suas playlists e se divirta-se em nosso discord do Canal!\nConvide seus amigos em: https://discord.gg/Nq2NPr```",
        "url": "https://www.youtube.com/results?search_query=Tronerboy",
        "color": 13632027,
        "timestamp": "2019-06-15T16:32:12.988Z",
        "footer": {},
        "thumbnail": {},
        "author": {
          "name": "TronerBOT",
          "url": "https://discordapp.com",
          "icon_url": ""
        },
        "fields": []
      };
      message.channel.send("`Canal Tronerboy`", { embed });
    }

    if(comando == "453434325463985"){
        message.channel.send("***Divulgue Aqui, seu Canal no Youtube/Video.\nRespeite sua hora.\nNão floode e não divulgue conteúdo gore ou obsceno.***")
    }

    if(comando == "nowsend"){
        message.channel.send(":fire:  **Este chat ira ser um canal destinado para os prefix dos   @𝐁𝐎𝐓  :fire:\n\n@[🔧]  Loritta Bot│ +Comando Moderação,Musica\n\n@[🔧]  FredBoat│ ;;Comando Musica\n\n@[🔧]  TronerBOT │ !Comando Ping , YT etc.\n\nMais em breve. @everyone**")
    }
    
    if(comando == "hudao"){
      message.channel.send("hudao e gay irmao")
    }


});

client.login(config.token);



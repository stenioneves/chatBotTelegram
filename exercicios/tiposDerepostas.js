const env =require('../.env')
const Telegraf =require("telegraf")
const bot = new Telegraf(env.token)
/*
Tipos de respostas com fotos,videos,localização
*/

bot.start(async ctx=>{
 await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!😆`)
 await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
  <i>de várias</i><code>formas</code><pre>possíveis</pre>
  <a href="https://google.com">Google</a>`) 
  await  ctx.replyWithMarkdown('Destacando mensagem *Markdown*'+
'_de várias_ `formas` ```possíveis```' +
 '[google](https://www.google.com)')
 await ctx.replyWithPhoto({source:`${__dirname}/Abstract-Music-S-Wallpaper.jpg`},{caption:'Musica !!!'})
 await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg',{caption:'Que estilo!!'})
 await ctx.replyWithPhoto({url:'http://files.cod3r.com.br/curso-bot/gato2.jpg'})
 await ctx.replyWithLocation(-22.649837,-43.247236)
 await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()
/*
 * Desafio proposto com alterações mais avançadas do que solicitadas.
 * Incluido array e o novo for each do Ecmascript 6
 */
const env =require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx=>{
    const from = ctx.update.message.from
    console.log(from)
      //iteração dos usuarios cadastrados 
      use= false 
    for(const id of env.user ){
    if (from.id==id){
        use=true
        break
    }
      }  
      if(use){
      ctx.reply('Ao seu dispor, mestre !')
        
    } else{
        ctx.reply(`Sinto muito ${from.first_name}, mas eu só fala com o meu mestre!`)
    }
})

bot.on('text',async(ctx,next)=>{

   await ctx.reply('Desculpe, não posso ajudar!')
    next()
})
bot.on('text',async(ctx,next)=>{

   await ctx.reply('Favor entrar em contato com o meu criador @stenioneves')
    next()
})

bot.startPolling()
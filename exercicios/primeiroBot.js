/*
Primerio bot para teste
*/

const env =require('../.env')
const Telegraf = require('telegraf')
const bot =new Telegraf(env.token)

bot.start((ctx,next)=>{

    const from =ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo, ${from.first_name}!`)
    next()
})
bot.start(ctx=>{
    ctx.reply(`Sou primeiro bot de teste,logo não posso te ajudar :(`)
})

bot.on('text',async(ctx,next)=>{

   await ctx.reply('Mid1')
    next()
})
bot.on('text',async(ctx,next)=>{

   await ctx.reply('Mid2')
    next()
})
bot.startPolling()
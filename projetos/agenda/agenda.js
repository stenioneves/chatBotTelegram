const env =require('../../.env')
const Telegraf = require('telegraf')
const Extra= require('telegraf/extra')
const Markup =require('telegraf/markup')
const moment= require('moment')
const bot = new Telegraf(env.token)

bot.start(ctx=>{
    const name =ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo ${name}!`)
})
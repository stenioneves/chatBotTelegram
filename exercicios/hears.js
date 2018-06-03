const env = require('../.env')
const Telegraf = require('telegraf')
const moment= require('moment')
const bot = new Telegraf(env.token)

bot.hears('stenio',ctx=>ctx.reply('Esse é o nome do meu criador '))
bot.hears(['me ajuda','Me ajuda','Ajuda','ajuda'],ctx=>ctx.reply(`Não! estou sem humor para te ajudar 😠`))
bot.hears(['fígado','chuchu'],ctx=>ctx.reply('Passo!'))
bot.hears(/burguer/i,ctx=>reply('Quero!'))
bot.hears('🐷',ctx=>ctx.reply('Bacaon 😋'))
bot.hears([/brocolis/i,/salada/i],ctx=>ctx.reply('Passo!'))
bot.hears(/(\d{2}\/\d{2}\/\d{4})/,ctx=>{
    moment.locale('pt-BR')
    const data = moment(ctx.match[1],'DD/MM/YYYY')
    ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`)
})
bot.hears([/oi/i,/ola/i,/opa/i],ctx=>{
    ctx.reply('O que você quer? Estou muito ocupdo analisando dados')
    
})

bot.startPolling()


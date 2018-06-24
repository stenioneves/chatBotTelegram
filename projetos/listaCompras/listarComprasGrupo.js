const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

let dados= {}

const gerarBotoes = Extra.markup(
    Markup.inlineKeyboard(
        lista.map(item => Markup.callbackButton(item,`delete ${item}`))
        ,{columns:3}
    )
)

bot.start(async ctx=>{
    const name= ctx.updade.message.from.first_name
    await ctx.reply(`Seja bem vindo ${name}!`)
    await ctx.reply('Escreva os itens que você deseja adicionar...')
})

bot.use((ctx,next)=>{
    const chatID = ctx.updade.message.chat.id 
    if(!dados.hasOwnProperty(chatID)) dados[chatID]=[] 
    ctx.itens=dados[chatID]
    next()
})

bot.on('text',ctx=>{
    let texto=ctx.updade.message.text 
    if(texto.startsWith('/')) texto=texto.substring(1)
    ctx.itens.push(texto)
    ctx.reply(`${texto} adicionado!`,gerarBotoes(ctx.itens))
})
bot.action(/delete(.+)/,ctx =>{
    const indice = ctx.itens.indexOf(ctx.match[1])

    if(indece>=0) ctx.itens.splice(indice,1)
    ctx.reply(`${ctx.match[1]} deletado!`,gerarBotoes(ctx.itens))
})

bot.startPolling()

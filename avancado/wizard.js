const env = require('../.env')
const Telegraf = require('telegraf')
const Composer = require('telegraf/composer')
const session= require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra =require('telegraf/extra')
const Markup = require('telegraf/markup')
const WizardScene =require('telegraf/scenes/wizard')


let descricao=''
let preco= 0
let data=null

const confirmacao = Extra.markup(Markup.inlineKeyboard([
 Markup.callbackButton('Sim','s'),
 Markup.callbackButton('Não','n'),

]))

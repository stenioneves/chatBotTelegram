const env = require('../.env')
const Telegraf = require('telegraf')
const axios= require('axios')
const bot = new Telegraf(env.token)
/*
Obtendo arquivos enviados para bot via api do telegram
*/
bot.on('voice',async ctx=>{
  const id= ctx.update.message.voice.file_id //obtem o id do arquvivo de voz
  const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)//solicita o arquivo
  ctx.replyWithVoice({url:`${env.apiFileUrl}/${res.data.result.file_path}`})//resposta com o arquivo
})
bot.on('photo',async ctx=>{
    const id = ctx.update.message.photo[0].file_id
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    ctx.replyWithPhoto({url: `${env.apiFileUrl}/${res.data.result.file_path}`})
})
bot.startPolling()
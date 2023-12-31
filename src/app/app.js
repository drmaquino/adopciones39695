import express from 'express'
import { apiRouter } from '../routers/api.router.js'
import cookieParser from 'cookie-parser'
import { COOKIE_SECRET } from '../config/autenticacion.config.js'
import { webRouter } from '../routers/web.router.js'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(COOKIE_SECRET))
// app.use((req, res, next) => { console.log(`${req.method} ${req.url} (pid: ${process.pid})`); next() })

app.get('/nuevo', (req, res) => {
  res.send('hola mundo!')
})

app.use('/api', apiRouter)
app.use('/', webRouter)
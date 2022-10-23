import express from 'express'

const app = express()

app.get('/Login', (req, res) => res.send('iniciando sesion'))

app.listen(3000)
console.log('Server running on port 3000')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_resultado'
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log("┬íConectado a MongoDB!")
})
module.exports = db
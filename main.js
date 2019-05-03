const PORT = process.env.PORT || 1337
const app = require('./server')

app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
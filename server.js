require('dotenv').config()
require('./config/database')
// running this will connect our database to our MERN app
const app = require('./app-server');
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`${PORT} points to Ravenclaw`)
})
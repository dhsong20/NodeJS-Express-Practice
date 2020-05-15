const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const fortune = require("./lib/fortune")

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
}))
app.set('view engine', 'handlebars'
	)

const port = process.env.PORT || 3000


app.use(express.static(__dirname + '/public'))

// home page
app.get('/', (req, res) => {
	// res.type('text/plain')
    // res.send('Meadowlark Travel Home Page')
    
    res.render('home')
})

// about page
app.get('/about', (req, res) => {
	// res.type('text/plain')
    // res.send('About Meadowlark Travel')
    
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', { fortune: fortune.getFortune() })
})

// 404 page
app.use((req, res) => {
	// res.type('text/plain')
    // res.send('404 - Not Found')
    
    res.status(404)
    res.render('404')
})

// 500 page
app.use((err, req, res, next) => {
	// console.error(err.message)
	// res.type('text/plain')
    // res.send('500 - Server Error')
    
    res.status(500)
    res.render('500')
})

app.listen(port, () => {
	console.log(

		`Express started on http://localhost:${port}`

	)
})
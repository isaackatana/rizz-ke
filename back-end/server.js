const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require("./routes/index.js")

app.set('view engine', 'ejs');
app.set('views', __dirname + './views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// Define routes

app.use('/', indexRouter);

const users = require('./users.js')

app.get('/api/users', (req, res)=>{
  res.render(users);
})

// Start the server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

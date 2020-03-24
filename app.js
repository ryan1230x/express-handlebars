const express=require('express');
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');
const path=require('path');

//Database
const db=require('./config/database');

db.authenticate()
    .then(()=> console.log('Database connected'))
    .catch(err=>console.error('Error: '+err))

const app=express();

// Handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars');

//body parser
app.use(bodyParser.urlencoded({extended:false}))
//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// index router
app.get('/', (req, res) => res.render('index', {layout:'landing'}));

// Route to Gigs
app.use('/gigs', require('./routes/gigs'));

const PORT=process.env.PORT || 4000;
app.listen(PORT, console.log(`Server started on port ${PORT} || http://localhost:4000`));
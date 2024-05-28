const express = require ("express");
const mongoose = require ("mongoose");
const path = require ('path');
const bodyParser = require ('body-parser');
const { type } = require("os");

mongoose.connect("mongodb+srv://zero:zero@cluster0.xggpvf3.mongodb.net/ZERO")

const app = express();
const port = 3000;



app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));


const userSchema = new mongoose.Schema({
    email: {type: String, required : true},
    password: {type: String, required : true}
})

const User = mongoose.model('User', userSchema);

[
    {
        "id": 1,
        "name": "Product 1",
        "price": 19.99,
        "description": "Elegant Formal Pakistani Dress in White Shade a Beautiful Pakistani Dress with breathtaking adornments on it.",
        "imageUrl": "/images/product1.jpg"
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 29.99,
        "description": "Elegant Formal Pakistani Dress in White Shade a Beautiful Pakistani Dress with breathtaking adornments on it.",
        "imageUrl": "/images/product2.jpg"
    },
    // Add more products as needed
]




app.listen(port, ()=>{
    console.log("app is running on port 3000");
})



app.get('/', (req, res) => {
    res.render('index'); // Render index.ejs
});

app.get('/cart', (req, res) => {
    res.render('cart'); // Render cart.ejs
});

app.get('/about', (req, res) => {
    res.render('about'); // Render about.ejs
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Render contact.ejs
});

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });

    newUser.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => res.status(500).send('Error registering user'));
});


app.get('/products-details', (req, res) => {
    res.render('products-details'); // Render products-details.ejs
});

app.get('/products', (req, res) => {
    res.render('products'); // Render products.ejs
});

app.get('/success', (req,res) =>{
    res.render('success');
})

app.get('/cancel', (req,res) =>{
    res.render('cancel')
})




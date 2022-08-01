const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/user'); 
const Product = require('./db/product');


const app = express();
app.listen(5000);
app.use(express.json());
app.use(cors());

let UserData={};

app.post('/signup', async (request, response)=>{
    let user = new User(request.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    UserData = result;
    response.send(result);

});

app.post('/login', async(request, response)=>{

    let checkUser = await User.findOne(request.body);
    
    if(request.body.username !== undefined && request.body.password !== undefined && request.body.username !== '' && request.body.password !== ''){
        if(checkUser === null){
            UserData = 'Some Error Occured'
            checkUser = {"username":null, "password":null};
            response.send({"username":null, "password":null});
        }else{
            UserData = checkUser;
            response.send(checkUser);
        }
    }else{
        UserData = 'Some Error Occured'
        checkUser = {"username":null, "password":null};
        response.send({"username":null, "password":null});
    }
});

app.get('/profile', (request, response)=>{
    response.send(UserData);
})

app.get('/products', async (request, response)=>{
    let products = await Product.find();
    response.send(products);
});

app.post('/add', async (request, response)=>{
    let newProduct = new Product(request.body);
    let result = await newProduct.save();
    response.send(result);
})
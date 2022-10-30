const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/user'); 
const Product = require('./db/product');


const app = express();
app.listen(5000);
app.use(express.json());
app.use(cors());

let UserData = {};

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

    console.log(typeof result._id);
    let id = (result._id).toString();
    console.log(id);
    let update = await Product.findByIdAndUpdate(result._id, {
        $set:{userId: result._id}
    });

    let find = await Product.findById(result._id);

    console.log("This is the update", update);
    // console.log("This is updated findfind)
    response.send(result);

})

app.post('/add-to-cart', async(request, response)=>{


    console.log(request.body);
    console.log(request.body.user);

    const find = await User.findOne({User: {'username':request.body.username}});
    console.log(find);

    let updatedRecordResult = await User.updateOne(
        {
            User:{"username":request.body.username}
        },
        {
            $set: {'CartItems': request.body.CartItems}
        }
    );

    response.send(updatedRecordResult);

});

app.delete('/delete-product', async (request, response)=>{

    console.log(request.body);
    let product = await Product.findOneAndDelete(request.body);
    response.send(product);
});

app.get('/search/:key', async(request, response)=>{

    let FindResult = await Product.find({
        "$or":[
            {productName: {$regex:request.params.key, $options: 'ig'}},
            {productBrand: {$regex:request.params.key, $options: 'ig'}}
        ]
    });
    response.send(FindResult);
});

app.put('/update', async(request, response)=>{
    let updateResult = await Product.findByIdAndUpdate(request.body.id, {
        $set:{  
            "productName":request.body.NewProductName,
            "productBrand":request.body.NewProductBrand,
            "productPrice":request.body.NewProductPrice,
            "productDeliveryType":request.body.NewProductDeliveryType,
        }
    });
    console.log(updateResult);
    response.send(updateResult);
});

app.get('/find-product-to-update/:id', async(request, response)=>{
    let result = await Product.findById(request.params.id);
    response.send(result);
});

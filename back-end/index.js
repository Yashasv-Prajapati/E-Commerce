const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('./db/config');
const User = require('./db/user'); 
const app = express();


app.listen(5000);
app.use(express.json());
app.use(cors());

let UserData={};

app.post('/signup', async (request, response)=>{
    let user = new User(request.body);
    let result = await user.save();
    result = result.toObject();
    console.log(result.email);
    delete result.password;
    console.log(result);
    UserData = result;
    response.send(result);

});

app.post('/login', async(request, response)=>{

    let checkUser = await User.findOne(request.body);
    
    if(request.body.username !== undefined && request.body.password !== undefined && request.body.username !== '' && request.body.password !== ''){
        if(checkUser === null){
            checkUser = {"username":null, "password":null};
            response.send({"username":null, "password":null});
        }else{
            UserData = checkUser;
            response.send(checkUser);
        }
    }else{
        checkUser = {"username":null, "password":null};
        response.send({"username":null, "password":null});
    }
});

app.get('/profile', (request, response)=>{
    response.send(UserData);
})
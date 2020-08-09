const express = require('express');
const mongoose = require("mongoose");

const app = express();
mongoose.connect('mongodb+srv://momin:forgetpassword@shopinglist.adn8v.mongodb.net/momin?retryWrites=true&w=majority',
	{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
		console.log("mongodb connected");
	}).catch(err => {
		console.error(err);
			})

app.get('/',(req,res)=>{
	res.send("hello shopping list of momin rafiq");
})

app.listen(5000,() => {
	console.log("app is listening at port 5000");
})


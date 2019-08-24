//import modulow do serwera
let express = require("express");
let bodyParser = require("body-parser");

//tworzymy obiekt aplikacji
let app = express();

//zdefiniujemy metody, ktore bedziemy uzywac
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//uruchomienie silnika szablonow ejs
app.set("view engine","ejs");

//uruchomienie serwera na wybranym porcie

app.listen(8080);
console.log("uruchomienie serwera node na porcie 8080");

let posts=[];

app.get("/",function(req,res){
	
	res.render("pages/index",{
		posts: posts
	});
	
});

app.get("/insertPost",function(req,res){
	
	res.render("pages/insertPost");
	
});

app.post("/insertPost",function(req,res){
	
	obj = {
		title: req.body['title'],
		description: req.body['description']
	}
	
	posts.push(obj);
	console.log(posts);
	res.render("pages/index",{
		posts: posts
	});
});

app.get("/details",function(req,res){
	
	let id=req.query.id;
		res.render("pages/details",{
		post: posts[id]
		});
	
});

app.get("/remove",function(req,res){
	
	let id=req.query.id;
	posts.splice(id,1);
	res.render("pages/index",{
		posts: posts
	});
		
	
});

app.get("/edit",function(req,res){
	
	let id=req.query.id;
	let item=posts[id];
	res.render("pages/edit",{
		item: item,
		id:id
	});
});

app.post("/edit",function(req,res){
	
	obj = {
		title: req.body['title'],
		description: req.body['description']
	}
	let id=req.body['id'];
	posts[id]=obj;
		res.render("pages/index",{
		posts: posts
	});
	
});


	
	

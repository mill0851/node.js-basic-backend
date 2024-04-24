# Creating a Basic Backend With Express

Prerequisites:
install npm and node.js. The easiest way to do this is through the installer on the official website, which you can find [here](https://nodejs.org/en/download). 


This tutorial will assume that you understand how to initialize a react app. If you dont here is the script to do so:

npm init react-app app-name

If you require further instruction explore my "web_dev_tutorials" or "personal_website" repositories. 


1) initialize app:
   
 *npm init*
 
 This will create the required package.json file through an interactive process simply follow the prompts. 
 


3) install express:

 npm install express --save

 this will intall express and the --save tag will add it as a dependancy in your package.json file automatically. 



3) create index.js (or whatever you named it) file and add the following code: 

 var express = require("express"); //Uses the express variable to require express
 var app = express(); //initializes express using the app variable
 app.listen(3000, () => {
  console.log("Server running on port 3000"); //tells our app what port to run on
 }); 


4) in the same file add your first request handler (above the previous code): 

 app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]); //Perform simple GET request
 }); 

5) run application:

 node index.js 

6) View GET request @ http://localhost:3000/url

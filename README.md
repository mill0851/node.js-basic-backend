# Creating a Basic Backend With Express

Prerequisites:
install npm and node.js. The easiest way to do this is through the installer on the official website, which you can find [here](https://nodejs.org/en/download). 


This tutorial will assume that you understand how to initialize a react app. If you dont here is the script to do so:

`npm init react-app app-name`

If you require further instruction explore my "web_dev_tutorials" or "personal_website" repositories.

Here is a map of what each branch covers:
* main: installing node.js and setting up GET request
* implementation: implementing GET request by making an API call from the front end
##
1) initialize app:
   
 `npm init`
 
 This will create the required package.json file through an interactive process simply follow the prompts. 
##
3) install express:

 `npm install express --save`

 this will intall express and the --save tag will add it as a dependancy in your package.json file automatically. 
##
3) create index.js (or whatever you named it) file and add the following code: 

 `var express = require("express"); //Uses the express variable to require express`
 `var app = express(); //initializes express using the app variable`
 `app.listen(3000, () => {
  console.log("Server running on port 3000"); //tells our app what port to run on
 });`
 ##
4) in the same file add your first request handler (above the previous code): 

 `app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]); //Perform simple GET request
 });`
##
5) run application:

 `node index.js`
##
6) View GET request @ http://localhost:3000/url
##
At this point you have implemented a basic backend useing node.js and expres. This repository contains a basic front end with a mock "Register" page as well as a backend. I have implemented a POST request that
sends the form data to the basckend and writes the data to a JSON file. It is your job to implement the following features:

* Do some verification, make sure the email data is in email format, make sure that both password fields match each other. If they do not throw an error and alert the user that they have failed to fill out the form correctly.
* Create a "Login" page that searches the JSON containing the users and tries to find a match, if there is a match navigate the user to a new page.
* Do some searching, if a user tries to register but there is already an account with the desired email let them know and navigate them to the login page.
* Add a page called "Users" that lets one search for users by email, and returns something indicating whether the user exists.

Accomplishing these tasks should give you a solid foundation in full stack development and jump start you on any projects of your own. You are ENCOURAGED to use ChatGPT and Copilot as much as needed. ALSO, dont worry about making the webpages pretty. Practice your front end page structure but no need to worry about the details. Have fun!

<img src='client/src/images/mainl.png' width="250" />

 A simplistic blogging app that allows users keep track of their thoughts and share them with others.
## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Initialization](#initialization)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)


## General Information
- Phase 5 software engineering project for Flatiron School.
## Requirements 
- Use a Rails API backend with a React frontend.
- Have at least three models on the backend, that include the following:
- At least two one-to-many relationships.
- At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.
- Full CRUD actions for at least one resource.
- Minimum of create and read actions for EACH resource.
- Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
- Implement authentication/authorization, including password protection. A user must be able to:
sign up with a new user account,
log in to the site with a secure password and stay logged in via user ID in the session hash, and
log out of the site.


## Technologies Used
- React - version 18.2.0
- Rails 7.0.4
- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku or Render deployment - Not yet implemented
- SQLite
- Visual Studio


## Features
- Log into an account or sign up for a new account in order to create blog posts.
- A profile page that allows users to edit or delete their existing posts.
- Search posts by tag

## Initialization
This project was created using React's "create-react-app" and Rails' "rails new app_name".


## Setup - To run this app:
- Clone this repo to your local machine and open with your preferred code editor.
- `bundle install`  to install all dependencies for Rails Back-end App
- `npm install --prefix client`  to install all dependencies fro React Front-end App
- `rails s`  to run server for Rails Back-end App
- `npm start --prefix client`  to run server fro React Front-end App


## Project Status
Project is: Near completion
To do - Deployment, styling, more interuser functionality.


## Room for Improvement
- Deployment
- Like/comment system
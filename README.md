
  ![License](https://img.shields.io/badge/License-MIT-blueviolet.svg)

  # Garage

 A social site for car enthusiasts!

  ---

  ## Description

The end goal for my garage is to be a social site for users to be able to make a profile and share their love for cars with the community. Users will be able to add cars to their virtual garage as they buy and sell them or simply grow their collections. 

---

## Table of Contents

* [Installation](#installation) 
* [Usage](#usage) 
* [License](#license) 
* [Contributing](#contributions)
* [Tests](#test) 
* [Technology](#technology-used)
* [Future-Plans](#future-plans)
* [Questions](#questions)

---

## Installation

If you just wish to visit the site, no installation is required. However, if you wish to run it locally, use the command git clone and the link to the github repo to copy the files onto your computer. After that you will need to initialize the sql database. then make user you edit the .env.EXAMPLE file with the "garage_bd" as DB_NAME, "root as DB_USER, and whatever your sql password is as DB_PASSWORD (DON"T FORGET to change the file name from .env.EXAMPLE to just .env). For the next step, run the seeds file to seed the database. After that you should be good to go! ENJOY!

---

## Usage

To start, navigate to the sites URL or to localhost:3001, once there you will need to either log in if you have an account or create a new account. Once logged in you should be able to see all users on the site. To view the cars each user has, simply click on their username and it will take you to their page.  

---

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

## Contributions

If you have ideas or would like to contribute to this project, please email me ztak78@gmail.com.

---

## Test



---

## Technology Used 

   * bcrypt
   * npm
   * node
   * connect-session-sequelize
   * dotenv
   * express
   * express-handlebars
   * express-session
   * handlebars
   * list-of-cars
   * mysql2
   * sequelize


___

## Future Plans

 - [ ] Add chat and or messaging features
 - [ ] Add image uploading features for profile pics and pictures of users cars
 - [ ] Make a more streamlined way to add cars to a users profile
 - [ ] Implement a delete option on users cars
 - [ ] Add a description field so users can explain any modification or custom work they have done to their cars.
 - [ ] Be able to edit the information in the description field 
 - [ ] Make the UI polished and attractive for users 


___

## Questions

If you have any questions, please contact me at ztak78@gmail.com or head over to my <a href="https://github.com/Zach-Lewis11" target="_blank">GitHub</a>

---

# CrimeReports webApp development

This webApp has 2 sides of itself, one for the user which makes a report and one for the police where report is to be made.

### The overview of the project
The app has the input user side, available to be accessed by any user who wants to access and other police side which is accessed only by police to look at the collective report from all the users.

## How the app really works:

##### The public phase: 
The app having 2 phase, the first phase takes report of crime for some user, pushes it to the mongoDB database and is ready to be fetched at the other phase of app

##### The other phase of app:
This phase is only to be accessed by the officials, here all the entries from different locations are displayed from the data present in the mongoDB database, it fetches the data and displays to the user.


### Idea behind the idea:
The main idea behind the project comes from the thought of the time delay between the crime is commited, first spotted and the time when police/ service arrives, trying to fill the process, this helps enters. Once someone sees a crime, can immediatly report it to the help center/ police center using the no login entry page.
Once the case is either solved or unessesary, a officer can manually delete the information on his own.

### links used for reference:
* [Node.js](https://nodejs.org/en/) <br />
* [mongoDB](https://www.mongodb.com/) <br />
* [Bootstrap](https://getbootstrap.com/) <br />
* [W3schools](https://www.w3schools.com/) <br />


## This webapp uses technologies like:
* node.js
* mongoDB
* ejs
* bootstrap
* html css js
* github (ofcourse) 
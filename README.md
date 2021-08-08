# User hobbies

User hobbies management tools

## Installation

### Environment
First of all you have to install <code>Node.js</code>, <code>NPM</code>, <code>MongoDB</code> to your PC.
- Node version should be later <code>14.0.0 or later</code>.
- NPM version should be later <code>6.14.0 or later</code>.
- MongoDB version should be <code>v3.6.8</code>.
### Run the API service 

Navigate yourself to the root folder of the application folder and run the following commands to run in your local pc:
<pre>
npm install
npm start
</pre>

After successfully running, you see two messages in the console. 
<pre>
The server is running on port 3000
The database is Connected.
</pre>

Now you can run the backend service with URL `http://localhost:3000/`.

### Run the API service documentation
For api  documentation, please visit `http://localhost:3000/api-docs/`

<img src="./images/swagger image.jpg"  alt="documentation"/>

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory.
## Unit testing case
Run `npm run test` to execute the unit tests.

The list of unit test: 

 - Hobbies
    - it should GET all the hobbies
    - it should not POST a hobby without name key
    - it should POST a hobby
    - it should have a hobby named "Hobby_1"
    - it should UPDATE a hobby
    - it should DELETE a hobby

  - User
    - it should GET all the users
    - it should not POST a user without name key
    - it should POST a user
    - it should have a User_1
    - it should UPDATE a user
    - it should DELETE a user

<img src="./images/testing image.jpg"  alt="documentation"/>


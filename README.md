# CabSystem(Shortest path/time detection dijkstra algorithm)

<p>
<img src="https://img.shields.io/badge/ReactJS-blue?logo=react"
<img src="https://img.shields.io/badge/Mobile App-React Native-61dafb?logo=android">
<img src="https://img.shields.io/badge/Backend-NodeJS-green?logo=node.js">
<img src="https://img.shields.io/badge/DataBase-MongoDB-lightgreen?logo=mongoDB">

</p>

**Hosted on 
 Varcel-> Frontend**
**& Backend-> Render**

Click here for Live-[Demo](https://shubham-666-cab-system-scaler-project-gxkjvb34d-shubham-666.vercel.app/)



Welcome to our Cab Booking App, built using the MERN stack. Our platform provides a seamless and efficient way for users to book cabs, offering various options and pricing structures. With our app, reaching your destination becomes a hassle-free experience, optimized for both time and cost.

Behind the scenes, our system utilizes the Dijkstra algorithm, implemented in Python, to calculate the shortest route based on user-provided source and destination points. Once the optimal route is determined, the app displays estimated travel time and distance. The pricing is dynamically calculated using a formula of 10rs/min for cab GO, ensuring cost transparency for users. To execute the Python-based shortest path calculation, we use the Child-process library in Node.js.

As a user, you can expect prompt notifications through our integrated Nodemailer email service. Upon booking a cab, you'll receive a detailed email confirmation containing trip specifics such as the price, timestamp of booking, cab details, and more. Simultaneously, our drivers receive the optimized route on their navigation systems, ensuring they take the most efficient path to your destination.

We've implemented a smart booking system to avoid overlapping start and end times. This means that once a user has booked a cab, they won't be able to book another until the current trip is completed. Additionally, our website boasts a responsive design, offering an excellent user experience on both desktop and mobile devices.

For administrators, we provide the capability to view a comprehensive list of user email IDs and the number of cabs they've booked. This valuable insight helps admins track user activity and preferences. Moreover, admins can access detailed records of all cab bookings, including timestamps, user emails, and other relevant data.

We're committed to making your cab booking experience convenient, efficient, and transparent. With our platform, you're in control, and we're here to ensure you reach your destination with ease.

#### while ReactJs and NodeJs are structured using an atomic design model

## 🚀 Features
- No Login Required just the EMAIL
- Mail of confirmed booking is recieved
- Multiple cabs to choose from
- User can choose rate on his/her own will
- Multiple locations available
- User friendly UI


## clone or download
```terminal
$ git clone https://github.com/rakshit-2/scaler_assignment.git
$ cd client(ReactJs),cd server(NodeJs)
$ yarn # or npm i
```

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```


## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a mongoose Connection String in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "MONGODB_URL=MONGODB_URL PORT=5000 GMAIL=GMAIL PASS=Gmail_passwod" >> src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run devStart // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```


# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
@emotion/react: ^11.10.6 | nodemailer: ^6.9.1
@emotion/styled: ^11.10.6|body-parser: ^1.20.2
@fortawesome/fontawesome-free: ^6.4.0 | cors: ^2.8.5
react: ^18.2.0 | dotenv: ^16.0.3
react-dom: ^18.2.0 | express: ^4.18.2
react-router-hash-link: ^2.4.3 | chalk: ^4.1.2
react-router-dom: ^4.2.2 | mongoose: ^7.0.3
axios: ^1.3.5 | 
@mui/material ^5.12.1 |



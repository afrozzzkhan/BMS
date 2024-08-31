const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const theatreRoutes = require('./routes/theatreRoutes');
const showRoutes = require('./routes/showRoutes');
const bookingRoute = require('./routes/bookingRoute')

require('dotenv').config();

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }))


// const dburl = "mongodb+srv://afrozkhanuak:kSMTeKwFukKdZuEC@cluster0.mh481zy.mongodb.net/Scaler?retryWrites=true&w=majority&appName=Cluster0"
const dburl = "mongodb+srv://karankumar254:6EwHq9Y4tatrVXon@cluster0.buymhu8.mongodb.net/"

// mongodb+srv://karankumar254:6EwHq9Y4tatrVXon@cluster0.buymhu8.mongodb.net/

mongoose.connect(dburl).then(function (connection) {
    console.log("connected to db");
}).catch(err => console.log(err));  

app.use(express.static("./public"));
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/theatres', theatreRoutes);
app.use('/api/shows', showRoutes);
app.use('/api/bookings', bookingRoute)

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./public/index.html"));
  });

app.listen(8081, ()=>{

    console.log('Server is running');
})

// const PORT = process.env.PORT || 8081



// const path = require("path");

// __dirname = path.resolve();

// render deployment
// app.use(express.static('./public'))
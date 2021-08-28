const { render } = require('ejs');
const { response } = require('express');
const express = require('express');
// const Crime = require('./models/report');
const mongoose = require('mongoose');
const Report = require('./models/crimes')
const app = express();
const morgan = require('morgan');

const dbURI = 'mongodb+srv://Aditya99:Adi99@crime-reports.26xze.mongodb.net/CrimeReports?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));
//karenge
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
app.get('/', (req, res)=>{
  res.redirect('/createForm');
})
app.get('/createForm', (req, res) => {
  Report.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('create', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/createForm', (req, res) => {
  // console.log(req.body);
  console.log('here in post')
  const report = new Report(req.body);

  report.save()
    .then(result => {
      console.log('updated in the mongoDB');
      res.redirect('/createForm');
    })
    .catch(err => {
      console.log(err);
    });
});
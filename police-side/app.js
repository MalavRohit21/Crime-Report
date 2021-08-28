const { render } = require('ejs');
const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://Sheru123:Anshu3009@crime-reports.26xze.mongodb.net/CrimeReports?retryWrites=true&w=majority'
const Report = require('./models/showReports');
//express app
const app = express();
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err));
//setting view engine
app.set('view engine', 'ejs');
// app.get('/add-report', (req,res)=>{
//     const report = new Report({
//         title: 'test2',
//         address: 'here somwehere2',
//         description: 'nothing actually happened here tooo!!!!!1',
//         time: '1820'
//     });

//     report.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// })
//listening for request:
app.get('/', (req, res)=>{
    res.redirect('/allReports');
})

app.get('/allReports',(req, res)=>{
    Report.find().sort({createdAt: -1})
    .then((result)=>{
        // res.send(result);
        res.render('./police_home', {reports: result});
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/allReports/:id', (req, res)=>{
    const id = req.params.id;
    Report.findById(id)
    .then(result=>{
        res.render('details', {report: result});
    })
    .catch(err=>{
        console.log(err);
    })
})
// app.get('/singleReport', (req, res)=>{
//     Report.findById('61291d57279d4930198d22b6')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

app.delete('/allReports/:id', (req,res)=>{
    const id = req.params.id;
    Report.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/allReports'})
        // console.log('deleted')
    })
    .catch(err=>{console.log(err)})
})

app.get('/technical', (req, res)=>{
    res.render('contact');
})
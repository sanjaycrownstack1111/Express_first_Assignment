const { json } = require('express');
var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');

router.use(express.json());
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })


let students = [{
    "id": 1,
    "name": "Maribeth",
    "email": "mwaugh0@forbes.com",
    "dob": "21/11/1997",
    "gender": "male",
    "passward": "2ClnFT",
    "organization": "IT"
  }, {
    "id": 2,
    "name": "Vaclav",
    "email": "vgrebner1@dailymotion.com",
    "dob": "22/11/1997",
    "gender": "female",
    "passward": "JrPpX7LOaA",
    "organization": "doctor"
  }, {
    "id": 3,
    "name": "Deeanne",
    "email": "dborrel2@cnbc.com",
    "dob": "23/11/1997",
    "gender": "male",
    "passward": "4gfUWCiF",
    "organization": "driver"
  },{
    "id": 4,
    "name": "Diego",
    "email": "dengelbrecht3@engadget.com",
    "dob": "24",
    "gender": "female",
    "passward": "RPIblYN6",
    "organization": "Electornic"
  }]

// router.get('/', function(req, res, next) {
//     res.json(students);
// });

//detail
router.post('/details',function(req,res) {
    console.log("hello");
    let user = {
        id : students.length +1,
        name : req.body.name,
        email : req.body.email,
        dob : req.body.dob,
        gender : req.body.gender,
        password : req.body.password,
        password : req.body.passd,
        organization : req.body.organization
    }
    students.push(user);
    res.send(students);
});

router.post('/:id',function(req, res){
    let id = req.params.id;
    let name = req.body.name
    let gender = req.body.gender
    if(gender == "male"){
        res.send('Mr' + name +" how are you");
    }else{
        res.send("Ms" +name + "how are you");
    }
});

router.get('/:id', function(req, res){
    const id = req.params.id;
    let name = req.body.name
    let index = students.findIndex((student)=>{
        return(student.id == Number.parseInt(id))
    })
    if(index >=0){
        let std = students[index]
        std.name = name
        res.send(std);
    }else{
        res.status(404);
        res.end();
    }
})



router.put('/students/:id',function(req,res){
    const id = req.params.id;
    let name = req.body.name

    let index = students.findIndex((student)=>{
        return(student.id == Number.parseInt(id))
    })
    if(index >= 0){
        console.log(req.body);
    }else{
        res.status(404);
        res.end();
    }
    
});


router.delete('/students/"id',function(req,res){
    let id = req.params.id;
    let index = students.findIndex(()=>{
        return (student.id == Number.parseInt(id))
    })
    if(index >0){
        let std = students[index]
        students.splice(index, 1);
        res.send("deleted");
    }else{
        res.status(404);
    }
});


module.exports = router;
const express = require('express');
const router = express.Router();
const abc = require('../introduction/intro');
const first = require('../logger/logger');
const second = require('../util/helper');
const third = require('../validator/formatter')
const result = require('underscore');
const lodash = require('lodash');
const { object } = require('underscore');

router.get('/test-me', function (req, res) {
    console.log('batch name is', abc.name)
    abc.printName()
    first.Welcome()
    console.log(second.printDate())
    console.log(second.printMonth())
    console.log(second.getBatchInfo())
    third.allstring()

    let weekdend = ['Saturday', 'Sunday', 'Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ', result)
    let month = ["jan", "feb", "march", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "des"]
    let getmonth = lodash.chunk(month, 4)
    const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let getoddnum = lodash.tail(odd, 9)

    const arr1 = [1];
    const arr2 = [1, 2];
    const arr3 = [1, 2, 3];
    const arr4 = [1, 2, 3, 4];
    const arr5 = [1, 2, 3, 4, 5];
    const pair = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]

    res.send("ok")
    console.log(getmonth)
    console.log(getoddnum)
    console.log(lodash.union(arr1, arr2, arr3, arr4, arr5))
    console.log(pair)
});


// add--node index.js

//NEW---------------------------------------------*------------------------------------------------------------------------------ 

//1
router.get('/movies', function (req, res) {
    let movies = ["ghatak", "indian", "dhol", "hungama"]
    console.log("jeevan")
    res.send(movies)
});


//2
router.get("/movies/:indexNumber", function (req, res) {
    const movies = ["ghatak", "indian", "dhol", "hungama"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    if (movieIndex < 0 || movieIndex >= movies.length) {
        return res.send('the index value is not correct,please check the it')
    }
    let requireMovie = movies[movieIndex]
    res.send(requireMovie)
});

//3
router.get("/films", function (req, res) {
    let films = [{
        id: 1,
        name: "The Shining"
    }, {
        id: 2,
        name: " Incendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]

    res.send(films)
});


//4
router.get("/films", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    //send all the films
    res.send(films)
});

//5
router.get("/films/:filmId", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let filmId = req.params.filmId
    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {

            return res.send(film)
        }
    }

    res.send("The film id doesn't match any movie")
});

//new -------------------------------------------*--------------------------------------------------------------------------------



// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr = [1, 2, 3, 5, 6, 7]

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit + 1) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});

// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});

//NEW--------------------------------------------*---------------------------------------------------------------------------------------

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {

    let ele = req.body
    let eleName = ele.name
    let eleNamerepeated = false

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == eleName) {
            eleNamerepeated = true;
            break
        }
    }

    if (eleNamerepeated) {
        res.send("this player is already add")
    } else {

        players.push(ele)
        res.send(players)
    }

});

//new--------------------------------------------*--------------------------------------------------------------------------------------------

let player =
    [
        {
            "PlayerName": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ],
            "bookingId": "123"
        },
        {
            "PlayerName": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
            "bookingId": "456"
        },
        {
            "PlayerName": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",

            "sports": [
                "soccer"
            ],
            "bookingId": "789"
        },
    ]

router.post('/PlayerName/bookingId', function (req, res) {

    let ele = req.body
    let elePlayerName = ele.PlayerName
    let elePlayerNamerepeated = false

    for (let i = 0; i < player.length; i++) {
        if (player[i].PlayerName == elePlayerName) {
            elePlayerNamerepeated = true;
            break
        }
    }

    if (elePlayerNamerepeated) {
        res.send("this PlayerName is already add")
    } else {

        player.push(ele)
        res.send(player)
    }
}

);

//NEW---------------------------------*--------------------------------------------------------------------------------------------

let persons = [
    {
        name: "PK",
        age: 10,
        votingstatus: false,
    },
    {
        name: "SK",
        age: 20,
        votingstatus: false,
    },
    {
        name: "AA",
        age: 70,
        votingstatus: false,
    },
    {
        name: "SC",
        age: 5,
        votingstatus: false,
    },
    {
        name: "HO",
        age: 40,
        votingstatus: false,
    },
];


router.post("/getvotingstatus",function(req,res){
    let votingAge = req.query.age
    let ElegiblePerson =[]
    
    for (i=0; i<persons.length; i++){
        let personAge = persons[i].age;
        if(personAge > votingAge){
         persons[i].votingStatus = true;
    }
    }

    ElegiblePerson = persons.filter((person) => person.age > votingAge);
    res.send(ElegiblePerson)
    });

//new-------------------------------------------------*------------------------------------------------------------------------------

/**const bookModel = require("../models/book1Modals");
const bookController = require("../controllers/book1controller");

router.get("/test-me", function (req, res){
res.send("jeevan patidar")
});

router.post("/createbook", book1Controller.createbook);
router.get("/getbooksData", book1Controller.getbookData);*/


//NEW----------------------------------------------*--------------------------------------------------------------------------------

const book2Model = require("../models/book2Modals");
const book2Controller = require("../controllers/book2controller");

router.get("/test-me", function (req, res){
res.send("jeevan patidar")
});

router.post("/createbook", book2Controller.createbook);
router.get("/booklist", book2Controller.booklist);
router.post("/getBooksInYear", book2Controller.getBooksInYear);
router.post("/getParticularBooks", book2Controller.getParticularBooks);
router.get("/getXINRBooks", book2Controller.getXINRBooks);
router.get("/getRandomBooks", book2Controller.getRandomBooks);

module.exports = router;











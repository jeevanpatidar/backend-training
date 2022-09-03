/** GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free 
 * version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi
 *  keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save
 *  the key/appid somewhere. Now proceed further
Create API's to do each of the following:
                    - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=
                    London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios
                         will attempt to hit localhost and give error  ..also use HTTP only and not
                          HTTPS)
                    - then change the above to get the temperature only( of London)
                    - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London",
                     "Moscow"] in order of their increasing temperature
                    result should look something like this
                    [
                    {city:"London", temp: 280},
                    {city:"Moscow", temp: 290},
                    {city:"Bangalore", temp: 301.2},
                    .......
                    ] */

let axios = require("axios")

let gettemprature = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "moscow"]
        let cityemptyarr = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] } //city:mumbai
            let options = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=75001983a7beb1a893e42f3b0e68fd72`)
            console.log(options.data.main.temp)

            obj.temp = options.data.main.temp  //{city:mumbai .temp:302.14}
            cityemptyarr.push(obj)
        }
        let assending = cityemptyarr.sort(function (a, b) { return a.temp - b.temp })
        console.log(assending)
        res.status(200).send({ data: assending, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.gettemprature = gettemprature
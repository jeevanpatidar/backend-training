/**Axios POST request assignment

            1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
            2. Pick a memeId you want (Eg 129242436) for the POST request
            3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
            template_id <meme_id>
            text0 <text you want as a caption>
            text1 <optional>
            username chewie12345
            password meme@123

            4. Return a response with a body like this
            "data": {
                    "url": "https://i.imgflip.com/5mvxax.jpg",
                    "page_url": "https://imgflip.com/i/5mvxax"
                }*/

// password=%F*Xy3ucMX4$7Dy
//username=shyam0123    

let axios = require("axios")

let getmemes = async function (req, res) {
    try {
        //let memeid =req.params.memeid
        //let text0 =req.params.text0
        //let text1 =req.params.text1
        //let username =req.params.username
        //let password =req.params.password

        let options = {
            method: "post",
            url: "https://api.imgflip.com/caption_image?template_id=181913649&text0=Functionup&text1=yes&username=shyam0123&password=%F*Xy3ucMX4$7Dy"
        }
        let result = await axios(options)

        res.send({ data: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getmemes = getmemes
const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publiserController= require("../controllers/publiserController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPubliser", publiserController.createPublisher )
router.get("/getAllBooksWithCompleteDetails", bookController.getAllBooksWithCompleteDetails)
router.get("/getAuthorsData", authorController.getAuthorsData)
router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.put("/books", bookController.updateSpecificBooks)
router.get("/updateSpecificBooks", bookController.getBooksWithAuthorDetails)

module.exports = router;
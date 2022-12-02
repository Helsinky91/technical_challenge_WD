const router = require("express").Router();
const phoneData = require("../data/phones.json")

//GET show all phones from phones.json data
router.get("/", (req, res, next) => {
    res.status(200).json(phoneData)
})

//GET show all phones by its ID
router.get("/:id", (req, res, next) => {

    const {id} = req.params;

    try {
        const phoneId = phoneData.find(eachPhone => eachPhone.id == id)
        console.log("phoneId ", phoneId )
        res.status(200).json(phoneId)
    } catch (error) {
        next(error)
    }

})



module.exports = router;
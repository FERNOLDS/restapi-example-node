//routes
const {Router} = require("express");
const router = Router




router.get("/test", (req, res) => {
    const data = {
        "name": "fernando",
        "website": "www.alvaradosa.com",
        "frase": "soy el mejor "

    }
    res.json(data);

});

module.expots = router
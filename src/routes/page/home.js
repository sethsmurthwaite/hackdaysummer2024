const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const html = `
        <div
            class="white-box"
            hx-get="/page/home"
            hx-target="#dataContainer"
            hx-swap="innerHtml"
        >
        
        
        
        
     
        </div>
    `
    res.status(200).send(html)
})

module.exports = router

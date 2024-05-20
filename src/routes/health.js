const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const html = `
        <div class="animated-gradient-box">
            <h2>Healthy</h2>
            <p>Current time: ${new Date().toLocaleString()}</p>
        </div>
    `
    res.status(200).send(html)
})

module.exports = router

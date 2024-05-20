const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

for (let key in routes) {
    app.use(key, routes[key]);
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'page.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

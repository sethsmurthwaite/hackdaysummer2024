import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req.method);
    res.json({ hello: 'world' });
});

app.get('/test', (_req, res) => {
    console.log('hello there')
    res.json({ hello: 'world' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

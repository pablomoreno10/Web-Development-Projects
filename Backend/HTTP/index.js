import express from 'express';
const app = express();
const port = 3000; // You can change this to any port you prefer

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h>") // Thill send the headers of the request as the response
}); 

app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>") // Thill send the headers of the request as the response
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact Page</h1>") // Thill send the headers of the request as the response
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


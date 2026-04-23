
const server = http.createServer((req, res) => {
   
});

server.listen(PORT, HOST, () => {
    
});


const express = require('express'); 

const app = express();

const HOST = '127.0.0.1';
const PORT = 5000;



app.get('/api/info', (req, res) => {
    res.status(200).json({ 
        status: 'ok',
        message: 'NodeJS API elérhető'
    });
}) 


app.listen(PORT, HOST, () => {
    console.log(`A szerver elindult a http://${HOST}:${PORT} címen`);
});
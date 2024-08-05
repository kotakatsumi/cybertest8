const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://yesno.wtf/api');
        const answer = response.data.answer;
        const image = response.data.image;

        res.send(`
            <html>
                <head>
                    <title>YesNo API Example</title>
                </head>
                <body>
                    <h1>Answer: ${answer}</h1>
                    <img src="${image}" alt="${answer}">
                </body>
            </html>
        `);
    } catch (error) {
        res.send('Error fetching data from YesNo API');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
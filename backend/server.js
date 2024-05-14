import express from "express";

const app = express();

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// });

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'A Second joke',
            content: 'This is a joke'
        },
        {
            id: 3,
            title: 'A Third joke',
            content: 'This is a joke'
        },
        {
            id: 4,
            title: 'A Fourth joke',
            content: 'This is a joke'
        },
        {
            id: 5,
            title: 'A Fifth joke',
            content: 'This is a joke'
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})
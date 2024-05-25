const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let events = require('./events.json');

app.get('/', (req, res) => {
    res.render('index', { events: events });
});

app.post('/add', (req, res) => {
    const newEvent = {
        id: Date.now(),
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        description: req.body.description
    };
    events.push(newEvent);
    fs.writeFileSync('events.json', JSON.stringify(events, null, 2));
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const event = events.find(e => e.id == req.params.id);
    res.render('edit', { event: event });
});

app.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const updatedEvent = {
        id: parseInt(id),
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        description: req.body.description
    };
    const index = events.findIndex(e => e.id == id);
    events[index] = updatedEvent;
    fs.writeFileSync('events.json', JSON.stringify(events, null, 2));
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    events = events.filter(e => e.id != req.params.id);
    fs.writeFileSync('events.json', JSON.stringify(events, null, 2));
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

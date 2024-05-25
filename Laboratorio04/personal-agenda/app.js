const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let events = require('./events.json');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add.html'));
});

app.get('/edit/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'edit.html'));
});

app.get('/api/events', (req, res) => {
    res.json(events);
});

app.post('/api/events', (req, res) => {
    const newEvent = {
        id: Date.now(),
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        description: req.body.description
    };
    events.push(newEvent);
    fs.writeFileSync('events.json', JSON.stringify(events, null, 2));
    res.status(201).json(newEvent);
});

app.put('/api/events/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = events.findIndex(e => e.id === id);
    if (index !== -1) {
        events[index] = {
            id: id,
            date: req.body.date,
            time: req.body.time,
            title: req.body.title,
            description: req.body.description
        };
        fs.writeFileSync('events.json', JSON.stringify(events, null, 2));
        res.json(events[index]);
    } else {
        res.status(404).json({ error: 'Event not found' });
    }
});

app.delete('/api/events/:id', (req, res) => {
    const id = parseInt(req.params.id);
    events = events.filter(e => e.id !== id);
    fs.writeFileSync('events.json', JSON.stringify(events, null, 2));
    res.status(204).send();
});


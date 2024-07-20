const express = require('express');
const router = express.Router();

let notes = [];
let currentId = 1;

router.post('/', (req, res) => {
    console.log(req.body)
    const { title, content, tags } = req.body;
    const note = { id: currentId++, title, content, tags };
    notes.push(note);
    res.status(201).json(note);
});

router.get('/', (req, res) => {
    res.json(notes);
});

router.get('/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');
    res.json(note);
});

router.put('/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');

    const { title, content, tags } = req.body;
    note.title = title;
    note.content = content;
    note.tags = tags;

    res.json(note);
});

router.delete('/:id', (req, res) => {
    notes = notes.filter(n => n.id !== parseInt(req.params.id));
    res.status(204).send();
});

router.put('/:id/tags', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');

    note.tags.push(...req.body.tags);
    note.tags = [...new Set(note.tags)]; // Remove duplicates

    res.json(note);
});

router.delete('/:id/tags', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');

    note.tags = note.tags.filter(tag => !req.body.tags.includes(tag));

    res.json(note);
});

router.post('/query', (req, res) => {
    const query = req.body.query;

    const evaluateCondition = (noteTags, condition) => {
        if (condition.tag) {
            return noteTags.includes(condition.tag);
        } else if (condition.and) {
            return condition.and.every(cond => evaluateCondition(noteTags, cond));
        } else if (condition.or) {
            return condition.or.some(cond => evaluateCondition(noteTags, cond));
        } else if (condition.not) {
            return !evaluateCondition(noteTags, condition.not);
        }
        return false;
    };

    const result = notes.filter(note => evaluateCondition(note.tags, query));
    res.json(result);
});

module.exports = router;

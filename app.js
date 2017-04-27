const express = require('express');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const db = mongojs('catalog', ['products']) // db and collections

const app = express();
const port = 3600;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send("Hello Node.js");
});

// Fetch all products
app.get('/api/products', (req, res, next) => {
    //res.send("Hello Node.js");
    db.products.find((err, docs) => {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
});

// Fetch single product
app.get('/api/products/:id', (req, res, next) => {
    db.products.find({
        _id: mongojs.ObjectId(req.params.id)
    }, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    });
});

// Add product
app.post('/api/products/', (req, res, next) => {
    db.products.insert(req.body, (err, doc) => {
        if(err){
            res.send(err);
        }
        res.json(doc);
    });
});

// Add product
app.put('/api/products/:id', (req, res, next) => {
    res.send("Hello Node.js");
});

app.put('/api/products/:id', (req, res, next) => {
    res.send("Hello Node.js");
});

app.listen(port, () => {

});
const router = require('express').Router();
const { models } = require('../db');

router.get('/users', (req, res, next) => {
  models.Users.findAll()
    .then(users => res.json(users))
    .catch(next);
});

router.get('/products', (req, res, next) => {
  models.Products.findAll()
    .then(products => res.json(products))
    .catch(next);
});

router.delete('/products/:productId', (req, res, next) => {
  models.Products.destroy({ where: {id: req.params.productId} })
    .then(() => res.sendStatus(200))
    .catch(next);
});

router.post('/products', (req, res, next) => {
  models.Products.create({ name: req.body.product })
    .then(newProduct => res.json(newProduct))
    .catch(next);
});

module.exports = router;

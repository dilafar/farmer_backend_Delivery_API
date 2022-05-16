const router = require('express').Router();
const {createDelivery} = require('../controller/delivery');
const auth = require('../middleware/auth');


router.route('/addDelivery').post(auth, createDelivery);

module.exports = router;
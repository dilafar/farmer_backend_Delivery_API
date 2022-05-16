const router = require('express').Router();
const { cardPayment ,mobilePayment } = require('../controller/payment');
const auth = require('../middleware/auth');

router.route('/addpayment').post(auth,cardPayment);
router.route('/createpay').post(auth,mobilePayment);

module.exports = router;
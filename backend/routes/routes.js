const { Router } = require('express');
const authController = require('../controllers/authController');
const {requireAuth} = require ('../middleware/authMiddleware');

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.get('/islogged', requireAuth,  (req, res) => res.status(200).send("User is logged"));

module.exports = router;
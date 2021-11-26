const Router = require('express').Router;
const userController = require('../controllers/user-controller')
const router = new Router();
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')
const cloudinaryController = require('../Controllers/cloudinary-controller')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:8,max:32}),
    userController.registration);
router.post('/login',userController.login);
router.post('/logout',userController.logout);
router.get('/activate/:link',userController.activate);
router.get('/refresh',userController.refresh);

router.post('/get_user_info',userController.getUserInfo)
router.post('/set_avatar',userController.setAvatar)
router.post('/cloudinary/destroy',cloudinaryController.destroy)
router.post('/send_activationlink',userController.sendActivationLink)

module.exports = router
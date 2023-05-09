// google routrer
const path = require('path');
const express = require('express');
const router = express.Router();
const { googlelogin, googlecallbak , uploadVideo ,getvideos,getonevideo} = require('../../controllers/googleController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
// const multer =require('multer');
// const upload = multer({ dest: 'uploads/' });
router.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'views', 'google.html'));
})

// router.post('/upload', uploadVideo );
router.route('/videos/:username')
        .get( getvideos);
router.get('/videos/:id',getonevideo);
module.exports = router;
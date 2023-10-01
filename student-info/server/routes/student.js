const express = require('express');
const {
    addDetails,
    viewDetails,
    searchDetails,
    updateDetails,
    deleteDetails,
} = require('../controllers/student');
const router = express.Router();

router.route('/add').post(addDetails);
router.route('/view').get(viewDetails);
router.route('/:id').get(searchDetails);
router.route('/update/:id').put(updateDetails);
router.route('/delete/:id').delete(deleteDetails);

module.exports = router;

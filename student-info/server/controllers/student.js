const db = require('../db/connect');

// @description add new student details
// @route POST api/student/add
// @access PUBLIC
const addDetails = (req, res) => {
    let { stname, course, fee } = req.body;
    let details = {
        stname: stname,
        course: course,
        fee: fee,
    };
    let sql = 'INSERT INTO student SET ?';
    db.query(sql, details, error => {
        if (error) {
            res.send({ status: false, message: 'Student creation failed' });
        } else {
            res.send({ status: true, message: 'Student created successfully' });
        }
    });
};

// @description view student details
// @route GET api/student/view
// @access PUBLIC
const viewDetails = (req, res) => {
    let sql = 'SELECT * FROM STUDENT';
    db.query(sql, (error, result) => {
        if (error) {
            console.log('Error connecting to DB');
        } else {
            res.send({ status: true, data: result });
        }
    });
};

// @description Search Student Details
// @route GET api/student/:id
// @access PUBLIC
const searchDetails = (req, res) => {
    let { id } = req.params;
    let sql = 'SELECT * FROM STUDENT where id=' + id;
    db.query(sql, (error, result) => {
        if (error) {
            console.log('Error connecting to DB');
        } else {
            res.send({ status: true, data: result });
        }
    });
};

// @description Update the student details
// @route PUT api/student/update/:id
// @access PUBLIC
const updateDetails = (req, res) => {
    let { id } = req.params;
    let { stname, course, fee } = req.body;
    let sql =
        "UPDATE Student set stname='" +
        stname +
        "', course='" +
        course +
        "', fee=" +
        fee +
        ' where id=' +
        id;
    let query = db.query(sql, (error, result) => {
        if (error) {
            res.send({ success: true, message: 'Student Update Failed' });
        } else {
            res.send({
                success: true,
                message: 'Student Updated Successfully',
            });
        }
    });
};

// @description Delete the student details
// @route DELETE api/student/delete/:id
// @access PUBLIC
const deleteDetails = (req, res) => {
    let { id } = req.params;
    let sql = 'DELETE FROM Student where id=' + id;
    db.query(sql, error => {
        if (error) {
            res.send({ success: false, message: 'Student Deletion Failed' });
        } else {
            res.send({
                success: false,
                message: 'Student Deleted Successfully',
            });
        }
    });
};

module.exports = {
    addDetails,
    viewDetails,
    searchDetails,
    updateDetails,
    deleteDetails,
};

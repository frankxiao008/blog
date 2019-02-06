const models = require('../models/index');
const adminModel = models.adminModel;


exports.checkUser = function (name) {
    return adminModel.findOne({name: name}).exec();
};

exports.initadmin = function(){
    return adminModel.create({
        name: 'admin',
        password: '654321xsh',
        superAdmin: true
    })
};
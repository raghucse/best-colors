module.exports = function (mongoose) {
    var q = require('q');


    var colorsModel = require('./colors/colors.model.server')(mongoose, q);

    var model = {
        colorsModel : colorsModel
    };

    return model;
};
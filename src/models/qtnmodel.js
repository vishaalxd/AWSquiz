var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({

    id: {
        type: Number
    },
    question: {
        type: String
    },
    Answer: {
        type: String
    },
    A: {
        type: String
    },
    B: {
        type: String
    },
    C: {
        type: String
    },
    D: {
        type: String
    },
    Comments: {
        type: String
    },
});

// userSchema.pre('save', function(next){
//   now = new Date();
//   this.updated_at = now;
//   next();

// });
module.exports = mongoose.model('Questions', questionSchema);
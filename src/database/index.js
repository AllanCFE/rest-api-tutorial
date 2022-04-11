const { default: mongoose } = require("mongoose");
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PSW}@noderest.pet3f.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`)
mongoose.Promise = global.Promise

module.exports = mongoose
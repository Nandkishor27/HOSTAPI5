const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    feature : {
        type : String,
        required : true,
    },
    // img:
    // {
    //     data: Buffer,
    //     contentType: String
    // },
//     price : {
//         type :Number,
//         required: [true, "Price must be required"],
//     },
    image : {
        type : String,
        default : true,
    },
    // feature : {
    //     type : String,
    //     default : false,
    // },
//     rating : {
//         type :Number,
//         required: [true, "Rating must be required"],
//     },
    createdAt : {
        type :Date,
        default : Date.now(),
    },
//     company : {
//         type : String,
//         enum:{
//             values : ["apple" , "samsung"],
//             message : `{VALUE} is not supported`,
//         },
//     },
})

module.exports = mongoose.model('Product', productSchema);
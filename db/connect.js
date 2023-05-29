const mongoose =  require('mongoose')

// uri = "mongodb+srv://Gravity:Nandu2729@cluster0.7fhyyg0.mongodb.net/gravityproj?retryWrites=true&w=majority"

uri = 'mongodb://Gravity:Nandu2729@ac-gbcavxu-shard-00-00.7fhyyg0.mongodb.net:27017,ac-gbcavxu-shard-00-01.7fhyyg0.mongodb.net:27017,ac-gbcavxu-shard-00-02.7fhyyg0.mongodb.net:27017/gravityproj?ssl=true&replicaSet=atlas-fodmp2-shard-0&authSource=admin&retryWrites=true&w=majority'

const connectDB =  () =>{
   //  console.log("connected db");
     return mongoose.connect(uri ,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
     });
};

module.exports = connectDB;
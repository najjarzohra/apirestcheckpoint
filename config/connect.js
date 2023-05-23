const mongoose = require("mongoose")
const connectdb = async () =>{
    try{
        await mongoose.connect('mongodb+srv://zahranajjar011:P0KbSc4Wgfq4fdZk@cluster0.a4verys.mongodb.net/')
        console.log('bd is conneccted')

    }
    catch(error){
        console.log('error db')
    }
}
module.exports = connectdb
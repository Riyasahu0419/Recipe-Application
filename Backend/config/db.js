const mongoose=require("mongoose")

const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log("server connected to database")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connection ;
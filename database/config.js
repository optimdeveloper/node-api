const mongoose=require('mongoose');

const dbConnection = async() =>{
  try {
    await mongoose.connect( process.env.MONGO_CNN,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       
    })
    console.log('Database online')
  } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de levantar la base de datos')
  }
}


module.exports={
    dbConnection
}
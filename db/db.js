import mongoose from 'mongoose';

const conexionBD = async()=>{
  return await mongoose.connect(process.env.URL_BD)
  .then(()=>{
    console.log('Conexion a la BD exitosa')
  }).catch((error)=>{
    console.error('Error en la conexion',error)
  })
};
  export default conexionBD;
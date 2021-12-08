import mongoose from 'mongoose';
import { tiposEnum } from './enum.js';

const {Schema, model} = mongoose;


const empresaSchema = new Schema({
    nombre : {
        type: String,
        required: true
    },
    razon: {
        type: String,
        required: true
    },
    nit : {
        type: String,
        required: true
    },
    identificacion: {
        type: String,
        required: true
    },
    empleados: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum: ['APROBADA', 'RECHAZADA', 'PENDIENTE'],
        default: 'PENDIENTE'
    }
});

const modeloEmpresa = model('empresas', empresaSchema)

export {modeloEmpresa};
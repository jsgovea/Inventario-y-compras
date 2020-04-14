import mongoose, { mongo } from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://elyorshh1:jorge123456A@ds062448.mlab.com:62448/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    email: Array,
    edad: Number,
    tipo: String,
    pedidos: Array
});

const Clientes = mongoose.model('clientes',clientesSchema);

export { Clientes };

import { modeloEmpresa } from "./empresas.js";

const resolversEmpresa = {
    
    Query: {
        Empresas: async(parent, args)=> {
            const empresas = await modeloEmpresa.find();
            return empresas
        }
    },

    Mutation: {
        crearEmpresa: async(parent, args)=> {
            const empresaCreada = await modeloEmpresa.create({
                nombre: args.nombre,
                razon: args.razon,
                nit: args.nit,
                identificacion: args.identificacion,
                empleados: args.empleados,
                logo: args.logo
            });
            return empresaCreada;
        },

        editarEmpresa: async(parent, args)=> {
            const empresaEditada = await modeloEmpresa.findByIdAndUpdate(
                args._id,
                {
                estado: args.estado
                },

            {new: true}

            );
            return empresaEditada;
        },
    }
};

export { resolversEmpresa };
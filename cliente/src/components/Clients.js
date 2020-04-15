import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../queries';
import { Link } from 'react-router-dom';

const Clients = () => (
    <Query query={CLIENTES_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return "Cargando...";
            if (error) return `Error: ${error.message}`;
            console.log(data.getClientes);
            return (
                <Fragment>
                    <h1 className="text-center">Lista de clientes</h1>
                    <ul className="list-group">
                        {data.getClientes.map(item => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                {item.nombre} {item.apellido} - {item.empresa}
                                <div className="col-md-4 d-flex justify-content-end">
                                    <Link to={`/cliente/editar/${item.id}`} className="btn btn-primary d-block d-md-inline-block">
                                        Editar Cliente
                                    </Link>
                                </div>
                            </li>

                        ))}
                    </ul>
                </Fragment>
            )
        }}
    </Query>
);

export default Clients;
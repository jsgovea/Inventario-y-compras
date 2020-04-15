import React, { Fragment } from 'react';

class NewClient extends React.Component {
    state = {};
    render() {
        return (
            <Fragment>
                <form className="justify-content-center">
                    <fieldset>
                        <legend>Nuevo cliente</legend>
                        <div className="justify-content-center">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Correo</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto' }} />
                                <small id="emailHelp" className="form-text text-muted cc_cursor">Nunca compartiremos tu informacion personal</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nombre</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%' }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Apellido</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%' }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Empresa</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%' }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Edad</label>
                                <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%' }} />
                            </div>
                            <div class="form-group">
                                <label for="exampleSelect1">Example select</label>
                                <select class="form-control" id="exampleSelect1">
                                    <option disabled>Elegir...</option>
                                    <option>Premium</option>
                                    <option>Basico</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
        );
    }
}

export default NewClient;
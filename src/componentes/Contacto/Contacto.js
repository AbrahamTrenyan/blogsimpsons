import React from 'react';
import "./contacto.css"
class Contacto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='contact-section'>
                <div id='formSection' className='col-6 container-fluid'>
                    <div className='mb-3 col-11 container-fluid contenedor-input'>
                        <label for="emailInput" className="form-label">Email</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="nombre@gmail.com" />
                    </div>
                    <div className="mb-3 col-11 container-fluid ">
                        <label for="txtInput" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="txtInput" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-outline-danger" id='boton'>ENVIAR</button>
                </div>
            </div>);
    }
}

export default Contacto;
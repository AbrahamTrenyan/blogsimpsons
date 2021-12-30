import {Link} from 'react-router-dom';
import React from 'react';
import header from "../../img/header-simpsons.gif"
import "./navbar.css"
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img src={header} alt='logo del blog' className='logoBlog'/>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contacto">Contacto</Link>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-danger col-4 button" type="submit">Búsqueda</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>);
    }

}

export default Navbar
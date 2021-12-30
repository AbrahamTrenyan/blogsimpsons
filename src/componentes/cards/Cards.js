import React from 'react';
import Maggie from "../../img/maggie.jpg"
import Homer from "../../img/homer.jpg"
import Bart from "../../img/bart.jpg"
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='sectionCards' className='row' style={{ backgroundColor: "#C9D702" }}>
                <div className="card" style={{ width: "18rem", margin: "100px" }}>
                    <img className="card-img-top" src={Maggie} alt="maggie simpson" />
                    <div className="card-body">
                        <h5 className="card-title">Maggie</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#sectionCards" class="btn btn-danger">Leer más</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem", margin: "100px" }}>
                    <img className="card-img-top" src={Homer} alt="homero simpson" />
                    <div className="card-body">
                        <h5 className="card-title">Homero</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#sectionCards" class="btn btn-danger">Leer más</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem", margin: "100px" }}>
                    <img className="card-img-top" src={Bart} alt="bart simpson" />
                    <div className="card-body">
                        <h5 className="card-title">Bart</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#sectionCards" className="btn btn-danger">Leer más</a>
                    </div>
                </div>
            </div>);
    }
}
export default Cards
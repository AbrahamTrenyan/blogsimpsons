import React from 'react';
import homersapien from "../../img/carrousel-3.jpg" 
class HomerSapien extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div>
           <img src={homersapien} alt='imagen de la evolucion de homero' id='evolucionHomero' style={{width: "100%"}}/>
        </div>
        );
    }
}
export default HomerSapien
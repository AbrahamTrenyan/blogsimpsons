import React from 'react';
import HomerSapien from '../HomerSapien';
import Cards from '../Cards';
class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <HomerSapien/>
                <Cards/>
            </>
         );
    }
}
 
export default Inicio;
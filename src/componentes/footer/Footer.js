import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div style={{textAlign:"center", margin:"40px"}}>
            <footer>
                <p>© Hecho por Programa Desde Tu Casa</p>
            </footer>
        </div>  );
    }
}
export default Footer;
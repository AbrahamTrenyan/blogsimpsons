import React from 'react';
import "./blog.css"
import nocheDeBrujas from "../../img/nocheDeBrujas.jpg"
import luchaEducativa from "../../img/educacion.jpg"
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='row fondoVerde'>
                <div className='col-8 container-fluid' id="capitulos">
                    <div id='capituloBrujas'>
                        <h1 className='texto'>Episodio "Especial de Noche de Brujas VII", Octubre 27, 1996</h1>
                        <img src={nocheDeBrujas} alt='Capitulo: noche de brujas 7' className='img'></img>
                        <p className='texto'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.  like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. are like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div id='capituloLucha'>
                        <h1 className='texto'>Episodio "Lucha educativa", Abril 16, 1995</h1>
                        <img src={luchaEducativa} alt='Capitulo: lucha educativa' className="img"></img>
                        <p className='texto'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. are like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. are like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Blog;
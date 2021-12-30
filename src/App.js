import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/index';
import Footer from './componentes/Footer/index';
import Blog from './componentes/Blog/index';
import Contacto from './componentes/Contacto/index'
import Inicio from './componentes/Inicio/Inicio';
function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="" element={<Inicio/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
        <Footer />
      </Router>
      
  );
}
export default App;

import './App.css';
import Header from './Header';
import {BrowserRouter , Router , Route , Routes} from "react-router-dom";
import Login from './Login';
import { useStateValue } from "./StateProvider";
import Home from './Home';
import Recomend from './Recomend';
import Doctors from './Doctors';
function App() {
  const [{user}, dispatch] = useStateValue(); 
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (<Login/>):
          (<>
            {/* Headder  */}
            <Header/>
            <div className='app__body'>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                      <Route path="/Login" element={<Login/>} />
                      <Route path='/R' element={<Recomend/>}/>
                      <Route path='/Doc' element={<Doctors />}/>
                  </Routes>
            </div>
            {/* Side bar  */}
            {/* react rooter */} 
        
          </>)
        }
      </BrowserRouter>
    </div>
  );
}

export default App;

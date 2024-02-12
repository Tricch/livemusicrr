import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Card from './components/Card';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Carousal from './components/Carousal.js';
import LandingPage from './screens/LandingPage.js';
import Genre from './screens/Genre.js';

function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<LandingPage></LandingPage>}></Route>
          <Route exact path='/home' element={<Home></Home>}></Route>
          <Route exact path='/card' element={<Card></Card>}></Route>
          <Route exact path='/carousal' element={<Carousal></Carousal>}></Route>
          <Route exact path='/genre' element={<Genre></Genre>}></Route>
        </Routes>
      </div>
    </Router>    
    </>
  );
}

export default App;

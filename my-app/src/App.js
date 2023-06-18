
import './App.css'; //import css file 
import MovieList from './componants/MovieList';
import Home from './componants/Home';
import {Routes,Route} from 'react-router-dom' 

function App() {
  return (
   <div>
    {/* routage */}
  <Routes>
    <Route path="/" exact element ={<MovieList/>}/>
    <Route path="Home" element ={<Home/>}/>
    <Route path="/movie-list" element={<MovieList />} />


  </Routes>

   </div>
  );
}

export default App;

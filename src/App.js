import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import './App.css';
import './asset/css/web.scss';
import Home from './pages/Home';
import Movie from './pages/Movie';
import TV from './pages/TV';
import Detail from './pages/Detail';
import Cast from './pages/Cast';
import Media from './pages/Media';
import Search from './pages/Search';
import Detail_tv from './pages/Detail_tv';
import Top from './utils/Top';

function App() {


  return (
    <Router>
      <div className='movieWeb'>

        {/* <Home/> */}

      </div>
        <Top/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movie' element={<Movie/>}></Route>
          <Route path='/tv' element={<TV/>}></Route>
          <Route path='/detail/movie/:id' element={<Detail/>}></Route>
          <Route path='/detail/tv/:id' element={<Detail_tv/>}></Route>
          <Route path='/detail/:type/:id/cast' element={<Cast/>}></Route>
          <Route path='/detail/:type/:id/media' element={<Media/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

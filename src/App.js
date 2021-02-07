import SongsList from './components/SongsList';
import MainPage from './components/MainPage/MainPage';
import {BrowserRouter,Route,Link} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
    <div>
   <SongsList/>
   <MainPage/>
    </div>
  
    </BrowserRouter>
   ); 
}

export default App;

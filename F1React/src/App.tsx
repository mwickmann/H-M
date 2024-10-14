
import 'bootstrap/dist/css/bootstrap.min.css';

 
import { BrowserRouter, Routes, Route} from "react-router-dom"
// import {DriversPage, RacePage, TeamPage, HomePage} from './pages'
import DriversPage from './pages/DriversPage';
import RacesPage from './pages/RacePage';
import TeamPage from './pages/TeamPage';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import Footer from './components/main/Footer';
import { AmateurDriversPage } from './pages';



function App() {

  return (
    <>
     <BrowserRouter> 
    <header>
     </header>
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='drivers' element={<DriversPage/>}></Route>
        <Route path='races' element={<RacesPage/>}></Route>
        <Route path='teams' element={<TeamPage/>}></Route>
        <Route path='game' element={<GamePage/>}></Route>
        <Route path='main' element={<AmateurDriversPage/>}></Route>
        
      </Routes>
    </main>
    </BrowserRouter>
    <footer>
    </footer>

    </>
  )
}

export default App

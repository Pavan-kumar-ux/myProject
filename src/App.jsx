import { Routes,Route,BrowserRouter } from "react-router-dom"

import Home from "./components/HomeFile"
import LoginForm from "./components/LoginForm"
import LoveSongs from "./components/LoveSongs"
import BreakUpSongs from "./components/BreakupSongs"
import MelodicalSongs from "./components/MelodicalSongs"
import RomanticSongs from "./components/RomanticSongs"
import GymSongs from "./components/GymSongs"
import OldSongs from "./components/OldSongs"

import './App.css'

const App = () => (
  <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={LoginForm} />
        <Route exact path="/" Component={Home} />
        <Route exact path="/lovesongs" Component={LoveSongs} />
        <Route exact path="/breakupsongs" Component={BreakUpSongs} />
        <Route exact path="/melodicalsongs" Component={MelodicalSongs} />
        <Route exact path="/romanticsongs" Component={RomanticSongs} />
        <Route exact path="/oldsongs" Component={OldSongs} />
        <Route exact path="/gymsongs" Component={GymSongs} />
      </Routes>
  </BrowserRouter>
)

export default App
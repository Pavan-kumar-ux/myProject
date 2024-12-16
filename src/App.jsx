import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/HomeFile";
import LoginFormWrapper from "./components/LoginFormWrapper";
import LoveSongs from "./components/LoveSongs";
import BreakUpSongs from "./components/BreakupSongs";
import MelodicalSongs from "./components/MelodicalSongs";
import RomanticSongs from "./components/RomanticSongs";
import GymSongs from "./components/GymSongs";
import OldSongs from "./components/OldSongs";
import NotFound from "./components/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Allow access to login page only if the user is not authenticated */}
      <Route exact path="/login" element={<ProtectedRoute path="/login" element={<LoginFormWrapper />} redirectTo="/" />} />

      {/* Protected Routes: These are available only if the user is authenticated */}
      <Route exact path="/" element={<ProtectedRoute path="/" element={<Home />} />} />
      <Route exact path="/lovesongs" element={<ProtectedRoute path="/lovesongs" element={<LoveSongs />} />} />
      <Route exact path="/breakupsongs" element={<ProtectedRoute path="/breakupsongs" element={<BreakUpSongs />} />} />
      <Route exact path="/melodicalsongs" element={<ProtectedRoute path="/melodicalsongs" element={<MelodicalSongs />} />} />
      <Route exact path="/romanticsongs" element={<ProtectedRoute path="/romanticsongs" element={<RomanticSongs />} />} />
      <Route exact path="/oldsongs" element={<ProtectedRoute path="/oldsongs" element={<OldSongs />} />} />
      <Route exact path="/gymsongs" element={<ProtectedRoute path="/gymsongs" element={<GymSongs />} />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App;

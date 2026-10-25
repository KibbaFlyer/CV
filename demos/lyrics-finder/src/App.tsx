import { Routes, Route } from "react-router-dom";
import LyricsComponent from './pages/LyricsComponent'
import HomeComponent from './pages/HomeComponent';
import LayoutComponent from './pages/LayoutComponent';
import CryptoComponent from './pages/CryptoComponent';
import BoredComponent from './pages/BoredComponent';
import CatComponent from "./pages/CatComponent";
import NoPageComponent from './pages/NoPageComponent';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="lyrics" element={<LyricsComponent />} />
          <Route path="crypto" element={<CryptoComponent />} />
          <Route path="bored" element={<BoredComponent />} />
          <Route path="cat" element={<CatComponent />} />
          <Route path="*" element={<NoPageComponent />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

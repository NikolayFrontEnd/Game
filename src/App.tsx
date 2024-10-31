
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Level1 from './components/level1';
import Level2 from './components/level2';
import Level3 from './components/level3';
import Level4 from './components/level4';
import Level5 from './components/level5';
import OwnLevel from './components/ownLevel';
function App() {


  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/level1" element={<Level1/>}/>
        <Route path="/level2" element={<Level2/>}/>
        <Route path="/level3" element={<Level3/>}/>
        <Route path="/level4" element={<Level4/>}/>
        <Route path="/level5" element={<Level5/>}/>
        <Route path = "/levelown" element = {<OwnLevel/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

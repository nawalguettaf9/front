import React from 'react';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Dashboard  from './scenes/dashboard';
import Project  from './scenes/projet';
import Mini from './component/sidebar'


function App() {
  return (
    <div className="App">
    {/* <DDD/> */}
    <BrowserRouter>
    {/* <Mini/> */}
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/project' element={<Project/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

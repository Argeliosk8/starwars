
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import Home from './routes/Home';
import CharacterView from './routes/CharacterView'
import { ContextWrapper } from './context/ContextWrapper';
import { AppContext } from './context/ContextWrapper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "character/:character_id",
    element: <CharacterView />
  }
])


function App() {
  const context = useContext(AppContext)

  return (
    <ContextWrapper value={context}>
      <RouterProvider router={router} />  
    </ContextWrapper>
        
  
  );
}

export default App;

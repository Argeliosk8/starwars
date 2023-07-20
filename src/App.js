
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import Home from './views/Home';
import CharacterView from '../src/views/CharacterView'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/character/:character_id",
    element: <CharacterView />
  }
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './route';
import '@fontsource/poppins'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={AppRoutes}/>
    </div>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import UsersRegistration from './Component/UsersRegistration';
import ViewRegistration from './Component/ViewRegistration';

function App() {
  return (
    <Routes> {/* useRoutes is now valid here */}
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UsersRegistration/>} />
      <Route path="/viewUsers" element={<ViewRegistration/>} />
      
    </Routes>
  );
}

export default App;
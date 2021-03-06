import React from 'react';
import { useSelector } from 'react-redux';
import {
 Routes, Route, Navigate, HashRouter,
} from 'react-router-dom';
import AuthLayout from './layouts/authLayout/AuthLayout';
import AdminPanelLayout from './layouts/AdminPanelLayout/AdminPanelLayout';
import UsersPage from '../Pages/UsersPage';
import SettingsPage from '../Pages/SettingsPage';
import NotFoundPage from '../Pages/NotFoundPage';
/* import PrivateRoute from './PrivateRoute'; */

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  /** Extract auth info */
  const userAuth = useSelector((state) => state.auth);
  const { isLoggedIn } = userAuth;
  console.log(userAuth, isLoggedIn);

  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/login" element={<AuthLayout />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route
            path="admin/*"
            element={(<AdminPanelLayout />)}
          >
            <Route path="usuarios" element={<UsersPage />} />
            <Route path="ajustes" element={<SettingsPage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;

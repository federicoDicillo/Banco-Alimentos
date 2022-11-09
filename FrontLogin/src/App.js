import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import DataTable from './pages/dataTable';
import NotFound from './pages/404.jsx';
import NotLoggedIn from './pages/notLoggedIn';
import ProtectedRoute from './components/pure/protectedRoute';
import AuthContext from './context/authProvider';

const App = () => {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/datatable"
          element={
            <ProtectedRoute user={auth.user}>
              <DataTable />
            </ProtectedRoute>
          }
        />
        <Route path="notlogged" element={<NotLoggedIn />} />
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="*" element={<Navigate to="not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

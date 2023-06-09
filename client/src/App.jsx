import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'

// import Public from "components/Public";
import Layout from "components/Layout";
import Login from "features/auth/Login";
// import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import View from "views/admin/newsletter/newsletter/View";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
 
      
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route index element={<Public />} /> */}
        <Route index element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="admin/newslleter" element={<View />} />

          <Route path="admin/*" element={<AdminLayout />} />
          <Route path="welcome" element={<Welcome />} />
        </Route>

      </Route>
    
    </Routes>
  );
};

export default App;

import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";
import Account from "./components/Account";
import Notification from "./components/Notification";
import DeleteAccount from "./components/DeleteAccount";
import ViewProfile from "./components/ViewProfile";
import Analytics from "./components/Analytics";
import Fields from "./components/Fields";
import FieldsView from "./components/FieldsView";
import CropDetails from "./components/CropDetails";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Forgot from "./components/Forgot";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="crop/:id" element={<CropDetails />} />
            <Route path="fields" element={<Fields />} />
            <Route path="view" element={<FieldsView />} />

            <Route path="viewprofile" element={<ViewProfile />} />
            <Route path="notification" element={<Notification />} />
            <Route path="settings" element={<Settings />}>
              <Route path="" element={<Account />} />
              <Route path="notification" element={<Notification />} />
              <Route path="delete" element={<DeleteAccount />} />
              <Route path="view" element={<ViewProfile />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

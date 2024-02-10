// React Bootstrap Installed
// React-Router-Dom Installed
// React-Icon Installed

import "./assets/Style.css";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavBar2 from "./components/header/MainNavBar2";
import Nav from "./components/header/Nav";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Organisation from "./pages/Organisation";
import NotFound from "./pages/NotFound";
// import Card4 from "./components/homeComponent/Card4";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainNavBar2 />}>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Service" element={<Service />} />
        <Route path="Faq" element={<Faq />} />
        <Route path="Organisation" element={<Organisation />} />
        <Route />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div>
      {/* <Card4 /> */}
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

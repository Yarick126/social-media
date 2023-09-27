import { BrowserRouter, Route , Routes } from "react-router-dom";
import { ROUTES } from "./routes.data";
import Layout from "../components/layout/Layout.jsx";
import NotFound from "../components/screens/NotFound/NotFound.jsx";
const Router = () => {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        {ROUTES.map(route => {
          <Route
            key={route.path}
            path={route.path === '/' ? index : route.path.substring(1)}
            element={route.component}
          />
        })}
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>)
}

export default Router
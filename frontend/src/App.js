import Loader from "./components/loader/Loader";
import { HashRouter, Route, Routes } from 'react-router-dom'
import {Suspense} from "react";
import {DefaultLayout} from "./layout/DefaultLayout";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={Loader}>
          <Routes>
              <Route path="/" name="Home" element={<Home />} />
              <Route path="*" name="Default" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;

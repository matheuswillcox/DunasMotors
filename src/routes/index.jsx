import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

import Modelos from "../pages/modelos";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/modelos/cforce/450l"
        element={<Modelos model={"450l"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/cforce/450s"
        element={<Modelos model={"450s"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/cforce/520"
        element={<Modelos model={"520"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/cforce/625"
        element={<Modelos model={"625"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/cforce/1000"
        element={<Modelos model={"1000"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/zforce/550"
        element={<Modelos model={"550"} type={"ZFORCE"} />}
      ></Route>
      <Route
        path="/modelos/zforce/800"
        element={<Modelos model={"800"} type={"ZFORCE"} />}
      ></Route>
      <Route
        path="/modelos/zforce/1000sport"
        element={<Modelos model={"1000sport"} type={"ZFORCE"} />}
      ></Route>
      <Route
        path="/modelos/uforce/600"
        element={<Modelos model={"600"} type={"UFORCE"} />}
      ></Route>
      <Route
        path="/modelos/uforce/u1000"
        element={<Modelos model={"u1000"} type={"UFORCE"} />}
      ></Route>
      <Route
        path="/modelos/laminha/49"
        element={<Modelos model={"49"} type={"LAMINHA"} />}
      ></Route>
      <Route
        path="/modelos/laminha/60"
        element={<Modelos model={"60"} type={"LAMINHA"} />}
      ></Route>
      <Route
        path="/modelos/laminha/100"
        element={<Modelos model={"100"} type={"LAMINHA"} />}
      ></Route>
      <Route
        path="/modelos/raptor/125"
        element={<Modelos model={"125"} type={"RAPTOR"} />}
      ></Route>
      <Route
        path="/modelos/raptor/140"
        element={<Modelos model={"140"} type={"RAPTOR"} />}
      ></Route>
      <Route
        path="/modelos/ligeirinho/49"
        element={<Modelos model={"49"} type={"LIGEIRINHO"} />}
      ></Route>
      <Route
        path="/modelos/avalanche/90"
        element={<Modelos model={"90"} type={"AVALANCHE"} />}
      ></Route>
      <Route
        path="/modelos/taurus/110"
        element={<Modelos model={"110"} type={"TAURUS"} />}
      ></Route>
      <Route
        path="/modelos/alphacross/125a"
        element={<Modelos model={"125a"} type={"ALPHACROSS"} />}
      ></Route>
      <Route
        path="/modelos/alphacross/125ex"
        element={<Modelos model={"125ex"} type={"ALPHACROSS"} />}
      ></Route>
      <Route
        path="/modelos/farmer/200"
        element={<Modelos model={"200"} type={"FARMER"} />}
      ></Route>
      <Route
        path="/modelos/farmer/300"
        element={<Modelos model={"300"} type={"FARMER"} />}
      ></Route>
      <Route
        path="/modelos/rhino/110r"
        element={<Modelos model={"110r"} type={"RHINO"} />}
      ></Route>
    </Routes>
  );
}

export default Rotas;

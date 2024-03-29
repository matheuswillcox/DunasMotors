import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

import Modelos from "../pages/modelos";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/modelos/cforce/110"
        element={<Modelos model={"110"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/cforce/450l"
        element={<Modelos model={"450L"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/cforce/450s"
        element={<Modelos model={"450S"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/cforce/520l"
        element={<Modelos model={"520L"} type={"CFORCE"} />}
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
        path="/modelos/cforce/ev110"
        element={<Modelos model={"EV110"} type={"CFORCE"} />}
      ></Route>
      <Route
        path="/modelos/zforce/550"
        element={<Modelos model={"550"} type={"ZFORCE"} />}
      ></Route>
      <Route
        path="/modelos/zforce/800TRAIL"
        element={<Modelos model={"800 TRAIL"} type={"ZFORCE"} />}
      ></Route>
      <Route
        path="/modelos/zforce/1000sportr"
        element={<Modelos model={"1000 SPORT R"} type={"ZFORCE"} />}
      ></Route>
      <Route
        path="/modelos/uforce/600"
        element={<Modelos model={"600"} type={"UFORCE"} />}
      ></Route>
      <Route
        path="/modelos/uforce/1000"
        element={<Modelos model={"1000"} type={"UFORCE"} />}
      ></Route>
      <Route
        path="/modelos/uforce/1000xl"
        element={<Modelos model={"1000XL"} type={"UFORCE"} />}
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
        path="/modelos/alphacross/125"
        element={<Modelos model={"125"} type={"ALPHACROSS"} />}
      ></Route>
      <Route
        path="/modelos/alphacross/125ex"
        element={<Modelos model={"125EX"} type={"ALPHACROSS"} />}
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
        path="/modelos/rhino/110"
        element={<Modelos model={"110"} type={"RHINO"} />}
      ></Route>
    </Routes>
  );
}

export default Rotas;

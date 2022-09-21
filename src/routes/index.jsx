import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

import Modelos from "../pages/modelos";

function Rotas () {

    return (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/modelos/cforce/450l" element={<Modelos model={"450l"} />}></Route>  
          <Route path="/modelos/cforce/450s" element={<Modelos model={"450s"} />}></Route>  
          <Route path="/modelos/cforce/520" element={<Modelos model={"520"} />}></Route>  
          <Route path="/modelos/cforce/625" element={<Modelos model={"625"} />}></Route>  
          <Route path="/modelos/cforce/1000" element={<Modelos model={"1000"} />}></Route>  
          <Route path="/modelos/zforce/550" element={<Modelos model={"550"} />}></Route>  
          <Route path="/modelos/zforce/800" element={<Modelos model={"800"} />}></Route>  
          <Route path="/modelos/zforce/1000sport" element={<Modelos model={"1000sport"} />}></Route>  
          <Route path="/modelos/uforce/600" element={<Modelos model={"600"} />}></Route>
          <Route path="/modelos/uforce/u1000" element={<Modelos model={"u1000"} />}></Route>    
        </Routes>
      );

 
}

export default Rotas

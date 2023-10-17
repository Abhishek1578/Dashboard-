import { Routes, Route} from "react-router-dom"
import Dashboard from "../../Pages/Dashboard";
import Product from "../../Pages/Product";
import Customers from "../../Pages/Customers";
import Promote from "../../Pages/Promote";
import Help from "../../Pages/Help";
import Income from "../../Pages/Income";
function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
            <Route path="/income" element={<Income/>}></Route>
            <Route path="/promote" element={<Promote/>}></Route>
            <Route path="/help" element={<Help/>}></Route>
        </Routes>
    )

}
export default AppRoutes;
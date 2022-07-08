import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/CreateUser";
import Dashboard from "./components/Dashboard";
import EditUser from "./components/EditUser";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Topbar from "./components/Topbar";
import ViewProduct from "./components/ViewProduct";
import ViewUser from "./components/ViewUser";

function App() {
  return (
    <>
       <div className="App">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/tables" element={<Table />} />
                  <Route path="/createusers" element={<CreateUser />} />
                  <Route path="/tables/users/:userId" element={<ViewUser />} />
                  <Route
                    path="/tables/users/editusers/:userId"
                    element={<EditUser />}
                  />
                  <Route path="/products" element={<Product />} />
                  <Route
                    path="/products/:productId"
                    element={<ViewProduct />}
                  />
                </Routes>
                {/* <Dashboard/> */}
                {/* <Table/> */}
              </div>
            </div>
            {/* <Footer/> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

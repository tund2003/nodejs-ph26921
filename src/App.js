import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import CreateAccount from "./Components/CreateAccount";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={CreateAccount} exact />
        <Route path="/all" component={AllProducts} exact />
        <Route path="/add" component={AddProduct} exact />
        <Route path="/edit/:id" component={EditProduct} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

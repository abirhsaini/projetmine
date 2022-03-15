import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/reservation";
import Menu from "./pages/Menu";
import Break from "./pages/Break";
import Lunch from "./pages/lunch";
import Dinner from "./pages/Dinner";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

import { CartProvider} from "react-use-cart";


import {BrowserRouter ,Switch ,Route} from "react-router-dom";
import "./style/tout.scss"





function App() {
  return ( 
  <div className="brows">
    <CartProvider>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/reservation" exact component={Reservation} />
      <Route path="/about" exact component={About} />
      
      <Route path="/lunch" exact component={Lunch} />
     < Route path="/breakfast" exact component={Break} />
      <Route path="/dinner" exact component={Dinner} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/order" exact component={Order} />
     
      
    </Switch>
    </BrowserRouter></CartProvider></div>
  );
}

export default App;




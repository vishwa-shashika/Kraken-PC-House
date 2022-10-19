import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import ProductDetail from "./components/product/ProductDetail";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Payment from "./components/cart/payment";
import orderSuccess from "./components/cart/orderSuccess";
import ListOrders from "./components/order/ListOrders";
import Dashbord from "./components/admin/Dashbord";
import ProductsList from "./components/admin/ProductsList";
import NewProduct from "./components/admin/NewProduct";
import PcBuilderScreen from "./screens/PcBuilderScreen";

import { loadUser } from "./actions/userActions";
import store from "./store";

// Payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    store.dispatch(loadUser());

    async function getStripApiKey() {
      console.log("getting key ===================");
      const { data } = await axios.get("/api/v1/stripeapi");
      setStripeApiKey(data.stripeApiKey);
      console.log("Stripe API Key: ", data.stripeApiKey);
    }
    getStripApiKey();
    //console.log("Stripe API Key: ", stripeApiKey);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} exact />
        <Route path="/product/:id" component={ProductDetail} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/cart" component={cart} exact />
        <Route path="/pc-builder" component={PcBuilderScreen} />

        <ProtectedRoute path="/me" component={Profile} exact />
        <ProtectedRoute path="/success" component={orderSuccess} exact />
        <ProtectedRoute path="/shipping" component={Shipping} exact />
        <ProtectedRoute path="/orders/me" component={ListOrders} exact />

        <ProtectedRoute
          isAdmin={true}
          path="/dashbord"
          component={Dashbord}
          exact
        />

        <ProtectedRoute
          isAdmin={true}
          path="/admin/product"
          component={NewProduct}
          exact
        />

        <ProtectedRoute
          path="/dashbord/products"
          component={ProductsList}
          exact
        />
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute path="/payment" component={Payment} />
          </Elements>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import {
  Home,
  About,
  AddProduct,
  Cart,
  Checkout,
  Error,
  Products,
  SingleProduct,
  Contact,
  Faq,
  // Signin,
} from './pages';
// components
import { Navbar, Footer, Sidebar } from './components';
function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/addProduct' component={AddProduct} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/contact-us' component={Contact} />
        <Route exact path='/faq' component={Faq} />
        {/* <Route exact path='/Sign-in' component={Signin} /> */}
        <Route exact path='/products' component={Products} />
        <Route exact path='/product/:id' component={SingleProduct} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

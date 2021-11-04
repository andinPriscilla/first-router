import { HashRouter as Router,Routes as Switch, Route } from 'react-router-dom' //named import  are those in curely braces

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Products from '../components/pages/Products'
import ProductDetails from '../components/pages/ProductDetails'
import NotFound404 from '../components/pages/NotFound404'


const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact='true' path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route element={NotFound404} />
        </Switch>
        <Footer />
    </Router>
)// the'/' is the start of the page
// Route is wrapped in switch to give a break from one path to the other
// exact tells the exact path to enter

export default Routes
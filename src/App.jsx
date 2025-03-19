import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'

function App() {

    return (
        <>
            <Navigation />
            <div>
                {/*<HomePage />*/}
                {/*<Product />*/}
                <ProductDetails />
            </div>
            <Footer />
        </>
    )
}

export default App

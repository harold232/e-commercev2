import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'

function App() {

    return (
        <>
            <Navigation />
            <div>
                {/*<HomePage />*/}
                <Product />
            </div>
            <Footer />
        </>
    )
}

export default App

import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'

function App() {

    return (
        <>
            <Navigation />
            <div>
                <HomePage />
            </div>
            <Footer />
        </>
    )
}

export default App

import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';
import Home from './resources/Home';
import Product from './resources/Product';
import Enterprise from './resources/Enterprise';
import Contact from './resources/Contact'


function Content() {


    return (
        <main>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/Product' Component={Product}/>
                <Route path='/Enterprise' Component={Enterprise}/>
                <Route path='/Contact' Component={Contact} />
            </Routes>
        </main>
    )
}

export default Content
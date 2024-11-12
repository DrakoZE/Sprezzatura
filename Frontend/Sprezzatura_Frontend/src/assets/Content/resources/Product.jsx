import {BrowserRouter,Link, Route, Routes} from 'react-router-dom'
import '../Content.css'

function Product() {
    
    return (
        <div className='Product'>
        <div className='product-container'>
            <h1>Prendas que tenemos</h1>
            <p></p>
        </div>
        <div className='product-container'>
            <h1>Proceso de produccion</h1>
            <p></p>
        </div>
    </div>
    )
}

export default Product
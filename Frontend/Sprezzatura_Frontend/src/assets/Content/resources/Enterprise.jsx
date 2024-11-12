import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../Content.css'

function Enterprise() {

    return (
        <div className='Enterprise'>
            <div className='enterprise-container'>
                <h1>Roles y status</h1>
                <ul>
                    <li><strong>Milena Aguirre (CEO)</strong>: Líder de la empresa, se encarga de la toma de decisiones, de administrar todos los departamentos y de controlar que la calidad de las prendas sea buena y duradera.</li>
                    <li><strong>Jazmín Jaimee (Recursos Humanos y Vicepresidente Ejecutiva)</strong>: Se encarga de administrar el capital humano, desde el reclutamiento hasta la evaluación de desempeño y gestión de beneficios. Además, es la Vicepresidenta Ejecutiva, siendo la segunda al mando de la empresa.</li>
                    <li><strong>Zenón Maximiliano (Marketing y Diseño Empresarial)</strong>: Se encarga de realizar las campañas publicitarias de los productos que creamos. Además, maneja la imagen visible de la empresa a través de las redes sociales y la página web.</li>
                    <li><strong>Moreno Magalí (Producción)</strong>: Se encarga de la obtención de materias primas, su producción y posterior distribución a las tiendas.</li>
                    <li><strong>Tolaba Ariana (Finanzas y Compras)</strong>: Se encarga de administrar el capital de la empresa, de identificar los riesgos financieros y de gestionar las compras necesarias para que la empresa funcione correctamente.</li>
                    <li><strong>Ramos Sergio (Almacén y Diseño Gráfico)</strong>: Es el encargado de manejar el inventario de la empresa, así como la rotación de stocks, la capacidad de almacenamiento y los costos. Además, se encarga de la realización de trifolios y folletos.</li>
                </ul>
                <img src="/Jerarquia.jpg" alt="Jerarquia" />
            </div>  
        </div>
    )

}

export default Enterprise
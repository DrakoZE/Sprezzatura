import { useState } from 'react'
import './Content.css'

function Content() {


    return (
        <main>
            <div className='Home'>
                <div className='Home-container'>
                    <h1>¿Quienes Somos?</h1>
                    <p></p>
                </div>
                <div className='Home-container'>
                    <h1>Nuestra mision</h1>
                    <p></p>
                </div>
                <div className='Home-container'>
                    <h1>Nuestra vision</h1>
                    <p></p>
                </div>
                <div className='Home-container'>
                    <h1>Nuestra identidad</h1>
                    <p></p>
                </div>
                <div className='Home-container'>
                    <h1>Valores que poseemos</h1>
                    <p></p>
                </div>
                <div className='Home-container'>
                    <h1>Codigo de etica de la empresa</h1>
                    <p></p>
                </div>
                <div className='Home-container'>
                    <h1>Cultura Organizacional de la empresa</h1>
                    <p></p>
                </div>
                <div className='Home-container'>
                    <h1>Liderazgo de la empresa</h1>
                    <p></p>
                </div>
            </div>
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
            <div className='Enterprise'>
                <div className='enterprise-container'>
                    <h1>Roles y status</h1>
                    <p></p>
                </div>
                <div className='enterprise-container'>
                    <h1>Division y departamentalizacion</h1>
                    <p></p>
                </div>
                <div className='enterprise-container'>
                    <h1>Jerarquia</h1>
                    <p></p>
                </div>
            </div>
            <div className='Contact'>
                <div className='contact-container'></div>
                <h1>Nuestro contacto</h1>
                <p></p>
            </div>
        </main>
    )
}

export default Content
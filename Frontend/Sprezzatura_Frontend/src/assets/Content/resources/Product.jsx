import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../Content.css'

function Product() {

    return (
        <div className='Product'>
            <div className='product-container'>
                <h1>Prendas que tenemos</h1>
                <div className='ropa-container'>
                    <h3>Falda</h3>
                    <img className='falda' src="/Falda.jpeg" alt="Falda" />
                </div>
                <div className='ropa-container'>
                    <h3>Corset</h3>
                    <img className='corset' src="/Corset.jpeg" alt="Corset" />
                </div>
            </div>
            <div className='product-container'>
                <h1>Produccion de las prendas</h1>
                <div className='ropa-container'>
                    <h3>Materiales de la Falda</h3>
                    <ul>
                        <li>Pantalones jeans.</li>
                        <li>Alfileres.</li>
                        <li>Ovillo de hilo blanco.</li>
                        <li>Aguja n° 16 para máquina.</li>
                        <li>Tiza para tela.</li>
                        <li>Tijera para tela.</li>
                    </ul>
                    <h3>Proceso de la falda</h3>
                    <ul>
                        <li>Creación del diseño.</li>
                        <li>Tomamos las medidas.</li>
                        <li>Descocimos el pantalón y cortamos los bordes largos.</li>
                        <li>Utilizamos la parte de arriba para tener una base.</li>
                        <li>Lo que quedó del pantalón lo cortamos en 4 tiras rectangulares.</li>
                        <li>Unimos las 4 tiras desde los bordes cortos para formar una sola tira larga.</li>
                        <li>Marcamos la tira con la tiza cada cinco centímetros.</li>
                        <li>Doblamos la tela y colocamos un alfiler dejando cinco centímetros.</li>
                        <li>Repetimos el paso anterior hasta finalizar la tela.</li>
                        <li>Unimos la base superior con las tiras ya entabladas.</li>
                        <li>Al final, cosemos las dos partes con la máquina, y listo.</li>
                    </ul>
                </div>
                <div className='ropa-container'>
                    <h3>Materiales del Corset</h3>
                    <ul>
                        <li>Pantalones jeans.</li>
                        <li>1/2 metro de tela negra.</li>
                        <li>Ovillo de hilo blanco.</li>
                        <li>Aguja Nº18 para la máquina.</li>
                        <li>Máquina de coser.</li>
                        <li>Tiza para la tela.</li>
                        <li>Tijera para la tela.</li>
                        <li>Almohadillas para senos.</li>
                        <li>Hilo de ratón.</li>
                    </ul>
                    <h3>Proceso del corset</h3>
                    <ul>
                        <li>Creación del diseño con sus respectivas medidas.</li>
                        <li>Creación de moldes de costura con medidas específicas.</li>
                        <li>Marcar la tela con la tiza, con ayuda del molde.</li>
                        <li>Recortar la tela según la marca realizada anteriormente.</li>
                        <li>Unir las partes del corset colocando las almohadillas y cosiendo las partes a mano.</li>
                        <li>Pasar otra costura con la máquina de coser para que la prenda sea más resistente.</li>
                        <li>Cortar la tela negra al tamaño del corset completo.</li>
                        <li>Coser la tela negra en la parte trasera de la prenda.</li>
                        <li>Antes de unir las dos partes traseras, agujerear la tela en 6 puntos redondos de cada lado.</li>
                        <li>Colocar el hilo en zigzag entre cada ojal.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../Content.css'

function Home() {

    return (
        <div className='Home'>
            <div className='Home-container'>
                <h1>¿Quienes Somos?</h1>
                <p>Somos una empresa dedicada a la creación de indumentaria ecológica, esto con el objetivo de concientizar el impacto ambiental que hay en estos días.
                    Es por eso que nuestras prendas están hechas de materiales que cualquiera podría encontrar en su hogar, lo cual permite reutilizar estos para la producción de prendas de moda.</p>
            </div>
            <div className='Home-container'>
                <h1>Nuestra mision</h1>
                <p>Nuestra misión es ofrecer una moda ecológica que combine estilo y conciencia ambiental, dando una segunda oportunidad a la ropa que no usamos, creando prendas de alta calidad que respeten tanto a las personas como al planeta.</p>
            </div>
            <div className='Home-container'>
                <h1>Nuestra vision</h1>
                <p>Nos esforzamos para ser la mejor empresa global y también en ser líderes en la industria de la moda ecológica, inspirando un camino positivo en la manera en que la moda se produce y consume, siendo un ejemplo de innovación y responsabilidad ambiental.</p>
            </div>
            <div className='Home-container'>
                <h1>Nuestra identidad</h1>
                <p>La identidad de nuestra empresa, es en si mismo la produccion y el confeccionado de ropa, usando materiales que sean reciclados o que no dañen al medio ambiente. Esto es lo que nos diferencia de las demas empresas de moda, nos enfocamos en cuidar al medio ambiente.</p>
            </div>
            <div className='Home-container'>
                <h1>Valores que poseemos</h1>
                <p>Tenemos un conjunto de valores fundamentales que son los que representan a la empresa estos son:</p>
                <ul>
                    <li>Integridad y Respeto</li>
                    <li>Responsabilidad</li>
                    <li>Enfoque al Cliente</li>
                    <li>Sencillez y Actitud de Servicio</li>
                    <li>Vinculos Humanos</li>
                    <li>Compromiso con el Medio Ambiente</li>
                </ul>
            </div>
            <div className='Home-container'>
                <h1>Codigo de etica de la empresa</h1>
                <p>En nuestro código de ética se establecen las pautas, normas, reglas y valores que deben seguir cada uno de los miembros de la empresa y además, esta debe dictar y seguir por todos los miembros de la empresa. Es una guia que nos lleva al camino correcto para el cumplimiento de los objetivos y metas propuestas.</p>
            </div>
            <div className='Home-container'>
                <h1>Cultura Organizacional de la empresa</h1>
                <p>En nuestra cultura organizacional se encuentran los valores, creencias, normas y comportamientos compartidos por los miembros de la empresa y que ya hemos mencionado antes. Esto facilitará la toma de decisiones, motivará a los empleados y habrá una mayor productividad.</p>
            </div>
            <div className='Home-container'>
                <h1>Liderazgo de la empresa</h1>
                <p>En nuestra empresa contamos con un lider que se encargar de la organizacion y departamentalizacion de la empresa, la toma de las decisiones y funciona como guia hacia el objetivo de la empresa. Posee un enfoque de rasgos, el cual los lideres nacen con ciertas caracteristicas especiales que las hacen destacar frente al resto y que sirven a la hora de liderar y un enfoque transformacional, que sirve para motivar e inspirar a los empleados para lograr el crecimiento personal y el desarrollo de cada empleado </p>
            </div>
        </div>
    )
}

export default Home
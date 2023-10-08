import '../style/headerStyle.css'
export default AppHeader

function AppHeader(){
    return(
        <>
            <div className='header w-100 d-flex align-items-center justify-content-evenly'>
                <div className='headerTitle text-white w-50 p-5'>
                    <h1>Ganadería San Antonio</h1>
                </div>
                <div className='linkList w-50 p-5 m-0'>
                    <ul className="nav nav-underline justify-content-end align-items-center text-white">
                        <li className="nav-item">
                            <a href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Contactos</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="#">Actividades</a>
                        </li>
                        <li className="nav-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 6h16" />  
                            <path d="M7 12h13" />
                            <path d="M10 18h10" />
                        </svg>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

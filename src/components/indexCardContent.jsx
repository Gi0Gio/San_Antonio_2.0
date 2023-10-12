import '../style/indexCardContentStyle.css'

export default IndexCardContent

function IndexCardContent(){
    return(
        <div className='contentBox position-absolute w-100 d-flex align-items-center justify-content-center'>
            <div className='contentDivider w-75 d-flex justify-content-center'>
                <div className='misionVisionCards p-5'>
                    <div className='titleIcon d-flex justify-content-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                    </div>
                    <h2 className='text-white text-center'>Visión</h2>
                    <p className='text-white'>Nuestra visión es ser líderes en la cría de ganado extensivo, reconocidos por nuestra dedicación a la calidad, y el bienestar animal, contribuyendo así a un futuro más saludable y equilibrado.</p>
                </div>
                <div className='infoCard p-5'>
                        <div className='titleIcon d-flex justify-content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-square-rounded" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 9h.01" />
                                <path d="M11 12h1v4h1" />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                            </svg>
                        </div>
                        <h2 className='text-white text-center'>Información</h2>
                        <p className='text-white'>Ubicados en San Juan de Oriente, nuestro ganado es el resultado del esfuerzo y cuidado arduo que se le ha dedicado. Con una visión de crecimiento sostenible, aspiramos a ser un referente en la ganadería extensiva, inspirando a otros a adoptar prácticas responsables y a apreciar la calidad de nuestros productos.</p>
                </div>
                <div className='misionVisionCards p-5'>
                    <div className='titleIcon d-flex justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M9 17h6" />
                        <path d="M9 13h6" />
                    </svg>
                    </div>
                    <h2 className='text-white text-center'>Misión</h2>
                    <p className='text-white'>Nuestra misión es producir carne de la más alta calidad, criada de manera sostenible y ética, para ofrecer a nuestros clientes productos ganaderos saludables y deliciosos.</p>
                </div>
            </div>
        </div>
    );
}
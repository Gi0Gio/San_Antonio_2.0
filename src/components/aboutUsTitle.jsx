import '../style/aboutUsTitleStyle.css'

export default AboutUsTitle

function AboutUsTitle(){
    return(
        <div className='titleContainer w-100 d-flex justify-content-center'>
            <div className='titleContent w-75 text-center'>
                <h1 className='mainTitle'>Sobre Nosotros</h1>
                <h1 className='subTitle'>Un Equipo Unido</h1>
            </div>
        </div>
    )
}

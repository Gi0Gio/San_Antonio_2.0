import ProfileCard from './profileCard'
import { InfoCards } from './infoCards'

import '../style/aboutUsContentStyle.css'

export default AboutUsContent

function AboutUsContent(){
    return(
        <>
            <div className='aboutCards d-flex justify-content-evenly'>
                <ProfileCard cardImage='https://github.com/Gi0Gio/ChemChy/blob/main/Gio.png?raw=true' cardTitle={"Giovanny Jované"} cardDescription={"Co-Líder de la Ganadería"}/>
                <InfoCards infoTitle='Nosotros'>Bienvenidos a Ganadera San Antonio, un lugar donde la tradición y la pasión se unen para crear una experiencia única en la cría de ganado extensivo. Enclavados en el corazón de la campiña, en un rincón pintoresco de la región, hemos estado comprometidos con la producción de carne de la más alta calidad durante generaciones.</InfoCards>
                <ProfileCard cardImage='https://github.com/Gi0Gio/ChemChy/blob/main/Jully.png?raw=true' cardTitle={"Julieth Jované"} cardDescription={"Co-Líder de la Ganadería"}/>
            </div>
            <div className='aboutCards d-flex justify-content-evenly'>
                <InfoCards infoTitle='Historia'>Ganadera San Antonio tiene sus raíces en la visión de una familia que ha dedicado su vida a la ganadería extensiva. Fundada en el año 1956, nuestra finca ha sido un testigo de la evolución y el crecimiento de la industria ganadera en la región. </InfoCards>
                <ProfileCard cardImage='https://github.com/Gi0Gio/ChemChy/blob/main/Papa.png?raw=true' cardTitle={"Santiago Jované"} cardDescription={"Líder de la Ganadería"}/>
                <InfoCards infoTitle='Valores'>Nos comprometemos a mantener un equilibrio armonioso entre la producción ganadera y la conservación del medio ambiente. Nuestra finca es un ejemplo de cómo la agricultura y la naturaleza pueden coexistir en armonía. Valoramos la salud y el bienestar de nuestros animales por encima de todo. Garantizando su comodidad y felicidad en todo momento.</InfoCards>
            </div>
        </>
    )
}
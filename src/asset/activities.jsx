import '../style/activityStyle.css'
import ActivitiesContent from "../components/activitiesContaines"

export default Activites

function Activites(){
    const bage = {
        backgroundColor: '#5A4929',
      };
    const nar = {
        backgroundColor: '#7F5A35',
    };
    const grgr = {
        backgroundColor: '#928764',
    };
    const grl = {
        backgroundColor: '#7A8334',
    };
    const grd = {
        backgroundColor: '#4A4F1F',
    };
    return(
        <>
            <div className="actCont text-center">
                <h1 className="activityTitle">Actividades</h1>
                <p className="activityDesc">Aquí se les dará un pequeño vistazo a los trabajos</p>
                <p className="activityDesc">que realizamos en la Ganadera San Antonio.</p>
            </div>
            <div className='p-5'>
            <ActivitiesContent title="Hierra" stylee={bage} pic="https://github.com/Gi0Gio/ChemChy/blob/main/hierra.jpg?raw=true">
                Marcamos el ganado, para salvaguardar su seguridad, salud, y beneficios que cuentan al estar en nuestra Ganadera.
            </ActivitiesContent>
            <ActivitiesContent title="Inyectología" stylee={nar} pic="https://github.com/Gi0Gio/ChemChy/blob/main/inyectologia.jpg?raw=true">
            Administramos a nuestros animales, con los productos más eficiente en términos de fármacos <b>necesarios</b>, para que crezcan y se desarrollen de manera estable y en armonía con su genética.
            </ActivitiesContent>
            <ActivitiesContent title="Baño" stylee={grgr} pic="https://github.com/Gi0Gio/ChemChy/blob/main/bath.jpg?raw=true">
            El baño es trabajo escencial en nuestra ganadera. Con esto atacamos parásitos que atacan por medio cutáneo, que atentan con la salud de los animales, y personas. Se prioriza la verificación del uso de productos poco intrusivos, cuidando la dósis protegiendo tanto el animal como el ambiente.
            </ActivitiesContent>
            <ActivitiesContent title="Rodeo" stylee={grl} pic="https://github.com/Gi0Gio/ChemChy/blob/main/rodeo.jpg?raw=true">
            Vigilamos y nos preocupamos por el sitio y estado en el que se encuentran nuestros animales. Cuidando aspectos, como su alimento, agua, cerco, y que se encuentren completos.
            </ActivitiesContent>
            <ActivitiesContent title="Preservación Ambiental" stylee={grd} pic="https://github.com/Gi0Gio/ChemChy/blob/main/presamb.jpg?raw=true">
            Cuidamos con esmero la ambiente en el que está el ganado, manteniendo el pasto alto, sin apoyarnos de la quema de potreros, velamos por la existencia de árboles, con el fin de formar un ecosistema, y mantener con agua las cuencas dentro de nuestro territorio, y utilizamos estacas vivas, para cercar.
            </ActivitiesContent>
            </div>
        </>
    )
}
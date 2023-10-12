import PropType from "prop-types"
import '../style/aboutUsContentStyle.css'

export default ActivitiesContent

function ActivitiesContent({children, title, pic, stylee}){
    return(
        <div className="activityContent d-flex text-white">
            <div className="activityInfo w-75 p-5 d-flex flex-column gap-5"  style={stylee}>
                <h1 className="title">{title}</h1>
                <h4 className="infoDesc">{children}</h4>
            </div>
            <div className="image w-25 d-flex">
                <img className=" card-img" rel={title} src={pic}></img>
            </div>
        </div>
    )
}

ActivitiesContent.propTypes = {
    stylee: PropType.object.isRequired,
    children: PropType.string.isRequired,
    title: PropType.string.isRequired,
    pic: PropType.string.isRequired,

}
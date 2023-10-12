import '../style/infoCardsStyle.css'
import PropTypes from 'prop-types';

export function InfoCards({children, infoTitle}){
    return(
        <div className='infoContent text-white p-5'>
            <h1 className='infoTitle text-center'>{infoTitle}</h1>
            <p className='infoText'>{children}</p>
        </div>
    )
}

InfoCards.propTypes = {
    children: PropTypes.string.isRequired,
    infoTitle: PropTypes.string.isRequired,
}; 
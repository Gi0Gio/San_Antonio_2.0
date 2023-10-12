import '../style/profileCardStyle.css'
import PropTypes from 'prop-types';

export default ProfileCard

function ProfileCard({ cardImage, cardTitle, cardDescription}){
    return(
        <div className='contentCard text-center d-flex flex-column gap-3 p-5'>
            <div className="d-flex flex-column align-items-center">
                <img className='cardImage' src={cardImage} alt={cardTitle} />
            </div>
            <h1 className='cardTitle'>{cardTitle}</h1>
            <p className='cardDesc'>{cardDescription}</p>
        </div>
    );
}

ProfileCard.propTypes = {
    cardImage: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
  };
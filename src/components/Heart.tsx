import '../assets/css/heart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Heart() {
  return (
    <>
      <div className="heart-container">
        <div className="dancing-icon">
          <div className="hearts-animations">
            <FontAwesomeIcon className="heart" icon={faHeart} />
            <FontAwesomeIcon className="heart" icon={faHeart} />
            <FontAwesomeIcon className="heart" icon={faHeart} />
          </div>
        </div>
      </div>
    </>
  );
}

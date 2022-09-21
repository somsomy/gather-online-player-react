import '../assets/css/detail.css';
import Slider from 'react-slick';
import { usePlayersDetail } from '../api/gather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

export default function OnlinePlayersDetail() {
  const { data } = usePlayersDetail();

  const settings = {
    dots: false,
    arrows: false,
    vertical: true,
    slidesToShow: 3,
    verticalSwiping: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  };

  return (
    <div className="players-detail">
      <Slider {...settings} autoplay={data && data.length >= 3} infinite={data && data.length >= 3}>
        {data?.map((player) => (
          <div key={player}>
            <div className="box">
              <div className="avatar">
                <FontAwesomeIcon icon={faCat} />
              </div>
              <p>{player}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

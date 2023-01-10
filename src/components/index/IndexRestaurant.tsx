import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/useRedux';
import { guideActions } from '@/store/guide';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import { createImageSrc } from '@/utils/images';
import type { Restaurant } from '@/types/restaurant';

function IndexRestaurant() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function goDetailPage(item: Restaurant) {
    dispatch(guideActions.updateGuide(item));
    navigate(`/restaurant/${item.RestaurantName}`);
  }

  useEffect(() => {
    async function getRestaurant() {
      const sample = [5, 6, 9, 13, 15, 16, 18, 19, 20, 21];
      const random = Math.random() * 10 | 0;
      const params = generateParams({
        $top: 4,
        $filter: `Picture/PictureUrl1 ne null and city ne null and endswith(RestaurantID,'0000${sample[random]}')`,
      });
      const result = await ajax.get(`/v2/Tourism/Restaurant?${params}`);
  
      setRestaurants(result);
    }

    getRestaurant();
  }, []);

  return (
    <div>
      <div className="caption">
        <h2>一再回訪美食</h2>
        <Link to="/restaurant">查看更多美食</Link>
      </div>

      <ul className="exhibit">
        {restaurants.map(item => {
          const { RestaurantID, Picture , City, RestaurantName } = item;

          return (
            <li key={RestaurantID} className="picture_scale" onClick={() => goDetailPage(item)}>
              <div className="picture">
                <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
              </div>
              <p className="name">{RestaurantName}</p>
              <div className="city"><img src={createImageSrc('icon/location-base.png')} alt="" />{City}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default IndexRestaurant;


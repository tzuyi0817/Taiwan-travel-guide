import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/useRedux';
import { guideActions } from '@/store/guide';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import type { Activity } from '@/types/activity';

function formatTime(time: string) {
  return new Date(time).toLocaleDateString();
}

function IndexActivity() {
  const [activity, setActivity] = useState<Activity[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function goDetailPage(item: Activity) {
    dispatch(guideActions.updateGuide(item));
    navigate(`/activity/${item.ActivityName}`);
  }

  useEffect(() => {
    async function getActivity() {
      const date = new Date().toISOString().slice(0, 10);
      const params = generateParams({
        $top: 4,
        $orderby: 'StartTime asc',
        $filter: `Picture/PictureUrl1 ne null and date(StartTime) ge ${date}`,
      });
      const result = await ajax.get(`/v2/Tourism/Activity?${params}`);
  
      setActivity(result);
    }

    getActivity();
  }, []);

  return (
    <div>
      <div className="caption">
        <h2>近期活動</h2>
        <Link to="/activity">查看更多活動</Link>
      </div>

      <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:pb-4">
        {activity.map(item => {
          const { ActivityID, Picture, StartTime, EndTime, ActivityName, City } = item;

          return (
            <li key={ActivityID} className="index_activity picture_scale" onClick={() => goDetailPage(item)}>
              <div className="picture">
                <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
              </div>
              <div className="ml-4 w-[calc(100%-106px)] h-full md:flex md:flex-col md:justify-around">
                <div>
                  <p className="text-xs text-[#646464] md:text-base">{`${formatTime(StartTime)} ~ ${formatTime(EndTime)}`}</p>
                  <p className="font-bold ellipsis md:text-[22px]">{ActivityName}</p>
                </div>
                <p className="text-xs text-[#646464] flex gap-1 items-center md:text-base">
                  <img src="/src/assets/icon/location-base.png" alt="" className="hidden md:block" />{City}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default IndexActivity;

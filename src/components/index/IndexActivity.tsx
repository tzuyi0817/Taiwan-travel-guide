import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import type { Activity } from '@/types/activity';

function IndexActivity() {
  const [activity, setActivity] = useState<Activity[]>([]);

  async function getActivity() {
    const parameters = generateParams({
      $top: 4,
      $orderby: 'StartTime desc',
      $filter: 'Picture/PictureUrl1 ne null',
    });
    const result = await ajax.get(`/v2/Tourism/Activity?${parameters}`);

    setActivity(result);
  }

  function formatTime(time: string) {
    return new Date(time).toLocaleDateString();
  }

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      <div className="index_caption">
        <h2>近期活動</h2>
        <Link to="/">查看更多活動 〉</Link>
      </div>

      <ul>
        {activity.map(item => {
          const { ActivityID, Picture, StartTime, EndTime, ActivityName, City } = item;

          return (
            <li key={ActivityID} className="index_activity">
              <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
              <div className="ml-4 w-[calc(100%-106px)]">
                <p className="text-xs text-[#646464]">{`${formatTime(StartTime)} ~ ${formatTime(EndTime)}`}</p>
                <p className="font-bold ellipsis">{ActivityName}</p>
                <p className="text-xs text-[#646464]">{City}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default IndexActivity;

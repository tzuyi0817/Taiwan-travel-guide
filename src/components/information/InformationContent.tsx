import { useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { useAppSelector } from '@/hooks/useRedux';
import type { MenuKey } from '@/types/menu';

const Title = tw.span`
  font-bold
  text-lg
  md:text-xl
`;

function formatTime(time?: string) {
  return new Date(time ?? '').toISOString().slice(0, 19).replace('T', ' ');
}

function InformationContent() {
  const guide = useAppSelector(({ guide }) => guide.currentSelect);
  const location = useLocation();
  const type = location.pathname.split('/')[1] as MenuKey;

  return (
    <section className="gap-2 flex flex-col md:text-lg">
      {type === 'scenicSpot' && 
        <>
          <p><Title>開放時間：</Title>{guide?.OpenTime}</p>
          <p><Title>服務電話：</Title>{guide?.Phone}</p>
          <p><Title>景點地址：</Title><a href={`https://maps.google.com/maps?q=${guide?.Address}`}>{guide?.Address}</a></p>
          <p><Title>官方網站：</Title><a href={guide?.WebsiteUrl}>{guide?.WebsiteUrl}</a></p>
          <p><Title>票價資訊：</Title>{guide?.TicketInfo}</p>
          <p><Title>注意事項：</Title>{guide?.Remarks}</p>
        </>
      }
      {type === 'activity' && 
        <>
          <p><Title>活動時間：</Title>{formatTime(guide?.StartTime)}~{formatTime(guide?.EndTime)}</p>
          <p><Title>聯絡電話：</Title>{guide?.Phone}</p>
          <p><Title>主辦單位：</Title>{guide?.Organizer}</p>
          <p><Title>活動地點：</Title><a href={`https://maps.google.com/maps?q=${guide?.Address}`}>{guide?.Address}</a></p>
          <p><Title>官方網站：</Title><a href={guide?.WebsiteUrl}>{guide?.WebsiteUrl}</a></p>
          <p><Title>活動費用：</Title>{guide?.Charge}</p>
          <p><Title>注意事項：</Title>{guide?.Remarks}</p>
        </>
      }
      {type === 'restaurant' && 
        <>
          <p><Title>營業時間：</Title>{guide?.OpenTime}</p>
          <p><Title>聯絡電話：</Title>{guide?.Phone}</p>
          <p><Title>餐廳地址：</Title><a href={`https://maps.google.com/maps?q=${guide?.Address}`}>{guide?.Address}</a></p>
          <p><Title>官方網站：</Title><a href={guide?.WebsiteUrl}>{guide?.WebsiteUrl}</a></p>
        </>
      }
    </section>
  )
}

export default InformationContent;

import { MenuOption } from '@/types/menu';

export const MENU_MAP = {
  scenicSpot: '探索景點',
  activity: '節慶活動',
  restaurant: '品嚐美食',
};

export const MENU_OPTIONS: MenuOption[] = [
  { value: 'scenicSpot', label: '探索景點' },
  { value: 'activity', label: '節慶活動' },
  { value: 'restaurant', label: '品嚐美食' },
];

export const MENU_PLACEHOLDER = {
  scenicSpot: '你想去哪裡？請輸入關鍵字',
  activity: '想找有趣的？請輸入關鍵字',
  restaurant: '你想吃什麼？請輸入關鍵字',
};

export const MENU_NAME = {
  scenicSpot: 'ScenicSpotName',
  activity: 'ActivityName',
  restaurant: 'RestaurantName',
} as const;

export const MENU_ID = {
  scenicSpot: 'ScenicSpotID',
  activity: 'ActivityID',
  restaurant: 'RestaurantID',
} as const;

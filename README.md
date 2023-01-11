# Taiwan Travel Guide

## Description

This is a `Taiwan Travel Guide` website.  
Introducing famous tourist attractions in Taiwan.

## Development

Clone this repository and install dependencies by running `pnpm`(Node.js version is 18.12.0), then:

- `pnpm dev`: Run in development mode
- `pnpm build`: Build in production mode
- `pnpm preview`: Run preview

## Project Files

```text
src/
├── assets/
│   ├── icon/*
│   └── images/*
├── components/
│   ├── common/
│   │   ├── LazyImage.tsx
│   │   └── Loading.tsx
│   ├── index/
│   │   ├── IndexActivity.tsx
│   │   ├── IndexCarousel.tsx
│   │   ├── IndexRestaurant.tsx
│   │   ├── IndexScenicSpot.tsx
│   │   ├── IndexSearch.tsx
│   │   └── IndexTitle.tsx
│   ├── information/
│   │   ├── InformationCarousel.tsx
│   │   ├── InformationContent.tsx
│   │   ├── InformationDescription.tsx
│   │   ├── InformationLocation.tsx
│   │   └── InformationMore.tsx
│   ├── GuideCarousel.tsx
│   ├── GuideCrumbs.tsx
│   ├── GuideDatePicker.tsx
│   ├── GuideFooter.tsx
│   ├── GuideHeader.tsx
│   ├── GuideHotTopics.tsx
│   ├── GuideSearch.tsx
│   ├── GuideSearchResult.tsx
│   └── GuideSelect.tsx
├── config/
│   ├── city.ts
│   ├── hotTopics.ts
│   └── menu.ts
├── hooks/
│   ├── useIntersectionObserver.ts
│   ├── useRedux.ts
│   └── useScrollToTop.ts
├── pages/
│   ├── Activity.tsx
│   ├── Index.tsx
│   ├── Information.tsx
│   ├── NotFound.tsx
│   ├── Restaurant.tsx
│   └── ScenicSpot.tsx
├── router/
│   └── index.tsx
├── store/
│   ├── guide.ts
│   └── index.ts
├── style/
│   ├── common/
|   │   ├── all.css
│   │   ├── badge.css
│   │   ├── button.css
│   │   ├── caption.css
│   │   ├── carousel.css
│   │   ├── datePicker.css
│   │   ├── ellipsis.css
│   │   ├── exhibit.css
│   │   ├── input.css
│   │   ├── mask.css
│   │   ├── middle.css
|   │   └── picture.css
│   ├── pages/
|   │   ├── all.css
|   │   └── index.css
│   ├── index.css
│   └── tailwind.css
├── types/
│   ├── activity.d.ts
│   ├── menu.d.ts
│   ├── restaurant.d.ts
│   └── scenicSpot.d.ts
├── utils/
│   ├── ajax.ts
│   ├── generateParams.ts
│   ├── generateToken.ts
│   └── images.ts
├── App.vue
├── axios.d.ts
├── vite-env.d.ts
└── main.tsx
```

## Use Technology

- react
- react-select
- react-responsive-carousel
- react-datepicker
- redux
- redux-persist
- typescript
- tailwindcss
- vite

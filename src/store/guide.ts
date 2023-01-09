import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ScenicSpot } from '@/types/scenicSpot';
import type { Restaurant } from '@/types/restaurant';
import type { Activity } from '@/types/activity';

interface State {
  currentSelect: (ScenicSpot & Restaurant & Activity) | null;
}

const initialGuideSate: State = {
  currentSelect: null,
};

const guideSlice = createSlice({
  name: 'guide',
  initialState: initialGuideSate,
  reducers: {
    updateGuide(state, action: PayloadAction<ScenicSpot & Restaurant & Activity>) {
      state.currentSelect = action.payload;
    }
  }
});

export const guideActions = guideSlice.actions;

export default guideSlice.reducer;

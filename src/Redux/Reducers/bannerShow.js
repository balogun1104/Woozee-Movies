import { createSlice } from "@reduxjs/toolkit";

const initialState = { hideBanner: true };

export const bannerShow = createSlice({
  name: "banner",
  initialState,
  reducers: {
    BannerShow: (state, { payload }) => {
      state.hideBanner = payload;
    },
  },
});

export default bannerShow.reducer;
export const { BannerShow } = bannerShow.actions;
export const BannerState = (state) => state.banner.hideBanner;

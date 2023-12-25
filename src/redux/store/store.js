/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import ButtonReducer from '../features/Button/ButtonSlice';
import SideBarReducer from '../features/SideBar/SideBarSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      Button: ButtonReducer,
      SideBar: SideBarReducer,
    },
  });
};

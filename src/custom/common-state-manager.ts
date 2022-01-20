/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import {AJAX_STATUS}  from './html-status';

import commonAsyncActionManager, { IPreProcessAsyncAction, IPostProcessAsyncAction } from './common-async-action-manager';
import { IApiCall } from './apis';

export default function commonStateManager(apiObject: IApiCall,
  preProcess?: IPreProcessAsyncAction, 
  postProcess?: IPostProcessAsyncAction,
   ) {
  const asyncAction = commonAsyncActionManager(apiObject, preProcess, postProcess);

  const sliced = createSlice({
    name: apiObject.name,
    initialState: { data: null, dto: null, status: AJAX_STATUS.IDLE, error: null },

    reducers: {
      set(state, action) {
        console.log('set', action);
        state.status = AJAX_STATUS.SUCCESS;
        state.data = action?.payload;
      },
      reset(state) {
        state.data = null;
        state.dto = null;
        state.status = AJAX_STATUS.IDLE;
      },
    },

    extraReducers: (builder) => {
      builder
        .addCase(asyncAction.pending, (state, action) => {
          if (action?.meta?.arg?.lowPriority !== true) {
            state.status = AJAX_STATUS.LOADING;
          }
        })
        .addCase(asyncAction.fulfilled, (state, action) => {
          state.status = action?.payload?.status ? AJAX_STATUS.SUCCESS : AJAX_STATUS.ERROR;
          state.data = action?.payload?.status ? action?.payload?.data : null;
          state.dto = action?.payload?.dto;
          state.error = action?.payload?.status ? null : action?.payload?.data;
        })
        .addCase(asyncAction.rejected, (state, action) => {
          state.status = AJAX_STATUS.ERROR;
          state.data = null;
          // state.dto = action?.payload?.dto;
          // state.error = action?.payload?.error;
        })
        .addCase('LOGOUT', (state) => {
          state.data = null;
          state.dto = null;
          state.status = AJAX_STATUS.IDLE;
        });
    },
  });

  return{ ...sliced, asyncAction };
}

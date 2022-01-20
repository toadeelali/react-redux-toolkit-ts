import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { IApiCall } from "./apis";

import { httpClient } from './http';

export type IPreProcessAsyncAction = (preCall:{ apiObject:IApiCall, dto:any}, thunkAPI: any)=> {processedApiData: IApiCall, processedDto:{}};
export type IPostProcessAsyncAction =  (postCall:{ status: number, data: any, dto: any, apiObject:IApiCall }, thunkAPI: any)=> any;

export default function commonAsyncActionManager(
  apiObject: IApiCall, 
  preProcess?: IPreProcessAsyncAction, 
  postProcess?: IPostProcessAsyncAction,
  ): AsyncThunk<{
    status: number;
    data: any;
    dto: any;
}, any, {}> {
  const nApiObject = { ...apiObject };
  return createAsyncThunk(nApiObject.name, async (dto:any, thunkAPI) => {
    const callObj = { processedApiData: apiObject, processedDto: dto}; 

    if(typeof preProcess === 'function') {
      const res = preProcess({ apiObject: nApiObject, dto }, thunkAPI); 
      callObj.processedApiData = res.processedApiData;
      callObj.processedDto = res.processedDto;
    }

    const { status, data } = await httpClient(callObj.processedApiData, callObj.processedDto, thunkAPI);

    if (typeof postProcess === 'function') {
      const pData = postProcess({ status, data, dto, apiObject: nApiObject }, thunkAPI);
      return { status, data: pData??data, dto: apiObject.isForm ? {} : dto };
    }

    return { status, data, dto: apiObject.isForm ? {} : dto };
  });
}
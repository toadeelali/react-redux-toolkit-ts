// * key: local(code) name of the API e.g. 'verifyEmail'. !Important it is used for redux names
// * api: Backend API path(url) e.g. '/email/verify/__R1__/',
// * type: Type of API method e.g. get, post, put
// * isAuthenticationReq: current API require auth token in header of it,
// * from: there can be multiple sources of apis prep.atp, instructor.api etc
// add this in api object and set source in config.js => baseURL array

export interface IApiCall {
  name: string,
  api: string,
  type: 'get' | 'post' | 'put' | 'delete' | 'patch',
  from: 0 | 1 | 2, // server 1, 2, 3 what ever
  isAuthenticationReq: Boolean,
  isForm?: Boolean,
  specificURL?: string,
  customAuth?: string,
}

interface IApiCallRecords {
  [key: string]: IApiCall
}

// Record<[key: string], IApiCall>
const API_CALLS:IApiCallRecords = {
    // !important dynamically sets from where to get the data
    stateActionAsyncAPI: {
      name: 'stateActionAsyncAPI',
      api: '/me/',
      type: 'get',
      isAuthenticationReq: true,
      from: 0,
    },

    actionAsyncAPI: {
      name: 'actionAsyncAPI',
      api: '/me/',
      type: 'get',
      isAuthenticationReq: true,
      from: 0,
    },
  };

export default API_CALLS;


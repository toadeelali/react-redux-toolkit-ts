import API_CALLS from "./apis";
import commonAsyncActionManager from "./common-async-action-manager";
import commonStateManager from "./common-state-manager";

export const asyncStateAction = commonStateManager(API_CALLS.stateActionAsyncAPI);

export const asyncNormalAction = commonAsyncActionManager(API_CALLS.actionAsyncAPI);
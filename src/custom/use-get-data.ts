import { useEffect, useState } from "react";

import { AJAX_STATUS } from "./html-status";
import { useAppDispatch, useAppSelector } from "../_state/hooks";

// apiKey: What state should this hook look into redux to get required data
// actionToDispatch: What action to dispatch in case there is no data in shelf/reducer
// params: params for action
// start: should this hook ask for data from server in case there is no data in reducer

const useGetData = (
  toolKitAction: any,
  params = {},
  start = true,
  autoReload = true
) => {
  const sParams = JSON.stringify(params);
  const [init, setInit] = useState(false);
  const [isAutoLoading, setIsAutoLoading] = useState(false);
  const { data, dto, status } = useAppSelector((state)=> state[toolKitAction.name]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!start) return;
    if (status === AJAX_STATUS.IDLE) {
      dispatch(toolKitAction.asyncAction(sParams && JSON.parse(sParams)));
      if (isAutoLoading) setIsAutoLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, status]);

  useEffect(() => {
    if (!autoReload) return undefined;
    if (init) {
      setIsAutoLoading(true);
      dispatch(toolKitAction.actions.reset());
    } else {
      setInit(true);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sParams, autoReload]);

  return {
    dispatch,
    data,
    dto,
    success: status === AJAX_STATUS.SUCCESS,
    error: status === AJAX_STATUS.ERROR,
    preload: (status === AJAX_STATUS.LOADING && status !== AJAX_STATUS.IDLE) ||
      ((isAutoLoading || autoReload) && status === AJAX_STATUS.IDLE),
  };
};

export default useGetData;

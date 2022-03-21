import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

interface BaseResponse<ResponseData = any> {
  code: number;
  message: string;
  status: string;
  data: ResponseData;
}

interface FetchState<ResponseData = any> {
  isLoading: boolean;
  response: BaseResponse<ResponseData>;
  error?: unknown;
}

type FetchActions<ResponseData = any> =
  | {
      type: 'fetch-send';
    }
  | {
      type: 'my-quran-api--success';
      payload: { body: BaseResponse<ResponseData> };
    }
  | {
      type: 'my-quran-api--failed';
      payload: { error: unknown };
    };

const BASE_URL = 'https://api.quran.sutanlab.id';

// constants
const initialState: FetchState<any> = {
  isLoading: false,
  response: undefined,
};

function fetchReducer(draft: FetchState, action: FetchActions) {
  switch (action.type) {
    case 'fetch-send':
      draft.isLoading = true;
      break;
    case 'my-quran-api--failed':
      draft.isLoading = false;
      draft.error = action.payload.error;
      break;
    case 'my-quran-api--success':
      draft.isLoading = false;
      draft.error = undefined;
      draft.response = action.payload.body;
      break;
  }
}

export default function useMyQuranAPI<ResponseData>(
  endpoint: string
): FetchState<ResponseData> {
  const [state, dispatch] = useImmerReducer<
    FetchState<ResponseData>,
    FetchActions<ResponseData>
  >(fetchReducer, initialState);

  const fetcher = async () => {
    dispatch({ type: 'fetch-send' });

    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: 'my-quran-api--success',
          payload: {
            body: json,
          },
        });
      } else {
        return Promise.reject(json);
      }
    } catch (error) {
      dispatch({
        type: 'my-quran-api--failed',
        payload: {
          error,
        },
      });
    }
  };

  useEffect(() => {
    fetcher();
  }, [endpoint]);

  return state;
}

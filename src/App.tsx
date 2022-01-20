import {useState} from 'react';

import { useAppSelector, useAppDispatch } from './store-by-redux/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counter/counterSlice';
import useGetData from './custom/use-get-data';
import {asyncStateAction, asyncNormalAction} from './custom/actions';

import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [asyncAction, setAsyncAction] = useState({loading: false, data: 'no data'});

  // this initiates api call on page load 
  const {data, preload } = useGetData(asyncStateAction, { amount: 0 });
  const incrementValue = Number(incrementAmount) || 0;

  // console.log('data',data, "success", success,"preload",preload, "error", error);

  const handleAsync = async () =>{
    setAsyncAction({...asyncAction , loading: true});
    const res: any = await dispatch(asyncNormalAction({}));
    if(res.payload.status){
      setAsyncAction({...asyncAction , loading: false, data: res.payload.data});
    }
  }

  return (
    <main className="App">
        
        <article className='divider'>
          <h4>Redux default functionality</h4>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span>{count}</span>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
 
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </article>

      <article className='divider'>
        <h4>commonAsyncActionManager (async data: {asyncAction.data})</h4>
        <ol>
          <li>takes IApiCall object and returns a async thunk</li>
          <li>upon dispatching async thunk loading state gets set </li>
          <li>and we can always check if the request was failed of successful by check promise response </li>
        </ol>
        <button
            style={{margin: 4}}
            disabled={preload}
            onClick={handleAsync}
          >
            Async Action (loading: {asyncAction.loading?'yes':'no'})
          </button>
      </article>
  
      <article className='divider'>
        <h4>commonStateManager (data: {data})</h4>
        <ol>
          <li>takes IApiCall object and returns Object of type slice and async thunk </li>
          <li>register slice in store in order to work it </li>
          <li>
            It works well with <strong>UseGetData<small>(A custom hook)</small></strong>. pass create object to useGetData
            <ul>
              <li>fetches the api data and updates the state of the component automatically</li>
              <li>takes first param ... and uses props internally  </li>
              <li>dto: sends this with api call, if second param changes it reloads the data itself</li>
              <li>start: control bit to delay call of api call</li>
              <li>autoReload: controls if auto reloading of data required or not</li>
            </ul>
          </li>
        </ol>
        
        <section>
          <button
            style={{margin: 4}}
            disabled={preload}
            onClick={() => dispatch( asyncStateAction.asyncAction({ amount: data }) )}
          >
            API hit simulation
          </button>
          <button
            style={{margin: 4}}
            disabled={preload}
            onClick={() => dispatch( asyncStateAction.actions.set(12) )}
          >
            Set data=12 manually
          </button>
          <button
            style={{margin: 4}}
            disabled={preload}
            onClick={() => dispatch( asyncStateAction.actions.reset() )}
          >
            Reset data in redux
          </button>
        </section>
      </article>
        
    </main>
  );
}

export default App;

import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react';
import './App.css'
import CodeContext from './main';
import SomeChild from './SomeChild';
import useLocalStorage from './useLocalStorage';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const codeInfo = useContext(CodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello Hooks")
  }, [count]);

  const handleRef = () => {
    console.log(ref)
  };

  // useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while (i < 2000000) {
  //     i++;
  //   }
  //   return count02 * count02;
  // };

  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  // useCallBack 関数のメモ化
  const [counter, setCounter] = useState(0);

  // const showCount = () => {
  //   alert(`これは重い処理です。`)
  // }

  const showCount = useCallback(() => {
    alert(`これは重い処理です。`);
  }, [counter]);

  // カスタムフック
  const [age, setAge] = useLocalStorage("age", 36);


  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>


      <hr />
      {/* 文字列の取得などに使用 */}
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>

      <hr />
      {/*  */}
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>－</button>

      {/* Reactのパフォーマンスを向上 メモリに保存、メモ可(保存)することができる*/}
      <hr />
      <h1>useMemo</h1>
      <div>カウント１：{count01}</div>
      <div>カウント２：{count02}</div>
      <div>結果：{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>＋</button>

      <hr />
      <h1>UseCallBack</h1>
      <SomeChild showCount={showCount} />

      <hr />
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>

    </div>


  )
}

export default App;

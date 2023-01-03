import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //타입 스크립트는 이 onChange 함수가 InputElement에 의해서 실행 될 것을 안다.
    // console.log(event.currentTarget.value);
    // target과 currenTarget의 차이점 : target: 이벤트가 처음 발생한 대상, currentTarget: 버블링 혹은 캡처링 과정에서 현재 이벤트가 위치하고 있는 대상 - ReactJs Typescript를 쓴다면 currentTarget 을써야 value확인할수잇다.

    // const value = event.currentTarget.value;
    // const tagname = event.currentTarget.tagName;
    const {
      currentTarget: { value, tagName },
    } = event; //es6 문법 - event안 currentTarget 안에 value 값을 기존 이름 그대로 value라는 변수를 만드는 것 만약 event 안 속성만 가져온다 하면 const {x, y} = event; 이런식으로됨
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 정의 한다면 이 이벤트는 React.FormEvent 이고 이 이벤트는 HTMLFormElement에 의해 발생 되는 이벤트야.
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;

import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState); //atom의 값, atom을 수정 할 함수 제공
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(typeof event.currentTarget.value); -> string
    setMinutes(+event.currentTarget.value);
  };
  const hours = useRecoilValue(hourSelector);

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minute"
      />
      <input value={hours} type="number" placeholder="Hours" />
    </div>
  );
}

export default App;

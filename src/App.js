import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

//Box가 소유한 모든 속성들을 들고 온다
const Circle = styled(Box)`
  border-radius: 50px;
`;

//하지만 만약에 a tag 처럼 tag가 달라야 한다면? 스타일 사용 하려는거지 확장 하는게 아니니 as="a" 를 써준다.
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

//속성을 정할 수 있다.
const Input = styled.input.attrs({ required: true })`
  background-color: yellow;
`;

function App() {
  return (
    <>
      <Father as="header">
        <Box bgColor="teal" />
        <Circle bgColor="pink" />
      </Father>
      <Father>
        <Btn>Button</Btn>
        <Btn as="a" href="/">
          Button
        </Btn>
      </Father>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </>
  );
}

export default App;

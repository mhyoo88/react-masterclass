import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
      transform: rotate(0deg);
      border-radius: 0;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 20px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  //target을 안에서 설정 할 수 있다.
  ${Emoji} {
    &:hover {
      font-size: 36px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🔔</Emoji>
      </Box>
      <Emoji as="p">🎇</Emoji>
    </Wrapper>
  );
}

export default App;

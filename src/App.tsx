import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor}; ;
`;

const Text = styled.span`
  color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Title>이건 바로 테마 색이야</Title>
      <Text>dd</Text>
    </Wrapper>
  );
}

export default App;

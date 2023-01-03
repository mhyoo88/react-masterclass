import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  //component의 prop에 전근 하는 방법. 인자로 받아온다.
  return <Container bgColor={bgColor} />; //TypeScript가 봣을땐 Container 이기 때문에 bgColor라는 porp을 못받아온다. ContainerProps 을 추가 해주고 .div<ContainerProps> 추가 하면 에러가 사라진다.
}

export default Circle;

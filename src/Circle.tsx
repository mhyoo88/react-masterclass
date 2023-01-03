import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; //optional === borderColor: string | undefined;

  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  //text = "" -> ES6 default 값
  //component의 prop에 전근 하는 방법. 인자로 받아온다.
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  ); // CircleProps 에선 borderColor가 옵셔널이라 Circle 컴포넌트에 borderColor가 없어도 에러가 안나지만 Container는 필수 값이라 에러가 난다 그렇다면 대체 할 default 값 보내기 할 수 있다.
}

export default Circle;

import { valueToNode } from "@babel/types";
import { useState } from "react";
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
  borderColor?: string;

  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [counter, setCounter] = useState(1); //타입 스크립트는 default value로 number 타입이란 것을 알아서 추정한다.
  // setCounter("hey"); //warning 을 준다

  const [value, setValue] = useState<number | string>(0); //set하는 value 값이 number도 될수 있고 string도 될 수 있다는 것을 알려준다.
  setValue("hey"); // 보통 state는 같은 타입으로 가지만 예외적인 상황에 필요할때 쓴다.

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;

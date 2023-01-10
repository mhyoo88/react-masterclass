import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { useOutletContext } from "react-router";

const Container = styled.div`
  padding: 0px 10px;
  margin: 0 auto;
  max-width: 480px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.textColor};
  padding: 6px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface IDarkModeButton {
  toggleDark: () => void;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins); //타입스크립트 에러가 나기 떄문에 <ICoin[]>을 붙여주고 useQuery는 fetcher 함수를 부르고 fetcher 함수가 끝나면 Lodading에 bollean 값을 주고 data에 jason을 넣는다.
  const { toggleDark } = useOutletContext<IDarkModeButton>();
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDark}>toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map(
            //data는 ICoin[] | undefined 이니 ?을 써서 nullor undefined값 을 처리할 때 폴백 값을 제공
            (coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={coin}>
                  {/* state로 coin 정보를 해당 route에 보낼수 있다. */}
                  <Img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  ${coin.name} &rarr;
                </Link>
              </Coin>
            )
          )}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;

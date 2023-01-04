import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about"); //유저가 로그인 했는데 redirect 하거나 유저가 어떤 페이지로 갔는데 접근 권한이 없을떄
  };
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          {/* <Link to={"/about"}>About</Link> */}
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;

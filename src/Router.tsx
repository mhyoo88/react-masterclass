import { createBrowserRouter } from "react-router-dom";
import ErroComponent from "./components/ErrorComponent";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";

const router = createBrowserRouter([
  {
    path: "/", // 만일 /about 경로로 이동하려고 한다면 react-router 는 Root를 매칭 시켜 바로 "/" 이 URL로 매칭이 된다. outlet을 하게 되면 해당 컴포넌트를 outlet 을 이용해 렌더해주는것이다.
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErroComponent />, //사용자는 이게 없으면 빈화면을 보여질것이다. 일종의 에러 장벽을 만드는 것
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId", //children 안만들고 한번에 한이유는 users 에 갈 필요가 없기 때문에
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

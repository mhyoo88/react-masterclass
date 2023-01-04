import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";

const router = createBrowserRouter([
  {
    path: "/", // 만일 /about 경로로 이동하려고 한다면 react-router 는 Root를 매칭 시켜 바로 "/" 이 URL로 매칭이 된다. outlet을 하게 되면 해당 컴포넌트를 outlet 을 이용해 렌더해주는것이다.
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;

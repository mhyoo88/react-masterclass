import { createBrowserRouter } from "react-router-dom";
import Coins from "./screens/Coins";
import ErroComponent from "./components/ErrorComponent";
import Coin from "./screens/Coin";
import NotFound from "./screens/NotFound";
import Root from "./Root";
import Chart from "./screens/Chart";
import Price from "./screens/Price";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, //Outlet 을 정의한 route를 불러온다
    children: [
      {
        path: "",
        element: <Coins />,
        errorElement: <ErroComponent />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

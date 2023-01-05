import { useOutletContext } from "react-router";

interface IFollwerContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollwerContext>();
  console.log(nameOfMyUser); // Outlet에서 보낸 데이터가 보여진다.
  // console.log(useOutletContext());

  return <h1>Here are {nameOfMyUser} followers</h1>;
}

export default Followers;

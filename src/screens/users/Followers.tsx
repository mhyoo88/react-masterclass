import { useOutletContext } from "react-router";

interface IFollwerContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollwerContext>();

  return <h1>Here are {nameOfMyUser} followers</h1>;
}

export default Followers;

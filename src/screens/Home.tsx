import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";
function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams(); //array 두개 중 첫번째는 search 파라미터를 읽는다.
  // console.log(readSearchParams.has("geo"));
  setTimeout(() => {
    setTimeout(() => {
      setSearchParams({
        day: "today",
        tomorrow: "123",
      });
    }, 3000);
  });
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>${user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

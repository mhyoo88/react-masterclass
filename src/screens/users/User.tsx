import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams(); //파라미터로 던져진 정보를 담아낸다.
  console.log(userId); // {userId: '2'}
  // console.log(users);
  return (
    <h1>
      user width id {userId} is named : {users[Number(userId) - 1].name}
    </h1>
  );
}

export default User;

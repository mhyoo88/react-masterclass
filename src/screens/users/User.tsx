import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  console.log(useOutletContext());
  const { userId } = useParams();
  return (
    <div>
      <h1>
        user width id {userId} is named : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followsers</Link>
      <Outlet
        context={{
          //어떤 자식들이든 해당 데이터를 send 해준다
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}

export default User;

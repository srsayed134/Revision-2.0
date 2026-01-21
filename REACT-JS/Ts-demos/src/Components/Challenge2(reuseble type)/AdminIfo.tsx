import type { UInfo } from "./UserInfo";

type Ainfo = UInfo & {
  admin: string;
};

function AdminIfo({ userName, email, age, location, admin }: Ainfo) {
  return (
    <div>
      <h1>{userName}</h1>
      <p>{email}</p>
      <p>{age}</p>
      <p>{JSON.stringify(location)}</p>
      <p>{admin}</p>
    </div>
  );
}

export default AdminIfo;

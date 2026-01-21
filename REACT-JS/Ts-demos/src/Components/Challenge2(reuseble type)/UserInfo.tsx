export type UInfo = {
    userName : string;
    email: string;
    age: number;
    location: string[];

}

function UserInfo({userName, email, age, location} : UInfo) {
  return (
    <div>
        <h1>{userName}</h1>
        <p>{email}</p>
        <p>{age}</p>
        <p>{email}</p>
        <p>{JSON.stringify(location)}</p>

    </div>
  )
}

export default UserInfo
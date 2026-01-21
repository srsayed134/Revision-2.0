import type { AdminInfos } from './types'

type AdminInfoProps = {
    admin: AdminInfos;
}

const AdminInfo = ({admin} : AdminInfoProps) => {
  return (
    <div>
        <h2>Admin Information</h2>
        <p>ID: {admin.id}</p>
        <p>Name: {admin.name}</p>
        <p>Email: {admin.email}</p>
        <p>Role: {admin.role}</p>
        <p>Last Log in: {admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo
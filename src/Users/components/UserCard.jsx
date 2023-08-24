
export function UserCard({user}) {
  return (
    <div className=" bg-orange-600 h-20 w-34">
        <div>
            <p> </p>
        </div>

        <div>
            <p>{user.userName}</p>
            <p>{user.userLastName}</p>
        </div>

        <div>
            <p> Correo electrónico </p>
            <p>{user.userEmail}</p>
        </div>

        <div>
            
        </div>
    </div>
  )
}

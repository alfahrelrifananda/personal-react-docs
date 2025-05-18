function UserWelcome(props) {
    
    const welcomeMessage = <h2>Welcome {props.nama}</h2>
    const loginPrompt = <h2>You must log in to continue</h2>

    return (
        props.isLoggedIn ?
                            welcomeMessage 
                            :
                            loginPrompt
    )
}
export default UserWelcome
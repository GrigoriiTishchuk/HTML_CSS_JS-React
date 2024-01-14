function UserCard(props){
/*I set props as a Object - in this way*/
    const {myObject} = props;

    return (
        <>
          <h2>User Information</h2>
          <p>Name: {myObject.name}</p>
          <p>Email: {myObject.email}</p>
        </>
      );
}

export default UserCard;
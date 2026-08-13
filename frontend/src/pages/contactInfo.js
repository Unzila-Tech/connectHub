export default function Contact({ user }){
    if (!user) {
    return <div> error</div>;
  }
    return(
        <>
          <p>{user.email}</p>
        </>
    );
}
import Form from "../components/form"

function Login() {
  return ( 
    <div>
      <h1>Welcome to Matilda</h1>
      <h2>A Marketplace</h2>
      <Form route="/api/token/" method="login" />
    </div> )
}

export default Login

//github contribution

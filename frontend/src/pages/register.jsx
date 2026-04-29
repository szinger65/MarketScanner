import Form from "../components/form"

function Register() {
  return ( 
    <div className="min-h screen font-sans mt-20">
      <main className="flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-slate-100">
          <div className="text-center mb-4">
            <Form route="/api/user/register/" method="register" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register

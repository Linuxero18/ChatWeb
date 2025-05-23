import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!usuario || !password) {
      setError("Por favor, completa todos los campos")
      return
    }
    if (usuario === "admin" && password === "admin") {
      localStorage.setItem("token", "admin")
      navigate("/home")
    } else {
      setError("Usuario o contraseña incorrectos")
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="relative w-full max-w-sm">
          <div className="absolute inset-0 transform -rotate-6 bg-blue-400 rounded-3xl shadow-lg z-0"></div>
          <div className="absolute inset-0 transform rotate-6 bg-red-400 rounded-3xl shadow-lg z-0"></div>
          <div className="relative z-10 bg-white rounded-3xl shadow-lg px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Login</h2>

            <form onClick={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-gray-100 shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-gray-100 shadow-md hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-400"
                  />
                  <span>Recuérdame</span>
                </label>
                <a href="#" className="hover:text-gray-900 underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

                {error && (
                    <div className="mt-2 text-red-500 text-sm text-center">
                {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-xl shadow-xl hover:shadow-inner transform hover:scale-105 transition duration-300 ease-in-out"
              >
                Iniciar sesión
              </button>
            </form>

            <div className="mt-6 flex items-center space-x-4 text-gray-400">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm">O accede con</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <div className="mt-4 flex justify-center space-x-5">
              <button className="bg-blue-600 px-4 py-2 rounded-xl text-white shadow-md hover:scale-105 transition">
                Facebook
              </button>
              <button className="bg-red-500 px-4 py-2 rounded-xl text-white shadow-md hover:scale-105 transition">
                Google
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              <span>¿Eres nuevo?</span>{' '}
              <a href="/register" className="text-blue-500 hover:underline hover:scale-105 transition">
                Crea una cuenta
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
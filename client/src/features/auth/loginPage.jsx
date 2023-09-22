export default function LoginPage() {
  return (
    <div className="md:grid md:grid-cols-2 items-center w-full min-h-screen">
      <div className="pr-4 border-r-2 ma border-green-500">
        <img className="" src="/src/assets/images/login.png" alt="" />
      </div>
      <div className="px-8 space-y-8">
        <h1 className="text-3xl font-bold ">Se connecter</h1>
        <form action="" className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent "
              type="text"
              placeholder="Email"
            />
          </div>
          <div  className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent "
              type="password"
              placeholder="Mot de passe"
            />
          </div>
        <button
            type="submit"
            className="bg-green-500 text-white rounded-md px-4 py-2"
        >
            Se connecter
        </button>
        </form>
      </div>
    </div>
  );
}

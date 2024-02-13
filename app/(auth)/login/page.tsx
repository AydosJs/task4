import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-neutral-100 text-neutral-900 font-medium bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:26px_26px]">
        <div className="max-w-md text-center"></div>
      </div>
      <div className="w-full bg-neutral-900 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold mb-4 text-white text-center">
              Log In
            </h1>
            <h1 className="text-sm  mb-6 text-neutral-500 text-center">
              Join to Our Community with all time access and free{" "}
            </h1>
          </div>

          <form action="#" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-500"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-neutral-100 text-neutral-900 font-medium mt-1 p-2 py-3 w-full border rounded focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-neutral-100 text-neutral-900 font-medium mt-1 p-2 py-3 w-full border rounded focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors duration-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-neutral-800 border-2 border-neutral-700 mt-4 p-3 rounded hover:bg-neutral-900 hover:border-neutral-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-neutral-100 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-neutral-500 text-center">
            <p>
              Don&apos;t have an account yet ?{" "}
              <Link href="/signup" className="text-blue-500 hover:underline">
                SignUp here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

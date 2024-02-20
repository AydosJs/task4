import Link from "next/link";
import Form from "./Form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();

  if (!!session) {
    redirect("/");
  }

  return (
    <div className="flex h-screen">
      {/* <div className="hidden lg:flex items-center justify-center flex-1 bg-neutral-100 text-neutral-900 font-medium bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:26px_26px]">
        <div className="max-w-md text-center"></div>
      </div> */}
      <div className="w-full bg-neutral-900 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold mb-4 text-white text-center">
              Log In
            </h1>
            <h1 className="text-sm  mb-6 text-neutral-500 text-center">
              Join to Our Community with all time access and free{" "}
            </h1>
          </div>

          <Form />

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

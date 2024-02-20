"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { emailRegex } from "../signup/Form";
import { CgSpinner } from "react-icons/cg";
import { UserValues } from "@/types";

export default function Form() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState<UserValues>({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (!emailRegex.test(formData.email)) {
        return toast.error("Invalid email", {
          id: "invalidEmail",
        });
      }

      const data = {
        ...formData,
        lastLoggedIn: new Date(),
      };

      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res?.ok) {
        toast.success("Successfully logged in", {
          id: "successfullyLoggedIn",
        });
        router.push("/");
        router.refresh();
      } else {
        toast.error(res?.error ?? "Invalid email or password", {
          id: "invalidEmailOrPassword",
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-500"
        >
          Email
        </label>
        <input
          required
          value={formData.email}
          onChange={handleChange}
          type="text"
          id="email"
          name="email"
          className=" bg-neutral-800 border-2 text-neutral-100 border-neutral-700 font-medium mt-1 p-2 py-3 w-full rounded focus:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 transition-colors duration-300"
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
          required
          value={formData.password}
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          className=" bg-neutral-800 border-2 text-neutral-100 border-neutral-700 font-medium mt-1 p-2 py-3 w-full rounded focus:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 transition-colors duration-300"
        />
      </div>
      <div>
        <button
          disabled={loading}
          type="submit"
          className="disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-neutral-800 disabled:hover:border-neutral-700 w-full bg-neutral-950/50 border-2 border-neutral-700 mt-4 p-3 rounded hover:bg-neutral-900 hover:border-neutral-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-neutral-100 transition-colors duration-300"
        >
          <div className="flex flex-row items-center justify-center w-full">
            Submit
            {loading && <CgSpinner className="w-5 h-5 ml-2 animate-spin" />}
          </div>
        </button>
      </div>
    </form>
  );
}

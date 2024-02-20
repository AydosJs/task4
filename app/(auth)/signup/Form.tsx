"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { UserValues } from "@/types";
import axios from "axios";

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserValues>({
    name: "",
    email: "",
    password: "",
    position: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (!emailRegex.test(formData.email)) {
        return toast.error("Invalid email", {
          id: "invalidEmail",
        });
      } else if (!formData.password?.trim()) {
        return toast.error("Use another password!", {
          id: "invalidPassword",
        });
      }
      const response = await axios.post("api/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.message === "User already exists") {
        toast.error("Email already registered. Please use a different email.", {
          id: "emailAlreadyRegistered",
        });
      } else {
        await signIn("credentials", {
          ...formData,
          redirect: false,
        }).then(() => {
          toast.success("Successfully registered", {
            id: "successfullyRegistered",
          });
          router.push("/");
        });
      }
    } catch (error) {
      console.log("login error", error);
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
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-500"
          >
            Name
          </label>
          <input
            value={formData.name ? formData.name : ""}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            className="bg-neutral-800 border-neutral-700 mt-1 text-neutral-100 font-medium p-2 py-3 w-full border-2 rounded focus:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 transition-colors duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-neutral-500"
          >
            Position
          </label>
          <input
            value={formData.position ? formData.position : ""}
            onChange={handleChange}
            type="text"
            id="position"
            name="position"
            className="bg-neutral-800 border-neutral-700 mt-1 text-neutral-100 font-medium p-2 py-3 w-full border-2 rounded focus:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 transition-colors duration-300"
          />
        </div>
      </div>
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
          className="bg-neutral-800 border-neutral-700 mt-1 text-neutral-100 font-medium p-2 py-3 w-full border-2 rounded focus:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 transition-colors duration-300"
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
          className="bg-neutral-800 border-neutral-700 mt-1 text-neutral-100 font-medium p-2 py-3 w-full border-2 rounded focus:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 transition-colors duration-300"
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

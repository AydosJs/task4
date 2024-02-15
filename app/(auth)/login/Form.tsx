"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormValues>({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        ...formData,
        redirect: false,
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log({ error });
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
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
  );
}

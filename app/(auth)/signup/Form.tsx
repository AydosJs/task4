"use client";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify(formData),
      });

      console.log({ res });
    } catch (error) {}
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
          htmlFor="name"
          className="block text-sm font-medium text-neutral-500"
        >
          name
        </label>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          className="bg-neutral-100 mt-1 text-neutral-900 font-medium p-2 py-3 w-full border rounded focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors duration-300"
        />
      </div>
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
          className="bg-neutral-100 mt-1 text-neutral-900 font-medium p-2 py-3 w-full border rounded focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors duration-300"
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
          className="bg-neutral-100 mt-1 text-neutral-900 font-medium p-2 py-3 w-full border rounded focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors duration-300"
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

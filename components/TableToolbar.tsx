"use client";
import { useGlobalContext } from "@/context/store";
import React, { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import toast from "react-hot-toast";

export default function TableToolbar() {
  const context = useGlobalContext();
  if (!context) {
    throw new Error("Component must be used within a Provider");
  }
  const { selectedId, setIsLoading, setSelectedId } = context;

  const handleDeleteClick = async () => {
    if (selectedId.length == 0 || !confirm("Are you sure you want to delete?"))
      return;
    try {
      deleteItem();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedId }),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
      } else {
        console.log("Unexpected response:", response.status);
      }
    } catch (error) {
      console.log("Delete error", error);
    } finally {
      setIsLoading(false);
      setSelectedId([]);
    }
  };

  const handleBlock = async () => {
    if (selectedId.length == 0 || !confirm("Are you sure you want to block?"))
      return;
    try {
      setIsLoading(true);
      const response = await fetch("/api/user/block", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedId }),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
      } else {
        console.log("Unexpected response:", response.status);
      }
    } catch (error) {
      console.log("Block error", error);
    } finally {
      setIsLoading(false);
      setSelectedId([]);
    }
  };

  const handleActive = async () => {
    if (
      selectedId.length == 0 ||
      !confirm("Are you sure you want to activate?")
    )
      return;
    try {
      setIsLoading(true);
      const response = await fetch("/api/user/active", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedId }),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
      } else {
        console.log("Unexpected response:", response.status);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setSelectedId([]);
    }
  };

  return (
    <div className="flex flex-row mb-4 space-x-2 items-center justify-start w-full">
      <button
        onClick={handleBlock}
        className="px-2 py-1 opacity-60 hover:opacity-100 border-2 bg-red-800 border-red-500 font-normal rounded flex flex-row items-center"
      >
        <FaLock className="w-4 h-4 mr-2" />
        Block
      </button>
      <button
        onClick={handleActive}
        className="px-2 py-2 opacity-60 hover:opacity-100 border-2 bg-green-800 border-green-500 font-normal rounded flex flex-row items-center"
      >
        <FaLockOpen className="w-4 h-4" />
      </button>
      <button
        onClick={handleDeleteClick}
        className="px-2 py-2 opacity-60 hover:opacity-100 border-2 bg-red-900 border-red-700 font-normal rounded flex flex-row items-center"
      >
        <RiDeleteBinFill className="w-4 h-4" />
      </button>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Input from "@/components/atoms/Input";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function PasswordInput({
  value,
  onChange,
  placeholder,
}: Readonly<PasswordInputProps>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <BsEyeSlash className="h-5 w-5 text-gray-400" />
        ) : (
          <BsEye className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;

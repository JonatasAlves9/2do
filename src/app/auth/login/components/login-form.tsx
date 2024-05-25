"use client";
import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "../../actions/login";
import { toast } from "react-toastify";

const initialState = {
  error: {
    email: "",
    password: "",
  },
};

const formInitialState = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [state, formAction] = useActionState((e: any, e1: any) => {
    return login(e, e1).then((res) => {
      toast.success("Login successful");
      return res;
    });
  }, initialState);
  const { pending } = useFormStatus();
  const [formState, setFormState] = React.useState(formInitialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form action={formAction}>
      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email"
        value={formState.email}
        onChange={handleChange}
        error={state.error.email}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        id="password"
        placeholder="Digite sua senha"
        onChange={handleChange}
        value={formState.password}
        error={state.error.password}
      />

      <div className="flex justify-between items-center">
        <div>
          <input type="checkbox" id="remember" className="me-1" />
          <label
            htmlFor="remember"
            className="text-sm text-slate-500 font-semibold"
          >
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-purple-700 hover:underline">
          Forgot password?
        </a>
      </div>
      <Button
        type="submit"
        className=" bg-purple-700 text-white"
        aria-disabled={pending}
        loading={pending}
      >
        Login
      </Button>
    </form>
  );
};

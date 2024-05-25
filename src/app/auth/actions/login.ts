"use server";

import { z } from "zod";
import { cookies } from "next/headers";

export async function login(
  prevState: {
    error: {
      email: string;
      password: string;
    };
  },
  formData: FormData
) {
  const schema = z.object({
    email: z.string().email("Take a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  try {
    schema.safeParse(
      schema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      })
    );
    cookies().set("auth", "true");
  } catch (error: any) {
    let errors: {
      email: string;
      password: string;
    } = {
      email: "",
      password: "",
    };

    error.errors.forEach((err: any) => {
      err.path.forEach((path: "email" | "password") => {
        errors[path] = err.message;
      });
    });
    return {
      error: errors,
    };
  }

  return { error: { email: "", password: "" } };
}

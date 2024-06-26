import { Button } from "@/components/form/button";
import { AppleIcon } from "@/components/icons/apple";
import { GoogleIcon } from "@/components/icons/google";
import { LoginForm } from "./components/login-form";

export default function Login() {
  return (
    <div className="bg-slate-50 h-full flex">
      <div className="w-full h-full flex flex-col">
        <header className="p-4 text-white">2DO</header>
        <div className="flex-grow flex justify-center items-center">
          <div className=" w-2/3 p-7">
            <LoginForm />
            <Button
              type="button"
              className="bg-slate-300 text-gray-800 inline-flex items-center justify-center gap-x-2"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>SignIn with Google</span>
            </Button>
            <Button
              type="button"
              className="bg-slate-300 text-gray-800 inline-flex items-center justify-center gap-x-2"
            >
              <AppleIcon className="w-4 h-4" />
              <span>SignIn with Apple</span>
            </Button>

            <hr className="my-8" />
            <div className="flex justify-center items-center">
              <span className="text-sm text-slate-500">
                Dont have an account?
              </span>
              <a
                href="#"
                className="text-sm text-purple-700 hover:underline ms-1"
              >
                Register
              </a>
            </div>
          </div>
        </div>
        <footer className="p-4 text-white">
          <div className="flex justify-center text-center">
            <span className="text-sm text-slate-500">
              © {new Date().getFullYear()} 2DO
            </span>
          </div>
        </footer>
      </div>
      <div className="bg-slate-900 w-full flex items-center justify-center">
        <h1 className="text-white">Login</h1>
      </div>
    </div>
  );
}

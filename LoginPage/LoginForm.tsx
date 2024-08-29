/**
 * This code was generated by Builder.io.
 */
import React from "react";

const LoginForm: React.FC = () => {
  return (
    <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow px-px font-semibold min-h-[677px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80b249494017f87e67d4cc0b40a73d3c71640dbd1c73fe2e94bdf2e0ee23fd25?placeholderIfAbsent=true&apiKey=522f082a491d4bc58a4fc1aa5c676416"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center items-center px-20 py-48 bg-black bg-opacity-0 max-md:px-5 max-md:py-24 max-md:max-w-full">
          <div className="flex flex-col mb-0 max-w-full w-[298px] max-md:mb-2.5">
            <div className="flex flex-col px-10 py-4 bg-black bg-opacity-0 max-md:px-5">
              <h2 className="self-center text-xl text-zinc-800">Login</h2>
              <p className="mt-4 text-xs text-center text-zinc-400">
                Enter your user_id and password to access <br /> your account.
              </p>
            </div>
            <form className="flex flex-col px-2 pt-2.5 pb-0.5 bg-black bg-opacity-0 max-md:mr-1 max-md:ml-0.5">
              <label
                htmlFor="userId"
                className="self-start text-xs text-zinc-700"
              >
                User id
              </label>
              <div className="flex flex-col justify-center p-1 mt-1.5 text-xs whitespace-nowrap bg-black bg-opacity-0 text-zinc-600">
                <input
                  type="text"
                  id="userId"
                  className="px-2.5 py-3 bg-white rounded border border-solid border-zinc-100 max-md:pr-5"
                  placeholder="Hello@"
                />
              </div>
              <label
                htmlFor="password"
                className="self-start text-xs text-neutral-600 mt-2"
              >
                Password
              </label>
              <div className="flex gap-5 justify-between px-4 py-3.5 text-2xl bg-black bg-opacity-0 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-zinc-800">
                <input
                  type="password"
                  id="password"
                  className="w-full bg-transparent border-none outline-none"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/048d9b6487d925223d6311aea95e3ec985816f628fc7775d7cfeae18fc209666?placeholderIfAbsent=true&apiKey=522f082a491d4bc58a4fc1aa5c676416"
                  alt=""
                  className="object-contain shrink-0 w-4 rounded-lg aspect-[0.94]"
                />
              </div>
              <button
                type="submit"
                className="flex z-10 flex-col justify-center self-center p-1 mt-6 max-w-full text-xs whitespace-nowrap bg-black bg-opacity-0 text-slate-300 w-[274px] px-16 py-3 rounded border border-solid bg-slate-900 border-neutral-600 max-md:px-5"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

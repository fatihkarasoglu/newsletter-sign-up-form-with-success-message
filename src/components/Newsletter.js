import { useState } from "react";
import Success from "./Success";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("Valid email required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Valid email required");
      return;
    }

    setError("");
    setSuccess(true);
    return;
  };

  return (
    <div className="min-w-full min-h-screen flex lg:justify-center lg:items-center justify-center items-center font-main">
      <div className="w-full justify-center items-center hidden lg:flex">
        {success ? (
          <Success />
        ) : (
          <div className="bg-white rounded-lg shadow-lg max-w-md lg:max-w-4xl flex flex-col lg:flex-row p-4 lg:p-8">
            <div className="flex flex-col lg:w-1/2 space-y-4 lg:p-8 justify-center">
              <h2 className="text-5xl lg:text-4xl font-bold text-[#242742]">
                Stay updated!
              </h2>
              <p className="text-[#242742] text-xs font-medium">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <img
                    src={require("../images/icon-list.svg").default}
                    alt="Success"
                    className="w-6 h-6"
                  />

                  <span className="ml-3 text-xs font-semibold text-[#242742]">
                    Product discovery and building what matters
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    src={require("../images/icon-list.svg").default}
                    alt="Success"
                    className="w-6 h-6"
                  />

                  <span className="ml-3 text-xs font-semibold text-[#242742]">
                    Measuring to ensure updates are a success
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    src={require("../images/icon-list.svg").default}
                    alt="Success"
                    className="w-6 h-6"
                  />
                  <span className="ml-3 text-xs font-semibold text-[#242742]">
                    And much more!
                  </span>
                </li>
              </ul>

              <form className="space-y-4">
                {error ? (
                  <>
                    <label className="text-xs font-bold">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      autoComplete="off"
                      required
                      placeholder="Valid email required"
                      className="w-full px-4 py-3 bg-[#ff6257] bg-opacity-15 placeholder-red-500 placeholder:text-xs placeholder:font-medium border border-red-500 default:border-red-500 rounded-md pl-[10px] text-[14px] text-[#ff6257]"
                    />
                  </>
                ) : (
                  <>
                    <label className="text-xs font-bold">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      autoComplete="off"
                      required
                      placeholder="email@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </>
                )}
                <button
                  onClick={handleClick}
                  type="submit"
                  className="w-full bg-[#242742] text-white rounded-lg py-3 font-medium hover:bg-[#ff6257] hover:shadow-[rgba(_255,_98,_87,_0.8)_0px_20px_20px_-7px]"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src={require("../images/desktop.svg").default}
                  alt="Newsletter graphic"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full lg:hidden flex flex-col">
        {success ? (
          <Success />
        ) : (
          <>
            <div className="w-full">
              <img
                src={require("../images/mobile.svg").default}
                alt="Newsletter graphic"
                className="w-full"
              />
            </div>
            <div className="m-8">
              <h2 className="text-5xl lg:text-4xl font-bold text-[#242742]">
                Stay updated!
              </h2>
              <p className="text-[#242742] text-base mt-6 font-medium">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-center">
                  <img
                    src={require("../images/icon-list.svg").default}
                    alt="Success"
                    className="w-7 h-7"
                  />

                  <span className="ml-3 text-base font-semibold text-[#242742]">
                    Product discovery and building what matters
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    src={require("../images/icon-list.svg").default}
                    alt="Success"
                    className="w-7 h-7"
                  />

                  <span className="ml-3 text-base font-semibold text-[#242742]">
                    Measuring to ensure updates are a success
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    src={require("../images/icon-list.svg").default}
                    alt="Success"
                    className="w-7 h-7"
                  />
                  <span className="ml-3 text-base font-semibold text-[#242742]">
                    And much more!
                  </span>
                </li>
              </ul>

              <form className="space-y-4 mt-6">
                {error ? (
                  <>
                    <label className="text-base font-bold">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      autoComplete="off"
                      required
                      placeholder="Valid email required"
                      className="w-full px-4 py-3 bg-[#ff6257] bg-opacity-15 placeholder-red-500 placeholder:text-xs placeholder:font-medium border border-red-500 default:border-red-500 rounded-md pl-[10px] text-[14px] text-[#ff6257]"
                    />
                  </>
                ) : (
                  <>
                    <label className="text-base font-bold">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      autoComplete="off"
                      required
                      placeholder="email@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </>
                )}
                <button
                  onClick={handleClick}
                  type="submit"
                  className="w-full bg-[#242742] text-white rounded-lg py-5 font-medium hover:bg-[#ff6257] hover:shadow-[rgba(_255,_98,_87,_0.8)_0px_20px_20px_-7px]"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="max-w-85 bg-gray-50 p-5 rounded-lg h-full shadow-sm flex flex-col">
        <h1 className="text-[30px] font-bold text-gray-900 mb-6 max-w-4/5 leading-tight">
          Create your PopX account
        </h1>

        <form
          onSubmit={handleRegister}
          className="flex flex-col flex-grow gap-5"
        >
          <div className="relative w-full mt-2">
            <input
              type="text"
              id="fullName"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 pt-2 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-[13px] font-medium placeholder-black/70"
              required
            />
            <label
              htmlFor="fullName"
              className="absolute left-2.5 -top-2.5 text-[12px] font-bold pl-1 pr-1 bg-gray-50"
              style={{ color: "#a259ff" }}
            >
              Full Name <span style={{ color: "red" }}>*</span>
            </label>
          </div>

          <div className="relative w-full mt-2">
            <input
              type="tel"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 pt-2 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-[13px] font-medium placeholder-black/70"
              required
            />
            <label
              className="absolute left-2.5 -top-2.5 text-[12px] font-bold pl-1 pr-1 bg-gray-50"
              style={{ color: "#a259ff" }}
            >
              Phone number <span style={{ color: "red" }}>*</span>
            </label>
          </div>

          <div className="relative w-full mt-2">
            <input
              type="email"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 pt-2 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-[13px] font-medium placeholder-black/70"
              required
            />
            <label
              className="absolute left-2.5 -top-2.5 text-[12px] font-bold pl-1 pr-1 bg-gray-50"
              style={{ color: "#a259ff" }}
            >
              Email address <span style={{ color: "red" }}>*</span>
            </label>
          </div>

          <div className="relative w-full mt-2">
            <input
              type="password"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 pt-2 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-[13px] font-medium placeholder-black/70"
              required
            />
            <label
              className="absolute left-2.5 -top-2.5 text-[12px] font-bold pl-1 pr-1 bg-gray-50"
              style={{ color: "#a259ff" }}
            >
              Password <span style={{ color: "red" }}>*</span>
            </label>
          </div>

          <div className="relative w-full mt-2">
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 pt-2 pb-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-[13px] font-medium placeholder-black/70"
            />
            <label
              className="absolute left-2.5 -top-2.5 text-[12px] font-bold pl-1 pr-1 bg-gray-50"
              style={{ color: "#a259ff" }}
            >
              Company name
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label
                className="text-[12px] font-medium"
                style={{ color: "#555" }}
              >
                Are you an Agency?<span style={{ color: "red" }}>*</span>
              </label>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    className="appearance-none w-5 h-5 border border-purple-500 rounded-full relative cursor-pointer
                      before:content-[''] before:absolute before:w-2.5 before:h-2.5 
                      before:rounded-full before:top-1/2 before:left-1/2 
                      before:-translate-x-1/2 before:-translate-y-1/2
                      before:bg-purple-600
                      before:scale-0 checked:before:scale-100
                      transition-all"
                    defaultChecked
                  />
                  <span className="text-black/70 font-medium">Yes</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    className="appearance-none w-5 h-5 border border-gray-400 rounded-full relative cursor-pointer
                      before:content-[''] before:absolute before:w-2.5 before:h-2.5 
                      before:rounded-full before:top-1/2 before:left-1/2 
                      before:-translate-x-1/2 before:-translate-y-1/2
                      before:bg-purple-600
                      before:scale-0 checked:border-purple-500 checked:before:scale-100
                      transition-all"
                  />
                  <span className="text-black/70 font-medium">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex-grow" /> 
          <button
            type="submit"
            className="w-full bg-violet-700 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

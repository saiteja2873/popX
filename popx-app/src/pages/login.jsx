import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-[22%] bg-gray-50 h-full sm:shadow-md flex flex-col justify font-inter">
        
        <div className="mb-6 px-4 w-full mt-8">
          <h1 className="text-[26px] font-bold text-gray-900 text-left leading-tight max-w-3/4">
            Signin to your PopX account
          </h1>
          <p className="text-gray-500 text-[17px] font-[500] mt-4 text-left max-w-5/6 font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <form 
          onSubmit={handleLogin} 
          className="flex flex-col gap-6 px-4"
        >
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-3 pt-2 pb-2 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 
                         text-[13px] font-medium placeholder-black/30"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-2.5 -top-2.5 text-[12px] font-bold 
                         pl-1 pr-1 bg-gray-50"
              style={{ color: "#a259ff" }}
            >
              Email Address
            </label>
          </div>

          <div className="relative w-full">
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 pt-2 pb-2 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 
                         text-[13px] font-medium placeholder-black/30"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-2.5 -top-2.5 text-[12px] font-bold 
                         pl-1 pr-1 bg-gray-50"
              style={{ color: "#a259ff" }}
            >
              Password
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-violet-600 hover:bg-violet-700 
                       text-white py-3 rounded-md font-semibold 
                       transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-85 bg-gray-50 h-full md:h-screen sm:shadow-md  flex flex-col justify-end pb-10 font-inter">
        
        <div className="mb-6 px-4 w-full">
          <h1 className="text-2xl font-bold text-gray-900 text-left">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 text-[17px] font-[500] mt-2 text-left max-w-5/6 font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full px-4">
          <Link
            to="/register"
            className="bg-violet-600 text-white py-2 rounded-md text-center font-semibold"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="bg-violet-200 text-black py-2 rounded-md text-center font-semibold"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

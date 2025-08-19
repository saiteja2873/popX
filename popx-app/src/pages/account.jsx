import { CameraIcon } from '@heroicons/react/24/solid';

export default function Account() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-full max-w-85 bg-gray-50 h-full flex flex-col font-inter">
        <div className="px-3 pt-5 pb-4 bg-white">
          <h1 className="text-lg font-medium text-gray-600">
            Account Settings
          </h1>
        </div>

        <div className="flex items-center gap-6 px-4">
          <div className="relative w-18 h-30">
            <img
              src="/images/mary.png"
              alt="profile"
              className="w-18 h-30 rounded-full object-cover py-6"
            />
            <button
              type="button"
              className="absolute bottom-7 right-0 bg-violet-800 rounded-full p-1 shadow-md hover:bg-violet-700 transition-colors"
              aria-label="Change profile picture"
            >
              <CameraIcon className="w-3 h-3 text-white" />
            </button>
          </div>
          <div className="mt-[-10%]">
            <h2 className="font-semibold text-[14px] text-gray-900">
              Marry Doe
            </h2>
            <p className="text-gray-700 text-[12px] font-medium pt-[1px]">
              Marry@Gmail.com
            </p>
          </div>
        </div>

        <div className="px-3 py-0">
          <p className="text-gray-600 text-[13px] font-medium leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam.
          </p>
        </div>

        <div className="border-b border-gray-300 border-dotted tracking-wider pt-5"></div>

        <div className="absolute left-0 w-full border-b border-gray-300 border-dotted" style={{ bottom: '50px' }}></div>
      </div>
    </div>
  );
}

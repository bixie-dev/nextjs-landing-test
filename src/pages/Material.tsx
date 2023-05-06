import Link from "next/link";

import Logo from "../logo/logo";

const Material = () => {
  return (
    <div className="p-4 pb-24">
      <div className="pl-4">
        <Logo />
      </div>
      <div className="py-4 mx-16 h-[490px] rounded-[24px] bg-white drop-shadow-lg">
        <div className="grid grid-cols-3">
          <div className="font-[400] text-[12px] m-8 p-2 border border-[#4269E1] rounded-md shadow-md">
            Bruchhausenerstraße 36
            <br />
            59759 Arnsberg
            <br />
            Deutschland
          </div>
          <div className="col-span-2 font-[400] text-[20px] m-8 py-2 px-16 text-center border border-[#4269E1] rounded-md shadow-md flex justify-center">
            <div className="grid grid-cols-12 gap-4 items-center">
              <span className="col-span-10">
                Material Material Material Material Material Material Material
              </span>
              <Link href="/MaterialTodo">
                <button>
                  <svg
                    width="52"
                    height="55"
                    viewBox="0 0 52 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.992188"
                      y="0.138672"
                      width="50.1914"
                      height="54.4554"
                      rx="12"
                      fill="#49C61E"
                    />
                    <path
                      d="M26.0898 36.3665C28.172 36.3665 30.1898 35.6445 31.7994 34.3235C33.4089 33.0026 34.5107 31.1645 34.9169 29.1223C35.3231 27.0801 35.0087 24.9602 34.0271 23.1239C33.0456 21.2876 31.4577 19.8484 29.534 19.0515C27.6103 18.2547 25.4698 18.1496 23.4773 18.754C21.4847 19.3584 19.7634 20.635 18.6066 22.3663C17.4498 24.0976 16.9291 26.1764 17.1332 28.2486C17.3373 30.3208 18.2535 32.2581 19.7259 33.7304"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30.0898 25.3665L26.4919 29.684C25.8363 30.4707 25.5085 30.864 25.068 30.884C24.6274 30.904 24.2653 30.5419 23.5412 29.8178L22.0898 28.3665"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </Link>
              <button>
                <svg
                  width="51"
                  height="55"
                  viewBox="0 0 51 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.242188"
                    y="0.455322"
                    width="50.1914"
                    height="54.4554"
                    rx="12"
                    fill="#E14242"
                  />
                  <path
                    d="M25.3398 36.6831C24.1579 36.6831 22.9876 36.4503 21.8957 35.998C20.8038 35.5457 19.8116 34.8828 18.9759 34.0471C18.1402 33.2113 17.4772 32.2192 17.0249 31.1273C16.5726 30.0353 16.3398 28.865 16.3398 27.6831C16.3398 26.5012 16.5726 25.3309 17.0249 24.239C17.4772 23.147 18.1402 22.1549 18.9759 21.3191C19.8116 20.4834 20.8038 19.8205 21.8957 19.3682C22.9876 18.9159 24.1579 18.6831 25.3398 18.6831C26.5217 18.6831 27.6921 18.9159 28.784 19.3682C29.8759 19.8205 30.8681 20.4834 31.7038 21.3191C32.5395 22.1549 33.2025 23.147 33.6548 24.239C34.1071 25.3309 34.3398 26.5012 34.3398 27.6831C34.3398 28.865 34.1071 30.0353 33.6548 31.1273C33.2025 32.2192 32.5395 33.2113 31.7038 34.0471C30.8681 34.8828 29.8759 35.5457 28.784 35.998C27.6921 36.4503 26.5217 36.6831 25.3398 36.6831L25.3398 36.6831Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22.3398 24.6831L28.3398 30.6831"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M28.3398 24.6831L22.3398 30.6831"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;

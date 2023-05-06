import Logo from "../logo/logo";
import ToggleTab from "../toggle";

const Material = () => {
  return (
    <div className="p-4 pb-20">
      <div className="pl-4">
        <Logo />
      </div>
      <div className="flex grid-cols-12 gap-16">
        <div className="ml-16 col-span-4">
          <div className="pb-4">
            <ToggleTab tabs={["ToDo", "Materialien"]} />
          </div>
          <div className="p-4 w-[300px] h-[430px] rounded-[24px] bg-white drop-shadow-lg">
            <div className="mb-2">
              <input
                type="text"
                className="h-[50px] rounded-[12px] text-[12px] font-[500] pl-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Dein Unsername"
              ></input>
            </div>
            <div className="grid gap-2">
              <div className="font-[500] text-[12px] p-2 border border-[#4269E1] rounded-[12px] shadow-md">
                Bruchhausenerstraße 36
                <br />
                59759 Arnsberg
                <br />
                Deutschland
              </div>
              <div className="font-[500] text-[12px] p-2 border border-[#4269E1] rounded-[12px] shadow-md">
                Bruchhausenerstraße 36
                <br />
                59759 Arnsberg
                <br />
                Deutschland
              </div>
              <div className="font-[500] text-[12px] p-2 border border-[#4269E1] rounded-[12px] shadow-md">
                Bruchhausenerstraße 36
                <br />
                59759 Arnsberg
                <br />
                Deutschland
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 py-4 px-32 rounded-[24px] bg-white drop-shadow-lg">
          <div className="relative">
            <div className="flex justify-end">
              <button className="my-4 bg-[#4269E1] rounded-[8px] w-[30px] h-[30px] text-[#FFFFFF] justify-right">
                +
              </button>
            </div>
            <div className="grid gap-2">
              <div className="col-span-2 font-[400] text-[20px] py-2 px-16 text-center border border-[#4269E1] rounded-[12px] shadow-md flex justify-center">
                <div className="grid grid-cols-12 gap-4 items-center ">
                  <span>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8188 2.948H17.9228V0.284H10.8188V2.948ZM0.0668439 2.948H7.17084V0.284H0.0668439V2.948ZM0.0668439 8.42H7.17084V5.756H0.0668439V8.42ZM10.8188 8.42H17.9228V5.756H10.8188V8.42ZM0.0668439 13.892H7.17084V11.228H0.0668439V13.892ZM10.8188 13.892H17.9228V11.228H10.8188V13.892Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span className="col-span-9">
                    test test test test test test test test test
                  </span>
                  <span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="12" fill="#AAAFB6" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.2028 18.7959L26.9988 16.9999C27.544 16.4547 27.8167 16.1821 27.9624 15.888C28.2397 15.3284 28.2397 14.6715 27.9624 14.1119C27.8167 13.8178 27.544 13.5452 26.9988 12.9999C26.4535 12.4547 26.1809 12.1821 25.8868 12.0363C25.3273 11.759 24.6703 11.759 24.1108 12.0363C23.8167 12.1821 23.544 12.4547 22.9988 12.9999L21.1801 14.8186C22.144 16.4692 23.5301 17.8448 25.2028 18.7959ZM19.7257 16.2731L12.8552 23.1436C12.4301 23.5686 12.2176 23.7812 12.0778 24.0422C11.9381 24.3033 11.8792 24.5981 11.7613 25.1875L11.1459 28.2645C11.0794 28.5971 11.0461 28.7634 11.1407 28.858C11.2353 28.9526 11.4016 28.9194 11.7342 28.8529L14.8112 28.2375C15.4007 28.1196 15.6954 28.0606 15.9565 27.9209C16.2176 27.7812 16.4301 27.5686 16.8552 27.1436L23.7446 20.2542C22.1229 19.2385 20.7512 17.8762 19.7257 16.2731Z"
                        fill="#222222"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="12" fill="#E14242" />
                      <path
                        d="M18 23L18 20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 23L22 20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 15H29V15C28.0681 15 27.6022 15 27.2346 15.1522C26.7446 15.3552 26.3552 15.7446 26.1522 16.2346C26 16.6022 26 17.0681 26 18V24C26 25.8856 26 26.8284 25.4142 27.4142C24.8284 28 23.8856 28 22 28H18C16.1144 28 15.1716 28 14.5858 27.4142C14 26.8284 14 25.8856 14 24V18C14 17.0681 14 16.6022 13.8478 16.2346C13.6448 15.7446 13.2554 15.3552 12.7654 15.1522C12.3978 15 11.9319 15 11 15V15Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18.0681 11.3706C18.1821 11.2643 18.4332 11.1703 18.7825 11.1033C19.1318 11.0363 19.5597 11 20 11C20.4403 11 20.8682 11.0363 21.2175 11.1033C21.5668 11.1703 21.8179 11.2643 21.9319 11.3706"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="col-span-2 font-[400] text-[20px] py-2 px-16 text-center border border-[#4269E1] rounded-[12px] shadow-md flex justify-center">
                <div className="grid grid-cols-12 gap-4 items-center ">
                  <span>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8188 2.948H17.9228V0.284H10.8188V2.948ZM0.0668439 2.948H7.17084V0.284H0.0668439V2.948ZM0.0668439 8.42H7.17084V5.756H0.0668439V8.42ZM10.8188 8.42H17.9228V5.756H10.8188V8.42ZM0.0668439 13.892H7.17084V11.228H0.0668439V13.892ZM10.8188 13.892H17.9228V11.228H10.8188V13.892Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span className="col-span-9">
                    test test test test test test test test test
                  </span>
                  <span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="12" fill="#AAAFB6" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.2028 18.7959L26.9988 16.9999C27.544 16.4547 27.8167 16.1821 27.9624 15.888C28.2397 15.3284 28.2397 14.6715 27.9624 14.1119C27.8167 13.8178 27.544 13.5452 26.9988 12.9999C26.4535 12.4547 26.1809 12.1821 25.8868 12.0363C25.3273 11.759 24.6703 11.759 24.1108 12.0363C23.8167 12.1821 23.544 12.4547 22.9988 12.9999L21.1801 14.8186C22.144 16.4692 23.5301 17.8448 25.2028 18.7959ZM19.7257 16.2731L12.8552 23.1436C12.4301 23.5686 12.2176 23.7812 12.0778 24.0422C11.9381 24.3033 11.8792 24.5981 11.7613 25.1875L11.1459 28.2645C11.0794 28.5971 11.0461 28.7634 11.1407 28.858C11.2353 28.9526 11.4016 28.9194 11.7342 28.8529L14.8112 28.2375C15.4007 28.1196 15.6954 28.0606 15.9565 27.9209C16.2176 27.7812 16.4301 27.5686 16.8552 27.1436L23.7446 20.2542C22.1229 19.2385 20.7512 17.8762 19.7257 16.2731Z"
                        fill="#222222"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="12" fill="#E14242" />
                      <path
                        d="M18 23L18 20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 23L22 20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 15H29V15C28.0681 15 27.6022 15 27.2346 15.1522C26.7446 15.3552 26.3552 15.7446 26.1522 16.2346C26 16.6022 26 17.0681 26 18V24C26 25.8856 26 26.8284 25.4142 27.4142C24.8284 28 23.8856 28 22 28H18C16.1144 28 15.1716 28 14.5858 27.4142C14 26.8284 14 25.8856 14 24V18C14 17.0681 14 16.6022 13.8478 16.2346C13.6448 15.7446 13.2554 15.3552 12.7654 15.1522C12.3978 15 11.9319 15 11 15V15Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18.0681 11.3706C18.1821 11.2643 18.4332 11.1703 18.7825 11.1033C19.1318 11.0363 19.5597 11 20 11C20.4403 11 20.8682 11.0363 21.2175 11.1033C21.5668 11.1703 21.8179 11.2643 21.9319 11.3706"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;

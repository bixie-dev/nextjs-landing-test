import { useState } from "react";

import Link from "next/link";

const Login = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="">
      {flag && (
        <div className="flex flex-col items-center py-12">
          <div className="text-[36px] font-bold mt-10 pb-2">Hello Again!</div>
          <div className="text-[16px] text-[#636B75] text-center pb-12">
            <div>Ein weiterer Tag an dem du deine</div>
            <div>Mitarbeiter entspannt verwalten kannst.</div>
          </div>
          <div>
            <div className="pb-12">
              <input
                type="text"
                className="w-[700px] h-[60px] rounded-[16px] text-[16px] pl-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Dein Unsername"
              ></input>
            </div>
            <div className="pb-2">
              <input
                type="text"
                className="w-[700px] h-[60px] rounded-[16px] text-[16px] pl-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Dein Passwort"
              ></input>
            </div>
          </div>
          <button
            className="w-[700px] text-[#1E2024] font-[600] text-[12px] pb-8 text-right"
            onClick={() => {
              setFlag(!flag);
            }}
          >
            Passwort vergessen?
          </button>
          <div className="grid grid-cols-2 w-[700px] pb-16">
            <div className="">
              <div className="text-[16px] font-[600] font-['Inter']">
                Angemeldet bleiben
              </div>
              <div className="text-[10px] font-[400] font-['Inter']">
                Cookie wird nach 4 Wochen gelöscht.
              </div>
            </div>
            <div className="relative" dir="rtl">
              <input type="checkbox" id="toggleB" className="sr-only"></input>
              <div className="block bg-[#73D13D] w-14 h-8 rounded-full"></div>
              <div className="dot absolute right-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </div>
          <div className="pb-4">
            <button className="bg-[#4269E1] w-[700px] h-[60px] text-[#FFFFFF] rounded-[12px] text-[16px] font-[500]">
              anmelden
            </button>
          </div>
          <div className="text-[20px] font-[500]">
            <span>Noch keinen Account?&nbsp;</span>
            <span className="text-[#4269E1]">Registriere dich hier.</span>
          </div>
        </div>
      )}
      {!flag && (
        <div className="pt-20 flex flex-col items-center">
          <div className="text-[36px] font-[600] text-center">
            <div>
              Passwort
              <br />
              vergessen?
            </div>
          </div>
          <div className="text-[12px] font-[400] text-[#636B75] py-4 text-center">
            <div>Ein weiterer Tag an dem du deine</div>
            <div>Mitarbeiter entspannt verwalten kannst.</div>
          </div>
          <div className="pb-12">
            <input
              type="text"
              className="w-[700px] h-[60px] rounded-[16px] text-[20px] pl-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Dein Passwort"
            ></input>
          </div>
          <div>
            <Link href="/Forgot">
              <button className="bg-[#4269E1] w-[700px] h-[60px] text-[#FFFFFF] rounded-[12px] text-[16px] font-[500]">
                senden
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

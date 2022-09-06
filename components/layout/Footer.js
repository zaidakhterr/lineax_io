import LineaxLogo from "components/icons/LineaxLogo";
import React from "react";

function Footer() {
  return (
    <div className="mt-10 w-full bg-slate-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-20 md:px-8">
        <LineaxLogo className="w-32 text-slate-900" />
        <small className="text-slate-700">
          @{new Date().getFullYear()} Lineax LLC
        </small>
      </div>
    </div>
  );
}

export default Footer;

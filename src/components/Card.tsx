import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg w-64 h-96 shadow-md bg-slate-200 py-4">
      {children}
    </div>
  );
}

export default Card;

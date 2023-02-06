import React from "react";
import { Plus } from "phosphor-react";
import logoImage from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between py-20">
      <img src={logoImage} alt="logo" />
      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 text-violet-500 hover:border-violet-300"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </div>
  );
};

export default Header;

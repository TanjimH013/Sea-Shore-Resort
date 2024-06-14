import { assets } from "../../../assets/assets";

function Logo() {
  return (
    <div className="flex items-center">
      <img src={assets.logo} alt="logo" />
      <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-pink-700">
        Sea Shore Resort
      </span>
    </div>
  );
}

export default Logo;

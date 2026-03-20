import { StickyNote } from "lucide-react";

const Header = () => {
  return (
    <div className="relative mb-4">
      
      {/* Main Header */}
      <div className="
        flex items-center justify-between
        bg-gradient-to-r from-[#8ed8c6] to-[#6ecbb8]
        border-[2px] border-red-400
        rounded-2xl
        px-4 sm:px-6 py-3
        shadow-[3px_4px_0px_rgba(0,0,0,0.2)]
      ">
        
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <StickyNote className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
          
          <h1 className="
            text-red-500 
            font-bold 
            text-lg sm:text-xl md:text-2xl 
            tracking-wide
          ">
            Notes++
          </h1>
        </div>

        {/* Right Side Badge */}
        <span className="
          hidden sm:block
          text-xs sm:text-sm 
          bg-white/40 
          px-3 py-1 
          rounded-full 
          text-gray-700
          backdrop-blur-sm
        ">
          Your Ideas 💡
        </span>

      </div>

      {/* Decorative Line */}
      <div className="h-[3px] bg-red-400 w-full mt-1 rounded-full"></div>

    </div>
  );
};

export default Header;
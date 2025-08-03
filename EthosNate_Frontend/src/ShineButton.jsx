const ShineButton = ({onClick , Text }) => {
    return (
      <button
      onClick={onClick}
      className="group/button cursor-pointer relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#2e7d32] px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#2e7d32]/30">
        <span className="text-sm">{Text}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/10" />
        </div>
      </button>
    )
  }
  
  export default ShineButton
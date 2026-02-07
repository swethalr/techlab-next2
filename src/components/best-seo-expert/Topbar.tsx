"use client";

export default function TopBar() {
  return (
    <div className="w-full h-[40px] bg-[#1a1a1a] flex items-center relative z-[1000]">
      <div className="container mx-auto px-10 flex justify-between items-center text-[11px] text-white/70 tracking-widest uppercase font-bold">
        <div className="flex gap-4">
          <span>Live Chat with Expert | enquiry@it2.tv</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>Follow us:</span>
          <div className="flex gap-3 text-white">G f T in</div>
        </div>
      </div>
    </div>
  );
}
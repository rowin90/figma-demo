export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top Banner */}
      <div className="bg-cover bg-center py-2 px-14" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/header-bg.png)' }}>
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="white">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zm0-6H7V4h2v2z"/>
            </svg>
            <span className="uppercase text-xs font-medium">Thanks for sticking with us! Subscribe for 10% off your next buy.</span>
            <button className="bg-[#DA3B1F] px-3 py-1.5 rounded text-[10px] font-bold tracking-wider uppercase">
              Shop Now
            </button>
          </div>
          <div className="flex items-center gap-2.5 text-xs">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="white">
                <path d="M8 0L6 2v3H4v2h2v1.5l-4 4V14h12v-1.5l-4-4V7h2V5h-2V2L8 0z"/>
              </svg>
              <span>customer service</span>
            </div>
            <div className="w-px h-4 bg-white"></div>
            <span>USA</span>
            <svg className="w-5 h-5" viewBox="0 0 22 22" fill="white">
              <path d="M11 0l-1.5 3-3.5.5 2.5 2.5-.5 3.5 3-1.5 3 1.5-.5-3.5 2.5-2.5-3.5-.5z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-14 py-2 bg-[#262728]">
        {/* Logo */}
        <div className="w-60">
          <svg className="h-12" viewBox="0 0 240 48" fill="white">
            <text x="0" y="32" fontSize="24" fontWeight="600" fill="white">A-PREMIUM</text>
          </svg>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="bg-white rounded-md p-1 flex items-center gap-4">
            <button className="bg-[#DA3B1F] px-3 py-2 rounded text-white text-sm font-medium whitespace-nowrap">
              Add your vehicle
            </button>
            <input
              type="text"
              placeholder="Search by Part Name, Part Number, Vehicle or Brand..."
              className="flex-1 outline-none text-sm text-[#666666]"
            />
            <button className="bg-[#E6E7E8] p-2 rounded">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#262728">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="flex flex-col items-center gap-0.5 px-1 py-1 rounded-md bg-[#464748] text-white">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L4 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z"/>
            </svg>
            <span className="text-[10px]">Address</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 px-1 py-1 rounded-md bg-[#464748] text-white relative w-12 h-12">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span className="text-[10px]">Neo Yu...</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-1.5 rounded-md bg-[#DA3B1F] text-white min-w-[144px]">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0.5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                <span className="text-[10px]">Cart</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px]">3 items</span>
              <span className="text-sm font-bold">$ 359.7</span>
            </div>
            <svg className="w-4 h-4" viewBox="0 0 18 18" fill="white">
              <path d="M6 3l6 6-6 6V3z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

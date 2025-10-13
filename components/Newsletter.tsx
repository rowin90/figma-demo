export default function Newsletter() {
  return (
    <section className="w-full flex flex-col items-center bg-[#F6F7F8]">
      {/* Newsletter Signup */}
      <div className="w-full bg-[#DA3B1F] py-6 px-14">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-2xl font-bold uppercase">
              Newsletter sign up
            </h3>
            <p className="text-white text-xs">
              Subscribe to Get 10% OFF for Your Next Order
            </p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Please enter your email address"
              className="w-[400px] h-12 px-4 rounded text-sm text-[#969798] outline-none"
            />
            <button className="flex items-center gap-4 bg-[#262728] text-white px-6 h-12 rounded font-bold text-sm tracking-wider uppercase hover:bg-[#1a1a1a] transition-colors">
              Subscribe
              <svg className="w-5 h-[18px]" viewBox="0 0 20 18" fill="white">
                <path d="M12 4l6 6-6 6M2 10h16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

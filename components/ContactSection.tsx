export default function ContactSection() {
  return (
    <section className="w-full bg-[#F6F7F8] py-[60px] px-20 relative">
      <div className="max-w-[1280px] mx-auto">
        {/* Contact CTA Box */}
        <div className="bg-[#262728] rounded-[90px] p-10 flex flex-col items-center gap-4 relative">
          {/* Down Arrow Icon - positioned absolutely */}
          <div className="absolute top-[-52px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
            <svg className="w-[38px] h-[38px]" viewBox="0 0 38 38" fill="none">
              <path d="M19 10v18m0 0l-7-7m7 7l7-7" stroke="#262728" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <h2 className="text-white text-[32px] font-semibold text-center leading-tight tracking-wide">
              IF YOU&apos;RE INTERESTED IN PARTNERSHIPS — LET&apos;S CONNECT
            </h2>

            <div className="flex items-center gap-1 text-white">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <p className="text-base">
                    Reach out to us at: <span className="font-medium">partnership@a-premium.com</span>
                  </p>
                  <button className="p-1 rounded">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="white">
                      <path d="M13.5 6.5l-7 7M6.5 6.5h7v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <p className="text-base text-[#DDDDDD]">
                  and let&apos;s make something great together!
                </p>
              </div>
            </div>

            <button className="mt-2 bg-white text-[#262728] px-5 py-4 rounded font-bold text-base tracking-wider uppercase hover:bg-gray-100 transition-colors">
              Copy email address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

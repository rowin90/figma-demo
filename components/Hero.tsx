export default function Hero() {
  return (
    <section className="relative bg-[#232325] h-[380px] flex items-center px-20">
      {/* Background Image - positioned absolutely */}
      <div className="absolute right-0 top-[-24px] w-[990px] h-[555px] opacity-50">
        <div className="relative w-full h-full">
          <img
            src="/images/hero-bg.png"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute left-[450px] top-0 w-[435px] h-[380px] bg-gradient-to-r from-[#232325] to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 max-w-xl">
        <h1 className="text-white text-[58px] font-semibold leading-tight uppercase tracking-wide">
          Join the A-Premium
        </h1>
        <h2 className="text-[#DA3B1F] text-[54px] font-normal leading-tight uppercase tracking-wide">
          Partnership Program
        </h2>
      </div>
    </section>
  );
}

export default function PartnershipVision() {
  return (
    <section className="flex gap-[50px]">
      {/* Image */}
      <div className="flex-1 h-[300px] rounded-lg overflow-hidden">
        <img
          src="/images/partnership-vision.png"
          alt="Partnership Vision"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="w-[120px] h-1.5 bg-[#DA3B1F] rounded"></div>
          <h2 className="text-[#262728] text-[32px] font-semibold uppercase leading-tight">
            Our Partnership Vision
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[#262728] text-base leading-relaxed">
            At A-Premium, we are committed to making aftermarket auto parts an afterthought—ensuring vehicle maintenance and repairs are effortless.
          </p>
          <p className="text-[#262728] text-base leading-relaxed">
            As a leading online auto parts brand in the USA, we&apos;re eager to collaborate with passionate partners to expand our reach.
          </p>
          <p className="text-[#262728] text-base leading-relaxed">
            We believe in building strong, mutually beneficial partnerships to bring high-quality auto parts to more drivers.
          </p>
        </div>
      </div>
    </section>
  );
}

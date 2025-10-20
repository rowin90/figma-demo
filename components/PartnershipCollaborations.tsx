export default function PartnershipCollaborations() {
  return (
    <section className="flex gap-[50px]">
      {/* Image */}
      <div className="flex-1 h-[500px] rounded-lg overflow-hidden">
        <img
          src="/images/partnership-collaborations.png"
          alt="Partnership Collaborations"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="w-[120px] h-1.5 bg-[#DA3B1F] rounded"></div>
          <h2 className="text-[#262728] text-[32px] font-semibold uppercase leading-tight">
            Partnership Collaborations
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[#262728] text-base leading-relaxed">
            Our partnership program offers opportunities for growth. Whether you&apos;re a brand, influencer, garage, or enthusiast community, we provide customized collaboration solutions.
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-[#262728] text-base font-semibold leading-relaxed">
              Brand Partnerships
            </h3>
            <p className="text-[#262728] text-base leading-relaxed">
              Join forces with us on co-branded promotions and joint marketing campaigns to reach a wider audience.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-[#262728] text-base font-semibold leading-relaxed">
              Influencer Collaborations
            </h3>
            <p className="text-[#262728] text-base leading-relaxed">
              Work with us to showcase our products through engaging content, from hands-on installations to in-depth product reviews.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-[#262728] text-base font-semibold leading-relaxed">
              Public Relations & Media Partnerships
            </h3>
            <p className="text-[#262728] text-base leading-relaxed">
              Collaborate on brand stories, industry insights, and exclusive features to enhance credibility and audience engagement.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-[#262728] text-base font-semibold leading-relaxed">
              Car Enthusiast Communities & Clubs
            </h3>
            <p className="text-[#262728] text-base leading-relaxed">
              Whether you run a DIY tuning community, a car club, or a racing team, we offer sponsorships, product support, and exclusive deals to engage your members and fans.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-[#262728] text-base font-semibold leading-relaxed">
              Auto Repair Shops & Garages
            </h3>
            <p className="text-[#262728] text-base leading-relaxed">
              Let&apos;s collaborate on DIY tutorials, product testing, and in-store promotions to provide more high-quality options for your audience and customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

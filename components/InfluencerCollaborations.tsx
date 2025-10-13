export default function InfluencerCollaborations() {
  return (
    <section className="flex gap-[50px]">
      {/* Content */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="w-[120px] h-1.5 bg-[#DA3B1F] rounded"></div>
          <h2 className="text-[#262728] text-[32px] font-semibold uppercase leading-tight">
            Influencer Collaborations
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-[#262728] text-base leading-relaxed">
              Are you an content creator who loves working with cars? If you enjoy:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="text-[#262728] text-base leading-relaxed">
                • DIY car repairs, modifications, or part replacements
              </li>
              <li className="text-[#262728] text-base leading-relaxed">
                • Racing, off-roading, or performance tuning
              </li>
              <li className="text-[#262728] text-base leading-relaxed">
                • Professional Mechanics & Technicians
              </li>
              <li className="text-[#262728] text-base leading-relaxed">
                • RV & Camper Van Builders
              </li>
              <li className="text-[#262728] text-base leading-relaxed">
                • Tech & Gear Reviewers
              </li>
              <li className="text-[#262728] text-base leading-relaxed">
                • Road Trip Enthusiasts
              </li>
            </ul>
            <div className="ml-6 mt-2">
              <p className="text-[#262728] text-base leading-relaxed">...</p>
            </div>
            <p className="text-[#262728] text-base leading-relaxed font-medium mt-2">
              We&apos;d love to work with you!
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <p className="text-[#262728] text-base font-semibold leading-relaxed">
              Collaboration Opportunities:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="text-[#262728] text-base leading-relaxed">
                • Free samples for promotion
              </li>
              <li className="text-[#262728] text-base leading-relaxed">
                • Commission partnerships
              </li>
              <li className="text-[#262728] text-base leading-relaxed">
                • Paid sponsorships
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="flex-1 h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg"></div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#262728] text-white">
      {/* Main Footer Content */}
      <div className="px-14 py-10">
        <div className="flex gap-8 mb-10">
          {/* Contact Us Section */}
          <div className="flex-1 flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase">CONTACT US</h4>
            <div className="flex flex-col gap-4 w-80">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 border border-[#D6D7D8] rounded">
                  <span className="text-sm text-[#FAFAFA]">Live Chat</span>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="white">
                    <path d="M6 3l6 6-6 6V3z"/>
                  </svg>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-sm text-[#FAFAFA]">Phone</span>
                </div>
                <span className="text-sm text-[#929393] pl-10">+1 909-345-7134</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-sm text-[#FAFAFA]">Email</span>
                </div>
                <span className="text-sm text-[#929393] pl-10">feedback@a-premium.com</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-sm text-[#FAFAFA]">Address</span>
                </div>
                <span className="text-sm text-[#929393] pl-10">
                  1320 Valley Vista Dr. Unit # 203 Diamond Bar, CA 91765
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                    <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
                  </svg>
                  <span className="text-base font-medium text-[#FAFAFA]">Help Guide</span>
                </div>
                <span className="text-sm text-[#929393] pl-10">
                  Seek expert help for inquiries and concerns.
                </span>
              </div>

              <div className="flex items-center gap-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                <span className="text-sm text-[#FAFAFA]">Feedback</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex gap-8 flex-1">
            {/* Popular Makes */}
            <div className="flex flex-col gap-6 flex-1">
              <h4 className="text-sm font-bold uppercase">POPULAR MAKES</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Chevrolet Parts</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Ford Parts</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">GMC Parts</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Dodge Parts</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Toyota Parts</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Show more</a>
              </div>
            </div>

            {/* Customer Service */}
            <div className="flex flex-col gap-6 flex-1">
              <h4 className="text-sm font-bold uppercase">CUSTOMER SERVICE</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Help Center</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Track Order</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Member Policy</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Return Policy</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Shipping Policy</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Warranty Policy</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Payment Policy</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Term of Use</a>
              </div>
            </div>
          </div>

          {/* Information & Follow Us */}
          <div className="flex gap-8 flex-1">
            {/* Information */}
            <div className="flex flex-col gap-6 flex-1">
              <h4 className="text-sm font-bold uppercase">INFORMATION</h4>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">About Us</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">My Account</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">My Points</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">FAQS</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Blog</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Customer Reviews</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Recently viewed Products</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Affiliate Program</a>
                <a href="#" className="text-sm text-[#FAFAFA] hover:text-white">Partnership</a>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-6 flex-1">
              <h4 className="text-sm font-bold uppercase">FOLLOW US</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {/* Social Icons */}
                  <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
                {/* App Store Badges */}
                <div className="flex gap-2">
                  <div className="h-10 px-3 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs text-white">App Store</span>
                  </div>
                  <div className="h-10 px-3 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs text-white">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#464748] px-14 py-4 flex items-center justify-center gap-5 text-xs text-[#929393]">
        <span>Copyright © 2022 - 2023 A-Premium.com. All Rights Reserved.</span>
        <div className="flex items-center gap-1.5">
          {/* Payment Icons */}
          <div className="w-10 h-6 bg-white/10 rounded"></div>
          <div className="w-10 h-6 bg-white/10 rounded"></div>
          <div className="w-10 h-6 bg-white/10 rounded"></div>
          <div className="w-10 h-6 bg-white/10 rounded"></div>
        </div>
        <span>California Supply Chain Disclosure</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
}

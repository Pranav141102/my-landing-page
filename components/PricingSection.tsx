"use client";

const PricingSection = () => {
  const features = [
    "All BrandNav features included",
    "200 Screener credits per month",
    "25 Enricher credits per month",
    "Pinpoint ideal prospects",
    "Chat support with real humans"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a0b2e] to-[#2f1c4a] text-white w-full"
      style={{
        backgroundImage: "url('/banner.svg')", // Replace with your image filename
        backgroundSize: "cover", // Adjust based on your needs
        backgroundPosition: "center", // Adjust based on your needs
        backgroundRepeat: "no-repeat", // Ensures the image doesn't tile
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center max-w-[1400px] mx-auto">
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="bg-white rounded-3xl p-8 text-navy-900">
              <div className="flex items-center justify-center mb-5">
                <img src="/gift.png" alt="Gift" className="w-fi h-fit" />
              </div>
              <div className="text-center mb-6">
                <div className="text-[#2F327D] mb-1 font-bold text-2xl">Free</div>
                <div className="text-7xl font-bold mb-6 text-[#2F327D]">$0</div>
                <button className="w-full bg-[#0D6EFD] text-white rounded-lg py-3 hover:bg-blue-700 transition-colors text-lg font-medium mb-4">
                  Grab free leads
                </button>
                <div className="flex items-center justify-center text-sm text-[#595B97] gap-2">
                  <img src="/credit.svg" alt="credit card" />
                  <span className="text-[#595B97]">No credit card required</span>
                  <span className="text-[#595B97] font-bold">|</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-[#595B97]">★★★★★</span>
                    <span className="ml-1 text-[#595B97]">4.8/5 G2 Ratings</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src="/checkmark.jpg" // Replace with the correct path to your image in the public folder
                      alt="Checkmark"
                      className="w-6 h-6 flex-shrink-0 " // Adjust the size to match the uploaded example
                    />
                    <span className="text-[#141997] font-bold text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="flex justify-center -space-x-2 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-[#FCF7D0] border-2 border-white flex items-center justify-center">
                    <span className="text-sm text-[#000000] font-bold ">10k+</span>
                  </div>
                </div>
                <div className="text-sm text-[#2F327D]">
                  These people are already using BrandNav. <br />  When will YOU?
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center mb-12 lg:mb-0 lg:mr-9">
            <h2 className="text-5xl sm:text-4xl font-bold mb-6 text-white">
              Not convinced yet?
            </h2>
            <div className="text-4xl sm:text-4xl font-bold">
              Take it for a <span className="text-[#0D6EFD]">FREE</span> spin
            </div>
            <div className="text-3xl mt-4 text-gray-300">
              before committing
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;

const WhyBrandNav = () => {
  return (
    <section className="w-full py-12 sm:py-20 bg-[#999999 ]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-[40px] font-bold text-[#1E1B4B] mb-4">
            Why should you use BrandNav?
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280]">
            Optimize your workflow for faster results and higher revenue
          </p>
        </div>

        {/* First Feature - Enrich CSV (Image on left) */}
        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-5 items-center mb-20 sm:mb-32">
          {/* Left side - Image */}
          <div className="relative w-full mb-8  lg:ml-16">
            <div className="relative w-full">
              <div className="absolute -left-8 sm:-left-16 -top-8 sm:-top-16 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#EEF2FF] rounded-full opacity-50 blur-3xl" />
              <div className="absolute right-0 bottom-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-blue-50 rounded-full opacity-50 blur-3xl" />
              <div className="relative z-10 w-full">
                <img
                  src="/dashboard.png"
                  alt="Dashboard Preview"
                  className="w-[300px] sm:w-[500px] h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full mb-12 lg:mb-0 ">
            <div className="flex flex-col items-start gap-4">
              <div className="flex-shrink-0">
              <div className="rounded-xl flex items-center ">
                  <img src="/csv.svg" alt="CSV" className="w-19 h-19" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-[28px] font-bold text-[#2F327D] mb-3 sm:mb-4">
                 Enrich any CSV
                </h3>
                <p className="text-[#595B97] text-lg leading-relaxed">
                BrandNav transforms your CSV files by adding valuable <br /> contact, firmographics, and technographics data. With <br />just a few clicks, you can enhance your data with <br /> enriched information and unlock new insights and <br />opportunities.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature - Fresh Data Updates (Image on right) */}
        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-8 items-center mb-20 sm:mb-32">
  {/* Left side - Content */}
  <div className="w-full mb-8 lg:ml-16"> {/* Reduced `lg:ml-16` to `lg:ml-12` */}
    <div className="flex flex-col items-start gap-4">
      <div className="flex-shrink-0">
        <div className="rounded-xl flex items-center">
          <img src="/database.svg" alt="CSV" className="w-19 h-19" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl sm:text-[28px] font-bold text-[#2F327D] mb-3 sm:mb-4">
          Fresh data updates everyday
        </h3>
        <p className="text-[#595B97] text-lg leading-relaxed">
          BrandNav updates its data every day, providing the most <br /> recent and accurate information to its users. With a <br />
          constant stream of new information, BrandNav ensures <br /> that users have access to the latest contact, <br />
          firmographics, and technographics data for better <br /> decision-making.
        </p>
      </div>
    </div>
  </div>

  {/* Right side - Image */}
  <div className="relative w-full">
    <div className="absolute -right-12 -top-12 w-[450px] h-[450px] bg-[#EEF2FF] rounded-full opacity-50 blur-3xl" /> {/* Adjusted positioning */}
    <div className="absolute w-[280px] h-[280px] bg-blue-50 rounded-full opacity-50 blur-3xl" />
    <div className="relative z-10 w-full">
      <img
        src="/updates.svg"
        alt="Fresh Data Updates"
        className="w-[500px] sm:w-[700px] h-auto rounded-2xl"
      />
    </div>
  </div>
</div>


        {/* Third Feature - Advanced Search (Image on left) */}
        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left side - Image */}
          <div className="relative w-full mb-12 lg:mb-0">
  <div className="relative w-full">
    <div className="absolute -left-8 sm:-left-16 -top-8 sm:-top-16 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#EEF2FF] rounded-full opacity-50 blur-3xl" />
    <div className="absolute right-0 bottom-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-blue-50 rounded-full opacity-50 blur-3xl" />
    <div className="relative z-10 w-full flex justify-center">
      <img
        src="/filters.svg"
        alt="Advanced Search Preview"
        className="w-[300px] sm:w-[500px] h-auto rounded-2xl"
        loading="lazy"
      />
    </div>
  </div>
</div>


          {/* Right side - Content */}
          <div className="w-full mb-12 lg:mb-0">
            <div className="flex flex-col items-start gap-4">
              <div className="flex-shrink-0">
              <div className="rounded-xl flex items-center ">
                  <img src="/lines.svg" alt="CSV" className="w-19 h-19" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-[28px] font-bold text-[#2F327D] mb-3 sm:mb-4">
                 Advanced search with 25+ unique <br /> filters
                </h3>
                <p className="text-[#595B97] text-lg leading-relaxed">
                BrandNav offers over 25+ filters to help users build highly <br /> segmented lists for better prospecting. With BrandNav, you <br /> can create highly targeted lists that are tailored to your <br /> specific needs, streamlining your workflow and maximizing <br /> your productivity.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrandNav; 
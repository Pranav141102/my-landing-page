const FixDataAccuracy = () => {
  return (
    <section className="w-full py-16 bg-[#FAFBFF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2F327D]">
            Fix data accuracy problems
            <br />
            with BrandNav
          </h2>
        </div>

        {/* Before & After Images */}
        <div className="bg-[#F8F9FF] py-10">
  <div className="container mx-auto px-4">

    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
      {/* Before Image */}
      <div className="w-full max-w-[500px] text-center">
        <img
          src="/before svg.svg"
          alt="Before data accuracy"
        />
      </div>
      {/* After Image */}
      <div className="w-full max-w-[500px] text-center">
        <img
          src="/after svg.svg"
          alt="After data accuracy"
        />
      </div>
    </div>
  </div>
</div>


        <br />
        {/* Who is using section */}
        <div className="mt-20 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] mb-2">
            Who is using BrandNav?
          </h2>
          <p className="text-[#595B97] text-sm mb-10">
            BrandNav has become an irreplaceable tool for businesses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <img src="/team.svg" alt="team sign" />
                ),
                title: "Sales & Marketing Teams",
                description: <p>Sales and marketing teams are <br />using BrandNav to efficiently <br />locate and verify prospect <br /> contact information and identify <br />key decision-makers.</p>,
              },
              {
                icon: (
                  <img src="/pc.svg" alt="pc sign" />
                ),
                title: "Software & IT Companies",
                description: <p>IT companies are using BrandNav <br />to build lists for outreach, identify <br />target organizations, and verify <br />email addresses of leads to <br />improve email deliverability.</p> 
              },
              {
                icon: (
                  <img src="/service.svg" alt="service sign" />
                ),
                title: "Service Providers",
                description: <p>Service providers are using <br />BrandNav  to locate accurate <br />email addresses  build a list of <br />contacts, and improve the <br />efficiency of their sales process.</p> 
              },
              {
                icon: (
                  <img src="/recrute.svg" alt="recrute sign" />
                ),
                title: "Recruiters",
                description: <p>Recruiters are using BrandNav to <br />locate and verify the email <br />addresses of job candidates, <br />build a talent pool, and <br />streamline their hiring process.</p> 
              },
              {
                icon: (
                  <img src="/blacklinks.svg" alt="blacklinks sign" />
                ),
                title: "Backlinks Outreach",
                description: <p>SEO link builders are using BrandNav <br />to locate and verify the email <br />addresses of potential link partners, <br />and build outreach lists for link- <br />building purposes.</p> 
              },
              {
                icon: (
                  <img src="/dollor.svg" alt="dollor sign" />
                ),
                title: "Investors",
                description: <p>Investors are using BrandNav to <br />quickly find and verify contact <br />information for key executives <br />and decision-makers and <br />streamline their workflow.</p> 
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="text-[#2F327D] text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#595B97] text-sm font-bold leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixDataAccuracy; 
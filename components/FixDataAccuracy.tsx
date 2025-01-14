const FixDataAccuracy = () => {
  const users = [
    {
      icon: <img src="/team.svg" alt="Team collaboration icon" />,
      title: "Sales & Marketing Teams",
      description:
        "Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers.",
    },
    {
      icon: <img src="/pc.svg" alt="Software and IT icon" />,
      title: "Software & IT Companies",
      description:
        "IT companies use BrandNav to build lists for outreach, identify target organizations, and verify email addresses to improve deliverability.",
    },
    {
      icon: <img src="/service.svg" alt="Service providers icon" />,
      title: "Service Providers",
      description:
        "Service providers use BrandNav to locate accurate email addresses, build contact lists, and improve the efficiency of their sales process.",
    },
    {
      icon: <img src="/recrute.svg" alt="Recruiters icon" />,
      title: "Recruiters",
      description:
        "Recruiters use BrandNav to locate and verify email addresses of job candidates, build talent pools, and streamline hiring processes.",
    },
    {
      icon: <img src="/blacklinks.svg" alt="Backlinks outreach icon" />,
      title: "Backlinks Outreach",
      description:
        "SEO link builders use BrandNav to locate and verify email addresses for potential link partners, building effective outreach lists.",
    },
    {
      icon: <img src="/dollor.svg" alt="Investors icon" />,
      title: "Investors",
      description:
        "Investors use BrandNav to quickly find and verify contact information for key executives and decision-makers, streamlining workflows.",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#FAFBFF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-4xl font-bold text-[#2F327D]">
            Fix data accuracy problems
            <br />
            with BrandNav
          </h2>
        </div>

        {/* Before & After Images */}
        <div className="bg-[#F8F9FF] py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
              <div className="w-full max-w-[500px] text-center">
                <img
                  src="/before svg.svg"
                  alt="Data accuracy issues before using BrandNav"
                />
              </div>
              <div className="w-full max-w-[500px] text-center">
                <img
                  src="/after svg.svg"
                  alt="Improved data accuracy after using BrandNav"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Who is using section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F327D] mb-2">
            Who is using BrandNav?
          </h2>
          <p className="text-[#595B97] text-xl mb-10">
            BrandNav has become an irreplaceable tool for businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  {user.icon}
                </div>
                <h3 className="text-[#2F327D] text-lg font-bold mb-2">
                  {user.title}
                </h3>
                <p className="text-[#595B97] text-sm leading-relaxed mx-11">
                  {user.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixDataAccuracy;

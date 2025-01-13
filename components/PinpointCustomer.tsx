const PinpointCustomer = () => {
  const screenerAttributes = [
    {
      icon: <img src="/fin.svg" alt="fin image" />,
      title: "Financials",
    },
    {
      icon: <img src="/company name.svg" alt="company name image" />,
      title: "Company Name\n& Website",
    },
    {
      icon: <img src="/company.svg" alt="location image" />,
      title: "Company\nLocation",
    },
    {
      icon: <img src="/country.svg" alt="country image" />,
      title: "Country Code",
    },
    {
      icon: <img src="/employee.svg" alt="employee image" />,
      title: "Employee Count",
    },
    {
      icon: <img src="/industry.svg" alt="industry image" />,
      title: "Industry",
    },
    {
      icon: <img src="/20+.svg" alt="20+ image" />,
      title: "and 20+ more",
    },
  ];

  const enricherAttributes = [
    {
      icon: <img src="/phone.svg" alt="phone image" />,
      title: "Phone",
    },
    {
      icon: <img src="/mail.svg" alt="mail image" />,
      title: "Email",
    },
    {
      icon: <img src="/job.svg" alt="job image" />,
      title: "Job title",
    },
    {
      icon: <img src="/linkedin.svg" alt="Linkedin image" />,
      title: "Linkedin",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#FAFBFF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[40px] font-bold text-[#2F327D]">
            Pinpoint your ideal customer with
            <br />
            relevant data attributes
          </h2>
        </div>

        {/* Screener Attributes */}
        <div className="mb-20">
          <h3 className="text-[#0D6EFD] text-2xl font-bold text-center mb-12">
            Screener attributes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {screenerAttributes.map((attribute, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center "
              >
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center ">
                  {attribute.icon}
                </div>
                <span className="text-[#2F327D] font-bold whitespace-pre-line">{attribute.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enricher Attributes */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#007DF2] text-center mb-10">
            Enricher attributes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ">
            {enricherAttributes.map((attribute, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-0 "
              >
                <div className="w-16 h-16  rounded-xl flex items-center justify-center text-3xl ">
                  {attribute.icon}
                </div>
                <span className="text-[#2F327D] font-bold">{attribute.title}</span>
              </div>
            ))}
          </div>
        </div><br />
      </div>
    </section>
  );
};

export default PinpointCustomer; 
//import WeaponSection from "@/components/WeaponSection";
//import LeadsDatabase from "@/components/LeadsDatabase";
import PricingSection from "@/components/PricingSection";
import WhyBrandNav from "@/components/WhyBrandNav";
import PinpointCustomer from "@/components/PinpointCustomer";
import FixDataAccuracy from "@/components/FixDataAccuracy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EEF2FF] via-[#F5F8FF] to-[#FFF5F9]">
      <main>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="pt-20 pb-16 text-center ">
          <h1 className="text-5xl sm:text-7xl md:text-7xl font-extrabold text-[#0D2052] mb-6">
            <span className="block">Weapons to Grow</span>
            <span className="block">Your Business</span>
          </h1>
            
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
              <p className="text-lg sm:text-2xl text-gray-600 mb-8 text-[#666666]">
                <span className="block">Turbocharge your business growth.</span>
                <span className="block mt-2">Our products help ignite sales and entrepreneurship.</span>
              </p>
            </div>

            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium">
              Start for free
            </button>

            <div className="mt-6 text-sm sm:text-base text-gray-500 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-[#666666]">
              <img src="credit.svg" alt="credit card" />
              <span>No credit card required</span>
              <span className="hidden sm:inline">|</span>
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-1">4.8/5 G2 Rating</span>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Email Verifier Card */}
  {/* Email Verifier Card */}
<div className="bg-white p-6 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-2 border-gray-300">
  <h3 className="text-lg font-semibold text-[#1E1B4B] mb-8 text-center">Email verifier</h3>
  <div className="relative w-48 h-48 mx-auto mb-8">
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-[32px] font-bold text-[#0D2052]">5,689</span>
      <span className="text-[#6B7280] text-sm">Valid</span>
    </div>
    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#F3F4F6"
        strokeWidth="8"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#4ADE80"
        strokeWidth="8"
        strokeDasharray="220"
        strokeDashoffset="60"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="8"
        strokeDasharray="80"
        strokeDashoffset="-160"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#F87171"
        strokeWidth="8"
        strokeDasharray="40"
        strokeDashoffset="-240"
        strokeLinecap="round"
      />
    </svg>
  </div>
  <div className="flex justify-center gap-5 text-sm">
    <div className="flex items-center">
      <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] mr-2"></span>
      <span className="text-[#6B7280]">Valid</span>
    </div>
    <div className="flex items-center">
      <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA] mr-2"></span>
      <span className="text-[#6B7280]">Invalid</span>
    </div>
    <div className="flex items-center">
      <span className="w-2.5 h-2.5 rounded-full bg-[#F87171] mr-2"></span>
      <span className="text-[#6B7280]">Catch-all</span>
    </div>
  </div>
</div>

{/* Ecom Brands Card */}
<div className="bg-white p-6 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center lg:col-span-1 border-2 border-gray-300">
  <div className="w-25 h-25 flex justify-center mb-4">
    <img src="/ecom.svg" alt="ecom image" />
  </div>
  <div className="text-[50px] text-[#0D6EFD] leading-none mb-4">14.5M+</div>
  <div className="text-[#666666] text-sm">ecom brands</div>
</div>

{/* Deliverability Card */}
<div className="bg-white p-6 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center lg:col-span-1 border-2 border-gray-300">
  <div className="w-25 h-25 flex justify-center mb-4">
    <img src="/deliverability.svg" alt="deliverability image" />
  </div>
  <div className="text-[50px] text-[#0D6EFD] leading-none mb-4">100%</div>
  <div className="text-[#666666] text-sm">deliverability</div>
</div>

{/* Enricher Lookup Card */}
<div className="bg-white p-6 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] lg:col-span-1 border-2 border-gray-300">
  <h3 className="text-[20px] font-semibold text-[#1E1B4B] mb-6">Enricher lookup</h3>
  <div className="space-y-6">
    {[{ name: "Alexandria Wayt", role: "Senior product manager", image: "/axela.svg" }, { name: "Michael Taylor", role: "Sales executive", image: "/Michael.svg" }, { name: "Murphy Hamilton", role: "Sales executive", image: "/Murphy.svg" }]
      .map((person, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={person.image} alt={person.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="text-left">
                <span className="text-[15px] font-medium text-[#1E293B]">{person.name}</span>
                <p className="text-[13px] text-[#64748B] text-left">{person.role}</p>
              </div>
            </div>
            <span className="text-xs px-2.5 py-0.5 bg-[#DCFFDB] text-[#008500] rounded-full font-medium ml-auto">
              Verified
            </span>
          </div>
          <div className="flex gap-2 ml-[60px]">
            <button className="p-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-lg transition-colors">
              <svg className="w-4 h-4 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              </svg>
            </button>
            <button className="p-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-lg transition-colors">
              <svg className="w-4 h-4 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </button>
            <button className="p-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-lg transition-colors ml-auto">
              <svg className="w-4 h-4 text-[#64748B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
  </div>
</div>

</div>

          </div>

          {/* Modern companies section */}
          <div className="text-center mt-10 mb-20">
  <p className="text-lg text-gray-500 mb-5">
    Modern companies are using <span className="font-semibold text-[#666666]">BrandNav</span>
  </p>
  <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
    <img src="/sentry.png" alt="Sentry Ecom" className="h-8 grayscale" />
    <img src="/xlr.png" alt="XLR Media" className="h-8 grayscale" />
    <img src="/utreach.png" alt="Utrech Clerk" className="h-8 grayscale" />
    <img src="/og.png" alt="CG" className="h-8 grayscale" />
    <img src="/acexmedia.png" alt="Acexmedia" className="h-8 grayscale" />
  </div>
</div>
 <br /><br /><br />
          {/* Weapon and Leads sections */}
        </div>

        {/* Full-width sections */}
        <div className="w-full">
          <PricingSection />
          <WhyBrandNav />
          <PinpointCustomer />
          <FixDataAccuracy />
          <Reviews />
          <FAQ />
          <Testimonials />
          
        </div>
       
      </main>
    </div>
  );
}
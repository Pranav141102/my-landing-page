const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#EEF2FF] via-[#F5F8FF] to-[#FFF5F9]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA */}
        <div
  className="text-center py-20 bg-gradient-to-r from-[#EEF2FF] via-[#F5F8FF] to-[#FFF5F9] rounded-[32px] relative"
  style={{
    backgroundImage: "url('/background.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h2 className="text-[50px] font-bold text-[#FFFFFF] mb-4">
    Want to see BrandNav in action?
  </h2>
  <p className="text-[#FFFFFF] text-[20px] text-lg mb-8 font-bold">
    Try BrandNav for free today!
  </p>
  <button className="bg-[#0D6EFD] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-[0_4px_16px_rgba(13,110,253,0.24)]">
    Grab free leads
  </button>
  <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[#FFFFFF]">
    <div className="flex items-center gap-2 text-[#FFFFFF]">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 20"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13zM4 8h12V5H4v3zm0 2v5h12v-5H4z" />
  </svg>
      <span className="text-[#FFFFFF]">No credit card required</span>
    </div>
    <span className="text-[#FFFFFF]">|</span>
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-[#FFC200]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="ml-1 text-[#FFFFFF]">4.8/5 G2 Rating</span>
    </div>
  </div>
</div>

        {/* Footer */}
        <footer className="mt-32 ml-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
    <div className="col-span-1">
      <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">BrandNav.io</h3>
      <p className="text-[#6B7280] text-base leading-relaxed mb-6">
        BrandNav is an Ecom Leads Database <br /> with tons of amazing filters. Now you <br /> can get access to stores with just a <br /> simple click.
      </p>
      <div className="flex space-x-4 items-center">
        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#1E1B4B]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0h-21.35C.59 0 0 .592 0 1.325v21.351C0 23.408.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.325C24 .592 23.408 0 22.675 0z" />
          </svg>
        </a>

        {/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#1E1B4B]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.066 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.902 4.902 0 01-2.224-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.994 13.994 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63a9.935 9.935 0 002.457-2.548l.002-.001z" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#1E1B4B]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.974.975 1.245 2.242 1.307 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.332-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307 1.265-.059 1.645-.07 4.849-.07zm0-2.163C8.755 0 8.323.012 7.053.07c-1.61.073-3.065.531-4.207 1.672C1.71 2.883 1.252 4.338 1.18 5.948.823 9.647.823 14.353 1.18 18.052c.072 1.61.531 3.065 1.672 4.207 1.142 1.141 2.597 1.599 4.207 1.672 3.7.358 8.405.358 12.105 0 1.61-.073 3.065-.531 4.207-1.672 1.141-1.142 1.599-2.597 1.672-4.207.357-3.699.357-8.405 0-12.105-.073-1.61-.531-3.065-1.672-4.207C20.118.604 18.663.146 17.053.073 13.353-.284 8.647-.284 4.948.073z" />
            <circle cx="12" cy="12" r="3.2" />
            <circle cx="18.406" cy="5.594" r="1.44" />
          </svg>
        </a>

        {/* GitHub */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#1E1B4B]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.776.419-1.305.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.465-2.382 1.235-3.221-.123-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.29-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.876.118 3.18.77.839 1.232 1.911 1.232 3.221 0 4.609-2.806 5.623-5.478 5.921.43.372.814 1.102.814 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.217.694.824.576 4.765-1.587 8.203-6.085 8.203-11.387 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-x-8 ml-15">
  <div>
    <h4 className="font-bold mb-4">Blogs</h4>
    <ul className="space-y-2">
      <li><a href="#" className="text-[#0D6EFD] hover:underline">All Blogs</a></li>
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Cold Emailing</a></li>
    </ul>
  </div>

  <div>
    <h4 className="font-bold mb-4">Documantation</h4>
    <ul className="space-y-2">
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Getting Started</a></li>
    </ul>
  </div>
</div>


<div className="grid grid-cols-1 ml-20">
  <div>
    <h4 className="font-bold mb-4">Resources</h4>
    <ul className="space-y-2">
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Latest Updates</a></li>
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Roadmap</a></li>
      <li><a href="#" className="text-[#0D6EFD] hover:underline">About Us</a></li>
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Join Us</a></li>
    </ul>
  </div>
</div>

<div>
    <h4 className="font-bold mb-4">Legal</h4>
    <ul className="space-y-2">
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Terms & Conditions</a></li>
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Privacy Policy</a></li>
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Refund Policy</a></li>
      <li><a href="#" className="text-[#0D6EFD] hover:underline">Contact Us</a></li>
    </ul>
  </div>



  </div>
<br /><br />
  {/* Horizontal Line */}
  <div className="flex flex-col items-center">
  <img src="Line.svg" alt="Line" className="mb-2" />
  <div className="text-center text-sm text-[#6B7280]">
    © 2022 BrandNav.io | All Rights Reserved
  </div>
</div>

  
</footer>

      </div>
    </section>
  );
};

export default Testimonials; 
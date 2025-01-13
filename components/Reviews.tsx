const Reviews = () => {
  const reviews = [
    {
      name:<p className="text-left font-bold">Sai</p>, 
      title: "CEO, Sentry Ecom",
      image: "/sairaj.png",
      rating: 5,
      quote: <p className="text-[#2F327D] text-left font-bold">“Super helpful tool for lead generation!”</p>,
      feedback: (
        <p className="text-gray-600 text-left">
          “BrandNav has been extremely useful in helping us find <br /> high
          quality leads for our agency. It’s the best tool I’ve <br /> used so
          far for scrapping leads. Would definitely <br /> recommend BrandNav to
          businesses looking for a lead <br /> gen tool.”
        </p>
      ),
    },
    {
      name: <p className="text-left font-bold">Sairaj Matkar</p>,
      title: "Founder, AceXmedia",
      image: "/sai.png",
      rating: 5,
      quote: <p className="text-[#2F327D] text-left font-bold">“Highly recommended if you’re looking to get leads!”</p>,
      feedback: (
        <p className="text-gray-600 text-left">
          “Best tool I've used so far for scrapping leads. Helps me <br /> scrape
          my target audience data with ease. Low effort, <br /> amazing response
          rates. Saves a lot of time and <br /> manual work.”
        </p>
      ),
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="bg-[#E1F1FE] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-navy-900 mb-4 text-[#2F327D]">
  Don’t just take our word for it
</h2>
          <p className="text-lg text-gray-600 mb-12 text-[#2F327D] font-bold">
            Excellent <span className="text-yellow-400">★★★★★</span> 4.8/5 G2
            Ratings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-lg font-semibold text-navy-900 mb-2">
                  {review.quote}
                </blockquote>
                <div>{review.feedback}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

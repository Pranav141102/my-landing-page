import React, { JSX } from "react";

interface Reviews {
  name: JSX.Element;
  title: string;
  image: string;
  rating: number;
  quote: JSX.Element;
  feedback: JSX.Element;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(rating)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-3xl">
        ★
      </span>
    ))}
  </div>
);

const reviews = [
  {
    name: <span className="text-left font-bold">Sai</span>,
    title: "CEO, Sentry Ecom",
    image: "/sairaj.png",
    rating: 5,
    quote: (
      <span className="text-[#2F327D] text-left font-bold">
        “Super helpful tool for lead generation!”
      </span>
    ),
    feedback: (
      <div className="text-gray-600 text-left">
        <p>
          “BrandNav has been extremely useful in helping us find <br /> high quality
          leads for our agency. Its the best tool Ive <br /> used so far for
          scrapping leads. Would definitely <br /> recommend BrandNav to businesses
          looking for a lead <br /> gen tool.”
        </p>
      </div>
    ),
  },
  {
    name: <span className="text-left font-bold">Sairaj Matkar</span>,
    title: "Founder, AceXmedia",
    image: "/sai.png",
    rating: 5,
    quote: (
      <span className="text-[#2F327D] text-left font-bold">
        “Highly recommended if youre looking to <br /> get leads!”
      </span>
    ),
    feedback: (
      <div className="text-gray-600 text-left">
        <p>
          “Best tool Ive used so far for scrapping leads. Helps me <br /> scrape my
          target audience data with ease. Low effort, <br /> amazing response rates.
          Saves a lot of time and <br /> manual work.”
        </p>
      </div>
    ),
  },
];



const Reviews = () => {
  return (
    <section className="py-20 bg-[#E1F1FE]">
      <div className=" py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#2F327D] mb-4  text-center">
          Don&apos;t just take our word for it
        </h2>
          <p className="text-lg text-[#2F327D] mb-12  text-center">
            Excellent <span className="text-yellow-400">★★★★★</span> 4.8/5 G2
            Ratings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <figure
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4 items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt={`Profile picture of ${review.name.props.children}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                </div>
                <div>
                  <RatingStars rating={review.rating} />
                </div>
              </div>
              <blockquote className="text-lg font-semibold text-navy-900 mb-2">
                {review.quote}
              </blockquote>
              <figcaption>{review.feedback}</figcaption>
            </figure>
            ))}
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

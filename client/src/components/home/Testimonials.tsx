import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bx bxs-star"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="bx bxs-star-half"></i>);
    }
    
    return stars;
  };
  
  return (
    <section className="py-20 bg-light-100 dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've helped succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-primary-500 dark:text-primary-400">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-dark-600 dark:text-light-300 mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-light-300 dark:bg-dark-600 overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={`${testimonial.author} portrait`} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-dark-800 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-dark-500 dark:text-light-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

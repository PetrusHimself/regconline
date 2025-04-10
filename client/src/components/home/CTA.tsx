import { Link } from "wouter";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 md:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold font-josefin text-white mb-4">Ready to grow your business?</h2>
            <p className="text-white/90 text-lg mb-6">
              Let's create a customized marketing strategy that drives results and helps your business stand out from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-primary-600 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:bg-light-100 text-center shadow-lg hover:shadow-xl">
                Schedule a Free Consultation
              </Link>
              <Link href="/services" className="bg-transparent border border-white text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 text-center">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <i className="bx bx-badge-check text-2xl text-primary-500"></i>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Start with a free audit</p>
                <p className="text-white/80">No obligations or commitments</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="bx bx-check-circle text-white mt-1 mr-2"></i>
                <span className="text-white/90">Comprehensive website analysis</span>
              </li>
              <li className="flex items-start">
                <i className="bx bx-check-circle text-white mt-1 mr-2"></i>
                <span className="text-white/90">Social media presence review</span>
              </li>
              <li className="flex items-start">
                <i className="bx bx-check-circle text-white mt-1 mr-2"></i>
                <span className="text-white/90">Competitor positioning assessment</span>
              </li>
              <li className="flex items-start">
                <i className="bx bx-check-circle text-white mt-1 mr-2"></i>
                <span className="text-white/90">Customized growth recommendations</span>
              </li>
            </ul>
            <Link href="/contact" className="block w-full bg-white text-primary-600 py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 hover:bg-light-100">
              Request Free Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

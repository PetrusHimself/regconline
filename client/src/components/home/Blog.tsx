import { Link } from "wouter";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Our Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Latest Insights</h2>
          <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
            Stay updated with the latest digital marketing trends, tips, and strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-light-100 dark:bg-dark-700 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className={`absolute top-4 left-4 text-white text-xs font-medium py-1 px-2 rounded ${
                  post.category === "SEO" || post.category === "Conversion"
                    ? "bg-primary-500 dark:bg-primary-600" 
                    : "bg-secondary-500 dark:bg-secondary-600"
                }`}>
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-dark-600 dark:text-light-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dark-500 dark:text-light-400">
                    <i className="bx bx-calendar mr-1"></i> {post.date}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4">
            <Link href="/blog" className="inline-block bg-white dark:bg-dark-700 border border-primary-500 text-primary-500 dark:text-primary-400 py-3 px-8 rounded-lg font-medium transition-colors duration-300 hover:bg-primary-50 dark:hover:bg-dark-600">
              View All Posts
            </Link>
            <Link href="/contact" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
              Subscribe to Newsletter <i className="bx bx-right-arrow-alt ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

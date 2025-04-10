import { processSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Process() {
  return (
    <section id="process" className="py-20 bg-light-100 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">How We Work</h2>
          <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
            Our streamlined workflow ensures efficient project delivery while maintaining the highest quality standards.
          </p>
        </div>
        
        <div className="relative">
          {/* Process Timeline (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 dark:bg-primary-900/30 transform -translate-x-1/2"></div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.step} className={cn(
                  isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16",
                  "relative",
                  // On mobile, add empty div to maintain order
                  !isEven && "md:col-start-2",
                )}>
                  <div className={cn(
                    "hidden md:block absolute top-4 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400",
                    isEven 
                      ? "right-0 transform translate-x-10" 
                      : "left-0 transform -translate-x-10"
                  )}></div>
                  <span className="inline-block bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-400 font-medium rounded-full px-3 py-1 mb-3">
                    Step {step.step} • {step.timeframe}
                  </span>
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-dark-600 dark:text-light-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

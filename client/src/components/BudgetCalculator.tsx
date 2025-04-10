import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { formatCurrency } from "@/lib/utils";
import { services, addons } from "@/lib/data";
import { CalculatedBudget } from "@/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  addons: z.array(z.string()).optional(),
  email: z.string().email({ message: "Please enter a valid email address" }).optional().or(z.literal('')),
});

type BudgetCalculatorFormValues = z.infer<typeof formSchema>;

interface BudgetCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BudgetCalculator({ isOpen, onClose }: BudgetCalculatorProps) {
  const { toast } = useToast();
  const [budget, setBudget] = useState<CalculatedBudget>({
    services: 0,
    addons: 0,
    total: 0
  });
  
  const form = useForm<BudgetCalculatorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      addons: [],
      email: '',
    }
  });
  
  // Reset form when calculator is closed
  useEffect(() => {
    if (!isOpen) {
      form.reset();
      setBudget({ services: 0, addons: 0, total: 0 });
    }
  }, [isOpen, form]);
  
  // Calculate budget whenever form values change
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name?.startsWith('services') || name?.startsWith('addons')) {
        calculateBudget(value as BudgetCalculatorFormValues);
      }
    });
    
    return () => subscription.unsubscribe();
  }, [form.watch]);
  
  const calculateBudget = (values: BudgetCalculatorFormValues) => {
    const selectedServices = values.services || [];
    const selectedAddons = values.addons || [];
    
    const servicesTotal = selectedServices.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return sum + (service?.price || 0);
    }, 0);
    
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return sum + (addon?.price || 0);
    }, 0);
    
    setBudget({
      services: servicesTotal,
      addons: addonsTotal,
      total: servicesTotal + addonsTotal
    });
  };
  
  const onSubmit = async (values: BudgetCalculatorFormValues) => {
    try {
      const response = await apiRequest("POST", "/api/budget", {
        services: values.services,
        addons: values.addons || [],
        total: budget.total,
        email: values.email || undefined
      });
      
      if (response.ok) {
        toast({
          title: "Budget calculation submitted",
          description: "We'll contact you soon with a detailed proposal.",
        });
        onClose();
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was a problem submitting your budget calculation. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-dark-900/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-dark-700 rounded-xl p-8 max-w-xl w-full mx-4 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-dark-800 dark:text-white">Budget Calculator</h3>
          <button 
            onClick={onClose}
            className="text-dark-500 dark:text-light-400 hover:text-dark-800 dark:hover:text-white transition-colors duration-200"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <FormLabel className="block text-dark-800 dark:text-white font-medium mb-3">Select Services</FormLabel>
              
              <div className="space-y-3">
                {services.map((service) => (
                  <div className="bg-light-100 dark:bg-dark-800 p-4 rounded-lg" key={service.id}>
                    <FormField
                      control={form.control}
                      name="services"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(service.id)}
                              onCheckedChange={(checked) => {
                                const updatedValue = checked
                                  ? [...field.value, service.id]
                                  : field.value?.filter((value) => value !== service.id);
                                field.onChange(updatedValue);
                              }}
                            />
                          </FormControl>
                          <div className="flex-1">
                            <FormLabel className="flex justify-between cursor-pointer">
                              <span className="font-medium text-dark-800 dark:text-white">{service.title}</span>
                              <span className="text-dark-800 dark:text-white">{service.priceLabel}</span>
                            </FormLabel>
                            <p className="text-sm text-dark-500 dark:text-light-400 mt-1">{service.description}</p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <FormLabel className="block text-dark-800 dark:text-white font-medium mb-3">Add-ons</FormLabel>
              
              <div className="space-y-3">
                {addons.map((addon) => (
                  <div className="bg-light-100 dark:bg-dark-800 p-4 rounded-lg" key={addon.id}>
                    <FormField
                      control={form.control}
                      name="addons"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(addon.id)}
                              onCheckedChange={(checked) => {
                                const updatedValue = checked
                                  ? [...(field.value || []), addon.id]
                                  : field.value?.filter((value) => value !== addon.id);
                                field.onChange(updatedValue);
                              }}
                            />
                          </FormControl>
                          <div className="flex-1">
                            <FormLabel className="flex justify-between cursor-pointer">
                              <span className="font-medium text-dark-800 dark:text-white">{addon.title}</span>
                              <span className="text-dark-800 dark:text-white">{addon.priceLabel}</span>
                            </FormLabel>
                            <p className="text-sm text-dark-500 dark:text-light-400 mt-1">{addon.description}</p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-light-100 dark:bg-dark-800 p-5 rounded-lg">
              <div className="flex justify-between text-dark-600 dark:text-light-300 mb-2">
                <span>Selected Services:</span>
                <span>{formatCurrency(budget.services)}</span>
              </div>
              <div className="flex justify-between text-dark-600 dark:text-light-300 mb-2">
                <span>Add-ons:</span>
                <span>{formatCurrency(budget.addons)}</span>
              </div>
              <div className="border-t border-light-300 dark:border-dark-600 my-2 pt-2 flex justify-between font-bold text-dark-800 dark:text-white">
                <span>Estimated Total:</span>
                <span>{formatCurrency(budget.total)}</span>
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-dark-800 dark:text-white font-medium">Email (optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      {...field} 
                      className="bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 text-dark-800 dark:text-white" 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="flex gap-4">
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white"
              >
                Submit Budget
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={onClose}
                className="flex-1 bg-light-200 dark:bg-dark-600 text-dark-800 dark:text-white hover:bg-light-300 dark:hover:bg-dark-500"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

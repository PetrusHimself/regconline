import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { budgetRanges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string({ required_error: "Please select a service." }),
  budget: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  files: z.any().optional(),
  terms: z.boolean().refine(val => val === true, { message: "You must agree to the terms and conditions." })
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      files: undefined,
      terms: false
    }
  });
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  };
  
  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Format file information if any
      let fileData = undefined;
      if (files && files.length > 0) {
        fileData = Array.from(files).map(file => ({
          name: file.name,
          size: file.size,
          type: file.type
        }));
      }
      
      // Send form data to the backend
      const response = await apiRequest("POST", "/api/contact", {
        ...values,
        files: fileData
      });
      
      if (response.ok) {
        toast({
          title: "Form submitted successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        
        // Reset form
        form.reset();
        setFiles(null);
      }
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-dark-800 dark:text-white font-medium mb-2">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-800 dark:text-white" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-dark-800 dark:text-white font-medium mb-2">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-800 dark:text-white" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-dark-800 dark:text-white font-medium mb-2">Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-800 dark:text-white" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-dark-800 dark:text-white font-medium mb-2">Company Name</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    placeholder="Your company" 
                    className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-800 dark:text-white" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-dark-800 dark:text-white font-medium mb-2">Service Required</FormLabel>
                <FormControl>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-800 dark:text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">High-Converting Website</SelectItem>
                      <SelectItem value="social">Social Media Management</SelectItem>
                      <SelectItem value="ads">Meta & Google Ads</SelectItem>
                      <SelectItem value="design">Digital Products (Design)</SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-dark-800 dark:text-white font-medium mb-2">Budget Range</FormLabel>
                <FormControl>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-800 dark:text-white">
                      <SelectValue placeholder="Select a budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-dark-800 dark:text-white font-medium mb-2">Project Details</FormLabel>
              <FormControl>
                <Textarea 
                  rows={4} 
                  placeholder="Tell us about your project and requirements" 
                  className="w-full px-4 py-3 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-800 dark:text-white resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <FormLabel className="block text-dark-800 dark:text-white font-medium mb-2">Reference Materials</FormLabel>
          <div className="border-2 border-dashed border-light-300 dark:border-dark-600 rounded-lg p-4 text-center">
            <label htmlFor="fileUpload" className="cursor-pointer flex flex-col items-center justify-center py-4">
              <i className="bx bx-cloud-upload text-3xl text-primary-500 dark:text-primary-400 mb-2"></i>
              <p className="font-medium text-dark-800 dark:text-white mb-1">Drag files here or click to upload</p>
              <p className="text-sm text-dark-500 dark:text-light-400">Maximum file size: 10MB</p>
              <input 
                type="file" 
                id="fileUpload" 
                className="hidden" 
                multiple 
                onChange={handleFileChange}
              />
            </label>
            
            {files && files.length > 0 && (
              <div className="mt-4 text-left">
                <p className="font-medium text-dark-800 dark:text-white mb-2">Selected Files:</p>
                <ul className="space-y-1">
                  {Array.from(files).map((file, index) => (
                    <li key={index} className="text-sm text-dark-600 dark:text-light-300 flex items-center">
                      <i className="bx bx-file mr-2"></i>
                      <span>{file.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-dark-600 dark:text-light-300 text-sm">
                  I agree to the <a href="#" className="text-primary-500 dark:text-primary-400 hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary-500 dark:text-primary-400 hover:underline">Privacy Policy</a>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <i className="bx bx-loader-alt bx-spin mr-2"></i> Submitting...
            </>
          ) : (
            <>
              <i className="bx bx-send mr-2"></i> Submit Request
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

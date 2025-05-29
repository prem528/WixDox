import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send, User, Mail, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  budget: string;
  description: string;
}

const QueryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    
    toast({
      title: "Query Submitted Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      budget: "",
      description: ""
    });

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-16">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-100 backdrop-blur-sm">
        <div className="text-center mb-8">
  
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Build Something Amazing</h3>
          <p className="text-gray-600">Tell us about your project and we'll help bring it to life</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-500" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Doe"
                required
                className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
              />
            </div>

         <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
            <Phone className="w-4 h-4 text-blue-500" />
            Phone number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Your Phone Number."
              className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
            />
          </div>
          </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@company.com"
                required
                className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
              />
         </div>



          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="serviceType" className="text-sm font-semibold text-gray-700">Service Needed *</Label>
              <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="mobile-app">Mobile App</SelectItem>
                  <SelectItem value="backend-systems">Backend Systems</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="data-analytics">Data Analytics</SelectItem>
                  <SelectItem value="custom-software">Custom Software</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-semibold text-gray-700">Budget Range</Label>
              <Select onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                  <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                  <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="50k-100k">₹50,000 - ₹100,000</SelectItem>
                  <SelectItem value="100k-plus">₹100,000+</SelectItem>
                  <SelectItem value="discuss">Let's discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-semibold text-gray-700">Project Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Tell us about your project goals, requirements, and any specific features you need..."
              required
              rows={4}
              className="resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send My Query</span>
                </div>
              )}
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center leading-relaxed">
            By submitting this form, you agree to our privacy policy. We'll never share your information with third parties and will respond within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
};

export default QueryForm;

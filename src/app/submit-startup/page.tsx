"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Building, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Plus,
  X,
  Calendar,
  MapPin,
  IndianRupee,
  Star,
  Crown,
  Gem,
  Zap,
  Shield,
  Clock,
  Award
} from "lucide-react";

const categories = [
  "Fintech", "HealthTech", "EdTech", "CleanTech", "AgriTech", 
  "RetailTech", "Logistics", "SaaS", "E-commerce", "AI/ML", "IoT", "Other"
];

const fundingStages = [
  "Idea/Pre-seed", "Seed", "Pre-Series A", "Series A", "Series B", "Growth"
];

interface ListingTier {
  id: string;
  name: string;
  price: number;
  duration: number; // days
  description: string;
  features: string[];
  popular?: boolean;
  icon: any;
  color: string;
  badgeColor: string;
}

const listingTiers: ListingTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: 5000,
    duration: 90,
    description: "Perfect for early-stage startups",
    features: [
      "Standard listing for 90 days",
      "Basic startup information",
      "Email support",
      "5-7 day review process",
      "Mobile app visibility"
    ],
    icon: Building,
    color: "text-slate-600",
    badgeColor: "bg-slate-100 text-slate-800"
  },
  {
    id: "premium",
    name: "Premium",
    price: 15000,
    duration: 180,
    description: "For startups seeking maximum visibility",
    features: [
      "All Basic features",
      "Extended 180-day listing",
      "Enhanced visibility",
      "Priority support",
      "3-5 day review process",
      "Analytics dashboard",
      "Marketing support"
    ],
    popular: true,
    icon: Crown,
    color: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 25000,
    duration: 365,
    description: "For established startups with ambitious goals",
    features: [
      "All Premium features",
      "Full year listing",
      "Featured placement",
      "Dedicated account manager",
      "24-hour review process",
      "Investor matching",
      "Co-branded marketing",
      "Event invitations",
      "Advanced analytics"
    ],
    icon: Gem,
    color: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-800"
  }
];

export default function SubmitStartupPage() {
  const [step, setStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState("premium");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"one-time" | "yearly">("one-time");

  const [formData, setFormData] = useState({
    // Basic Information
    startupName: "",
    tagline: "",
    description: "",
    category: "",
    website: "",
    foundedDate: "",
    location: "",
    teamSize: "",
    
    // Funding Details
    fundingStage: "",
    targetAmount: "",
    equityOffered: "",
    minInvestment: "",
    useOfFunds: "",
    
    // Business Details
    businessModel: "",
    marketSize: "",
    competition: "",
    traction: "",
    revenue: "",
    burnRate: "",
    
    // Team Information
    founderName: "",
    founderEmail: "",
    founderPhone: "",
    founderExperience: "",
    teamMembers: [] as Array<{name: string, role: string, experience: string}>,
    
    // Documents
    pitchDeck: null as File | null,
    financialProjections: null as File | null,
    businessPlan: null as File | null,
    
    // Agreement
    agreeToTerms: false,
    agreeToCompliance: false
  });

  const totalSteps = 6; // Updated to include listing tier selection
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTeamMember = () => {
    setFormData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: "", role: "", experience: "" }]
    }));
  };

  const removeTeamMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const updateTeamMember = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map((member, i) => 
        i === index ? { ...member, [field]: value } : member
      )
    }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    handleInputChange(field, file);
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.startupName && formData.tagline && formData.description && 
               formData.category && formData.foundedDate && formData.location;
      case 2:
        return formData.fundingStage && formData.targetAmount && formData.equityOffered && 
               formData.minInvestment && formData.useOfFunds;
      case 3:
        return formData.businessModel && formData.marketSize && formData.competition;
      case 4:
        return formData.founderName && formData.founderEmail && formData.founderPhone && 
               formData.founderExperience;
      case 5:
        return selectedTier && formData.agreeToTerms && formData.agreeToCompliance;
      case 6:
        return true; // Payment step
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    alert("Startup submitted successfully! You will receive a confirmation email shortly.");
    // Redirect to dashboard or success page
    window.location.href = "/dashboard";
  };

  const getSelectedTier = () => {
    return listingTiers.find(tier => tier.id === selectedTier);
  };

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startupName">Startup Name *</Label>
                  <Input
                    id="startupName"
                    placeholder="Enter your startup name"
                    value={formData.startupName}
                    onChange={(e) => handleInputChange("startupName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline *</Label>
                  <Input
                    id="tagline"
                    placeholder="Your startup's tagline"
                    value={formData.tagline}
                    onChange={(e) => handleInputChange("tagline", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your startup in detail"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    placeholder="https://yourstartup.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="foundedDate">Founded Date *</Label>
                  <Input
                    id="foundedDate"
                    type="date"
                    value={formData.foundedDate}
                    onChange={(e) => handleInputChange("foundedDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Team Size</Label>
                  <Select value={formData.teamSize} onValueChange={(value) => handleInputChange("teamSize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5</SelectItem>
                      <SelectItem value="6-10">6-10</SelectItem>
                      <SelectItem value="11-20">11-20</SelectItem>
                      <SelectItem value="21-50">21-50</SelectItem>
                      <SelectItem value="50+">50+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Funding Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fundingStage">Funding Stage *</Label>
                  <Select value={formData.fundingStage} onValueChange={(value) => handleInputChange("fundingStage", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select funding stage" />
                    </SelectTrigger>
                    <SelectContent>
                      {fundingStages.map(stage => (
                        <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetAmount">Target Amount (₹) *</Label>
                  <Input
                    id="targetAmount"
                    type="number"
                    placeholder="5000000"
                    value={formData.targetAmount}
                    onChange={(e) => handleInputChange("targetAmount", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="equityOffered">Equity Offered (%) *</Label>
                  <Input
                    id="equityOffered"
                    type="number"
                    placeholder="10"
                    value={formData.equityOffered}
                    onChange={(e) => handleInputChange("equityOffered", e.target.value)}
                    max={100}
                    min={1}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minInvestment">Minimum Investment (₹) *</Label>
                  <Input
                    id="minInvestment"
                    type="number"
                    placeholder="100"
                    value={formData.minInvestment}
                    onChange={(e) => handleInputChange("minInvestment", e.target.value)}
                    min={100}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="useOfFunds">Use of Funds *</Label>
                  <Textarea
                    id="useOfFunds"
                    placeholder="Describe how you will use the raised funds"
                    value={formData.useOfFunds}
                    onChange={(e) => handleInputChange("useOfFunds", e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Details</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="businessModel">Business Model *</Label>
                  <Textarea
                    id="businessModel"
                    placeholder="Describe your business model"
                    value={formData.businessModel}
                    onChange={(e) => handleInputChange("businessModel", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="marketSize">Market Size *</Label>
                  <Textarea
                    id="marketSize"
                    placeholder="Describe your target market and its size"
                    value={formData.marketSize}
                    onChange={(e) => handleInputChange("marketSize", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="competition">Competition *</Label>
                  <Textarea
                    id="competition"
                    placeholder="Who are your competitors and what's your competitive advantage?"
                    value={formData.competition}
                    onChange={(e) => handleInputChange("competition", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="traction">Traction & Milestones</Label>
                  <Textarea
                    id="traction"
                    placeholder="Key achievements, user growth, revenue, etc."
                    value={formData.traction}
                    onChange={(e) => handleInputChange("traction", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="revenue">Monthly Revenue (₹)</Label>
                    <Input
                      id="revenue"
                      type="number"
                      placeholder="0"
                      value={formData.revenue}
                      onChange={(e) => handleInputChange("revenue", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="burnRate">Monthly Burn Rate (₹)</Label>
                    <Input
                      id="burnRate"
                      type="number"
                      placeholder="0"
                      value={formData.burnRate}
                      onChange={(e) => handleInputChange("burnRate", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Team Information</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="founderName">Founder Name *</Label>
                    <Input
                      id="founderName"
                      placeholder="Founder's full name"
                      value={formData.founderName}
                      onChange={(e) => handleInputChange("founderName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founderEmail">Founder Email *</Label>
                    <Input
                      id="founderEmail"
                      type="email"
                      placeholder="founder@startup.com"
                      value={formData.founderEmail}
                      onChange={(e) => handleInputChange("founderEmail", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founderPhone">Founder Phone *</Label>
                    <Input
                      id="founderPhone"
                      placeholder="+91 98765 43210"
                      value={formData.founderPhone}
                      onChange={(e) => handleInputChange("founderPhone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founderExperience">Founder Experience *</Label>
                    <Textarea
                      id="founderExperience"
                      placeholder="Describe founder's relevant experience"
                      value={formData.founderExperience}
                      onChange={(e) => handleInputChange("founderExperience", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Team Members</h4>
                    <Button type="button" variant="outline" size="sm" onClick={addTeamMember}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Member
                    </Button>
                  </div>
                  {formData.teamMembers.map((member, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h5 className="font-medium">Team Member {index + 1}</h5>
                        {formData.teamMembers.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeTeamMember(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid md:grid-cols-3 gap-3">
                        <Input
                          placeholder="Name"
                          value={member.name}
                          onChange={(e) => updateTeamMember(index, "name", e.target.value)}
                        />
                        <Input
                          placeholder="Role"
                          value={member.role}
                          onChange={(e) => updateTeamMember(index, "role", e.target.value)}
                        />
                        <Input
                          placeholder="Experience"
                          value={member.experience}
                          onChange={(e) => updateTeamMember(index, "experience", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Choose Your Listing Tier</h3>
              <p className="text-slate-600 mb-6">
                Select the listing package that best suits your startup's needs and budget.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {listingTiers.map((tier) => {
                  const Icon = tier.icon;
                  return (
                    <Card 
                      key={tier.id} 
                      className={`cursor-pointer transition-all ${
                        selectedTier === tier.id 
                          ? "ring-2 ring-blue-500 border-blue-500" 
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                          <Icon className={`h-6 w-6 ${tier.color}`} />
                        </div>
                        <CardTitle className="text-lg">{tier.name}</CardTitle>
                        <CardDescription>{tier.description}</CardDescription>
                        <div className="mt-3">
                          <div className="text-2xl font-bold text-slate-900">
                            {formatCurrency(tier.price)}
                          </div>
                          <div className="text-sm text-slate-600">
                            for {tier.duration} days
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          {tier.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className={`mt-4 w-full py-2 px-3 rounded-lg text-center text-sm font-medium ${
                          selectedTier === tier.id 
                            ? "bg-blue-500 text-white" 
                            : "bg-slate-100 text-slate-700"
                        }`}>
                          {selectedTier === tier.id ? "Selected" : "Select Tier"}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {selectedTier && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-900">Selected: {getSelectedTier()?.name}</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Your startup will be listed for {getSelectedTier()?.duration} days with all the included features.
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the Terms of Service and Listing Agreement *
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="agreeToCompliance"
                    checked={formData.agreeToCompliance}
                    onCheckedChange={(checked) => handleInputChange("agreeToCompliance", checked as boolean)}
                  />
                  <Label htmlFor="agreeToCompliance" className="text-sm">
                    I certify that all information provided is accurate and complies with SEBI regulations *
                  </Label>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        const selectedTierData = getSelectedTier();
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment & Confirmation</h3>
              
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your listing package details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Listing Package</span>
                    <span className="font-medium">{selectedTierData?.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Duration</span>
                    <span className="font-medium">{selectedTierData?.duration} days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Listing Fee</span>
                    <span className="font-medium">{formatCurrency(selectedTierData?.price || 0)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">GST (18%)</span>
                    <span className="font-medium">{formatCurrency((selectedTierData?.price || 0) * 0.18)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold">Total Amount</span>
                    <span className="font-bold text-blue-600">
                      {formatCurrency((selectedTierData?.price || 0) * 1.18)}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Select your preferred payment method</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {[
                      { id: "upi", name: "UPI Payment", icon: "📱" },
                      { id: "card", name: "Credit/Debit Card", icon: "💳" },
                      { id: "netbanking", name: "Net Banking", icon: "🏦" },
                      { id: "wallet", name: "Digital Wallet", icon: "👛" }
                    ].map((method) => (
                      <div
                        key={method.id}
                        className="p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <h4 className="font-medium">{method.name}</h4>
                            <p className="text-sm text-slate-600">Secure payment processing</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Final Confirmation */}
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Next Steps:</strong> After payment, your startup will undergo our review process. 
                  Once approved, it will be listed on the platform and visible to thousands of investors.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Submit Your Startup</h1>
              <p className="text-slate-600">Get listed on India's premier equity crowdfunding platform</p>
            </div>
            <div className="text-sm text-slate-500">
              Step {step} of {totalSteps}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-slate-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardContent className="p-8">
            {renderStepContent()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              
              {step < totalSteps ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!validateStep()}
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay ${formatCurrency((getSelectedTier()?.price || 0) * 1.18)} & Submit`
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
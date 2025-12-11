"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Star, 
  Users, 
  MapPin, 
  Calendar,
  TrendingUp,
  Target,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  IndianRupee,
  Share2,
  Heart,
  MessageCircle
} from "lucide-react";

const startupData = {
  id: 1,
  name: "PaySecure",
  category: "Fintech",
  description: "AI-powered fraud detection for digital payments",
  longDescription: "PaySecure is revolutionizing digital payment security with cutting-edge AI technology that detects and prevents fraudulent transactions in real-time. Our machine learning algorithms analyze transaction patterns, user behavior, and network signals to identify suspicious activities with 99.9% accuracy.",
  location: "Bangalore",
  founded: "2023",
  targetAmount: 5000000,
  raisedAmount: 3200000,
  equityOffered: 10,
  minInvestment: 100,
  rating: 4.8,
  investors: 234,
  stage: "Seed",
  tags: ["AI", "Security", "Payments", "Fintech"],
  team: [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      experience: "Ex-PayPal, 15+ years in fintech",
      image: "/api/placeholder/60/60"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      experience: "Ex-Google, AI/ML expert",
      image: "/api/placeholder/60/60"
    },
    {
      name: "Amit Patel",
      role: "Head of Product",
      experience: "Ex-PhonePe, Product leader",
      image: "/api/placeholder/60/60"
    }
  ],
  businessModel: "SaaS subscription model with transaction-based pricing",
  marketSize: "₹15,000 Cr digital payments security market",
  traction: [
    "50+ enterprise clients",
    "₹2 Cr+ monthly transactions processed",
    "99.9% fraud detection accuracy",
    "30% month-over-month growth"
  ],
  useOfFunds: [
    "40% - Product development",
    "25% - Sales & marketing",
    "20% - Team expansion",
    "15% - Operations"
  ],
  risks: [
    "Regulatory changes in payment industry",
    "Competition from established players",
    "Technology adoption challenges",
    "Market volatility"
  ],
  financials: {
    revenue: "₹45 Lakhs (projected Year 1)",
    burnRate: "₹8 Lakhs/month",
    runway: "18 months",
    breakEven: "Month 24"
  },
  documents: [
    { name: "Pitch Deck", type: "PDF" },
    { name: "Financial Projections", type: "XLS" },
    { name: "Business Plan", type: "PDF" },
    { name: "Market Research", type: "PDF" }
  ],
  faqs: [
    {
      question: "What makes PaySecure different from existing solutions?",
      answer: "Our AI technology provides real-time fraud detection with 99.9% accuracy, significantly higher than industry standards."
    },
    {
      question: "How will the funds be used?",
      answer: "Funds will be allocated to product development (40%), sales & marketing (25%), team expansion (20%), and operations (15%)."
    },
    {
      question: "What is the exit strategy?",
      answer: "We aim for acquisition by major payment processors or fintech companies within 5-7 years."
    },
    {
      question: "How often will investors receive updates?",
      answer: "Monthly detailed reports and quarterly investor meetings with full transparency."
    }
  ]
};

const investmentAmounts = [100, 500, 1000, 2500, 5000, 10000];

export default function StartupDetailPage({ params }: { params: { id: string } }) {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isInvesting, setIsInvesting] = useState(false);

  const fundingProgress = (startupData.raisedAmount / startupData.targetAmount) * 100;
  const equityPerRupee = startupData.equityOffered / startupData.targetAmount;
  const selectedEquity = selectedAmount * equityPerRupee;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const handleInvest = () => {
    setIsInvesting(true);
    // Simulate investment process
    setTimeout(() => {
      setIsInvesting(false);
      alert("Investment process would be initiated here");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Startups
            </Button>
            <div className="flex-1"></div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Startup Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{startupData.category}</Badge>
                    <Badge>{startupData.stage}</Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-slate-600">{startupData.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-3xl">{startupData.name}</CardTitle>
                <CardDescription className="text-lg">
                  {startupData.description}
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {startupData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Founded {startupData.founded}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {startupData.investors} investors
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Funding Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Funding Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Target</span>
                    <span className="font-medium">{formatCurrency(startupData.targetAmount)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Raised</span>
                    <span className="font-medium text-green-600">
                      {formatCurrency(startupData.raisedAmount)}
                    </span>
                  </div>
                  <Progress value={fundingProgress} className="h-3" />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>{Math.round(fundingProgress)}% funded</span>
                    <span>{startupData.equityOffered}% equity offered</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {startupData.investors}
                      </div>
                      <div className="text-sm text-slate-600">Investors</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {Math.round(startupData.targetAmount - startupData.raisedAmount).toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-600">Days Left</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="financials">Financials</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About PaySecure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 leading-relaxed">
                      {startupData.longDescription}
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Business Model</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">{startupData.businessModel}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Market Opportunity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">{startupData.marketSize}</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Traction & Milestones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {startupData.traction.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Use of Funds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {startupData.useOfFunds.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-slate-700">{item}</span>
                          <Badge variant="outline">{item.split(' - ')[0]}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Meet the Team</CardTitle>
                    <CardDescription>
                      Experienced professionals with proven track records
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {startupData.team.map((member, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                            <Users className="h-8 w-8 text-slate-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-blue-600">{member.role}</p>
                            <p className="text-slate-600 text-sm">{member.experience}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financials" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Projections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600">Projected Revenue (Year 1)</div>
                        <div className="text-xl font-bold text-green-600">
                          {startupData.financials.revenue}
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600">Monthly Burn Rate</div>
                        <div className="text-xl font-bold text-red-600">
                          {startupData.financials.burnRate}
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600">Runway</div>
                        <div className="text-xl font-bold text-blue-600">
                          {startupData.financials.runway}
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600">Break Even</div>
                        <div className="text-xl font-bold text-purple-600">
                          {startupData.financials.breakEven}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Investment Risk Disclosure:</strong> All startup investments carry inherent risks. 
                        Please review the following risk factors before investing.
                      </AlertDescription>
                    </Alert>
                    <div className="mt-4 space-y-2">
                      {startupData.risks.map((risk, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Due Diligence Documents</CardTitle>
                    <CardDescription>
                      Review detailed information about the startup
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {startupData.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">{doc.name}</div>
                              <div className="text-sm text-slate-600">{doc.type}</div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {startupData.faqs.map((faq, index) => (
                        <div key={index} className="border-b border-slate-200 pb-4 last:border-0">
                          <h4 className="font-medium text-slate-900 mb-2">{faq.question}</h4>
                          <p className="text-slate-700">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Investment Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Invest Now
                  </CardTitle>
                  <CardDescription>
                    Minimum investment: ₹{startupData.minInvestment.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Quick Amount Selection */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-3 block">
                      Select Investment Amount
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {investmentAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedAmount(amount)}
                          className="text-sm"
                        >
                          ₹{amount.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">
                      Or enter custom amount
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          if (e.target.value) {
                            setSelectedAmount(Number(e.target.value));
                          }
                        }}
                        className="pl-8"
                        min={startupData.minInvestment}
                      />
                    </div>
                  </div>

                  {/* Investment Summary */}
                  <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Investment Amount</span>
                      <span className="font-medium">₹{selectedAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Equity Stake</span>
                      <span className="font-medium text-blue-600">
                        {(selectedEquity * 100).toFixed(6)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Shares</span>
                      <span className="font-medium">
                        {Math.round(selectedAmount / 100).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Invest Button */}
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleInvest}
                    disabled={isInvesting || selectedAmount < startupData.minInvestment}
                  >
                    {isInvesting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      `Invest ₹${selectedAmount.toLocaleString()}`
                    )}
                  </Button>

                  {/* Compliance Notice */}
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      By investing, you agree to our terms and acknowledge the risks involved. 
                      This investment is subject to SEBI regulations.
                    </AlertDescription>
                  </Alert>

                  {/* Contact */}
                  <div className="text-center">
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Have questions? Contact us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
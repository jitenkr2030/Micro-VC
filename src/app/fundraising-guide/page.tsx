"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  TrendingUp, 
  Users, 
  Target, 
  FileText, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Building,
  Rocket,
  Lightbulb,
  BarChart3,
  PieChart,
  Award,
  Clock,
  DollarSign,
  Shield,
  Star,
  Zap,
  HelpCircle
} from "lucide-react";

export default function FundraisingGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-900">Fundraising Guide</h1>
              <p className="text-slate-600">Complete guide to raising funds for your startup</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Rocket className="h-5 w-5" />
            <span className="font-medium">For Startups</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Raise Capital for Your Startup
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn how to successfully raise funds from thousands of micro-investors and build a community of supporters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Preparation Phase */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Preparation Phase
                </CardTitle>
                <CardDescription>
                  Get your startup ready for fundraising
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Essential Documents</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Pitch Deck</div>
                          <div className="text-sm text-slate-600">10-15 slides covering problem, solution, market, team, and financials</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Business Plan</div>
                          <div className="text-sm text-slate-600">Detailed business model, market analysis, and growth strategy</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Financial Projections</div>
                          <div className="text-sm text-slate-600">3-5 year projections with clear assumptions</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Cap Table</div>
                          <div className="text-sm text-slate-600">Current ownership structure and post-funding cap table</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Key Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Traction</div>
                          <div className="text-sm text-slate-600">User growth, revenue, partnerships, key milestones</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <PieChart className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Market Size</div>
                          <div className="text-sm text-slate-600">TAM, SAM, SOM with credible research</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Team Strength</div>
                          <div className="text-sm text-slate-600">Relevant experience, domain expertise, complementary skills</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Unit Economics</div>
                          <div className="text-sm text-slate-600">CAC, LTV, margins, break-even analysis</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Pro Tip:</strong> Start preparing at least 3-6 months before you plan to raise funds. 
                    Investors prefer startups that show consistent progress over time.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Platform Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-600" />
                  Micro-VC Platform Requirements
                </CardTitle>
                <CardDescription>
                  What you need to list on Micro-VC
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Eligibility Criteria</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Registered company in India</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Minimum 6 months of operation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Product or MVP ready</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Clear business model</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Compliant with all regulations</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Documentation Needed</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Certificate of Incorporation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">PAN Card & GST Registration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Financial Statements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Director Details & KYC</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Intellectual Property Documents</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Vetting Process</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Our team conducts thorough due diligence on all startups before listing. The process typically takes 5-7 business days.
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-blue-600">Day 1-2</div>
                      <div className="text-blue-700">Document Review</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-blue-600">Day 3-4</div>
                      <div className="text-blue-700">Business Analysis</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-blue-600">Day 5-7</div>
                      <div className="text-blue-700">Final Approval</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Strategy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  Campaign Strategy
                </CardTitle>
                <CardDescription>
                  How to run a successful fundraising campaign
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Pre-Launch Activities</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Build Your Network</h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Create a list of potential investors and supporters who can help kickstart your campaign.
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Friends and family</li>
                        <li>• Professional network</li>
                        <li>• Industry connections</li>
                        <li>• Social media followers</li>
                      </ul>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Create Buzz</h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Generate interest in your startup before the campaign goes live.
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Social media teasers</li>
                        <li>• Blog posts about your journey</li>
                        <li>• Press releases</li>
                        <li>• Email newsletter</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">During Campaign</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Target className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-medium mb-1">Set Clear Goals</h4>
                      <p className="text-sm text-slate-600">Realistic targets with stretch goals</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-medium mb-1">Regular Updates</h4>
                      <p className="text-sm text-slate-600">Keep investors informed daily</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="font-medium mb-1">Engage Community</h4>
                      <p className="text-sm text-slate-600">Respond to questions promptly</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Post-Campaign</h3>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Success Factors</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-800 mb-2">Immediate Actions</h5>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Thank all investors personally</li>
                          <li>• Send welcome package</li>
                          <li>• Schedule first update</li>
                          <li>• Set up investor portal</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-800 mb-2">Ongoing Communication</h5>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Monthly progress updates</li>
                          <li>• Quarterly financial reports</li>
                          <li>• Annual investor meetings</li>
                          <li>• Major milestone celebrations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Success Stories
                </CardTitle>
                <CardDescription>
                  Learn from startups that successfully raised on Micro-VC
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">PaySecure - Fintech</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Raised ₹50 Lakhs in 14 days from 234 micro-investors.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Target</span>
                        <span className="font-medium">₹50 Lakhs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Raised</span>
                        <span className="font-medium text-green-600">₹50 Lakhs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Investors</span>
                        <span className="font-medium">234</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Badge variant="secondary">100% Funded</Badge>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">MediConnect - HealthTech</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Raised ₹75 Lakhs in 21 days from 189 micro-investors.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Target</span>
                        <span className="font-medium">₹75 Lakhs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Raised</span>
                        <span className="font-medium text-green-600">₹75 Lakhs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Investors</span>
                        <span className="font-medium">189</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Badge variant="secondary">100% Funded</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Start */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ready to Raise?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" asChild>
                    <a href="/submit-startup">Submit Your Startup</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/startups">Browse Campaigns</a>
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-slate-600">
                      Questions about fundraising?
                    </p>
                    <Button variant="link" className="text-blue-600" asChild>
                      <a href="/footer">Contact Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Funding Limits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Funding Parameters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Min Target</span>
                      <span className="font-medium">₹10 Lakhs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Max Target</span>
                      <span className="font-medium">₹10 Cr</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Max Equity</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Campaign Duration</span>
                      <span className="font-medium">30-90 days</span>
                    </div>
                  </div>
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      All funding rounds must comply with SEBI regulations.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/compliance">
                      <Shield className="h-4 w-4 mr-2" />
                      Compliance Guide
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/faq">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      FAQ
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/dashboard">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Success Metrics
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Platform Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Micro-VC?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Access to 50,000+ micro-investors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Build community of brand ambassadors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Marketing and promotion support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Investor relations management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Compliance and legal support</span>
                    </div>
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
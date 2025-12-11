"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Target, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  IndianRupee,
  Clock,
  FileText,
  Eye,
  Star,
  Award,
  BarChart3,
  PieChart,
  Lightbulb,
  AlertTriangle
} from "lucide-react";

export default function HowToInvestPage() {
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
              <h1 className="text-2xl font-bold text-slate-900">How to Invest</h1>
              <p className="text-slate-600">A complete guide to investing in startups on Micro-VC</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <Lightbulb className="h-5 w-5" />
            <span className="font-medium">Investment Guide</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Start Your Startup Investment Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn how to invest in promising startups from just ₹100 and build a diversified portfolio of early-stage companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step-by-Step Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  5 Simple Steps to Start Investing
                </CardTitle>
                <CardDescription>
                  Follow these steps to become a startup investor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Create Your Account</h3>
                    <p className="text-slate-600 mb-3">
                      Sign up for a Micro-VC account and complete your profile. The process takes just 5 minutes.
                    </p>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Required Documents</span>
                      </div>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Email verification</li>
                        <li>• Phone number verification</li>
                        <li>• PAN card details</li>
                        <li>• Address proof</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Complete KYC Verification</h3>
                    <p className="text-slate-600 mb-3">
                      Complete your KYC (Know Your Customer) verification as required by SEBI regulations.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">KYC Requirements</span>
                      </div>
                      <p className="text-sm text-yellow-700">
                        KYC verification typically takes 24-48 hours. You'll receive an email once verified.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Browse Startups</h3>
                    <p className="text-slate-600 mb-3">
                      Explore curated startups across various sectors. Use filters to find opportunities that match your interests.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                        <div className="text-sm text-slate-600">Active Startups</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                        <div className="text-sm text-slate-600">Categories</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Research & Due Diligence</h3>
                    <p className="text-slate-600 mb-3">
                      Thoroughly research startups before investing. Review their business model, team, traction, and financials.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Key Research Areas</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Business model and market opportunity</li>
                        <li>• Founder experience and team background</li>
                        <li>• Traction and growth metrics</li>
                        <li>• Financial projections and burn rate</li>
                        <li>• Competitive landscape</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Invest & Monitor</h3>
                    <p className="text-slate-600 mb-3">
                      Choose your investment amount (starting from ₹100) and complete the payment. Monitor your investments through your dashboard.
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="text-xl font-bold text-green-600 mb-1">₹100</div>
                        <div className="text-xs text-slate-600">Min Investment</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="text-xl font-bold text-blue-600 mb-1">3-7</div>
                        <div className="text-xs text-slate-600">Years Horizon</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg text-center">
                        <div className="text-xl font-bold text-purple-600 mb-1">18.4%</div>
                        <div className="text-xs text-slate-600">Avg Returns</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment Strategies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  Investment Strategies
                </CardTitle>
                <CardDescription>
                  Different approaches to startup investing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Conservative Approach</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Focus on established startups with proven traction and revenue.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Lower risk tolerance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Series A+ stage companies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Higher investment amounts</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Aggressive Approach</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Invest in early-stage startups with high growth potential.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Higher risk tolerance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Seed/Pre-seed stage companies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Smaller investment amounts</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Diversified Approach</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Spread investments across multiple startups and sectors.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Balanced risk profile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Multiple sectors and stages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Regular portfolio rebalancing</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Thematic Approach</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Focus on specific sectors or themes you understand well.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Sector-specific expertise</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Deep industry knowledge</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Focused investment thesis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Risk Management
                </CardTitle>
                <CardDescription>
                  How to manage risks in startup investing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important:</strong> Startup investments carry high risk. Only invest money you can afford to lose.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Risk Mitigation Strategies</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Diversify across 10-15 startups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Limit investment to 5-10% of portfolio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Invest in sectors you understand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Regular portfolio review and rebalancing</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Red Flags to Watch</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Unrealistic financial projections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Inexperienced founding team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Lack of clear business model</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">High customer acquisition costs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Start Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ready to Start?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" asChild>
                    <a href="/auth/signup">Create Account</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/startups">Browse Startups</a>
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-slate-600">
                      Already have an account?
                    </p>
                    <Button variant="link" className="text-blue-600" asChild>
                      <a href="/auth/login">Sign In</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Investment Limits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Investment Limits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Per Startup</span>
                      <span className="font-medium">₹50,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Annual Limit</span>
                      <span className="font-medium">₹2,00,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Lifetime Limit</span>
                      <span className="font-medium">₹10,00,000</span>
                    </div>
                  </div>
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      SEBI-mandated limits to protect retail investors.
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
                      <FileText className="h-4 w-4 mr-2" />
                      Risk Disclosure
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/faq">
                      <Eye className="h-4 w-4 mr-2" />
                      FAQ
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/dashboard">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Sample Portfolio
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Success Stories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">234%</div>
                      <div className="text-sm text-slate-600">Avg. Returns for Top 10%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">₹2.5Cr</div>
                      <div className="text-sm text-slate-600">Largest Exit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">45</div>
                      <div className="text-sm text-slate-600">Successful Exits</div>
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
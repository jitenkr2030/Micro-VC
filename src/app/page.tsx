"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowRight, Rocket, Users, TrendingUp, Shield, CheckCircle, Star, Search, Crown, Gem, IndianRupee, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">Micro-VC</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900">How it Works</a>
              <a href="/startups" className="text-slate-600 hover:text-slate-900">Browse Startups</a>
              <a href="/subscription" className="text-slate-600 hover:text-slate-900">Pricing</a>
              <a href="/education" className="text-slate-600 hover:text-slate-900">Learn</a>
              <a href="/compliance" className="text-slate-600 hover:text-slate-900">About</a>
              <Button variant="outline" asChild>
                <a href="/auth/login">Sign In</a>
              </Button>
              <Button asChild>
                <a href="/auth/signup">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            🚀 Now Live
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Invest in Startups From Just{" "}
            <span className="text-blue-600">₹100</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Micro-VC democratizes venture capital investing. Anyone can now become an early-stage investor 
            in promising startups with fractional ownership starting from just ₹100.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <a href="/auth/login">Start Investing <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
              <a href="/submit-startup">List Your Startup</a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹100</div>
              <div className="text-slate-600">Minimum Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Active Startups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹50Cr+</div>
              <div className="text-slate-600">Total Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Micro-VC Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Democratizing venture capital investing for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Browse Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover curated startups with detailed pitches, business plans, and growth potential.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Fractional Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Invest from ₹100 and own micro-shares through our pooled SPV investment model.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Track Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monitor your investments, startup progress, and potential returns in real-time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Secure & Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  SEBI-compliant platform with escrow payments and comprehensive investor protection.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Micro-VC?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Democratized Investing</h3>
                    <p className="text-slate-600">
                      Access venture capital opportunities previously available only to high-net-worth individuals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Diversified Portfolio</h3>
                    <p className="text-slate-600">
                      Spread risk across multiple startups with small investment amounts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Learn & Grow</h3>
                    <p className="text-slate-600">
                      Understand venture capital, startup ecosystems, and investment strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Community Impact</h3>
                    <p className="text-slate-600">
                      Support innovative startups and be part of their growth journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Investment Example</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium">Startup Valuation</span>
                  <span className="font-bold">₹10 Cr</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="font-medium">Equity Offered</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <span className="font-medium">Your Investment</span>
                  <span className="font-bold text-blue-600">₹100</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                  <span className="font-medium">Your Ownership</span>
                  <span className="font-bold text-green-600">0.0001%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section id="startups" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Startups
            </h2>
            <p className="text-xl text-slate-600">
              Discover promising startups seeking investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Fintech</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-slate-600">4.8</span>
                  </div>
                </div>
                <CardTitle>PaySecure</CardTitle>
                <CardDescription>
                  AI-powered fraud detection for digital payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Target</span>
                    <span className="font-medium">₹50 Lakhs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Raised</span>
                    <span className="font-medium text-green-600">₹32 Lakhs</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '64%' }}></div>
                  </div>
                  <Button className="w-full">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">HealthTech</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-slate-600">4.9</span>
                  </div>
                </div>
                <CardTitle>MediConnect</CardTitle>
                <CardDescription>
                  Telemedicine platform for rural healthcare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Target</span>
                    <span className="font-medium">₹75 Lakhs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Raised</span>
                    <span className="font-medium text-green-600">₹45 Lakhs</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <Button className="w-full">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">EdTech</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-slate-600">4.7</span>
                  </div>
                </div>
                <CardTitle>SkillUp</CardTitle>
                <CardDescription>
                  AI-powered personalized learning platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Target</span>
                    <span className="font-medium">₹30 Lakhs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Raised</span>
                    <span className="font-medium text-green-600">₹18 Lakhs</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <Button className="w-full">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="/startups">View All Startups <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Subscription Tiers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Investment Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlock powerful features and exclusive opportunities with our subscription tiers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Tier */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                  <Users className="h-8 w-8 text-slate-600" />
                </div>
                <CardTitle className="text-xl">Free</CardTitle>
                <CardDescription>Perfect for exploring</CardDescription>
                <div className="text-3xl font-bold text-slate-900">₹0</div>
                <div className="text-sm text-slate-600">forever</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Browse all startups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>1 investment/month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Basic support</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Current Plan
                </Button>
              </CardContent>
            </Card>

            {/* Silver Tier */}
            <Card className="text-center border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Silver</CardTitle>
                <CardDescription>For serious investors</CardDescription>
                <div className="text-3xl font-bold text-blue-600">₹99</div>
                <div className="text-sm text-slate-600">per month</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Unlimited investments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Early deal access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Priority support</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Upgrade to Silver
                </Button>
              </CardContent>
            </Card>

            {/* Gold Tier */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Gold</CardTitle>
                <CardDescription>For experienced investors</CardDescription>
                <div className="text-3xl font-bold text-amber-600">₹299</div>
                <div className="text-sm text-slate-600">per month</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>All Silver features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Expert calls (2/month)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Co-investment opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>VIP support (24/7)</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                  Upgrade to Gold
                </Button>
              </CardContent>
            </Card>

            {/* Platinum Tier */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Gem className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Platinum</CardTitle>
                <CardDescription>For high-net-worth individuals</CardDescription>
                <div className="text-3xl font-bold text-purple-600">₹999</div>
                <div className="text-sm text-slate-600">per month</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>All Gold features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>VC introductions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dedicated relationship manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Secondary market access</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  Upgrade to Platinum
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/subscription">View All Plans & Features <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Fee Transparency Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparent Fee Structure
            </h2>
            <p className="text-xl text-slate-600">
              We believe in complete transparency. No hidden fees, ever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Platform Commission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-blue-600">2-4%</div>
                  <div className="text-sm text-slate-600">
                    Tiered commission based on investment amount
                  </div>
                  <div className="text-xs text-slate-500">
                    • 2% on investments ≤ ₹10,000<br/>
                    • 3% on investments ₹10,001-₹50,000<br/>
                    • 4% on investments &gt; ₹50,000
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <IndianRupee className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Payment Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-green-600">1.5-2%</div>
                  <div className="text-sm text-slate-600">
                    Payment gateway fees
                  </div>
                  <div className="text-xs text-slate-500">
                    • 1.5% for UPI & Wallets<br/>
                    • 2% for Cards & Net Banking<br/>
                    • No additional charges
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>GST</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-amber-600">18%</div>
                  <div className="text-sm text-slate-600">
                    Applicable on platform and processing fees
                  </div>
                  <div className="text-xs text-slate-500">
                    • As per government regulations<br/>
                    • Included in total amount<br/>
                    • Tax invoice provided
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Alert className="max-w-2xl mx-auto">
              <Shield className="h-4 w-4" />
              <AlertDescription>
                <strong>SEBI Compliant:</strong> All fees are disclosed upfront and comply with SEBI regulations for equity crowdfunding platforms.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Become a Venture Capitalist?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of micro-investors building the future, one startup at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <a href="/auth/login">Start Investing Today</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <a href="/compliance">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Micro-VC</span>
              </div>
              <p className="text-slate-400">
                Democratizing venture capital for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Investors</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/startups" className="hover:text-white">Browse Startups</a></li>
                <li><a href="/compliance#risk-disclosure" className="hover:text-white">How to Invest</a></li>
                <li><a href="/compliance" className="hover:text-white">Risk Disclosure</a></li>
                <li><a href="/compliance#legal-documents" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Startups</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/submit-startup" className="hover:text-white">List Your Startup</a></li>
                <li><a href="/compliance#investor-protection" className="hover:text-white">Fundraising Guide</a></li>
                <li><a href="/dashboard" className="hover:text-white">Success Stories</a></li>
                <li><a href="/compliance" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/compliance#legal-documents" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/compliance#legal-documents" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/compliance#sebi-compliance" className="hover:text-white">Compliance</a></li>
                <li><a href="/compliance#sebi-compliance" className="hover:text-white">SEBI Guidelines</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Micro-VC. All rights reserved. | SEBI Registered</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
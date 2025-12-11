"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  Star, 
  Crown, 
  Gem, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  ArrowRight,
  IndianRupee,
  Zap,
  BarChart3,
  MessageSquare,
  Calendar,
  Award,
  Target
} from "lucide-react";

interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: any;
  color: string;
  badgeColor: string;
}

const subscriptionTiers: SubscriptionTier[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "forever",
    description: "Perfect for exploring the platform",
    features: [
      "Browse all startups",
      "1 investment per month",
      "Basic startup information",
      "Email support",
      "Mobile app access"
    ],
    icon: Users,
    color: "text-slate-600",
    badgeColor: "bg-slate-100 text-slate-800"
  },
  {
    id: "silver",
    name: "Silver",
    price: 99,
    period: "month",
    description: "For serious investors starting their journey",
    features: [
      "All Free features",
      "Unlimited investments",
      "Advanced analytics dashboard",
      "Priority email support",
      "Early access to new deals",
      "Investment portfolio tracking",
      "Monthly market reports"
    ],
    popular: true,
    icon: Star,
    color: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    id: "gold",
    name: "Gold",
    price: 299,
    period: "month",
    description: "For experienced investors seeking premium features",
    features: [
      "All Silver features",
      "Exclusive deal flow",
      "1-on-1 expert calls (2/month)",
      "Premium research reports",
      "Co-investment opportunities",
      "VIP support (24/7)",
      "Quarterly portfolio reviews",
      "Access to investor community"
    ],
    icon: Crown,
    color: "text-amber-600",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 999,
    period: "month",
    description: "For high-net-worth individuals and institutions",
    features: [
      "All Gold features",
      "VC introductions",
      "Direct startup access",
      "Custom investment strategies",
      "Dedicated relationship manager",
      "Exclusive investor events",
      "Early-stage deal flow",
      "Secondary market access",
      "Custom reporting & analytics"
    ],
    icon: Gem,
    color: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-800"
  }
];

const comparisonData = [
  {
    feature: "Monthly Investments",
    free: "1",
    silver: "Unlimited",
    gold: "Unlimited",
    platinum: "Unlimited"
  },
  {
    feature: "Advanced Analytics",
    free: "❌",
    silver: "✅",
    gold: "✅",
    platinum: "✅"
  },
  {
    feature: "Priority Support",
    free: "❌",
    silver: "✅",
    gold: "✅",
    platinum: "✅"
  },
  {
    feature: "Early Deal Access",
    free: "❌",
    silver: "✅",
    gold: "✅",
    platinum: "✅"
  },
  {
    feature: "Expert Calls",
    free: "❌",
    silver: "❌",
    gold: "2/month",
    platinum: "Unlimited"
  },
  {
    feature: "VC Introductions",
    free: "❌",
    silver: "❌",
    gold: "❌",
    platinum: "✅"
  },
  {
    feature: "Portfolio Reviews",
    free: "❌",
    silver: "❌",
    gold: "Quarterly",
    platinum: "Monthly"
  },
  {
    feature: "Secondary Market",
    free: "❌",
    silver: "❌",
    gold: "❌",
    platinum: "✅"
  }
];

export default function SubscriptionPage() {
  const [selectedTier, setSelectedTier] = useState("silver");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };

  const getYearlyPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount for yearly
  };

  const handleSubscribe = (tierId: string) => {
    // Handle subscription logic
    console.log(`Subscribing to ${tierId} tier`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Choose Your Investment Journey
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlock powerful features and exclusive opportunities with our subscription tiers. 
              Start free and upgrade as you grow.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <Tabs value={billingPeriod} onValueChange={(value) => setBillingPeriod(value as "monthly" | "yearly")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="yearly">
                  Yearly Billing
                  <Badge className="ml-2 bg-green-100 text-green-800">Save 20%</Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {subscriptionTiers.map((tier) => {
            const Icon = tier.icon;
            const displayPrice = billingPeriod === "monthly" ? tier.price : getYearlyPrice(tier.price);
            const displayPeriod = billingPeriod === "monthly" ? tier.period : "year";

            return (
              <Card 
                key={tier.id} 
                className={`relative transition-all hover:shadow-lg ${
                  tier.popular ? "ring-2 ring-blue-500 shadow-lg" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                    <Icon className={`h-8 w-8 ${tier.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-slate-900">
                      {tier.price === 0 ? "Free" : formatCurrency(displayPrice)}
                    </div>
                    {tier.price > 0 && (
                      <div className="text-sm text-slate-600">
                        per {displayPeriod}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    variant={tier.id === "free" ? "outline" : "default"}
                    onClick={() => handleSubscribe(tier.id)}
                  >
                    {tier.id === "free" ? "Current Plan" : `Subscribe to ${tier.name}`}
                    {tier.id !== "free" && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Compare All Features
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-600">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">Silver</th>
                  <th className="text-center py-4 px-4 font-semibold text-amber-600">Gold</th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-600">Platinum</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 px-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-slate-600">{row.free}</td>
                    <td className="py-4 px-4 text-center text-blue-600 font-medium">{row.silver}</td>
                    <td className="py-4 px-4 text-center text-amber-600 font-medium">{row.gold}</td>
                    <td className="py-4 px-4 text-center text-purple-600 font-medium">{row.platinum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Money-Back Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Not satisfied with your subscription? We offer a 30-day money-back guarantee. 
                Cancel anytime within the first 30 days for a full refund.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                Flexible Billing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Switch between plans anytime or cancel your subscription with no penalties. 
                Your benefits continue until the end of your billing period.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of investors already building their startup portfolios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/startups">Browse Startups</a>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
              <a href="/auth/signup">Get Started Free</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Rocket, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ExternalLink,
  FileText,
  Shield,
  Users,
  Building,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

export default function FooterPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900">Micro-VC</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Welcome to Micro-VC
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Democratizing venture capital for everyone. Invest in startups from just ₹100 and be part of the innovation ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-8">
              {/* For Investors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    For Investors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <a href="/startups" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-blue-600">Browse Startups</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                    </a>
                    <a href="/compliance#risk-disclosure" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-blue-600">How to Invest</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                    </a>
                    <a href="/compliance" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-blue-600">Risk Disclosure</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                    </a>
                    <a href="/compliance#legal-documents" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-blue-600">FAQ</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* For Startups */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-green-600" />
                    For Startups
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <a href="/submit-startup" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-green-600">List Your Startup</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-green-600" />
                    </a>
                    <a href="/compliance#investor-protection" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-green-600">Fundraising Guide</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-green-600" />
                    </a>
                    <a href="/dashboard" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-green-600">Success Stories</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-green-600" />
                    </a>
                    <a href="/compliance" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-green-600">Contact Us</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-green-600" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Legal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Legal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <a href="/compliance#legal-documents" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-purple-600">Terms of Service</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600" />
                    </a>
                    <a href="/compliance#legal-documents" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-purple-600">Privacy Policy</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600" />
                    </a>
                    <a href="/compliance#sebi-compliance" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-purple-600">Compliance</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600" />
                    </a>
                    <a href="/compliance#sebi-compliance" className="flex items-center justify-between group">
                      <span className="text-slate-700 group-hover:text-purple-600">SEBI Guidelines</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Get in Touch
              </CardTitle>
              <CardDescription>
                Have questions? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} required />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Company Info */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-blue-600" />
                About Micro-VC
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4">
                Micro-VC is revolutionizing startup investing by making it accessible to everyone. 
                We believe that great ideas deserve support from everyone, not just wealthy investors.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600">SEBI Registered Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600">500+ Startups Listed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600">₹50Cr+ Total Raised</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Platform Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₹100</div>
                  <div className="text-sm text-slate-600">Min Investment</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-slate-600">Active Startups</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50K+</div>
                  <div className="text-sm text-slate-600">Investors</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">18.4%</div>
                  <div className="text-sm text-slate-600">Avg Returns</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-slate-600">support@micro-vc.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-slate-600">+91 8080 808080</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="font-medium">Office</div>
                    <div className="text-sm text-slate-600">
                      Bangalore, Karnataka, India
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle>Connect With Us</CardTitle>
            <CardDescription>
              Follow us on social media for updates and insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Instagram
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Rocket className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Micro-VC</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-slate-400">
                &copy; 2024 Micro-VC. All rights reserved. | SEBI Registered | INZ000000032
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="/" className="text-slate-400 hover:text-white">Home</a>
              <a href="/compliance" className="text-slate-400 hover:text-white">Compliance</a>
              <a href="/auth/login" className="text-slate-400 hover:text-white">Login</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
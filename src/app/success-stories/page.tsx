"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  IndianRupee,
  Calendar,
  MapPin,
  BarChart3,
  Target,
  Zap,
  Building,
  Rocket,
  Crown,
  Trophy,
  Lightbulb
} from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "PaySecure",
    category: "Fintech",
    description: "AI-powered fraud detection for digital payments",
    founder: "Rajesh Kumar",
    location: "Bangalore",
    founded: "2023",
    fundingRaised: 5000000,
    fundingTarget: 5000000,
    investors: 234,
    equityOffered: 10,
    currentValuation: 50000000,
    successMetrics: {
      users: "2M+",
      revenue: "₹45L/month",
      team: "25",
      growth: "30% MoM"
    },
    story: "PaySecure started with a vision to make digital payments safer for everyone. With Micro-VC's platform, they raised ₹50 Lakhs from 234 micro-investors in just 14 days. Today, they process over ₹2 Cr in monthly transactions and have grown to a team of 25.",
    achievements: [
      "2M+ active users",
      "₹45L monthly revenue",
      "30% month-over-month growth",
      "Featured in Top 10 Fintech Startups 2024"
    ],
    timeline: [
      { month: "Jan 2023", event: "Founded" },
      { month: "Mar 2023", event: "Launched MVP" },
      { month: "Jun 2023", event: "Micro-VC Campaign" },
      { month: "Aug 2023", event: "Reached 1M users" },
      { month: "Dec 2023", event: "Series A funding" },
      { month: "Mar 2024", event: "Profitable operations" }
    ]
  },
  {
    id: 2,
    name: "MediConnect",
    category: "HealthTech",
    description: "Telemedicine platform for rural healthcare",
    founder: "Priya Sharma",
    location: "Mumbai",
    founded: "2022",
    fundingRaised: 7500000,
    fundingTarget: 7500000,
    investors: 189,
    equityOffered: 15,
    currentValuation: 75000000,
    successMetrics: {
      users: "500K+",
      revenue: "₹32L/month",
      team: "40",
      growth: "25% MoM"
    },
    story: "MediConnect is bridging the healthcare gap in rural India through telemedicine. Their Micro-VC campaign raised ₹75 Lakhs, enabling them to expand to 500 villages. They now serve over 500,000 patients and have created 40 jobs.",
    achievements: [
      "500K+ patients served",
      "500 villages covered",
      "40 healthcare professionals employed",
      "25% reduction in rural healthcare costs"
    ],
    timeline: [
      { month: "Jan 2022", event: "Founded" },
      { month: "Apr 2022", event: "Pilot in 50 villages" },
      { month: "Jul 2022", event: "Micro-VC Campaign" },
      { month: "Oct 2022", event: "Expanded to 200 villages" },
      { month: "Feb 2023", event: "Partnership with State Govt" },
      { month: "Jun 2023", event: "Reached 500K patients" }
    ]
  },
  {
    id: 3,
    name: "SkillUp",
    category: "EdTech",
    description: "AI-powered personalized learning platform",
    founder: "Amit Patel",
    location: "Pune",
    founded: "2023",
    fundingRaised: 3000000,
    fundingTarget: 3000000,
    investors: 156,
    equityOffered: 8,
    currentValuation: 30000000,
    successMetrics: {
      users: "100K+",
      revenue: "₹18L/month",
      team: "15",
      growth: "40% MoM"
    },
    story: "SkillUp is revolutionizing education with AI-powered personalized learning. Their Micro-VC campaign was oversubscribed by 200%, raising ₹30 Lakhs. They've helped over 100,000 students improve their skills and achieve better career outcomes.",
    achievements: [
      "100K+ active learners",
      "85% course completion rate",
      "40% average salary increase for graduates",
      "Partnerships with 50+ companies"
    ],
    timeline: [
      { month: "Jan 2023", event: "Founded" },
      { month: "Mar 2023", event: "Platform launched" },
      { month: "May 2023", event: "Micro-VC Campaign" },
      { month: "Aug 2023", event: "Reached 50K users" },
      { month: "Nov 2023", event: "Series A funding" },
      { month: "Feb 2024", event: "International expansion" }
    ]
  },
  {
    id: 4,
    name: "GreenWheels",
    category: "CleanTech",
    description: "Electric vehicle charging infrastructure",
    founder: "Suresh Reddy",
    location: "Hyderabad",
    founded: "2022",
    fundingRaised: 10000000,
    fundingTarget: 10000000,
    investors: 342,
    equityOffered: 12,
    currentValuation: 100000000,
    successMetrics: {
      users: "50K+",
      revenue: "₹65L/month",
      team: "60",
      growth: "20% MoM"
    },
    story: "GreenWheels is building India's largest EV charging network. Their Micro-VC campaign raised ₹1 Cr from 342 investors. They now operate 200+ charging stations across 20 cities and are leading the EV revolution in India.",
    achievements: [
      "200+ charging stations",
      "20+ cities covered",
      "50K+ EV drivers served",
      "Reduced 10,000+ tons of CO2 emissions"
    ],
    timeline: [
      { month: "Jan 2022", event: "Founded" },
      { month: "Apr 2022", event: "First charging station" },
      { month: "Jul 2022", event: "Micro-VC Campaign" },
      { month: "Oct 2022", event: "Expanded to 10 cities" },
      { month: "Jan 2023", event: "100+ stations milestone" },
      { month: "May 2023", event: "Partnership with auto OEMs" }
    ]
  }
];

export default function SuccessStoriesPage() {
  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

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
              <h1 className="text-2xl font-bold text-slate-900">Success Stories</h1>
              <p className="text-slate-600">Startups that thrived with Micro-VC support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
            <Trophy className="h-5 w-5" />
            <span className="font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            From ₹100 to Market Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how startups raised capital from everyday investors and built successful businesses with Micro-VC.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
            <div className="text-sm text-slate-600">Successful Exits</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-green-600 mb-2">₹125Cr+</div>
            <div className="text-sm text-slate-600">Total Raised</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">15,000+</div>
            <div className="text-sm text-slate-600">Investors</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">234%</div>
            <div className="text-sm text-slate-600">Avg. Returns</div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {successStories.map((story) => (
            <Card key={story.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{story.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-slate-600">Success Story</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(story.currentValuation)}
                    </div>
                    <div className="text-sm text-slate-600">Current Valuation</div>
                  </div>
                </div>
                <CardTitle className="text-xl">{story.name}</CardTitle>
                <CardDescription>{story.description}</CardDescription>
                <div className="flex items-center gap-4 text-sm text-slate-600 mt-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {story.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Founded {story.founded}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {story.investors} investors
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{story.successMetrics.users}</div>
                    <div className="text-xs text-slate-600">Users/Customers</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{story.successMetrics.revenue}</div>
                    <div className="text-xs text-slate-600">Monthly Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{story.successMetrics.team}</div>
                    <div className="text-xs text-slate-600">Team Size</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">{story.successMetrics.growth}</div>
                    <div className="text-xs text-slate-600">Growth Rate</div>
                  </div>
                </div>

                {/* Story */}
                <div>
                  <h4 className="font-semibold mb-2">Success Story</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{story.story}</p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <div className="space-y-1">
                    {story.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Funding Progress */}
                <div>
                  <h4 className="font-semibold mb-2">Funding Journey</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Target</span>
                      <span className="font-medium">{formatCurrency(story.fundingTarget)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Raised</span>
                      <span className="font-medium text-green-600">
                        {formatCurrency(story.fundingRaised)}
                      </span>
                    </div>
                    <Progress value={100} className="h-2" />
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>100% funded</span>
                      <span>{story.equityOffered}% equity</span>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h4 className="font-semibold mb-2">Growth Timeline</h4>
                  <div className="space-y-2">
                    {story.timeline.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{item.month}</div>
                          <div className="text-xs text-slate-600">{item.event}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <a href={`/startups/${story.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Impact & Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-sm text-slate-600">Startups Funded</p>
                <p className="text-xs text-slate-500 mt-1">Across 15+ sectors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">50,000+</h3>
                <p className="text-sm text-slate-600">Jobs Created</p>
                <p className="text-xs text-slate-500 mt-1">Direct & indirect employment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">₹500Cr+</h3>
                <p className="text-sm text-slate-600">Economic Value</p>
                <p className="text-xs text-slate-500 mt-1">Total ecosystem impact</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Ready to Write Your Success Story?</CardTitle>
            <CardDescription className="text-center">
              Join the hundreds of startups that have successfully raised capital and grown with Micro-VC
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/submit-startup">Submit Your Startup</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/startups">Browse Success Stories</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
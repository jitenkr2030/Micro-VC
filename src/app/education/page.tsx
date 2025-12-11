"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Search, 
  Filter, 
  Clock, 
  Users, 
  Star, 
  Play, 
  BookOpen, 
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  IndianRupee,
  Calendar,
  User,
  BarChart3,
  Target,
  Lightbulb,
  Shield
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  duration: number;
  instructor: string;
  thumbnail: string;
  rating: number;
  enrollmentCount: number;
  featured: boolean;
  chapters: Array<{title: string, duration: number, isFree: boolean}>;
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Venture Capital Fundamentals",
    description: "Learn the basics of venture capital investing, terminology, and strategies for beginners.",
    category: "INVESTMENT_STRATEGY",
    level: "BEGINNER",
    price: 999,
    duration: 180,
    instructor: "Dr. Rajesh Sharma",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.8,
    enrollmentCount: 1234,
    featured: true,
    chapters: [
      { title: "Introduction to VC", duration: 20, isFree: true },
      { title: "Understanding Term Sheets", duration: 25, isFree: false },
      { title: "Due Diligence Process", duration: 30, isFree: false },
      { title: "Portfolio Management", duration: 25, isFree: false },
      { title: "Exit Strategies", duration: 20, isFree: false }
    ]
  },
  {
    id: "2",
    title: "Startup Valuation Masterclass",
    description: "Master the art of valuing early-stage startups using multiple methodologies.",
    category: "INVESTMENT_STRATEGY",
    level: "INTERMEDIATE",
    price: 2499,
    duration: 240,
    instructor: "Priya Patel, CFA",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.9,
    enrollmentCount: 856,
    featured: true,
    chapters: [
      { title: "Valuation Fundamentals", duration: 30, isFree: true },
      { title: "DCF Methodology", duration: 35, isFree: false },
      { title: "Comparable Analysis", duration: 40, isFree: false },
      { title: "Stage-based Valuation", duration: 35, isFree: false },
      { title: "Case Studies", duration: 40, isFree: false }
    ]
  },
  {
    id: "3",
    title: "Equity Crowdfunding Guide",
    description: "Complete guide to equity crowdfunding regulations, strategies, and best practices.",
    category: "STARTUP_FUNDING",
    level: "BEGINNER",
    price: 1499,
    duration: 150,
    instructor: "Ankit Desai",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.7,
    enrollmentCount: 967,
    featured: false,
    chapters: [
      { title: "Understanding Equity Crowdfunding", duration: 25, isFree: true },
      { title: "SEBI Regulations", duration: 30, isFree: false },
      { title: "Campaign Strategy", duration: 25, isFree: false },
      { title: "Investor Relations", duration: 20, isFree: false }
    ]
  },
  {
    id: "4",
    title: "Advanced Due Diligence",
    description: "Deep dive into due diligence processes for venture capital investments.",
    category: "INVESTMENT_STRATEGY",
    level: "ADVANCED",
    price: 3999,
    duration: 300,
    instructor: "Dr. Sunita Reddy",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.9,
    enrollmentCount: 432,
    featured: false,
    chapters: [
      { title: "Due Diligence Framework", duration: 40, isFree: true },
      { title: "Financial Analysis", duration: 45, isFree: false },
      { title: "Legal Due Diligence", duration: 35, isFree: false },
      { title: "Market Validation", duration: 30, isFree: false },
      { title: "Risk Assessment", duration: 35, isFree: false },
      { title: "Case Studies", duration: 45, isFree: false }
    ]
  },
  {
    id: "5",
    title: "Market Analysis for Startups",
    description: "Learn how to analyze markets, identify opportunities, and validate business ideas.",
    category: "MARKET_ANALYSIS",
    level: "INTERMEDIATE",
    price: 1999,
    duration: 200,
    instructor: "Vikram Mehta",
    thumbnail: "/api/placeholder/300/200",
    rating: 4.6,
    enrollmentCount: 678,
    featured: false,
    chapters: [
      { title: "Market Research Basics", duration: 25, isFree: true },
      { title: "Competitive Analysis", duration: 30, isFree: false },
      { title: "Customer Validation", duration: 25, isFree: false },
      { title: "Market Sizing", duration: 30, isFree: false },
      { title: "Trend Analysis", duration: 25, isFree: false }
    ]
  },
  {
    id: "6",
    title: "Building Your Investment Thesis",
    description: "Develop a personal investment thesis and strategy for consistent returns.",
    category: "INVESTMENT_STRATEGY",
    level: "ADVANCED",
    price: 4999,
    duration: 360,
    instructor: "Dr. Amit Kumar",
    thumbnail: "/api/placeholder/300/200",
    rating: 5.0,
    enrollmentCount: 289,
    featured: true,
    chapters: [
      { title: "Investment Philosophy", duration: 35, isFree: true },
      { title: "Sector Analysis", duration: 40, isFree: false },
      { title: "Risk Management", duration: 35, isFree: false },
      { title: "Portfolio Construction", duration: 40, isFree: false },
      { title: "Performance Measurement", duration: 30, isFree: false },
      { title: "Thesis Evolution", duration: 25, isFree: false }
    ]
  }
];

const categories = [
  { value: "ALL", label: "All Categories" },
  { value: "INVESTMENT_STRATEGY", label: "Investment Strategy" },
  { value: "STARTUP_FUNDING", label: "Startup Funding" },
  { value: "MARKET_ANALYSIS", label: "Market Analysis" },
  { value: "INVESTOR_INSIGHTS", label: "Investor Insights" }
];

const levels = [
  { value: "ALL", label: "All Levels" },
  { value: "BEGINNER", label: "Beginner" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "ADVANCED", label: "Advanced" }
];

export default function EducationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedLevel, setSelectedLevel] = useState("ALL");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "ALL" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "ALL" || course.level === selectedLevel;
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  const featuredCourses = mockCourses.filter(course => course.featured);
  const freeCourses = mockCourses.filter(course => course.price === 0);

  const formatCurrency = (amount: number) => {
    return amount === 0 ? "Free" : `₹${amount.toLocaleString()}`;
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const renderCourseCard = (course: Course) => (
    <Card key={course.id} className="hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
          <BookOpen className="h-16 w-16 text-blue-600" />
        </div>
        {course.featured && (
          <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {course.level}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-slate-600">{course.rating}</span>
          </div>
        </div>
        <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {formatDuration(course.duration)}
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {course.instructor}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {course.enrollmentCount.toLocaleString()}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-blue-600">
              {formatCurrency(course.price)}
            </span>
            <Badge variant="outline" className="text-xs">
              {course.chapters.length} chapters
            </Badge>
          </div>
          
          {course.chapters.some(ch => ch.isFree) && (
            <div className="text-xs text-green-600 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Free preview available
            </div>
          )}
        </div>

        <Button className="w-full">
          {course.price === 0 ? "Start Learning" : `Enroll Now - ${formatCurrency(course.price)}`}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Investment Education Hub
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Master venture capital investing with expert-led courses. From beginner fundamentals to advanced strategies.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map(level => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Course Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="free">Free Courses</TabsTrigger>
            <TabsTrigger value="my-learning">My Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(renderCourseCard)}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Courses</h2>
              <p className="text-slate-600">Handpicked courses by our expert instructors</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map(renderCourseCard)}
            </div>
          </TabsContent>

          <TabsContent value="free" className="mt-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Free Courses</h2>
              <p className="text-slate-600">Start learning with our free introductory courses</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeCourses.map(renderCourseCard)}
            </div>
          </TabsContent>

          <TabsContent value="my-learning" className="mt-6">
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No courses enrolled yet</h3>
              <p className="text-slate-600 mb-6">Start your learning journey by enrolling in our courses</p>
              <Button>Browse Courses</Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Learning Paths */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Learning Paths
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Beginner Investor</CardTitle>
                <CardDescription>Start your investment journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>VC Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Equity Crowdfunding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Market Analysis</span>
                  </div>
                </div>
                <Button className="w-full mt-4">Start Path</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-500">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Advanced Investor</CardTitle>
                <CardDescription>Master advanced strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Startup Valuation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Due Diligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Investment Thesis</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Start Path</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Startup Founder</CardTitle>
                <CardDescription>Learn to raise capital effectively</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Funding Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Pitch Perfect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Investor Relations</span>
                  </div>
                </div>
                <Button className="w-full mt-4">Start Path</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Become an Investment Expert?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of investors who have transformed their careers through our courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/subscription">View Subscription Plans</a>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
              <a href="#courses">Browse All Courses</a>
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Expert Instructors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Learn from industry veterans with decades of experience in venture capital and startup funding.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                Practical Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Real-world case studies, interactive exercises, and actionable insights you can apply immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                Certificate of Completion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Earn recognized certificates that validate your expertise and enhance your professional credibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  Star, 
  MapPin, 
  Calendar,
  ArrowRight,
  IndianRupee,
  Target
} from "lucide-react";

const mockStartups = [
  {
    id: 1,
    name: "PaySecure",
    category: "Fintech",
    description: "AI-powered fraud detection for digital payments",
    location: "Bangalore",
    founded: "2023",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    equityOffered: 10,
    minInvestment: 100,
    rating: 4.8,
    investors: 234,
    stage: "Seed",
    tags: ["AI", "Security", "Payments"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    name: "MediConnect",
    category: "HealthTech",
    description: "Telemedicine platform for rural healthcare",
    location: "Mumbai",
    founded: "2022",
    targetAmount: 7500000,
    raisedAmount: 4500000,
    equityOffered: 15,
    minInvestment: 100,
    rating: 4.9,
    investors: 189,
    stage: "Pre-Series A",
    tags: ["Healthcare", "Rural", "Telemedicine"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    name: "SkillUp",
    category: "EdTech",
    description: "AI-powered personalized learning platform",
    location: "Pune",
    founded: "2023",
    targetAmount: 3000000,
    raisedAmount: 1800000,
    equityOffered: 8,
    minInvestment: 100,
    rating: 4.7,
    investors: 156,
    stage: "Seed",
    tags: ["AI", "Education", "Personalization"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    name: "GreenWheels",
    category: "CleanTech",
    description: "Electric vehicle charging infrastructure",
    location: "Delhi",
    founded: "2022",
    targetAmount: 10000000,
    raisedAmount: 6500000,
    equityOffered: 12,
    minInvestment: 500,
    rating: 4.6,
    investors: 342,
    stage: "Series A",
    tags: ["EV", "Sustainability", "Infrastructure"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 5,
    name: "FarmTech",
    category: "AgriTech",
    description: "Smart farming solutions for small farmers",
    location: "Hyderabad",
    founded: "2023",
    targetAmount: 4000000,
    raisedAmount: 1200000,
    equityOffered: 10,
    minInvestment: 100,
    rating: 4.5,
    investors: 98,
    stage: "Seed",
    tags: ["Agriculture", "IoT", "Smart Farming"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 6,
    name: "RetailAI",
    category: "RetailTech",
    description: "AI-powered inventory management for retail",
    location: "Chennai",
    founded: "2022",
    targetAmount: 6000000,
    raisedAmount: 4200000,
    equityOffered: 8,
    minInvestment: 250,
    rating: 4.7,
    investors: 267,
    stage: "Pre-Series A",
    tags: ["AI", "Retail", "Inventory"],
    image: "/api/placeholder/300/200"
  }
];

const categories = ["All", "Fintech", "HealthTech", "EdTech", "CleanTech", "AgriTech", "RetailTech"];
const stages = ["All", "Seed", "Pre-Series A", "Series A", "Series B"];
const locations = ["All", "Bangalore", "Mumbai", "Pune", "Delhi", "Hyderabad", "Chennai"];

export default function StartupsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [investmentRange, setInvestmentRange] = useState([100, 10000]);
  const [sortBy, setSortBy] = useState("rating");

  const filteredStartups = mockStartups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || startup.category === selectedCategory;
    const matchesStage = selectedStage === "All" || startup.stage === selectedStage;
    const matchesLocation = selectedLocation === "All" || startup.location === selectedLocation;
    const matchesInvestment = startup.minInvestment >= investmentRange[0] && 
                            startup.minInvestment <= investmentRange[1];

    return matchesSearch && matchesCategory && matchesStage && matchesLocation && matchesInvestment;
  });

  const sortedStartups = [...filteredStartups].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "investors":
        return b.investors - a.investors;
      case "funding":
        return (b.raisedAmount / b.targetAmount) - (a.raisedAmount / a.targetAmount);
      case "newest":
        return new Date(b.founded) - new Date(a.founded);
      default:
        return 0;
    }
  });

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
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Browse Startups</h1>
              <p className="text-slate-600">Discover and invest in promising startups</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search startups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Category
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Stage Filter */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Funding Stage
                  </label>
                  <Select value={selectedStage} onValueChange={setSelectedStage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {stages.map(stage => (
                        <SelectItem key={stage} value={stage}>
                          {stage}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Location
                  </label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Investment Range */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Investment Range: ₹{investmentRange[0]} - ₹{investmentRange[1]}
                  </label>
                  <Slider
                    value={investmentRange}
                    onValueChange={setInvestmentRange}
                    max={10000}
                    min={100}
                    step={100}
                    className="mt-4"
                  />
                </div>

                {/* Sort */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Sort By
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="investors">Most Investors</SelectItem>
                      <SelectItem value="funding">Funding Progress</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedStage("All");
                    setSelectedLocation("All");
                    setInvestmentRange([100, 10000]);
                    setSearchTerm("");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Startups Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-slate-600">
                Showing {sortedStartups.length} of {mockStartups.length} startups
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {sortedStartups.map(startup => (
                <Card key={startup.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{startup.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-slate-600">{startup.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{startup.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {startup.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {startup.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Location and Founded */}
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {startup.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {startup.founded}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {startup.investors} investors
                        </div>
                      </div>

                      {/* Funding Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Target</span>
                          <span className="font-medium">{formatCurrency(startup.targetAmount)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Raised</span>
                          <span className="font-medium text-green-600">
                            {formatCurrency(startup.raisedAmount)}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${(startup.raisedAmount / startup.targetAmount) * 100}%` 
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>{Math.round((startup.raisedAmount / startup.targetAmount) * 100)}% funded</span>
                          <span>{startup.equityOffered}% equity</span>
                        </div>
                      </div>

                      {/* Investment Info */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                        <div className="flex items-center gap-1 text-sm">
                          <IndianRupee className="h-4 w-4" />
                          <span className="font-medium">Min: ₹{startup.minInvestment.toLocaleString()}</span>
                        </div>
                        <Badge variant={startup.stage === "Seed" ? "default" : "secondary"}>
                          {startup.stage}
                        </Badge>
                      </div>

                      <Button className="w-full">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedStartups.length === 0 && (
              <div className="text-center py-12">
                <Target className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-2">No startups found</h3>
                <p className="text-slate-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
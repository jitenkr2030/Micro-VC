"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Users, 
  DollarSign, 
  BarChart3,
  Exchange,
  AlertTriangle,
  CheckCircle,
  Plus,
  Eye,
  ShoppingCart,
  Calendar,
  MapPin,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  IndianRupee,
  Percent,
  Share2,
  Timer,
  Shield,
  Zap
} from "lucide-react";

interface SecondaryListing {
  id: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
  investment: {
    id: string;
    startup: {
      id: string;
      name: string;
      category: string;
      rating: number;
    };
  };
  shares: number;
  pricePerShare: number;
  totalValue: number;
  minInvestment: number;
  maxInvestment?: number;
  status: string;
  expiresAt?: string;
  description?: string;
  secondaryTrades: SecondaryTrade[];
}

interface SecondaryTrade {
  id: string;
  buyer: {
    id: string;
    email: string;
    name: string;
  };
  seller: {
    id: string;
    email: string;
    name: string;
  };
  shares: number;
  pricePerShare: number;
  totalValue: number;
  platformFee: number;
  status: string;
  createdAt: string;
}

const mockListings: SecondaryListing[] = [
  {
    id: "1",
    user: {
      id: "1",
      email: "investor1@example.com",
      name: "Rajesh Kumar"
    },
    investment: {
      id: "1",
      startup: {
        id: "1",
        name: "PaySecure",
        category: "Fintech",
        rating: 4.8
      }
    },
    shares: 100,
    pricePerShare: 185,
    totalValue: 18500,
    minInvestment: 5000,
    maxInvestment: 15000,
    status: "LISTED",
    expiresAt: "2024-02-15",
    description: "Selling partial stake due to portfolio rebalancing. Strong performing fintech startup with consistent growth.",
    secondaryTrades: []
  },
  {
    id: "2",
    user: {
      id: "2",
      email: "investor2@example.com",
      name: "Priya Patel"
    },
    investment: {
      id: "2",
      startup: {
        id: "2",
        name: "MediConnect",
        category: "HealthTech",
        rating: 4.9
      }
    },
    shares: 50,
    pricePerShare: 285,
    totalValue: 14250,
    minInvestment: 2500,
    status: "LISTED",
    expiresAt: "2024-02-20",
    description: "Early investment in telemedicine platform. Seeking partial exit to fund new opportunities.",
    secondaryTrades: [
      {
        id: "1",
        buyer: {
          id: "3",
          email: "buyer1@example.com",
          name: "Amit Sharma"
        },
        seller: {
          id: "2",
          email: "investor2@example.com",
          name: "Priya Patel"
        },
        shares: 10,
        pricePerShare: 280,
        totalValue: 2800,
        platformFee: 140,
        status: "COMPLETED",
        createdAt: "2024-01-10T10:30:00Z"
      }
    ]
  },
  {
    id: "3",
    user: {
      id: "3",
      email: "investor3@example.com",
      name: "Vikram Mehta"
    },
    investment: {
      id: "4",
      startup: {
        id: "4",
        name: "GreenWheels",
        category: "CleanTech",
        rating: 4.7
      }
    },
    shares: 75,
    pricePerShare: 265,
    totalValue: 19875,
    minInvestment: 3000,
    maxInvestment: 10000,
    status: "LISTED",
    expiresAt: "2024-02-25",
    description: "Clean energy startup with strong traction. Selling 25% of holdings to diversify portfolio.",
    secondaryTrades: []
  }
];

const marketStats = {
  totalVolume: 2847500,
  totalTrades: 156,
  activeListings: 23,
  averagePrice: 245.50,
  topPerformers: ["PaySecure", "GreenWheels", "MediConnect"],
  recentTrades: [
    { startup: "PaySecure", shares: 25, price: 185, value: 4625, time: "2 hours ago" },
    { startup: "SkillUp", shares: 15, price: 95, value: 1425, time: "5 hours ago" },
    { startup: "GreenWheels", shares: 30, price: 265, value: 7950, time: "1 day ago" }
  ]
};

export default function SecondaryMarketPage() {
  const [activeTab, setActiveTab] = useState("marketplace");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [listings, setListings] = useState<SecondaryListing[]>(mockListings);

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };

  const formatNumber = (num: number) => {
    if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`;
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getDaysRemaining = (expiresAt: string) => {
    const now = new Date();
    const expiry = new Date(expiresAt);
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getListingStatus = (listing: SecondaryListing) => {
    if (listing.status === "SOLD") return { text: "Sold", variant: "secondary" as const };
    if (listing.status === "CANCELLED") return { text: "Cancelled", variant: "destructive" as const };
    if (listing.expiresAt && getDaysRemaining(listing.expiresAt) <= 3) {
      return { text: "Expiring Soon", variant: "destructive" as const };
    }
    return { text: "Active", variant: "default" as const };
  };

  const filteredListings = listings.filter(listing => {
    const matchesCategory = selectedCategory === "all" || 
                         listing.investment.startup.category.toLowerCase() === selectedCategory;
    const matchesPrice = listing.totalValue >= priceRange[0] && listing.totalValue <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const handleBuyShares = (listingId: string) => {
    // Simulate purchase process
    alert(`Purchase process initiated for listing ${listingId}. You will be redirected to payment.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Secondary Market</h1>
              <p className="text-slate-600">
                Buy and sell shares in startups from other investors
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              List Your Shares
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Market Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Volume</div>
                <BarChart3 className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(marketStats.totalVolume)}
              </div>
              <div className="text-sm text-blue-600 mt-1">
                All time
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Trades</div>
                <Exchange className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {marketStats.totalTrades}
              </div>
              <div className="text-sm text-green-600 mt-1">
                This month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Active Listings</div>
                <Share2 className="h-4 w-4 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {marketStats.activeListings}
              </div>
              <div className="text-sm text-purple-600 mt-1">
                Available now
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Avg. Price</div>
                <DollarSign className="h-4 w-4 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-600">
                {formatCurrency(marketStats.averagePrice)}
              </div>
              <div className="text-sm text-orange-600 mt-1">
                Per share
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Platform Fee</div>
                <Percent className="h-4 w-4 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-red-600">
                5%
              </div>
              <div className="text-sm text-red-600 mt-1">
                On trades
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="my-listings">My Listings</TabsTrigger>
            <TabsTrigger value="trading-history">Trading History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="marketplace" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="fintech">Fintech</SelectItem>
                        <SelectItem value="healthtech">HealthTech</SelectItem>
                        <SelectItem value="edtech">EdTech</SelectItem>
                        <SelectItem value="cleantech">CleanTech</SelectItem>
                        <SelectItem value="agritech">AgriTech</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Min Price</Label>
                    <Input 
                      type="number" 
                      placeholder="0" 
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Max Price</Label>
                    <Input 
                      type="number" 
                      placeholder="50000" 
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Listings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => {
                const status = getListingStatus(listing);
                const daysRemaining = listing.expiresAt ? getDaysRemaining(listing.expiresAt) : null;
                
                return (
                  <Card key={listing.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{listing.investment.startup.category}</Badge>
                        <Badge variant={status.variant}>{status.text}</Badge>
                      </div>
                      <CardTitle className="text-lg">{listing.investment.startup.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-slate-600">{listing.investment.startup.rating}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {listing.description && (
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {listing.description}
                        </p>
                      )}
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Shares Available</span>
                          <span className="font-medium">{listing.shares}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Price per Share</span>
                          <span className="font-medium">{formatCurrency(listing.pricePerShare)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Total Value</span>
                          <span className="font-bold text-blue-600">{formatCurrency(listing.totalValue)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Min Investment</span>
                          <span className="font-medium">{formatCurrency(listing.minInvestment)}</span>
                        </div>
                        
                        {listing.maxInvestment && (
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Max Investment</span>
                            <span className="font-medium">{formatCurrency(listing.maxInvestment)}</span>
                          </div>
                        )}
                        
                        {daysRemaining !== null && (
                          <div className="flex items-center gap-1 text-sm">
                            <Timer className="h-4 w-4 text-orange-500" />
                            <span className={daysRemaining <= 3 ? "text-orange-600 font-medium" : "text-slate-600"}>
                              {daysRemaining} days remaining
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                        <div className="text-sm text-slate-600">
                          Seller: {listing.user.name}
                        </div>
                        <Button 
                          size="sm" 
                          onClick={() => handleBuyShares(listing.id)}
                          disabled={listing.status !== "LISTED"}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Buy Shares
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="my-listings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-blue-600" />
                  My Listings
                </CardTitle>
                <CardDescription>
                  Manage your active and completed secondary market listings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Share2 className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No Active Listings</h3>
                  <p className="text-slate-600 mb-6">
                    You haven't listed any shares for sale yet
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trading-history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Exchange className="h-5 w-5 text-blue-600" />
                  Trading History
                </CardTitle>
                <CardDescription>
                  Your complete trading activity on the secondary market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketStats.recentTrades.map((trade, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">{trade.startup}</div>
                          <div className="text-sm text-slate-600">{trade.time}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-medium">{trade.shares} shares</div>
                        <div className="text-sm text-slate-600">@{formatCurrency(trade.price)}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-green-600">{formatCurrency(trade.value)}</div>
                        <div className="text-sm text-slate-600">Total value</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Market Analytics
                </CardTitle>
                <CardDescription>
                  Secondary market trends and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="font-semibold">Top Performers</h3>
                    <div className="space-y-3">
                      {marketStats.topPerformers.map((startup, index) => (
                        <div key={startup} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </div>
                            <span className="font-medium">{startup}</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="font-medium">+12.5%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-semibold">Market Activity</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">24h Volume</span>
                        <span className="font-medium">{formatCurrency(284750)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">7d Volume</span>
                        <span className="font-medium">{formatCurrency(1850000)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">30d Volume</span>
                        <span className="font-medium">{formatCurrency(6750000)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Active Buyers</span>
                        <span className="font-medium">1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Active Sellers</span>
                        <span className="font-medium">892</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-semibold mb-4">Market Trends</h3>
                  <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600">Market trends chart would be displayed here</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
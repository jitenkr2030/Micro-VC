"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  TrendingUp, 
  TrendingDown, 
  IndianRupee, 
  PieChart, 
  BarChart3,
  Clock,
  Target,
  Star,
  Eye,
  Plus,
  Filter,
  Download,
  AlertTriangle,
  CheckCircle,
  Calendar,
  MapPin,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Heart,
  Bell
} from "lucide-react";

const portfolioData = {
  totalInvested: 125000,
  currentValue: 148000,
  totalReturns: 23000,
  returnPercentage: 18.4,
  activeInvestments: 12,
  completedInvestments: 3,
  watchlist: 8
};

const investments = [
  {
    id: 1,
    name: "PaySecure",
    category: "Fintech",
    amount: 15000,
    currentValue: 18500,
    returns: 3500,
    returnPercentage: 23.3,
    status: "active",
    investedDate: "2024-01-15",
    equity: 0.03,
    image: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "MediConnect",
    category: "HealthTech",
    amount: 25000,
    currentValue: 28500,
    returns: 3500,
    returnPercentage: 14.0,
    status: "active",
    investedDate: "2024-02-01",
    equity: 0.05,
    image: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "SkillUp",
    category: "EdTech",
    amount: 10000,
    currentValue: 9500,
    returns: -500,
    returnPercentage: -5.0,
    status: "active",
    investedDate: "2024-01-20",
    equity: 0.02,
    image: "/api/placeholder/60/60"
  },
  {
    id: 4,
    name: "GreenWheels",
    category: "CleanTech",
    amount: 20000,
    currentValue: 26500,
    returns: 6500,
    returnPercentage: 32.5,
    status: "active",
    investedDate: "2023-12-10",
    equity: 0.04,
    image: "/api/placeholder/60/60"
  },
  {
    id: 5,
    name: "FarmTech",
    category: "AgriTech",
    amount: 8000,
    currentValue: 7200,
    returns: -800,
    returnPercentage: -10.0,
    status: "active",
    investedDate: "2024-03-05",
    equity: 0.02,
    image: "/api/placeholder/60/60"
  }
];

const watchlist = [
  {
    id: 1,
    name: "RetailAI",
    category: "RetailTech",
    targetAmount: 6000000,
    raisedAmount: 4200000,
    minInvestment: 250,
    rating: 4.7,
    daysLeft: 15
  },
  {
    id: 2,
    name: "LogiTech",
    category: "Logistics",
    targetAmount: 8000000,
    raisedAmount: 3200000,
    minInvestment: 500,
    rating: 4.6,
    daysLeft: 22
  },
  {
    id: 3,
    name: "EduAI",
    category: "EdTech",
    targetAmount: 4000000,
    raisedAmount: 2800000,
    minInvestment: 100,
    rating: 4.8,
    daysLeft: 8
  }
];

const recentActivity = [
  {
    id: 1,
    type: "investment",
    title: "Invested in PaySecure",
    description: "Invested ₹15,000 for 0.03% equity",
    date: "2024-01-15",
    amount: 15000
  },
  {
    id: 2,
    type: "milestone",
    title: "MediConnect reached 10k users",
    description: "Your investment is performing well",
    date: "2024-01-20",
    amount: null
  },
  {
    id: 3,
    type: "return",
    title: "Received returns from GreenWheels",
    description: "₹2,500 credited to your account",
    date: "2024-01-25",
    amount: 2500
  },
  {
    id: 4,
    type: "update",
    title: "SkillUp monthly update",
    description: "Progress report and future plans",
    date: "2024-02-01",
    amount: null
  }
];

const sectorAllocation = [
  { sector: "Fintech", percentage: 25, amount: 31250, color: "bg-blue-500" },
  { sector: "HealthTech", percentage: 20, amount: 25000, color: "bg-green-500" },
  { sector: "EdTech", percentage: 15, amount: 18750, color: "bg-purple-500" },
  { sector: "CleanTech", percentage: 20, amount: 25000, color: "bg-orange-500" },
  { sector: "AgriTech", percentage: 10, amount: 12500, color: "bg-yellow-500" },
  { sector: "Others", percentage: 10, amount: 12500, color: "bg-gray-500" }
];

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("1y");

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`;
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-600">Your investment portfolio and insights</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Investment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Invested</div>
                <IndianRupee className="h-4 w-4 text-slate-400" />
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {formatCurrency(portfolioData.totalInvested)}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                Across {portfolioData.activeInvestments} startups
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Current Value</div>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(portfolioData.currentValue)}
              </div>
              <div className="text-sm text-green-600 mt-1">
                +{portfolioData.returnPercentage}% from initial
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Returns</div>
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                +{formatCurrency(portfolioData.totalReturns)}
              </div>
              <div className="text-sm text-green-600 mt-1">
                +{portfolioData.returnPercentage}% overall
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Active Deals</div>
                <Target className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {portfolioData.watchlist}
              </div>
              <div className="text-sm text-blue-600 mt-1">
                In your watchlist
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="space-y-6">
            {/* Portfolio Performance */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Portfolio Performance</CardTitle>
                    <CardDescription>Your investment performance over time</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {["1m", "3m", "6m", "1y"].map((range) => (
                      <Button
                        key={range}
                        variant={timeRange === range ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTimeRange(range)}
                      >
                        {range}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-600">Performance chart would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investment List */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Investments</CardTitle>
                    <CardDescription>Active investments in your portfolio</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investments.map((investment) => (
                    <div key={investment.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-slate-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{investment.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <Badge variant="secondary">{investment.category}</Badge>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {investment.investedDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-semibold">
                          {formatCurrency(investment.currentValue)}
                        </div>
                        <div className={`text-sm flex items-center gap-1 ${
                          investment.returns >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {investment.returns >= 0 ? (
                            <ArrowUpRight className="h-3 w-3" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3" />
                          )}
                          {investment.returns >= 0 ? '+' : ''}
                          {formatCurrency(investment.returns)} ({investment.returnPercentage >= 0 ? '+' : ''}{investment.returnPercentage}%)
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-slate-600">Invested</div>
                        <div className="font-medium">{formatCurrency(investment.amount)}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-slate-600">Equity</div>
                        <div className="font-medium">{(investment.equity * 100).toFixed(3)}%</div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="watchlist" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Watchlist</CardTitle>
                    <CardDescription>Startups you're interested in</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Startup
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {watchlist.map((startup) => (
                    <Card key={startup.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{startup.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-slate-600">{startup.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{startup.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
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
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ 
                                width: `${(startup.raisedAmount / startup.targetAmount) * 100}%` 
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>{Math.round((startup.raisedAmount / startup.targetAmount) * 100)}% funded</span>
                            <span>{startup.daysLeft} days left</span>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <span className="text-sm text-slate-600">
                              Min: ₹{startup.minInvestment}
                            </span>
                            <Button size="sm">Invest Now</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Sector Allocation */}
              <Card>
                <CardHeader>
                  <CardTitle>Sector Allocation</CardTitle>
                  <CardDescription>Your portfolio distribution by sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sectorAllocation.map((sector) => (
                      <div key={sector.sector} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{sector.sector}</span>
                          <span className="text-sm text-slate-600">
                            {sector.percentage}% ({formatCurrency(sector.amount)})
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${sector.color}`}
                            style={{ width: `${sector.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Risk Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle>Risk Analysis</CardTitle>
                  <CardDescription>Your portfolio risk assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">Medium</div>
                      <div className="text-sm text-slate-600">Overall Risk Level</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Diversification</span>
                        <div className="flex items-center gap-1">
                          <div className="w-20 bg-slate-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                          </div>
                          <span className="text-sm text-green-600">Good</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Market Risk</span>
                        <div className="flex items-center gap-1">
                          <div className="w-20 bg-slate-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                          </div>
                          <span className="text-sm text-yellow-600">Medium</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Liquidity Risk</span>
                        <div className="flex items-center gap-1">
                          <div className="w-20 bg-slate-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                          </div>
                          <span className="text-sm text-red-600">High</span>
                        </div>
                      </div>
                    </div>
                    
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        Startup investments are illiquid. Consider your investment horizon and risk tolerance.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators for your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">18.4%</div>
                    <div className="text-sm text-slate-600">Total Return</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">12.8%</div>
                    <div className="text-sm text-slate-600">Annual Return</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">1.2</div>
                    <div className="text-sm text-slate-600">Sharpe Ratio</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">0.85</div>
                    <div className="text-sm text-slate-600">Beta</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest investment activities and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        {activity.type === "investment" && <IndianRupee className="h-5 w-5 text-blue-600" />}
                        {activity.type === "milestone" && <Target className="h-5 w-5 text-green-600" />}
                        {activity.type === "return" && <ArrowUpRight className="h-5 w-5 text-purple-600" />}
                        {activity.type === "update" && <Bell className="h-5 w-5 text-orange-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium">{activity.title}</h3>
                          <span className="text-sm text-slate-500">{activity.date}</span>
                        </div>
                        <p className="text-sm text-slate-600">{activity.description}</p>
                        {activity.amount && (
                          <div className="mt-2">
                            <Badge variant="outline">
                              {activity.amount > 0 ? '+' : ''}{formatCurrency(activity.amount)}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
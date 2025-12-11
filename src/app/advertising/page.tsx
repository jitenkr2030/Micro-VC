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
  Megaphone, 
  Target, 
  DollarSign, 
  Eye, 
  MousePointer, 
  TrendingUp, 
  Calendar,
  Plus,
  Pause,
  Play,
  Edit,
  Trash2,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Zap,
  Image,
  Video,
  FileText,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react";

interface AdCampaign {
  id: string;
  title: string;
  description: string;
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  status: string;
  targetAudience: any;
  adCreatives: AdCreative[];
  adMetrics: AdMetric[];
}

interface AdCreative {
  id: string;
  title: string;
  imageUrl?: string;
  videoUrl?: string;
  landingUrl: string;
  adFormat: string;
  ctaText?: string;
  status: string;
  impressions: number;
  clicks: number;
}

interface AdMetric {
  id: string;
  date: string;
  impressions: number;
  clicks: number;
  spend: number;
  conversions: number;
  ctr: number;
  cpc: number;
}

const mockCampaigns: AdCampaign[] = [
  {
    id: "1",
    title: "Fintech Startup Campaign",
    description: "Promote PaySecure to potential investors",
    budget: 50000,
    spent: 32500,
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    status: "ACTIVE",
    targetAudience: {
      ageRange: [25, 45],
      interests: ["fintech", "investing", "technology"],
      location: ["India", "USA"],
      investmentRange: [10000, 100000]
    },
    adCreatives: [
      {
        id: "1",
        title: "Invest in Fintech Future",
        imageUrl: "/api/placeholder/300/200",
        landingUrl: "https://micro-vc.com/startup/paysecure",
        adFormat: "BANNER",
        ctaText: "Learn More",
        status: "ACTIVE",
        impressions: 45000,
        clicks: 1250
      }
    ],
    adMetrics: [
      { id: "1", date: "2024-01-15", impressions: 3000, clicks: 85, spend: 2500, conversions: 12, ctr: 2.83, cpc: 29.41 },
      { id: "2", date: "2024-01-14", impressions: 2800, clicks: 78, spend: 2300, conversions: 10, ctr: 2.79, cpc: 29.49 }
    ]
  },
  {
    id: "2",
    title: "EdTech Platform Launch",
    description: "Launch campaign for SkillUp educational platform",
    budget: 75000,
    spent: 18000,
    startDate: "2024-01-10",
    endDate: "2024-02-10",
    status: "ACTIVE",
    targetAudience: {
      ageRange: [22, 40],
      interests: ["education", "technology", "learning"],
      location: ["India"],
      investmentRange: [5000, 50000]
    },
    adCreatives: [
      {
        id: "2",
        title: "Transform Your Learning",
        videoUrl: "/api/placeholder/video",
        landingUrl: "https://micro-vc.com/startup/skillup",
        adFormat: "VIDEO",
        ctaText: "Start Learning",
        status: "ACTIVE",
        impressions: 28000,
        clicks: 840
      }
    ],
    adMetrics: [
      { id: "3", date: "2024-01-15", impressions: 2000, clicks: 60, spend: 1800, conversions: 8, ctr: 3.0, cpc: 30.0 }
    ]
  }
];

export default function AdvertisingPage() {
  const [activeTab, setActiveTab] = useState("campaigns");
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);
  const [campaigns, setCampaigns] = useState<AdCampaign[]>(mockCampaigns);

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getBudgetUsage = (campaign: AdCampaign) => {
    return (campaign.spent / campaign.budget) * 100;
  };

  const getCampaignStats = (campaign: AdCampaign) => {
    const totalImpressions = campaign.adMetrics.reduce((sum, metric) => sum + metric.impressions, 0);
    const totalClicks = campaign.adMetrics.reduce((sum, metric) => sum + metric.clicks, 0);
    const totalSpend = campaign.adMetrics.reduce((sum, metric) => sum + metric.spend, 0);
    const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const avgCPC = totalClicks > 0 ? totalSpend / totalClicks : 0;

    return {
      impressions: totalImpressions,
      clicks: totalClicks,
      spend: totalSpend,
      ctr: avgCTR,
      cpc: avgCPC
    };
  };

  const handleCreateCampaign = () => {
    setIsCreatingCampaign(true);
    // Simulate API call
    setTimeout(() => {
      const newCampaign: AdCampaign = {
        id: Date.now().toString(),
        title: "New Campaign",
        description: "Campaign description",
        budget: 25000,
        spent: 0,
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: "DRAFT",
        targetAudience: {},
        adCreatives: [],
        adMetrics: []
      };
      
      setCampaigns(prev => [...prev, newCampaign]);
      setIsCreatingCampaign(false);
    }, 1000);
  };

  const toggleCampaignStatus = (campaignId: string, currentStatus: string) => {
    setCampaigns(prev => prev.map(campaign => 
      campaign.id === campaignId 
        ? { ...campaign, status: currentStatus === "ACTIVE" ? "PAUSED" : "ACTIVE" }
        : campaign
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Advertising Platform</h1>
              <p className="text-slate-600">
                Create and manage advertising campaigns to reach potential investors
              </p>
            </div>
            <Button onClick={handleCreateCampaign} disabled={isCreatingCampaign}>
              {isCreatingCampaign ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              ) : (
                <Plus className="h-4 w-4 mr-2" />
              )}
              Create Campaign
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="creatives">Creatives</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="targeting">Targeting</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-6">
            {/* Campaign Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Active Campaigns</div>
                    <Megaphone className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    {campaigns.filter(c => c.status === "ACTIVE").length}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    Total campaigns: {campaigns.length}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Total Budget</div>
                    <DollarSign className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(campaigns.reduce((sum, c) => sum + c.budget, 0))}
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    This month
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Total Spent</div>
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    {formatCurrency(campaigns.reduce((sum, c) => sum + c.spent, 0))}
                  </div>
                  <div className="text-sm text-orange-600 mt-1">
                    Across all campaigns
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-slate-600">Avg. CTR</div>
                    <MousePointer className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    {campaigns.length > 0 
                      ? (campaigns.reduce((sum, c) => {
                          const stats = getCampaignStats(c);
                          return sum + stats.ctr;
                        }, 0) / campaigns.length).toFixed(2) + "%"
                      : "0%"
                    }
                  </div>
                  <div className="text-sm text-purple-600 mt-1">
                    Click-through rate
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Campaign List */}
            <div className="space-y-4">
              {campaigns.map((campaign) => {
                const stats = getCampaignStats(campaign);
                return (
                  <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{campaign.title}</CardTitle>
                          <CardDescription>{campaign.description}</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={campaign.status === "ACTIVE" ? "default" : "secondary"}
                          >
                            {campaign.status}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleCampaignStatus(campaign.id, campaign.status)}
                          >
                            {campaign.status === "ACTIVE" ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div>
                          <div className="text-sm text-slate-600 mb-1">Budget</div>
                          <div className="font-semibold">{formatCurrency(campaign.budget)}</div>
                          <div className="text-sm text-slate-600">
                            Spent: {formatCurrency(campaign.spent)}
                          </div>
                          <Progress value={getBudgetUsage(campaign)} className="h-2 mt-2" />
                        </div>
                        
                        <div>
                          <div className="text-sm text-slate-600 mb-1">Impressions</div>
                          <div className="font-semibold">{stats.impressions.toLocaleString()}</div>
                          <div className="text-sm text-green-600">
                            +12% from last week
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-slate-600 mb-1">Clicks</div>
                          <div className="font-semibold">{stats.clicks.toLocaleString()}</div>
                          <div className="text-sm text-green-600">
                            +8% from last week
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-slate-600 mb-1">CTR</div>
                          <div className="font-semibold">{stats.ctr.toFixed(2)}%</div>
                          <div className="text-sm text-blue-600">
                            Above average
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-slate-600 mb-1">CPC</div>
                          <div className="font-semibold">{formatCurrency(stats.cpc)}</div>
                          <div className="text-sm text-orange-600">
                            Optimize needed
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {campaign.adCreatives.length} creatives
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <BarChart3 className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="creatives" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5 text-blue-600" />
                  Ad Creatives
                </CardTitle>
                <CardDescription>
                  Manage your ad creatives across all campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {campaigns.flatMap(campaign => campaign.adCreatives).map((creative) => (
                    <Card key={creative.id} className="hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                        {creative.adFormat === "BANNER" ? (
                          <Image className="h-16 w-16 text-blue-600" />
                        ) : (
                          <Video className="h-16 w-16 text-purple-600" />
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{creative.adFormat}</Badge>
                          <Badge variant={creative.status === "ACTIVE" ? "default" : "secondary"}>
                            {creative.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold mb-2">{creative.title}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Impressions</span>
                            <span className="font-medium">{creative.impressions.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Clicks</span>
                            <span className="font-medium">{creative.clicks.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">CTR</span>
                            <span className="font-medium">
                              {creative.impressions > 0 
                                ? ((creative.clicks / creative.impressions) * 100).toFixed(2) + "%"
                                : "0%"
                              }
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
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
                  Campaign Analytics
                </CardTitle>
                <CardDescription>
                  Detailed performance metrics for your advertising campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Performance Overview */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {campaigns.reduce((sum, c) => {
                              const stats = getCampaignStats(c);
                              return sum + stats.impressions;
                            }, 0).toLocaleString()}
                          </div>
                          <div className="text-sm text-slate-600">Total Impressions</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            {campaigns.reduce((sum, c) => {
                              const stats = getCampaignStats(c);
                              return sum + stats.clicks;
                            }, 0).toLocaleString()}
                          </div>
                          <div className="text-sm text-slate-600">Total Clicks</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">
                            {campaigns.length > 0 
                              ? (campaigns.reduce((sum, c) => {
                                  const stats = getCampaignStats(c);
                                  return sum + stats.ctr;
                                }, 0) / campaigns.length).toFixed(2) + "%"
                              : "0%"
                            }
                          </div>
                          <div className="text-sm text-slate-600">Average CTR</div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600 mb-1">
                            {formatCurrency(campaigns.reduce((sum, c) => {
                              const stats = getCampaignStats(c);
                              return sum + stats.spend;
                            }, 0))}
                          </div>
                          <div className="text-sm text-slate-600">Total Spend</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Campaign Performance Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Campaign</th>
                          <th className="text-center py-3 px-4 font-semibold text-slate-900">Impressions</th>
                          <th className="text-center py-3 px-4 font-semibold text-slate-900">Clicks</th>
                          <th className="text-center py-3 px-4 font-semibold text-slate-900">CTR</th>
                          <th className="text-center py-3 px-4 font-semibold text-slate-900">CPC</th>
                          <th className="text-center py-3 px-4 font-semibold text-slate-900">Spend</th>
                        </tr>
                      </thead>
                      <tbody>
                        {campaigns.map((campaign) => {
                          const stats = getCampaignStats(campaign);
                          return (
                            <tr key={campaign.id} className="border-b border-slate-100">
                              <td className="py-3 px-4">
                                <div>
                                  <div className="font-medium">{campaign.title}</div>
                                  <div className="text-sm text-slate-600">{campaign.status}</div>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-center">{stats.impressions.toLocaleString()}</td>
                              <td className="py-3 px-4 text-center">{stats.clicks.toLocaleString()}</td>
                              <td className="py-3 px-4 text-center">{stats.ctr.toFixed(2)}%</td>
                              <td className="py-3 px-4 text-center">{formatCurrency(stats.cpc)}</td>
                              <td className="py-3 px-4 text-center">{formatCurrency(stats.spend)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="targeting" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Audience Targeting
                </CardTitle>
                <CardDescription>
                  Define and manage your target audience segments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="font-semibold">Demographics</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">Age Range</Label>
                        <div className="flex items-center gap-2 mt-1">
                          <Input type="number" placeholder="25" className="w-20" />
                          <span>to</span>
                          <Input type="number" placeholder="45" className="w-20" />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Location</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select locations" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="singapore">Singapore</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Investment Range</Label>
                        <div className="flex items-center gap-2 mt-1">
                          <Input type="number" placeholder="10000" className="w-24" />
                          <span>to</span>
                          <Input type="number" placeholder="100000" className="w-24" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-semibold">Interests & Behavior</h3>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">Interests</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["Fintech", "EdTech", "HealthTech", "CleanTech", "SaaS", "AI/ML"].map((interest) => (
                            <Badge key={interest} variant="outline" className="cursor-pointer hover:bg-blue-50">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Device Targeting</Label>
                        <div className="flex items-center gap-4 mt-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked />
                            <Monitor className="h-4 w-4" />
                            Desktop
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked />
                            <Smartphone className="h-4 w-4" />
                            Mobile
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            <Globe className="h-4 w-4" />
                            Tablet
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Estimated Audience Size</h3>
                      <p className="text-sm text-slate-600">Based on your targeting criteria</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      ~2.5M users
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
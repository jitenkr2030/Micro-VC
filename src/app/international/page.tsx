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
  Globe, 
  MapPin, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  Plus,
  Eye,
  Edit,
  Clock,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  IndianRupee,
  Percent,
  Building2,
  Briefcase,
  GraduationCap,
  Shield,
  Zap,
  BarChart3,
  Settings,
  Language,
  Currency,
  Timer,
  Target,
  Rocket,
  Award
} from "lucide-react";

interface Region {
  id: string;
  name: string;
  code: string;
  currency: string;
  timezone: string;
  isActive: boolean;
  regulations?: any;
  taxInfo?: any;
  startups: Array<{
    id: string;
    name: string;
    category: string;
    status: string;
  }>;
  localizations: Array<{
    key: string;
    value: string;
    language: string;
  }>;
}

const mockRegions: Region[] = [
  {
    id: "1",
    name: "United States",
    code: "US",
    currency: "USD",
    timezone: "America/New_York",
    isActive: true,
    regulations: {
      securitiesLaws: "SEC Regulation",
      accreditation: "Required",
      disclosure: "Full transparency",
      investorProtection: "High"
    },
    taxInfo: {
      capitalGains: "20%",
      corporateTax: "21%",
      withholdingTax: "0%"
    },
    startups: [
      { id: "1", name: "TechFin Corp", category: "Fintech", status: "ACTIVE" },
      { id: "2", name: "HealthPlus Inc", category: "HealthTech", status: "ACTIVE" }
    ],
    localizations: [
      { key: "welcome", value: "Welcome to Micro-VC", language: "en" },
      { key: "invest", value: "Invest Now", language: "en" }
    ]
  },
  {
    id: "2",
    name: "United Kingdom",
    code: "GB",
    currency: "GBP",
    timezone: "Europe/London",
    isActive: true,
    regulations: {
      securitiesLaws: "FCA Regulation",
      accreditation: "Required",
      disclosure: "Full transparency",
      investorProtection: "High"
    },
    taxInfo: {
      capitalGains: "20%",
      corporateTax: "19%",
      withholdingTax: "0%"
    },
    startups: [
      { id: "3", name: "FinTech UK Ltd", category: "Fintech", status: "ACTIVE" }
    ],
    localizations: [
      { key: "welcome", value: "Welcome to Micro-VC", language: "en" }
    ]
  },
  {
    id: "3",
    name: "Singapore",
    code: "SG",
    currency: "SGD",
    timezone: "Asia/Singapore",
    isActive: true,
    regulations: {
      securitiesLaws: "MAS Regulation",
      accreditation: "Required",
      disclosure: "Full transparency",
      investorProtection: "Very High"
    },
    taxInfo: {
      capitalGains: "0%",
      corporateTax: "17%",
      withholdingTax: "0%"
    },
    startups: [
      { id: "4", name: "AsiaTech Pte Ltd", category: "EdTech", status: "ACTIVE" }
    ],
    localizations: [
      { key: "welcome", value: "Welcome to Micro-VC", language: "en" }
    ]
  },
  {
    id: "4",
    name: "United Arab Emirates",
    code: "AE",
    currency: "AED",
    timezone: "Asia/Dubai",
    isActive: false,
    regulations: {
      securitiesLaws: "DFSA Regulation",
      accreditation: "Required",
      disclosure: "Full transparency",
      investorProtection: "High"
    },
    taxInfo: {
      capitalGains: "0%",
      corporateTax: "9%",
      withholdingTax: "0%"
    },
    startups: [],
    localizations: []
  },
  {
    id: "5",
    name: "Germany",
    code: "DE",
    currency: "EUR",
    timezone: "Europe/Berlin",
    isActive: false,
    regulations: {
      securitiesLaws: "BaFin Regulation",
      accreditation: "Required",
      disclosure: "Full transparency",
      investorProtection: "Very High"
    },
    taxInfo: {
      capitalGains: "25%",
      corporateTax: "15%",
      withholdingTax: "0%"
    },
    startups: [],
    localizations: []
  }
];

const expansionStats = {
  totalRegions: 12,
  activeRegions: 3,
  plannedRegions: 5,
  totalStartups: 156,
  crossBorderInvestments: 45000000,
  averageGrowth: 145
};

export default function InternationalPage() {
  const [activeTab, setActiveTab] = useState("regions");
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const formatCurrency = (amount: number, currency: string = "USD") => {
    const symbols = { USD: "$", GBP: "£", SGD: "S$", AED: "AED", EUR: "€", INR: "₹" };
    return `${symbols[currency as keyof typeof symbols] || currency}${amount.toLocaleString()}`;
  };

  const getRegionStatus = (region: Region) => {
    if (region.isActive) {
      return { text: "Active", variant: "default" as const, color: "text-green-600" };
    } else {
      return { text: "Planned", variant: "secondary" as const, color: "text-orange-600" };
    }
  };

  const handleActivateRegion = (regionId: string) => {
    alert(`Region activation process initiated for ${regionId}. This will require regulatory compliance and setup.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">International Expansion</h1>
              <p className="text-slate-600">
                Expand Micro-VC's presence globally with localized platforms and compliance
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Region
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Expansion Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Regions</div>
                <Globe className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {expansionStats.totalRegions}
              </div>
              <div className="text-sm text-blue-600 mt-1">
                Global coverage
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Active Regions</div>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {expansionStats.activeRegions}
              </div>
              <div className="text-sm text-green-600 mt-1">
                Live platforms
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Planned Regions</div>
                <Timer className="h-4 w-4 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-600">
                {expansionStats.plannedRegions}
              </div>
              <div className="text-sm text-orange-600 mt-1">
                In pipeline
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Cross-border Investments</div>
                <DollarSign className="h-4 w-4 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {formatCurrency(expansionStats.crossBorderInvestments)}
              </div>
              <div className="text-sm text-purple-600 mt-1">
                Total volume
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Average Growth</div>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {expansionStats.averageGrowth}%
              </div>
              <div className="text-sm text-green-600 mt-1">
                YoY increase
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="regions">Regions</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="localization">Localization</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="regions" className="space-y-6">
            {/* Regions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockRegions.map((region) => {
                const status = getRegionStatus(region);
                return (
                  <Card key={region.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{region.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {region.code} • {region.currency}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant={status.variant} className={status.color}>
                          {status.text}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Timezone</span>
                          <span className="font-medium">{region.timezone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Startups</span>
                          <span className="font-medium">{region.startups.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Localizations</span>
                          <span className="font-medium">{region.localizations.length}</span>
                        </div>
                      </div>
                      
                      {region.isActive && (
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Featured Startups:</div>
                          <div className="space-y-1">
                            {region.startups.slice(0, 2).map((startup) => (
                              <div key={startup.id} className="flex items-center justify-between text-sm">
                                <span>{startup.name}</span>
                                <Badge variant="outline" className="text-xs">
                                  {startup.category}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                        <div className="text-sm text-slate-600">
                          {region.isActive ? "Live since 2024" : "Launch Q2 2024"}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedRegion(region)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {!region.isActive && (
                            <Button 
                              size="sm"
                              onClick={() => handleActivateRegion(region.id)}
                            >
                              <Rocket className="h-4 w-4 mr-1" />
                              Activate
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Regulatory Compliance
                </CardTitle>
                <CardDescription>
                  Overview of regulatory requirements and compliance status across regions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockRegions.filter(r => r.isActive).map((region) => (
                    <div key={region.id} className="border border-slate-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{region.name}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          Compliant
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium text-blue-600">Regulatory Framework</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Securities Laws</span>
                              <span className="font-medium">{region.regulations?.securitiesLaws}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Investor Accreditation</span>
                              <span className="font-medium">{region.regulations?.accreditation}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Disclosure Requirements</span>
                              <span className="font-medium">{region.regulations?.disclosure}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Investor Protection</span>
                              <span className="font-medium">{region.regulations?.investorProtection}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium text-green-600">Tax Information</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Capital Gains Tax</span>
                              <span className="font-medium">{region.taxInfo?.capitalGains}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Corporate Tax</span>
                              <span className="font-medium">{region.taxInfo?.corporateTax}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Withholding Tax</span>
                              <span className="font-medium">{region.taxInfo?.withholdingTax}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-600">
                            Last compliance review: January 2024
                          </div>
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="localization" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Language className="h-5 w-5 text-blue-600" />
                  Localization Management
                </CardTitle>
                <CardDescription>
                  Manage translations and localized content for different regions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="font-semibold">Active Localizations</h3>
                    <div className="space-y-4">
                      {mockRegions.filter(r => r.isActive).map((region) => (
                        <div key={region.id} className="border border-slate-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium">{region.name}</h4>
                            <Badge variant="outline">{region.localizations.length} keys</Badge>
                          </div>
                          
                          <div className="space-y-2">
                            {region.localizations.slice(0, 3).map((localization, index) => (
                              <div key={index} className="flex items-center justify-between text-sm">
                                <span className="text-slate-600">{localization.key}</span>
                                <span className="font-medium">{localization.value}</span>
                              </div>
                            ))}
                            {region.localizations.length > 3 && (
                              <div className="text-sm text-blue-600">
                                +{region.localizations.length - 3} more keys
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-200">
                            <div className="text-sm text-slate-600">
                              Language: {region.localizations[0]?.language || "en"}
                            </div>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-semibold">Add New Translation</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="region">Region</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            {mockRegions.filter(r => r.isActive).map((region) => (
                              <SelectItem key={region.id} value={region.id}>
                                {region.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="language">Language</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                            <SelectItem value="de">German</SelectItem>
                            <SelectItem value="zh">Chinese</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="key">Translation Key</Label>
                        <Input id="key" placeholder="e.g., welcome_message" />
                      </div>
                      
                      <div>
                        <Label htmlFor="value">Translation Value</Label>
                        <Textarea id="value" placeholder="Enter translation" rows={2} />
                      </div>
                      
                      <Button className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Translation
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  International Analytics
                </CardTitle>
                <CardDescription>
                  Performance metrics and growth analysis across international markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="font-semibold">Regional Performance</h3>
                    <div className="space-y-4">
                      {mockRegions.filter(r => r.isActive).map((region) => (
                        <div key={region.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <MapPin className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">{region.name}</div>
                              <div className="text-sm text-slate-600">{region.currency}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <ArrowUpRight className="h-4 w-4" />
                            <span className="font-medium">+{Math.floor(Math.random() * 50 + 20)}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-semibold">Market Penetration</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">North America</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Europe</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                          </div>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Asia Pacific</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                          </div>
                          <span className="text-sm font-medium">30%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Middle East</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                          </div>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-semibold mb-4">Global Growth Trends</h3>
                  <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600">Global growth trends chart would be displayed here</p>
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
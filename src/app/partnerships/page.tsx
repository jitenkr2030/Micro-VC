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
  Handshake, 
  Building2, 
  Users, 
  Target, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  Plus,
  Eye,
  Edit,
  Mail,
  Phone,
  Globe,
  Star,
  Award,
  Zap,
  Shield,
  Clock,
  DollarSign,
  BarChart3,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Building,
  Rocket
} from "lucide-react";

interface Partnership {
  id: string;
  name: string;
  type: string;
  description: string;
  website?: string;
  contactEmail: string;
  contactPhone?: string;
  partnershipTier: string;
  benefits: any;
  deals: PartnershipDeal[];
}

interface PartnershipDeal {
  id: string;
  startup: {
    id: string;
    name: string;
    category: string;
    stage: string;
  };
  dealType: string;
  terms: any;
  status: string;
  startDate?: string;
  endDate?: string;
}

const mockPartnerships: Partnership[] = [
  {
    id: "1",
    name: "Nexus Venture Partners",
    type: "VC_FIRM",
    description: "Leading early-stage venture capital firm focused on technology startups",
    website: "https://nexusvp.com",
    contactEmail: "partnerships@nexusvp.com",
    contactPhone: "+91-22-12345678",
    partnershipTier: "STRATEGIC",
    benefits: {
      coInvestment: true,
      mentorship: true,
      networkAccess: true,
      dueDiligenceSupport: true,
      followOnFunding: true
    },
    deals: [
      {
        id: "1",
        startup: {
          id: "1",
          name: "PaySecure",
          category: "Fintech",
          stage: "Series A"
        },
        dealType: "CO_INVESTMENT",
        terms: {
          investmentAmount: 5000000,
          equityPercentage: 15,
          boardSeat: true,
          mentorshipHours: 20
        },
        status: "ACTIVE",
        startDate: "2024-01-01",
        endDate: "2026-12-31"
      }
    ]
  },
  {
    id: "2",
    name: "TechStars Accelerator",
    type: "ACCELERATOR",
    description: "Global accelerator program for technology startups",
    website: "https://techstars.com",
    contactEmail: "india@techstars.com",
    contactPhone: "+91-11-87654321",
    partnershipTier: "PREMIUM",
    benefits: {
      mentorship: true,
      fundingAccess: true,
      networkAccess: true,
      educationalResources: true,
      demoDayAccess: true
    },
    deals: [
      {
        id: "2",
        startup: {
          id: "2",
          name: "MediConnect",
          category: "HealthTech",
          stage: "Seed"
        },
        dealType: "MENTORSHIP",
        terms: {
          mentorshipHours: 40,
          workshops: 8,
          networkIntroductions: 15,
          pitchTraining: true
        },
        status: "ACTIVE",
        startDate: "2024-01-15",
        endDate: "2024-07-15"
      }
    ]
  },
  {
    id: "3",
    name: "Microsoft for Startups",
    type: "CORPORATE",
    description: "Microsoft's startup program providing technology and resources",
    website: "https://startups.microsoft.com",
    contactEmail: "india-startups@microsoft.com",
    partnershipTier: "STRATEGIC",
    benefits: {
      technicalSupport: true,
      cloudCredits: true,
      softwareLicenses: true,
      technicalMentorship: true,
      goToMarketSupport: true
    },
    deals: []
  },
  {
    id: "4",
    name: "IIT Bombay Innovation Hub",
    type: "UNIVERSITY",
    description: "Premier technology institute's startup incubation center",
    website: "https://iitbinnovation.com",
    contactEmail: "partnerships@iitb.ac.in",
    contactPhone: "+91-22-25767890",
    partnershipTier: "BASIC",
    benefits: {
      researchAccess: true,
      talentAccess: true,
      labFacilities: true,
      mentorship: true,
      fundingConnections: true
    },
    deals: [
      {
        id: "3",
        startup: {
          id: "4",
          name: "GreenWheels",
          category: "CleanTech",
          stage: "Pre-Series A"
        },
        dealType: "RESOURCES",
        terms: {
          labAccess: true,
          researchCollaboration: true,
          talentRecruitment: true,
          equipmentAccess: true
        },
        status: "ACCEPTED",
        startDate: "2024-02-01",
        endDate: "2025-01-31"
      }
    ]
  }
];

const partnershipStats = {
  totalPartnerships: 24,
  activeDeals: 18,
  totalInvestment: 125000000,
  startupsSupported: 67,
  successRate: 85
};

export default function PartnershipsPage() {
  const [activeTab, setActiveTab] = useState("partners");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTier, setSelectedTier] = useState("all");

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };

  const getPartnershipIcon = (type: string) => {
    switch (type) {
      case "VC_FIRM": return <Briefcase className="h-5 w-5" />;
      case "ACCELERATOR": return <Rocket className="h-5 w-5" />;
      case "CORPORATE": return <Building className="h-5 w-5" />;
      case "UNIVERSITY": return <GraduationCap className="h-5 w-5" />;
      default: return <Building2 className="h-5 w-5" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "STRATEGIC": return "bg-purple-100 text-purple-800";
      case "PREMIUM": return "bg-blue-100 text-blue-800";
      case "BASIC": return "bg-slate-100 text-slate-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE": return "bg-green-100 text-green-800";
      case "ACCEPTED": return "bg-blue-100 text-blue-800";
      case "PROPOSED": return "bg-yellow-100 text-yellow-800";
      case "COMPLETED": return "bg-purple-100 text-purple-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  const filteredPartnerships = mockPartnerships.filter(partnership => {
    const matchesType = selectedType === "all" || partnership.type === selectedType;
    const matchesTier = selectedTier === "all" || partnership.partnershipTier === selectedTier;
    return matchesType && matchesTier;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Partnership Programs</h1>
              <p className="text-slate-600">
                Connect with VCs, accelerators, corporations, and universities to accelerate your startup growth
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Apply for Partnership
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Partnership Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Partners</div>
                <Handshake className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {partnershipStats.totalPartnerships}
              </div>
              <div className="text-sm text-blue-600 mt-1">
                Active network
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Active Deals</div>
                <Target className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {partnershipStats.activeDeals}
              </div>
              <div className="text-sm text-green-600 mt-1">
                Current partnerships
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Investment</div>
                <DollarSign className="h-4 w-4 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {formatCurrency(partnershipStats.totalInvestment)}
              </div>
              <div className="text-sm text-purple-600 mt-1">
                Through partnerships
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Startups Supported</div>
                <Users className="h-4 w-4 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-600">
                {partnershipStats.startupsSupported}
              </div>
              <div className="text-sm text-orange-600 mt-1">
                Benefited startups
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Success Rate</div>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {partnershipStats.successRate}%
              </div>
              <div className="text-sm text-green-600 mt-1">
                Partnership success
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="deals">Active Deals</TabsTrigger>
            <TabsTrigger value="apply">Apply</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="partners" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Partner Type</Label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="VC_FIRM">VC Firms</SelectItem>
                        <SelectItem value="ACCELERATOR">Accelerators</SelectItem>
                        <SelectItem value="CORPORATE">Corporates</SelectItem>
                        <SelectItem value="UNIVERSITY">Universities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Partnership Tier</Label>
                    <Select value={selectedTier} onValueChange={setSelectedTier}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="All Tiers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Tiers</SelectItem>
                        <SelectItem value="STRATEGIC">Strategic</SelectItem>
                        <SelectItem value="PREMIUM">Premium</SelectItem>
                        <SelectItem value="BASIC">Basic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partners Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPartnerships.map((partnership) => (
                <Card key={partnership.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          {getPartnershipIcon(partnership.type)}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{partnership.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {partnership.type.replace("_", " ")}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getTierColor(partnership.partnershipTier)}>
                        {partnership.partnershipTier}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {partnership.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail className="h-4 w-4" />
                        {partnership.contactEmail}
                      </div>
                      {partnership.contactPhone && (
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Phone className="h-4 w-4" />
                          {partnership.contactPhone}
                        </div>
                      )}
                      {partnership.website && (
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Globe className="h-4 w-4" />
                          <a href={partnership.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Key Benefits:</div>
                      <div className="flex flex-wrap gap-1">
                        {Object.entries(partnership.benefits)
                          .filter(([_, value]) => value)
                          .map(([key, _]) => (
                            <Badge key={key} variant="outline" className="text-xs">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </Badge>
                          ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                      <div className="text-sm text-slate-600">
                        {partnership.deals.length} active deals
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button size="sm">
                          <Handshake className="h-4 w-4 mr-1" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Active Partnership Deals
                </CardTitle>
                <CardDescription>
                  Current deals and partnerships between startups and our partners
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPartnerships.flatMap(p => p.deals).map((deal) => (
                    <div key={deal.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{deal.startup.name}</h3>
                          <p className="text-sm text-slate-600">
                            {deal.startup.category} • {deal.startup.stage}
                          </p>
                        </div>
                        <Badge className={getStatusColor(deal.status)}>
                          {deal.status.replace("_", " ")}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-slate-600">Deal Type</div>
                          <div className="font-medium">{deal.dealType.replace("_", " ")}</div>
                        </div>
                        
                        {deal.terms.investmentAmount && (
                          <div>
                            <div className="text-slate-600">Investment</div>
                            <div className="font-medium text-green-600">
                              {formatCurrency(deal.terms.investmentAmount)}
                            </div>
                          </div>
                        )}
                        
                        {deal.startDate && (
                          <div>
                            <div className="text-slate-600">Start Date</div>
                            <div className="font-medium">{new Date(deal.startDate).toLocaleDateString()}</div>
                          </div>
                        )}
                        
                        {deal.endDate && (
                          <div>
                            <div className="text-slate-600">End Date</div>
                            <div className="font-medium">{new Date(deal.endDate).toLocaleDateString()}</div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200">
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {deal.startDate && deal.endDate ? 
                              `${Math.ceil((new Date(deal.endDate).getTime() - new Date(deal.startDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} months` : 
                              "Ongoing"
                            }
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-blue-600" />
                  Apply for Partnership
                </CardTitle>
                <CardDescription>
                  Submit your startup to be considered for our partnership programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="font-semibold">Partnership Benefits</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-medium">Access to Capital</h4>
                          <p className="text-sm text-slate-600">
                            Connect with our network of VCs and angel investors for funding opportunities
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h4 className="font-medium">Mentorship & Guidance</h4>
                          <p className="text-sm text-slate-600">
                            Get expert advice from industry leaders and experienced entrepreneurs
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-purple-500 mt-1" />
                        <div>
                          <h4 className="font-medium">Resources & Tools</h4>
                          <p className="text-sm text-slate-600">
                            Access to technology, office space, and other valuable resources
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-orange-500 mt-1" />
                        <div>
                          <h4 className="font-medium">Network Expansion</h4>
                          <p className="text-sm text-slate-600">
                            Connect with potential customers, partners, and talent
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-semibold">Application Form</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="startupName">Startup Name *</Label>
                        <Input id="startupName" placeholder="Your startup name" />
                      </div>
                      
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fintech">Fintech</SelectItem>
                            <SelectItem value="healthtech">HealthTech</SelectItem>
                            <SelectItem value="edtech">EdTech</SelectItem>
                            <SelectItem value="cleantech">CleanTech</SelectItem>
                            <SelectItem value="agritech">AgriTech</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="stage">Funding Stage *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="idea">Idea/Pre-seed</SelectItem>
                            <SelectItem value="seed">Seed</SelectItem>
                            <SelectItem value="pre-series-a">Pre-Series A</SelectItem>
                            <SelectItem value="series-a">Series A</SelectItem>
                            <SelectItem value="series-b">Series B+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="partnershipType">Partnership Type Interest *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select partnership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vc">VC Partnership</SelectItem>
                            <SelectItem value="accelerator">Accelerator Program</SelectItem>
                            <SelectItem value="corporate">Corporate Partnership</SelectItem>
                            <SelectItem value="university">University Collaboration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="description">Why Partnership? *</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Tell us why you're seeking a partnership and what you hope to achieve"
                          rows={3}
                        />
                      </div>
                      
                      <Button className="w-full">
                        Submit Application
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
                  Partnership Analytics
                </CardTitle>
                <CardDescription>
                  Comprehensive analysis of partnership performance and impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="font-semibold">Partnership Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">VC Firms</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                          </div>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Accelerators</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                          </div>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Corporates</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                          </div>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Universities</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-orange-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                          </div>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-semibold">Success Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Average Deal Size</span>
                        <span className="font-medium">{formatCurrency(6940000)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Partnership Duration</span>
                        <span className="font-medium">18 months</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Startup Growth Rate</span>
                        <span className="font-medium text-green-600">+145%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Follow-on Funding</span>
                        <span className="font-medium text-green-600">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-semibold mb-4">Partnership Impact Over Time</h3>
                  <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600">Partnership impact chart would be displayed here</p>
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
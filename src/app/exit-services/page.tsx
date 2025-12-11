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
  Rocket, 
  DollarSign, 
  Users, 
  FileText, 
  Calendar, 
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  Target,
  Shield,
  Zap,
  Building2,
  Gavel,
  BarChart3,
  Handshake,
  Plus,
  Eye,
  Edit,
  Timer,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  IndianRupee,
  Percent,
  Globe,
  Briefcase,
  Scale,
  Lightbulb
} from "lucide-react";

interface ExitService {
  id: string;
  name: string;
  description: string;
  type: string;
  price: number;
  provider: string;
  duration?: string;
  isActive: boolean;
  exitRequests: ExitRequest[];
}

interface ExitRequest {
  id: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
  startup?: {
    id: string;
    name: string;
    category: string;
  };
  status: string;
  quoteAmount?: number;
  timeline?: string;
  createdAt: string;
}

interface ExitOpportunity {
  id: string;
  startup: {
    id: string;
    name: string;
    category: string;
  };
  type: string;
  targetCompany?: string;
  dealSize?: number;
  status: string;
  expectedDate?: string;
  actualDate?: string;
  description?: string;
}

const mockServices: ExitService[] = [
  {
    id: "1",
    name: "Legal Due Diligence",
    description: "Comprehensive legal review and documentation for exit processes",
    type: "LEGAL",
    price: 250000,
    provider: "LexCorp Legal Services",
    duration: "4-6 weeks",
    isActive: true,
    exitRequests: [
      {
        id: "1",
        user: {
          id: "1",
          email: "founder1@example.com",
          name: "Rajesh Kumar"
        },
        startup: {
          id: "1",
          name: "PaySecure",
          category: "Fintech"
        },
        status: "QUOTED",
        quoteAmount: 250000,
        timeline: "6 weeks",
        createdAt: "2024-01-10T10:30:00Z"
      }
    ]
  },
  {
    id: "2",
    name: "Financial Valuation",
    description: "Professional business valuation and financial analysis",
    type: "FINANCIAL",
    price: 150000,
    provider: "FinVal Analytics",
    duration: "2-3 weeks",
    isActive: true,
    exitRequests: []
  },
  {
    id: "3",
    name: "Strategic Advisory",
    description: "Expert guidance on exit strategy and timing",
    type: "STRATEGIC",
    price: 200000,
    provider: "Exit Strategy Partners",
    duration: "Ongoing",
    isActive: true,
    exitRequests: [
      {
        id: "2",
        user: {
          id: "2",
          email: "founder2@example.com",
          name: "Priya Patel"
        },
        startup: {
          id: "2",
          name: "MediConnect",
          category: "HealthTech"
        },
        status: "IN_PROGRESS",
        quoteAmount: 200000,
        timeline: "3 months",
        createdAt: "2024-01-05T14:20:00Z"
      }
    ]
  },
  {
    id: "4",
    name: "Operational Restructuring",
    description: "Optimize operations for maximum exit value",
    type: "OPERATIONAL",
    price: 300000,
    provider: "Ops Excellence Group",
    duration: "8-12 weeks",
    isActive: true,
    exitRequests: []
  }
];

const mockOpportunities: ExitOpportunity[] = [
  {
    id: "1",
    startup: {
      id: "1",
      name: "PaySecure",
      category: "Fintech"
    },
    type: "ACQUISITION",
    targetCompany: "TechFin Corp",
    dealSize: 25000000,
    status: "TERM_SHEET",
    expectedDate: "2024-03-15",
    description: "Advanced acquisition talks with major financial technology company"
  },
  {
    id: "2",
    startup: {
      id: "4",
      name: "GreenWheels",
      category: "CleanTech"
    },
    type: "IPO",
    dealSize: 100000000,
    status: "POTENTIAL",
    expectedDate: "2025-06-30",
    description: "Preparing for IPO with strong market position and growth metrics"
  },
  {
    id: "3",
    startup: {
      id: "2",
      name: "MediConnect",
      category: "HealthTech"
    },
    type: "MERGER",
    targetCompany: "HealthPlus Inc",
    dealSize: 18000000,
    status: "DUE_DILIGENCE",
    expectedDate: "2024-04-30",
    description: "Merger discussions with leading healthcare platform"
  }
];

const exitStats = {
  totalOpportunities: 23,
  activeDeals: 8,
  completedExits: 15,
  totalValue: 485000000,
  averageTimeline: "6-9 months",
  successRate: 78
};

export default function ExitServicesPage() {
  const [activeTab, setActiveTab] = useState("services");
  const [selectedService, setSelectedService] = useState("");
  const [isRequestingService, setIsRequestingService] = useState(false);

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case "LEGAL": return <Gavel className="h-5 w-5" />;
      case "FINANCIAL": return <BarChart3 className="h-5 w-5" />;
      case "STRATEGIC": return <Lightbulb className="h-5 w-5" />;
      case "OPERATIONAL": return <Building2 className="h-5 w-5" />;
      default: return <Briefcase className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED": return "bg-green-100 text-green-800";
      case "IN_PROGRESS": return "bg-blue-100 text-blue-800";
      case "QUOTED": return "bg-yellow-100 text-yellow-800";
      case "REQUESTED": return "bg-purple-100 text-purple-800";
      case "TERM_SHEET": return "bg-orange-100 text-orange-800";
      case "DUE_DILIGENCE": return "bg-indigo-100 text-indigo-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  const handleRequestService = async (serviceId: string) => {
    setIsRequestingService(true);
    setSelectedService(serviceId);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Service request submitted for ${serviceId}. You will receive a quote shortly.`);
      setIsRequestingService(false);
      setSelectedService("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Exit Services</h1>
              <p className="text-slate-600">
                Professional services to help you maximize your startup exit value
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Request Service
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Exit Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Opportunities</div>
                <Target className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {exitStats.totalOpportunities}
              </div>
              <div className="text-sm text-blue-600 mt-1">
                Tracked
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Active Deals</div>
                <Handshake className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {exitStats.activeDeals}
              </div>
              <div className="text-sm text-green-600 mt-1">
                In progress
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Completed Exits</div>
                <CheckCircle className="h-4 w-4 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {exitStats.completedExits}
              </div>
              <div className="text-sm text-purple-600 mt-1">
                Successful
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">Total Value</div>
                <DollarSign className="h-4 w-4 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-orange-600">
                {formatCurrency(exitStats.totalValue)}
              </div>
              <div className="text-sm text-orange-600 mt-1">
                All exits
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
                {exitStats.successRate}%
              </div>
              <div className="text-sm text-green-600 mt-1">
                Above average
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="my-requests">My Requests</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {mockServices.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          {getServiceIcon(service.type)}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {service.provider}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">{service.type}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Price</span>
                        <span className="font-bold text-blue-600">{formatCurrency(service.price)}</span>
                      </div>
                      {service.duration && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Duration</span>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Active Requests</span>
                        <span className="font-medium">{service.exitRequests.length}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
                      <Button 
                        className="flex-1"
                        onClick={() => handleRequestService(service.id)}
                        disabled={isRequestingService && selectedService === service.id}
                      >
                        {isRequestingService && selectedService === service.id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        ) : (
                          <Plus className="h-4 w-4 mr-2" />
                        )}
                        Request Service
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="space-y-4">
              {mockOpportunities.map((opportunity) => (
                <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Rocket className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{opportunity.startup.name}</CardTitle>
                          <CardDescription>
                            {opportunity.startup.category} • {opportunity.type}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(opportunity.status)}>
                        {opportunity.status.replace("_", " ")}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {opportunity.description && (
                      <p className="text-sm text-slate-600 mb-4">
                        {opportunity.description}
                      </p>
                    )}
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {opportunity.targetCompany && (
                        <div>
                          <div className="text-sm text-slate-600">Target Company</div>
                          <div className="font-medium">{opportunity.targetCompany}</div>
                        </div>
                      )}
                      
                      {opportunity.dealSize && (
                        <div>
                          <div className="text-sm text-slate-600">Deal Size</div>
                          <div className="font-bold text-green-600">{formatCurrency(opportunity.dealSize)}</div>
                        </div>
                      )}
                      
                      {opportunity.expectedDate && (
                        <div>
                          <div className="text-sm text-slate-600">Expected Date</div>
                          <div className="font-medium">{formatDate(opportunity.expectedDate)}</div>
                        </div>
                      )}
                      
                      <div>
                        <div className="text-sm text-slate-600">Timeline</div>
                        <div className="font-medium">{exitStats.averageTimeline}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          High interest
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          Strategic fit
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  My Service Requests
                </CardTitle>
                <CardDescription>
                  Track your exit service requests and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockServices.flatMap(service => service.exitRequests).map((request) => (
                    <div key={request.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">Exit Service Request</h3>
                          <p className="text-sm text-slate-600">
                            {request.startup?.name} • {formatDate(request.createdAt)}
                          </p>
                        </div>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status.replace("_", " ")}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-slate-600">Quote Amount</div>
                          <div className="font-medium">
                            {request.quoteAmount ? formatCurrency(request.quoteAmount) : "Pending"}
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-600">Timeline</div>
                          <div className="font-medium">{request.timeline || "To be determined"}</div>
                        </div>
                        <div>
                          <div className="text-slate-600">Actions</div>
                          <div className="flex items-center gap-2">
                            {request.status === "QUOTED" && (
                              <Button size="sm" className="text-xs">Accept Quote</Button>
                            )}
                            <Button variant="outline" size="sm" className="text-xs">
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {mockServices.flatMap(service => service.exitRequests).length === 0 && (
                    <div className="text-center py-12">
                      <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">No Service Requests</h3>
                      <p className="text-slate-600 mb-6">
                        You haven't requested any exit services yet
                      </p>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Request First Service
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Exit Analytics
                </CardTitle>
                <CardDescription>
                  Comprehensive analysis of exit opportunities and success rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="font-semibold">Exit Types Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Acquisitions</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                          </div>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">IPOs</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                          </div>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Mergers</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "15%" }}></div>
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
                        <span className="font-medium">{formatCurrency(32300000)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Average Timeline</span>
                        <span className="font-medium">{exitStats.averageTimeline}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Success Rate</span>
                        <span className="font-medium text-green-600">{exitStats.successRate}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">ROI Multiple</span>
                        <span className="font-medium text-green-600">3.2x</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-semibold mb-4">Exit Timeline Trends</h3>
                  <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600">Exit timeline trends chart would be displayed here</p>
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
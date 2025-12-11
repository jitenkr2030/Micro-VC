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
  Key, 
  BarChart3, 
  Settings, 
  Copy, 
  Eye, 
  EyeOff, 
  Plus, 
  Trash2, 
  RefreshCw,
  Shield,
  Zap,
  Database,
  Globe,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Activity
} from "lucide-react";

interface ApiSubscription {
  id: string;
  plan: string;
  price: number;
  status: string;
  startDate: string;
  endDate: string;
  apiKeys: ApiKey[];
  usageStats: ApiUsage[];
}

interface ApiKey {
  id: string;
  key: string;
  name: string;
  permissions: string;
  lastUsed: string | null;
  rateLimit: number;
  isActive: boolean;
}

interface ApiUsage {
  id: string;
  endpoint: string;
  method: string;
  requestCount: number;
  timestamp: string;
}

const apiPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 4999,
    requests: 10000,
    features: [
      "10,000 requests/month",
      "Basic data access",
      "Standard support",
      "1 API key"
    ]
  },
  {
    id: "pro",
    name: "Professional",
    price: 14999,
    requests: 50000,
    features: [
      "50,000 requests/month",
      "Advanced analytics",
      "Priority support",
      "5 API keys",
      "Webhook access"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 49999,
    requests: 200000,
    features: [
      "200,000 requests/month",
      "Full data access",
      "Dedicated support",
      "Unlimited API keys",
      "Custom integrations",
      "SLA guarantee"
    ]
  }
];

export default function ApiAccessPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [showApiKey, setShowApiKey] = useState<{[key: string]: boolean}>({});
  const [isCreatingKey, setIsCreatingKey] = useState(false);
  
  // Mock data for demonstration
  const [subscription, setSubscription] = useState<ApiSubscription>({
    id: "1",
    plan: "PRO",
    price: 14999,
    status: "ACTIVE",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    apiKeys: [
      {
        id: "1",
        key: "mkvc_1234567890abcdef",
        name: "Production Key",
        permissions: '["read", "write"]',
        lastUsed: "2024-01-15T10:30:00Z",
        rateLimit: 1000,
        isActive: true
      },
      {
        id: "2",
        key: "mkvc_abcdef1234567890",
        name: "Development Key",
        permissions: '["read"]',
        lastUsed: "2024-01-14T15:45:00Z",
        rateLimit: 100,
        isActive: true
      }
    ],
    usageStats: [
      { id: "1", endpoint: "/api/startups", method: "GET", requestCount: 150, timestamp: "2024-01-15T10:30:00Z" },
      { id: "2", endpoint: "/api/investments", method: "GET", requestCount: 89, timestamp: "2024-01-15T09:15:00Z" },
      { id: "3", endpoint: "/api/analytics", method: "POST", requestCount: 45, timestamp: "2024-01-15T08:45:00Z" }
    ]
  });

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const toggleApiKeyVisibility = (keyId: string) => {
    setShowApiKey(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleCreateApiKey = async () => {
    setIsCreatingKey(true);
    // Simulate API call
    setTimeout(() => {
      const newKey: ApiKey = {
        id: Date.now().toString(),
        key: "mkvc_" + Math.random().toString(36).substr(2, 16),
        name: "New API Key",
        permissions: '["read"]',
        lastUsed: null,
        rateLimit: 1000,
        isActive: true
      };
      
      setSubscription(prev => ({
        ...prev,
        apiKeys: [...prev.apiKeys, newKey]
      }));
      
      setIsCreatingKey(false);
    }, 1000);
  };

  const getUsagePercentage = () => {
    const totalRequests = subscription.usageStats.reduce((sum, stat) => sum + stat.requestCount, 0);
    const plan = apiPlans.find(p => p.id.toLowerCase() === subscription.plan.toLowerCase());
    return plan ? (totalRequests / plan.requests) * 100 : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">API Access</h1>
              <p className="text-slate-600">
                Integrate Micro-VC data into your applications with our powerful API
              </p>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              Active Subscription
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="keys">API Keys</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Subscription Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Current Subscription
                </CardTitle>
                <CardDescription>
                  Your API access plan and usage limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {subscription.plan}
                    </div>
                    <div className="text-sm text-slate-600">Plan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {formatCurrency(subscription.price)}
                    </div>
                    <div className="text-sm text-slate-600">Monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {subscription.apiKeys.length}
                    </div>
                    <div className="text-sm text-slate-600">API Keys</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {getUsagePercentage().toFixed(1)}%
                    </div>
                    <div className="text-sm text-slate-600">Usage</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Monthly Usage</span>
                    <span className="text-sm text-slate-600">
                      {subscription.usageStats.reduce((sum, stat) => sum + stat.requestCount, 0)} / 50,000 requests
                    </span>
                  </div>
                  <Progress value={getUsagePercentage()} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Available Plans */}
            <Card>
              <CardHeader>
                <CardTitle>Available Plans</CardTitle>
                <CardDescription>
                  Upgrade or downgrade your API access plan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {apiPlans.map((plan) => (
                    <Card 
                      key={plan.id} 
                      className={`relative transition-all hover:shadow-lg ${
                        plan.id.toLowerCase() === selectedPlan ? "ring-2 ring-blue-500" : ""
                      }`}
                    >
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold text-blue-600">
                          {formatCurrency(plan.price)}
                        </div>
                        <CardDescription>per month</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-center text-sm text-slate-600 mb-4">
                            {plan.requests.toLocaleString()} requests/month
                          </div>
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              {feature}
                            </div>
                          ))}
                          <Button 
                            className="w-full mt-4"
                            variant={plan.id.toLowerCase() === subscription.plan.toLowerCase() ? "outline" : "default"}
                          >
                            {plan.id.toLowerCase() === subscription.plan.toLowerCase() ? "Current Plan" : "Upgrade"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keys" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Key className="h-5 w-5 text-blue-600" />
                      API Keys
                    </CardTitle>
                    <CardDescription>
                      Manage your API keys for accessing Micro-VC data
                    </CardDescription>
                  </div>
                  <Button onClick={handleCreateApiKey} disabled={isCreatingKey}>
                    {isCreatingKey ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Plus className="h-4 w-4 mr-2" />
                    )}
                    Create New Key
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subscription.apiKeys.map((apiKey) => (
                    <div key={apiKey.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{apiKey.name}</h3>
                          <Badge variant={apiKey.isActive ? "default" : "secondary"}>
                            {apiKey.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleApiKeyVisibility(apiKey.id)}
                          >
                            {showApiKey[apiKey.id] ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(apiKey.key)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="font-mono text-sm bg-slate-100 p-2 rounded break-all">
                        {showApiKey[apiKey.id] ? apiKey.key : "•".repeat(32)}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                        <div>
                          <div className="text-slate-600">Rate Limit</div>
                          <div className="font-medium">{apiKey.rateLimit}/hour</div>
                        </div>
                        <div>
                          <div className="text-slate-600">Last Used</div>
                          <div className="font-medium">
                            {apiKey.lastUsed ? formatDate(apiKey.lastUsed) : "Never"}
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-600">Permissions</div>
                          <div className="font-medium">
                            {JSON.parse(apiKey.permissions).join(", ")}
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-600">Actions</div>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash2 className="h-3 w-3 mr-1" />
                            Revoke
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Usage Analytics
                </CardTitle>
                <CardDescription>
                  Monitor your API usage and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {subscription.usageStats.reduce((sum, stat) => sum + stat.requestCount, 0)}
                    </div>
                    <div className="text-sm text-slate-600">Total Requests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {new Set(subscription.usageStats.map(stat => stat.endpoint)).size}
                    </div>
                    <div className="text-sm text-slate-600">Endpoints Used</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      {subscription.usageStats.filter(stat => stat.method === "GET").length}
                    </div>
                    <div className="text-sm text-slate-600">GET Requests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      {subscription.usageStats.filter(stat => stat.method === "POST").length}
                    </div>
                    <div className="text-sm text-slate-600">POST Requests</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Recent Activity</h3>
                  {subscription.usageStats.map((stat) => (
                    <div key={stat.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge variant={stat.method === "GET" ? "default" : "secondary"}>
                          {stat.method}
                        </Badge>
                        <code className="text-sm font-mono">{stat.endpoint}</code>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>{stat.requestCount} requests</span>
                        <span>{formatDate(stat.timestamp)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  API Documentation
                </CardTitle>
                <CardDescription>
                  Complete reference for Micro-VC API endpoints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Alert>
                    <Globe className="h-4 w-4" />
                    <AlertDescription>
                      Base URL: <code className="bg-slate-100 px-2 py-1 rounded">https://api.micro-vc.com/v1</code>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Authentication</h3>
                    <p className="text-slate-600">
                      Include your API key in the Authorization header:
                    </p>
                    <div className="bg-slate-100 p-4 rounded-lg">
                      <code className="text-sm">
                        Authorization: Bearer YOUR_API_KEY
                      </code>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Available Endpoints</h3>
                    <div className="space-y-3">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>GET</Badge>
                          <code className="font-mono">/startups</code>
                        </div>
                        <p className="text-sm text-slate-600">
                          Get a list of all startups with filtering and pagination
                        </p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>GET</Badge>
                          <code className="font-mono">/startups/{"{id}"}</code>
                        </div>
                        <p className="text-sm text-slate-600">
                          Get detailed information about a specific startup
                        </p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>POST</Badge>
                          <code className="font-mono">/analytics</code>
                        </div>
                        <p className="text-sm text-slate-600">
                          Generate custom analytics reports
                        </p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>GET</Badge>
                          <code className="font-mono">/investments</code>
                        </div>
                        <p className="text-sm text-slate-600">
                          Get investment data and portfolio information
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Rate Limits</h3>
                    <p className="text-slate-600">
                      API requests are limited based on your subscription plan. 
                      Current limit: 1,000 requests per hour per API key.
                    </p>
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
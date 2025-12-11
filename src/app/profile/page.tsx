"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  MapPin, 
  Shield, 
  Bell,
  CreditCard,
  FileText,
  CheckCircle,
  AlertTriangle,
  Camera,
  Edit,
  Save,
  Eye,
  EyeOff,
  IndianRupee,
  TrendingUp,
  Calendar
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    company: "Tech Solutions Pvt Ltd",
    address: "123, Tech Park, Bangalore, Karnataka - 560001",
    pan: "ABCDE1234F",
    riskTolerance: "moderate",
    investmentGoal: "long_term",
    notificationEmail: true,
    notificationPush: true,
    notificationSms: false,
    currentPassword: "",
    newPassword: ""
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Simulate API call
    setTimeout(() => {
      setIsEditing(false);
    }, 1000);
  };

  const kycStatus = {
    status: "verified",
    level: "full",
    documents: ["PAN Card", "Aadhaar Card", "Address Proof"],
    verifiedOn: "2024-01-15"
  };

  const investmentSummary = {
    totalInvested: 45000,
    activeInvestments: 8,
    portfolioValue: 52000,
    returns: 7000,
    startups: [
      { name: "PaySecure", amount: 5000, returns: 1200, status: "active" },
      { name: "MediConnect", amount: 10000, returns: 2500, status: "active" },
      { name: "SkillUp", amount: 3000, returns: 800, status: "active" }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
              <p className="text-slate-600">Manage your account and investment preferences</p>
            </div>
            <Button
              variant={isEditing ? "default" : "outline"}
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            >
              {isEditing ? (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="investment">Investment</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center">
                          <User className="h-10 w-10 text-slate-500" />
                        </div>
                        <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                          <Camera className="h-4 w-4" />
                        </Button>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{formData.fullName}</h3>
                        <p className="text-slate-600">{formData.email}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* KYC Status */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      KYC Verification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="font-medium">Fully Verified</span>
                        </div>
                        <Badge variant="secondary">Level 2</Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm text-slate-600">Verified Documents</Label>
                          <div className="mt-1 space-y-1">
                            {kycStatus.documents.map((doc, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                {doc}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm text-slate-600">Verification Details</Label>
                          <div className="mt-1 space-y-1 text-sm">
                            <div>Status: <span className="font-medium text-green-600">Verified</span></div>
                            <div>Verified On: <span className="font-medium">{kycStatus.verifiedOn}</span></div>
                            <div>PAN: <span className="font-medium">{formData.pan}</span></div>
                          </div>
                        </div>
                      </div>

                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          KYC verification is mandatory for investing. Your account is fully verified and you can invest up to ₹50,000 per startup.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="investment" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Preferences</CardTitle>
                    <CardDescription>
                      Set your investment goals and risk tolerance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Risk Tolerance</Label>
                        <Select 
                          value={formData.riskTolerance} 
                          onValueChange={(value) => handleInputChange("riskTolerance", value)}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conservative">Conservative</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="aggressive">Aggressive</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-slate-600">
                          {formData.riskTolerance === "conservative" && "Prefer stable, low-risk investments"}
                          {formData.riskTolerance === "moderate" && "Balance between risk and returns"}
                          {formData.riskTolerance === "aggressive" && "Willing to take higher risks for higher returns"}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Investment Goal</Label>
                        <Select 
                          value={formData.investmentGoal} 
                          onValueChange={(value) => handleInputChange("investmentGoal", value)}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="short_term">Short Term (1-2 years)</SelectItem>
                            <SelectItem value="medium_term">Medium Term (3-5 years)</SelectItem>
                            <SelectItem value="long_term">Long Term (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Investment Limits</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-blue-700">Per Investment:</span>
                          <span className="font-medium ml-2">₹50,000</span>
                        </div>
                        <div>
                          <span className="text-blue-700">Annual Limit:</span>
                          <span className="font-medium ml-2">₹2,00,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Investment Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          ₹{(investmentSummary.totalInvested / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-slate-600">Total Invested</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {investmentSummary.activeInvestments}
                        </div>
                        <div className="text-sm text-slate-600">Active Investments</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">
                          ₹{(investmentSummary.portfolioValue / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-slate-600">Portfolio Value</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">
                          ₹{(investmentSummary.returns / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-slate-600">Total Returns</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Recent Investments</h4>
                      {investmentSummary.startups.map((startup, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <div className="font-medium">{startup.name}</div>
                            <div className="text-sm text-slate-600">
                              Invested: ₹{startup.amount.toLocaleString()}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-green-600">
                              +₹{startup.returns.toLocaleString()}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {startup.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your password and security preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showPassword ? "text" : "password"}
                            value={formData.currentPassword}
                            onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                            placeholder="Enter current password"
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                          <Input
                            id="newPassword"
                            type={showNewPassword ? "text" : "password"}
                            value={formData.newPassword}
                            onChange={(e) => handleInputChange("newPassword", e.target.value)}
                            placeholder="Enter new password"
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <Button className="w-full" disabled={!isEditing}>
                        Update Password
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Two-Factor Authentication</h4>
                          <p className="text-sm text-slate-600">Add an extra layer of security to your account</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Enable
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Login Alerts</h4>
                          <p className="text-sm text-slate-600">Get notified when someone logs into your account</p>
                        </div>
                        <Checkbox defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Choose how you want to receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-slate-400" />
                          <div>
                            <h4 className="font-medium">Email Notifications</h4>
                            <p className="text-sm text-slate-600">Receive updates via email</p>
                          </div>
                        </div>
                        <Checkbox
                          checked={formData.notificationEmail}
                          onCheckedChange={(checked) => handleInputChange("notificationEmail", checked as boolean)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Bell className="h-5 w-5 text-slate-400" />
                          <div>
                            <h4 className="font-medium">Push Notifications</h4>
                            <p className="text-sm text-slate-600">Receive push notifications on your device</p>
                          </div>
                        </div>
                        <Checkbox
                          checked={formData.notificationPush}
                          onCheckedChange={(checked) => handleInputChange("notificationPush", checked as boolean)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-slate-400" />
                          <div>
                            <h4 className="font-medium">SMS Notifications</h4>
                            <p className="text-sm text-slate-600">Receive important alerts via SMS</p>
                          </div>
                        </div>
                        <Checkbox
                          checked={formData.notificationSms}
                          onCheckedChange={(checked) => handleInputChange("notificationSms", checked as boolean)}
                        />
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-3">Notification Types</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Investment Opportunities</span>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Portfolio Updates</span>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Startup Milestones</span>
                          <Checkbox defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Market Insights</span>
                          <Checkbox />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Member Since</span>
                    <span className="text-sm font-medium">Jan 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Total Investments</span>
                    <span className="text-sm font-medium">{investmentSummary.activeInvestments}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Success Rate</span>
                    <span className="text-sm font-medium text-green-600">87%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Risk Score</span>
                    <span className="text-sm font-medium text-blue-600">Medium</span>
                  </div>
                </CardContent>
              </Card>

              {/* Account Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Account Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Email Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Phone Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">KYC Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">2FA Not Enabled</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Statements
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Privacy Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
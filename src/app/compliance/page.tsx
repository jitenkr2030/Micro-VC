"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  FileText, 
  Scale, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Download,
  ExternalLink,
  Building,
  Eye,
  Lock,
  Certificate,
  Gavel,
  Award
} from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900">Compliance & Legal</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Compliance Status */}
        <div className="bg-white rounded-lg border border-green-200 p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-900">SEBI Registered Platform</h2>
              <p className="text-green-700">Micro-VC is fully compliant with all SEBI regulations for equity crowdfunding</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-700">Registration No: INZ000000032</span>
            </div>
            <div className="flex items-center gap-2">
              <Gavel className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-700">Category: Equity Crowdfunding Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-700">Valid Until: Dec 2025</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="risk-disclosure" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="risk-disclosure">Risk Disclosure</TabsTrigger>
            <TabsTrigger value="investor-protection">Investor Protection</TabsTrigger>
            <TabsTrigger value="sebi-compliance">SEBI Compliance</TabsTrigger>
            <TabsTrigger value="legal-documents">Legal Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="risk-disclosure" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Investment Risk Disclosure
                </CardTitle>
                <CardDescription>
                  Important information about the risks associated with startup investments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Warning:</strong> Investing in startups involves substantial risk. 
                    You could lose your entire investment. Only invest money you can afford to lose.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-900 mb-2">High Risk Investment</h3>
                    <p className="text-slate-700">
                      Startup investments are among the riskiest investment types available. 
                      Unlike public markets, these investments are illiquid and carry high failure rates.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Key Risks</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span><strong>Loss of Capital:</strong> Most startups fail, resulting in complete loss of investment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span><strong>Liquidity Risk:</strong> Investments are locked for 3-7 years with no early exit options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span><strong>Market Risk:</strong> Economic downturns can significantly impact startup valuations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span><strong>Dilution Risk:</strong> Future funding rounds may dilute your ownership percentage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span><strong>Regulatory Risk:</strong> Changes in regulations may affect startup operations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Investor Suitability</h3>
                    <p className="text-slate-700 mb-3">
                      You should only invest in startups if you:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Have sufficient knowledge and experience in business and finance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Can afford to lose your entire investment without affecting your lifestyle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Have a diversified investment portfolio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Understand the long-term nature of these investments (3-7+ years)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Due Diligence</h4>
                    <p className="text-sm text-slate-700">
                      While Micro-VC conducts basic verification of startups, investors must perform their own 
                      due diligence. We recommend consulting with financial advisors before making any investment decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investor-protection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Investor Protection Measures
                </CardTitle>
                <CardDescription>
                  How we protect our investors and ensure fair practices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Escrow Protection</h3>
                        <p className="text-sm text-slate-600">
                          All investments are held in SEBI-regulated escrow accounts until funding rounds are successfully completed.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Eye className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Transparent Reporting</h3>
                        <p className="text-sm text-slate-600">
                          Regular updates and financial reports from startups to keep investors informed.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Scale className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Fair Valuation</h3>
                        <p className="text-sm text-slate-600">
                          Independent valuation methods ensure fair pricing for all investors.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Comprehensive Vetting</h3>
                        <p className="text-sm text-slate-600">
                          Rigorous due diligence process for all startups listed on the platform.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Investor Education</h3>
                        <p className="text-sm text-slate-600">
                          Resources and guidance to help investors make informed decisions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Gavel className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Dispute Resolution</h3>
                        <p className="text-sm text-slate-600">
                          Clear processes for resolving disputes between investors and startups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Investment Limits</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">₹50,000</div>
                      <div className="text-sm text-blue-700">Per Startup</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">₹2,00,000</div>
                      <div className="text-sm text-green-700">Annual Limit</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">₹10,00,000</div>
                      <div className="text-sm text-purple-700">Lifetime Limit</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    These limits are set by SEBI to protect retail investors from overexposure to high-risk investments.
                  </p>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Remember:</strong> While we have implemented these protection measures, 
                    investing in startups still carries significant risks. Never invest more than you can afford to lose.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sebi-compliance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  SEBI Compliance Framework
                </CardTitle>
                <CardDescription>
                  Our commitment to regulatory compliance and investor protection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-900">SEBI Registered</h3>
                      <p className="text-green-700">Registration Number: INZ000000032</p>
                    </div>
                  </div>
                  <p className="text-green-800">
                    Micro-VC operates under the SEBI (Alternative Investment Funds) Regulations, 2012, 
                    and the SEBI (Crowdfunding) Regulations, 2021.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Key Compliance Areas</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Due Diligence</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Background verification of founders</li>
                        <li>• Business model validation</li>
                        <li>• Financial statement review</li>
                        <li>• Market opportunity assessment</li>
                        <li>• Legal compliance check</li>
                      </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Investor Verification</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• KYC/AML compliance</li>
                        <li>• Risk profiling</li>
                        <li>• Investment suitability assessment</li>
                        <li>• Annual income verification</li>
                        <li>• Net worth certification</li>
                      </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Fund Management</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Escrow account management</li>
                        <li>• Fund utilization monitoring</li>
                        <li>• Regular reporting to SEBI</li>
                        <li>• Audit compliance</li>
                        <li>• Record maintenance</li>
                      </ul>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Disclosure Requirements</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Risk disclosure statements</li>
                        <li>• Startup information disclosure</li>
                        <li>• Fee structure transparency</li>
                        <li>• Conflict of interest disclosure</li>
                        <li>• Performance reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Regulatory Filings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <div>
                          <div className="font-medium">Annual Report</div>
                          <div className="text-sm text-slate-600">Filed with SEBI - March 2024</div>
                        </div>
                      </div>
                      <Badge variant="secondary">Compliant</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <div>
                          <div className="font-medium">Quarterly Compliance Report</div>
                          <div className="text-sm text-slate-600">Filed with SEBI - June 2024</div>
                        </div>
                      </div>
                      <Badge variant="secondary">Compliant</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <div>
                          <div className="font-medium">Audit Report</div>
                          <div className="text-sm text-slate-600">Independent Auditor - May 2024</div>
                        </div>
                      </div>
                      <Badge variant="secondary">Compliant</Badge>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Our compliance team continuously monitors regulatory changes and updates our practices 
                    to ensure ongoing compliance with all SEBI requirements.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal-documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Legal Documents & Policies
                </CardTitle>
                <CardDescription>
                  Access all legal documents, terms, and policies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Terms of Service</h3>
                      <Badge variant="outline">Updated: Jun 2024</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Comprehensive terms governing the use of Micro-VC platform and services.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Privacy Policy</h3>
                      <Badge variant="outline">Updated: Jun 2024</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      How we collect, use, and protect your personal information.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Risk Disclosure Document</h3>
                      <Badge variant="outline">Mandatory</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Detailed risk disclosure statement as required by SEBI regulations.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Investor Agreement</h3>
                      <Badge variant="outline">Legal</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Standard agreement between investors and Micro-VC platform.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">SEBI Regulations</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <div>
                          <div className="font-medium">SEBI (AIF) Regulations, 2012</div>
                          <div className="text-sm text-slate-600">Governing alternative investment funds</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <div>
                          <div className="font-medium">SEBI Crowdfunding Regulations, 2021</div>
                          <div className="text-sm text-slate-600">Specific regulations for equity crowdfunding</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <div>
                          <div className="font-medium">SEBI (KYC) Regulations</div>
                          <div className="text-sm text-slate-600">Know Your Customer requirements</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important:</strong> All investors must read and understand these documents before 
                    making any investments. If you have any questions, please consult with a legal advisor.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  Shield, 
  Users, 
  IndianRupee,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
  TrendingUp
} from "lucide-react";

const faqData = [
  {
    category: "Getting Started",
    icon: HelpCircle,
    questions: [
      {
        question: "What is Micro-VC and how does it work?",
        answer: "Micro-VC is a platform that allows everyday people to invest in early-stage startups starting from just ₹100. We use a fractional ownership model where multiple small investors pool their investments through a Special Purpose Vehicle (SPV) that appears as a single shareholder on the startup's cap table. This democratizes access to venture capital investments that were previously only available to wealthy individuals and institutions."
      },
      {
        question: "Who can invest on Micro-VC?",
        answer: "Any Indian resident above 18 years old can invest on Micro-VC, subject to SEBI regulations. You need to complete KYC verification and meet the minimum investment requirements. There are investment limits: ₹50,000 per startup, ₹2,00,000 annually, and ₹10,00,000 lifetime to protect retail investors."
      },
      {
        question: "What documents do I need to get started?",
        answer: "To get started, you'll need: 1) PAN card, 2) Aadhaar card or other ID proof, 3) Address proof, 4) Bank account details, 5) Email address and phone number. All documents must be verified through our KYC process as per SEBI regulations."
      },
      {
        question: "How long does the KYC verification process take?",
        answer: "KYC verification typically takes 24-48 hours. Once you submit all required documents, our team reviews them and you'll receive an email confirmation once verified. In some cases, it may take longer if additional verification is required."
      }
    ]
  },
  {
    category: "Investment Process",
    icon: IndianRupee,
    questions: [
      {
        question: "What is the minimum investment amount?",
        answer: "The minimum investment amount is ₹100 per startup. This low entry point makes startup investing accessible to everyone. You can invest any amount above ₹100 in multiples of ₹100, up to the maximum limit of ₹50,000 per startup."
      },
      {
        question: "How do I choose which startups to invest in?",
        answer: "We provide detailed information about each startup including business model, team background, financial projections, traction, and risk factors. We recommend researching thoroughly, diversifying across multiple startups, and investing only in sectors you understand. You can also consult our investment guides and seek professional advice."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept multiple payment methods including UPI, Credit/Debit cards, Net Banking, and popular digital wallets (Paytm, PhonePe, Google Pay). All transactions are secure and processed through SEBI-compliant payment gateways."
      },
      {
        question: "Can I modify or cancel my investment?",
        answer: "Once an investment is confirmed and processed, it cannot be modified or cancelled. Investments are locked in until the funding round closes. However, you can choose not to complete the investment during the payment process if you change your mind."
      }
    ]
  },
  {
    category: "Returns & Exit",
    icon: TrendingUp,
    questions: [
      {
        question: "How and when do I get returns on my investment?",
        answer: "Returns are realized when the startup exits through acquisition, IPO, or secondary sale. This typically takes 3-7 years. Some startups may also distribute dividends if they generate profits, though this is rare in early stages. You'll receive regular updates on your investments' progress through your dashboard."
      },
      {
        question: "What are the potential returns on startup investments?",
        answer: "Startup investments are high-risk, high-reward. While there's potential for significant returns (10x-100x+), there's also a high risk of losing your entire investment. Historical data shows that about 90% of startups fail, but successful ones can generate substantial returns. Our platform shows average returns of 18.4%, but individual results vary widely."
      },
      {
        question: "Can I sell my investment before the startup exits?",
        answer: "Startup investments are illiquid and typically cannot be sold before an exit event. However, some platforms may offer secondary market opportunities where you can sell your shares to other accredited investors, subject to platform rules and regulatory approvals."
      },
      {
        question: "How are returns distributed to investors?",
        answer: "Returns are distributed proportionally based on your ownership percentage. When a startup exits, the proceeds are first used to repay investors, then any remaining amount goes to founders and employees. You'll receive detailed statements and the amount will be credited to your registered bank account."
      }
    ]
  },
  {
    category: "Risks & Safety",
    icon: Shield,
    questions: [
      {
        question: "What are the risks involved in startup investing?",
        answer: "Startup investments carry significant risks: 1) High failure rate (90% of startups fail), 2) Illiquidity (investments are locked for 3-7 years), 3) Market risk, 4) Dilution from future funding rounds, 5) Regulatory changes, 6) Team execution risk. Only invest money you can afford to lose."
      },
      {
        question: "How does Micro-VC protect investors?",
        answer: "We protect investors through: 1) Rigorous startup vetting, 2) SEBI compliance and regulation, 3) Escrow account protection for funds, 4) Investment limits to prevent overexposure, 5) Transparent disclosure of risks, 6) Regular reporting and updates, 7) Professional due diligence processes."
      },
      {
        question: "Is my money safe with Micro-VC?",
        answer: "Yes, your money is held in SEBI-regulated escrow accounts until funding rounds are successfully completed. We use bank-grade security, encryption, and follow strict data protection protocols. We're also registered with SEBI (INZ000000032) and undergo regular audits."
      },
      {
        question: "What happens if a startup fails?",
        answer: "If a startup fails, you may lose your entire investment. This is a common outcome in startup investing. However, the loss is limited to your investment amount, and you won't be liable for any debts or obligations of the startup. We recommend diversifying across multiple startups to mitigate this risk."
      }
    ]
  },
  {
    category: "Legal & Compliance",
    icon: FileText,
    questions: [
      {
        question: "Is Micro-VC SEBI registered?",
        answer: "Yes, Micro-VC is registered with SEBI under registration number INZ000000032. We operate as an equity crowdfunding platform and comply with all applicable regulations including SEBI (Alternative Investment Funds) Regulations, 2012, and SEBI (Crowdfunding) Regulations, 2021."
      },
      {
        question: "What are the tax implications of startup investments?",
        answer: "Startup investments have specific tax implications. Long-term capital gains (held for more than 2 years) are taxed at 20% with indexation benefits. Short-term gains are taxed as per your income tax slab. Losses can be offset against gains. We recommend consulting a tax advisor for personalized advice."
      },
      {
        question: "What legal documents should I review before investing?",
        answer: "Before investing, review: 1) Risk disclosure statement, 2) Terms of service, 3) Investment agreement, 4) Startup's pitch deck and financial projections, 5) Due diligence reports, 6) Shareholder agreement terms. All documents are available on the startup's detail page."
      },
      {
        question: "How are disputes resolved?",
        answer: "Disputes are resolved through a structured process: 1) Direct negotiation between parties, 2) Mediation through platform, 3) Arbitration as per agreement terms, 4) Legal recourse as a last resort. We have a dedicated dispute resolution team and clear processes outlined in our terms of service."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFAQs = faqData.map(category => {
    const filteredQuestions = category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, questions: filteredQuestions };
  }).filter(category => 
    category.questions.length > 0 && 
    (selectedCategory === "All" || selectedCategory === category.category)
  );

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h1>
              <p className="text-slate-600">Find answers to common questions about Micro-VC</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                All Categories
              </Button>
              {faqData.map(category => (
                <Button
                  key={category.category}
                  variant={selectedCategory === category.category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.category)}
                >
                  {category.category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {filteredFAQs.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <HelpCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No FAQs found</h3>
                  <p className="text-slate-600">Try adjusting your search or browse different categories.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map(category => (
                  <Card key={category.category}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <category.icon className="h-5 w-5 text-blue-600" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.questions.map((qa, index) => (
                          <div key={index} className="border border-slate-200 rounded-lg">
                            <button
                              className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                              onClick={() => toggleQuestion(qa.question)}
                            >
                              <span className="font-medium pr-4">{qa.question}</span>
                              {openQuestion === qa.question ? (
                                <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                              )}
                            </button>
                            {openQuestion === qa.question && (
                              <div className="px-4 pb-4">
                                <div className="pt-2 border-t border-slate-200">
                                  <p className="text-slate-700 leading-relaxed">{qa.answer}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Help */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need More Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/compliance">
                      <Shield className="h-4 w-4 mr-2" />
                      Risk Disclosure
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/how-to-invest">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      How to Invest
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/footer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Support
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <div>
                      <div className="font-medium">Email Support</div>
                      <div className="text-sm text-slate-600">support@micro-vc.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-slate-400" />
                    <div>
                      <div className="font-medium">Phone Support</div>
                      <div className="text-sm text-slate-600">+91 8080 808080</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-slate-400" />
                    <div>
                      <div className="font-medium">Support Hours</div>
                      <div className="text-sm text-slate-600">Mon-Fri, 9 AM - 6 PM</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Platform Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                      <div className="text-sm text-slate-600">Active Startups</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">50K+</div>
                      <div className="text-sm text-slate-600">Happy Investors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">98%</div>
                      <div className="text-sm text-slate-600">Support Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notice */}
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  Investment in startups is subject to market risks. Read all documents carefully before investing.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
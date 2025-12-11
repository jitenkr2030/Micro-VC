"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  CreditCard, 
  Banknote, 
  Smartphone,
  Shield,
  CheckCircle,
  Clock,
  AlertTriangle,
  IndianRupee,
  FileText,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  Star,
  Download,
  Copy
} from "lucide-react";

interface InvestmentData {
  startup: {
    id: number;
    name: string;
    description: string;
    category: string;
    location: string;
    targetAmount: number;
    raisedAmount: number;
    equityOffered: number;
    minInvestment: number;
    rating: number;
    investors: number;
  };
  investment: {
    amount: number;
    equity: number;
    shares: number;
  };
}

// Fee calculation functions
const calculatePlatformFee = (amount: number): number => {
  // Tiered platform commission: 2% on ≤₹10,000, 3% on ₹10,001-₹50,000, 4% on >₹50,000
  if (amount <= 10000) return amount * 0.02;
  if (amount <= 50000) return amount * 0.03;
  return amount * 0.04;
};

const calculateProcessingFee = (amount: number): number => {
  // Payment processing fee: 1.5% for UPI/Wallet, 2% for Cards/NetBanking
  return amount * 0.015; // Using average rate
};

const calculateGST = (platformFee: number, processingFee: number): number => {
  // 18% GST on fees
  return (platformFee + processingFee) * 0.18;
};

const mockInvestmentData: InvestmentData = {
  startup: {
    id: 1,
    name: "PaySecure",
    description: "AI-powered fraud detection for digital payments",
    category: "Fintech",
    location: "Bangalore",
    targetAmount: 5000000,
    raisedAmount: 3200000,
    equityOffered: 10,
    minInvestment: 100,
    rating: 4.8,
    investors: 234
  },
  investment: {
    amount: 5000,
    equity: 0.01,
    shares: 50
  }
};

const paymentMethods = [
  {
    id: "upi",
    name: "UPI Payment",
    icon: Smartphone,
    description: "Pay using any UPI app",
    supported: true
  },
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: CreditCard,
    description: "Visa, Mastercard, RuPay",
    supported: true
  },
  {
    id: "netbanking",
    name: "Net Banking",
    icon: Banknote,
    description: "All major banks supported",
    supported: true
  },
  {
    id: "wallet",
    name: "Wallet",
    icon: Smartphone,
    description: "Paytm, PhonePe, Google Pay",
    supported: true
  }
];

export default function InvestPage() {
  const [step, setStep] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [investmentData] = useState(mockInvestmentData);

  // Calculate fees
  const platformFee = calculatePlatformFee(investmentData.investment.amount);
  const processingFee = calculateProcessingFee(investmentData.investment.amount);
  const gst = calculateGST(platformFee, processingFee);
  const totalAmount = investmentData.investment.amount + platformFee + processingFee + gst;

  const fundingProgress = (investmentData.startup.raisedAmount / investmentData.startup.targetAmount) * 100;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate transaction ID
    const txId = "TXN" + Date.now().toString().slice(-8);
    setTransactionId(txId);
    setStep(4);
    setIsProcessing(false);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Investment Summary</CardTitle>
              <CardDescription>
                Review your investment details before proceeding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Startup Info */}
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{investmentData.startup.name}</h3>
                  <p className="text-slate-600 text-sm">{investmentData.startup.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {investmentData.startup.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {investmentData.startup.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {investmentData.startup.investors} investors
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Progress */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Funding Progress</span>
                  <span className="font-medium">{Math.round(fundingProgress)}%</span>
                </div>
                <Progress value={fundingProgress} className="h-2" />
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Raised: {formatCurrency(investmentData.startup.raisedAmount)}</span>
                  <span>Target: {formatCurrency(investmentData.startup.targetAmount)}</span>
                </div>
              </div>

              {/* Investment Details */}
              <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                <h4 className="font-medium text-blue-900">Your Investment</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-blue-700">Investment Amount</span>
                    <div className="font-semibold text-blue-900">
                      {formatCurrency(investmentData.investment.amount)}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-blue-700">Equity Stake</span>
                    <div className="font-semibold text-blue-900">
                      {investmentData.investment.equity.toFixed(4)}%
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-blue-700">Number of Shares</span>
                    <div className="font-semibold text-blue-900">
                      {investmentData.investment.shares.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-blue-700">Platform Fee</span>
                    <div className="font-semibold text-blue-900">
                      {formatCurrency(platformFee)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee Breakdown */}
              <div className="bg-amber-50 p-4 rounded-lg space-y-3">
                <h4 className="font-medium text-amber-900">Fee Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-700">Platform Commission</span>
                    <span className="font-medium text-amber-900">
                      {formatCurrency(platformFee)} ({((platformFee / investmentData.investment.amount) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Payment Processing</span>
                    <span className="font-medium text-amber-900">
                      {formatCurrency(processingFee)} ({((processingFee / investmentData.investment.amount) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">GST (18%)</span>
                    <span className="font-medium text-amber-900">
                      {formatCurrency(gst)}
                    </span>
                  </div>
                  <div className="border-t border-amber-200 pt-2 flex justify-between font-semibold">
                    <span className="text-amber-900">Total Fees</span>
                    <span className="text-amber-900">
                      {formatCurrency(platformFee + processingFee + gst)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Risk Disclosure */}
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Investment Risk Warning:</strong> Startup investments are highly risky and illiquid. 
                  You could lose your entire investment. Please invest only what you can afford to lose.
                </AlertDescription>
              </Alert>

              <Button 
                className="w-full" 
                size="lg"
                onClick={() => setStep(2)}
              >
                Continue to Payment <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Choose Payment Method</CardTitle>
              <CardDescription>
                Select your preferred payment method
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedPaymentMethod === method.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                  >
                    <div className="flex items-center gap-3">
                      <method.icon className="h-6 w-6 text-slate-600" />
                      <div className="flex-1">
                        <h4 className="font-medium">{method.name}</h4>
                        <p className="text-sm text-slate-600">{method.description}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedPaymentMethod === method.id
                          ? "border-blue-500 bg-blue-500"
                          : "border-slate-300"
                      }`}>
                        {selectedPaymentMethod === method.id && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Payment Form */}
              {selectedPaymentMethod === "upi" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="upi">UPI ID</Label>
                    <Input
                      id="upi"
                      placeholder="your@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {selectedPaymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button 
                  className="flex-1"
                  onClick={() => setStep(3)}
                  disabled={
                    (selectedPaymentMethod === "upi" && !upiId) ||
                    (selectedPaymentMethod === "card" && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name))
                  }
                >
                  Continue <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Confirm Investment</CardTitle>
              <CardDescription>
                Please review and confirm your investment details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Payment Summary */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Investment Amount</span>
                  <span className="font-semibold">{formatCurrency(investmentData.investment.amount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Platform Commission</span>
                  <span className="font-semibold">{formatCurrency(platformFee)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Payment Processing Fee</span>
                  <span className="font-semibold">{formatCurrency(processingFee)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">GST (18%)</span>
                  <span className="font-semibold">{formatCurrency(gst)}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold">Total Amount</span>
                  <span className="font-bold text-blue-600">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Payment Method</h4>
                <div className="flex items-center gap-2">
                  {selectedPaymentMethod === "upi" && <Smartphone className="h-5 w-5" />}
                  {selectedPaymentMethod === "card" && <CreditCard className="h-5 w-5" />}
                  {selectedPaymentMethod === "netbanking" && <Banknote className="h-5 w-5" />}
                  {selectedPaymentMethod === "wallet" && <Smartphone className="h-5 w-5" />}
                  <span className="font-medium">
                    {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}
                  </span>
                </div>
                {selectedPaymentMethod === "upi" && (
                  <p className="text-sm text-slate-600 mt-1">UPI ID: {upiId}</p>
                )}
              </div>

              {/* Compliance Notice */}
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>SEBI Compliance:</strong> Your investment will be held in an escrow account until the funding round is complete. 
                  This ensures compliance with SEBI regulations for equity crowdfunding.
                </AlertDescription>
              </Alert>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setStep(2)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button 
                  className="flex-1"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay ${formatCurrency(totalAmount)}`
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Investment Successful!
              </CardTitle>
              <CardDescription>
                Your investment has been processed successfully
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Success Message */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900">Thank You!</h3>
                  <p className="text-slate-600">Your investment in {investmentData.startup.name} has been confirmed.</p>
                </div>
              </div>

              {/* Transaction Details */}
              <div className="bg-green-50 p-4 rounded-lg space-y-3">
                <h4 className="font-medium text-green-900">Transaction Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-green-700">Transaction ID</span>
                    <div className="font-mono font-medium text-green-900 flex items-center gap-2">
                      {transactionId}
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <span className="text-green-700">Date & Time</span>
                    <div className="font-medium text-green-900">
                      {new Date().toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <span className="text-green-700">Amount</span>
                    <div className="font-medium text-green-900">
                      {formatCurrency(investmentData.investment.amount)}
                    </div>
                  </div>
                  <div>
                    <span className="text-green-700">Status</span>
                    <div className="font-medium text-green-900">Success</div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="space-y-3">
                <h4 className="font-medium">What's Next?</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You'll receive a confirmation email shortly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Your investment will be held in escrow until the funding round closes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You'll receive regular updates on the startup's progress</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Your investment will appear in your portfolio within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
                <Button variant="outline" className="w-full" onClick={() => window.location.href = "/dashboard"}>
                  View Portfolio
                </Button>
                <Button variant="ghost" className="w-full" onClick={() => window.location.href = "/startups"}>
                  Browse More Startups
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-slate-900">Invest in {investmentData.startup.name}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: "Summary" },
              { step: 2, label: "Payment" },
              { step: 3, label: "Confirm" },
              { step: 4, label: "Success" }
            ].map((item) => (
              <div key={item.step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= item.step
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-600"
                }`}>
                  {step > item.step ? <CheckCircle className="h-4 w-4" /> : item.step}
                </div>
                <span className={`ml-2 text-sm ${
                  step >= item.step ? "text-blue-600 font-medium" : "text-slate-600"
                }`}>
                  {item.label}
                </span>
                {item.step < 4 && (
                  <div className={`w-16 h-1 mx-4 ${
                    step > item.step ? "bg-blue-600" : "bg-slate-200"
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderStepContent()}
      </div>
    </div>
  );
}
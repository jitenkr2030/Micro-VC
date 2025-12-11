"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone,
  Building,
  ArrowRight,
  Chrome,
  Github,
  Twitter,
  AlertCircle,
  CheckCircle,
  Shield
} from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToRisk: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const passwordStrength = (password: string) => {
    if (password.length < 6) return { strength: 0, text: "Too weak", color: "text-red-500" };
    if (password.length < 8) return { strength: 1, text: "Weak", color: "text-orange-500" };
    if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      return { strength: 3, text: "Strong", color: "text-green-500" };
    }
    return { strength: 2, text: "Medium", color: "text-yellow-500" };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (!formData.agreeToTerms || !formData.agreeToRisk) {
      setError("Please accept all terms and conditions");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess("Account created successfully! Please check your email for verification.");
      // In a real app, you would redirect to login or dashboard
    } catch (err) {
      setError("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    setIsLoading(true);
    // Simulate social signup
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/";
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const strength = passwordStrength(formData.password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
          <p className="text-slate-600 mt-2">Join Micro-VC and start investing in startups</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create your account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-4 border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700">{success}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          strength.strength === 0 ? 'bg-red-500 w-1/4' :
                          strength.strength === 1 ? 'bg-orange-500 w-2/4' :
                          strength.strength === 2 ? 'bg-yellow-500 w-3/4' :
                          'bg-green-500 w-full'
                        }`}
                      ></div>
                    </div>
                    <span className={strength.color}>{strength.text}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="risk"
                    checked={formData.agreeToRisk}
                    onCheckedChange={(checked) => handleInputChange("agreeToRisk", checked as boolean)}
                  />
                  <Label htmlFor="risk" className="text-sm leading-relaxed">
                    I understand that startup investments carry risks and I have read the{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800">Risk Disclosure</a>
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || !formData.agreeToTerms || !formData.agreeToRisk}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="my-4" />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-slate-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                <Button
                  variant="outline"
                  onClick={() => handleSocialSignup("google")}
                  disabled={isLoading}
                  className="w-full"
                >
                  <Chrome className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleSocialSignup("github")}
                  disabled={isLoading}
                  className="w-full"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleSocialSignup("twitter")}
                  disabled={isLoading}
                  className="w-full"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Already have an account?{" "}
                <a
                  href="/auth/login"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign in
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900">SEBI Compliant</h3>
              <p className="text-sm text-blue-700 mt-1">
                Micro-VC is registered with SEBI and follows all regulatory requirements for equity crowdfunding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
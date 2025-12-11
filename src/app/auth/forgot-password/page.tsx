"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Mail, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  Lock,
  Shield
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Lock className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Reset Password</h1>
          <p className="text-slate-600 mt-2">
            {success 
              ? "Check your email for reset instructions" 
              : "Enter your email to receive password reset instructions"
            }
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {success ? "Email Sent!" : "Forgot Password?"}
            </CardTitle>
            <CardDescription>
              {success 
                ? "We've sent password reset instructions to your email address."
                : "No worries! Enter your email and we'll send you reset instructions."
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700">
                    We've sent a password reset link to:
                  </p>
                  <p className="font-medium text-blue-600">{email}</p>
                </div>
                <div className="text-sm text-slate-600">
                  <p>Please check your inbox and spam folder.</p>
                  <p>The link will expire in 24 hours.</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSuccess(false);
                    setEmail("");
                  }}
                >
                  Resend Email
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || !email}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Instructions <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-slate-500">Remember your password?</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <a
                  href="/auth/login"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900">Security Tips</h3>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• Use a strong, unique password</li>
                <li>• Never share your password with anyone</li>
                <li>• Enable two-factor authentication when available</li>
                <li>• Update your password regularly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
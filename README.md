# 🚀 Micro-VC - Democratizing Venture Capital

Micro-VC is a revolutionary platform that allows everyday people to invest in early-stage startups starting from just ₹100. We're democratizing access to venture capital investments that were previously only available to wealthy individuals and institutions.

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages & Features](#pages--features)
- [SEBI Compliance](#sebi-compliance)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Micro-VC is built on the principle that great ideas deserve support from everyone, not just wealthy investors. Our platform enables:

- **For Investors**: Invest in promising startups from as little as ₹100
- **For Startups**: Access capital from thousands of micro-investors and build a community
- **For Ecosystem**: Democratize innovation and create inclusive economic growth

### 🌟 Vision

To make venture capital investing accessible to every Indian, fostering innovation and entrepreneurship at scale.

### 🎯 Mission

- Democratize access to startup investments
- Provide startups with alternative funding sources
- Build a community of informed investors
- Maintain the highest standards of compliance and transparency

## ✨ Key Features

### For Investors

- **Micro-Investments**: Start investing from just ₹100
- **Fractional Ownership**: Own small pieces of multiple startups
- **Diversified Portfolio**: Spread risk across various sectors and stages
- **SEBI Compliance**: Fully regulated and investor-protected platform
- **Expert Vetting**: All startups undergo rigorous due diligence
- **Real-time Tracking**: Monitor investments and performance through dashboard
- **Multiple Payment Options**: UPI, Cards, Net Banking, Digital Wallets

### For Startups

- **Easy Submission**: Simple 5-step application process
- **Quick Verification**: 5-7 day vetting process
- **Community Building**: Access to thousands of potential brand ambassadors
- **Marketing Support**: Platform promotion and visibility
- **Investor Relations**: Tools for managing investor communications
- **Compliance Support**: Legal and regulatory guidance

### Platform Features

- **Intuitive Interface**: Clean, modern, user-friendly design
- **Mobile Responsive**: Works seamlessly on all devices
- **Advanced Filtering**: Find startups by category, stage, location, investment range
- **Real-time Updates**: Live funding progress and notifications
- **Secure Transactions**: Bank-grade security and encryption
- **Comprehensive Analytics**: Detailed insights and reporting

## 🛠 Technology Stack

### Core Framework
- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React

### State Management & Data
- **Client State**: Zustand
- **Server State**: TanStack Query
- **Database**: Prisma ORM with SQLite
- **Caching**: Local memory caching

### Authentication & Security
- **Authentication**: NextAuth.js v4
- **Authorization**: Role-based access control
- **Security**: JWT tokens, encryption, secure headers
- **Compliance**: SEBI-regulated escrow accounts

### Development Tools
- **Package Manager**: npm
- **Code Quality**: ESLint, Prettier
- **Type Checking**: TypeScript strict mode
- **Build Tool**: Next.js built-in bundler

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Landing page
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   └── forgot-password/
│   ├── startups/                 # Startup-related pages
│   │   ├── page.tsx             # Browse startups
│   │   └── [id]/                # Individual startup details
│   ├── invest/                   # Investment processing
│   ├── dashboard/               # User dashboard
│   ├── profile/                 # User profile management
│   ├── submit-startup/          # Startup submission
│   ├── compliance/              # Compliance & legal
│   ├── how-to-invest/           # Investment guide
│   ├── faq/                     # Frequently asked questions
│   ├── fundraising-guide/       # Fundraising guide
│   ├── success-stories/        # Success stories
│   ├── footer/                  # Footer page
│   └── api/                     # API routes
├── components/                   # Reusable UI components
│   └── ui/                      # shadcn/ui components
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions and configurations
└── styles/                      # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Basic knowledge of React and TypeScript

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd micro-vc-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure your environment variables:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   DATABASE_URL="file:./dev.db"
   ```

4. **Run database migrations**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema

## 📄 Pages & Features

### Landing Page (`/`)
- Hero section with value proposition
- How it works explanation
- Featured startups showcase
- Benefits for investors and startups
- Call-to-action buttons

### Authentication (`/auth/*`)
- **Login**: Email/password + social login
- **Signup**: Complete registration with KYC
- **Forgot Password**: Password reset flow

### Startup Browsing (`/startups`)
- Advanced filtering (category, stage, location, investment range)
- Search functionality
- Sorting options
- Responsive grid layout
- Real-time filtering

### Startup Details (`/startups/[id]`)
- Comprehensive startup information
- Team member profiles
- Business model and market analysis
- Financial projections and traction
- Investment options with multiple amounts
- Risk disclosures and compliance info
- Document access and FAQ

### Investment Process (`/invest`)
- Multi-step investment flow (4 steps)
- Multiple payment methods (UPI, Card, Net Banking, Wallet)
- Investment summary and confirmation
- SEBI-compliant escrow integration
- Transaction processing with success confirmation

### User Dashboard (`/dashboard`)
- Portfolio overview with total value and returns
- Individual investment tracking with performance metrics
- Watchlist management
- Analytics and insights (sector allocation, risk analysis)
- Performance metrics (returns, Sharpe ratio, beta)
- Recent activity feed

### Profile Management (`/profile`)
- Personal information editing
- Investment preferences and risk tolerance
- Security settings (password, 2FA)
- Notification preferences
- KYC status verification
- Investment summary

### Startup Submission (`/submit-startup`)
- 5-step comprehensive submission form
- Basic information, funding details, business model
- Team member management
- Document upload system
- Compliance agreements
- Review and confirmation process

### Compliance & Legal (`/compliance`)
- SEBI registration status and compliance framework
- Comprehensive risk disclosure statements
- Investor protection measures
- Investment limits and regulations
- Legal documents and policies
- Regulatory filings and transparency

### Investment Guide (`/how-to-invest`)
- Step-by-step investment guide
- Investment strategies and approaches
- Risk management best practices
- Research and due diligence guidance
- Success metrics and examples

### FAQ (`/faq`)
- Comprehensive FAQ with search and filtering
- Categorized questions (Getting Started, Investment Process, Returns & Exit, Risks & Safety, Legal & Compliance)
- Interactive accordion interface
- Contact support options

### Fundraising Guide (`/fundraising-guide`)
- Complete guide to raising funds
- Preparation phase requirements
- Platform eligibility criteria
- Campaign strategy and best practices
- Success stories and examples

### Success Stories (`/success-stories`)
- Featured startup success stories
- Detailed case studies with metrics
- Growth timelines and achievements
- Impact statistics
- Call-to-action for new startups

### Footer Page (`/footer`)
- Comprehensive footer with all links
- Contact form
- Company information
- Quick links and resources
- Social media links

## ⚖️ SEBI Compliance

Micro-VC is fully compliant with SEBI regulations:

### Registration Details
- **SEBI Registration**: INZ000000032
- **Category**: Equity Crowdfunding Platform
- **Valid Until**: December 2025

### Key Compliance Features

#### Investor Protection
- **Escrow Accounts**: All investments held in SEBI-regulated escrow
- **Investment Limits**: 
  - ₹50,000 per startup
  - ₹2,00,000 annual limit
  - ₹10,00,000 lifetime limit
- **Risk Disclosure**: Comprehensive risk disclosure statements
- **KYC/AML**: Strict identity verification processes

#### Startup Vetting
- **Due Diligence**: Rigorous 5-7 day vetting process
- **Documentation**: Complete legal and financial verification
- **Background Checks**: Founder and company background verification
- **Business Model Validation**: Thorough business model assessment

#### Operational Compliance
- **Regular Reporting**: Monthly and quarterly reports to SEBI
- **Audit Compliance**: Independent audits and certifications
- **Transparency**: Full disclosure of all fees and processes
- **Dispute Resolution**: Clear processes for handling disputes

### Legal Framework
- **SEBI (AIF) Regulations, 2012**
- **SEBI (Crowdfunding) Regulations, 2021**
- **Companies Act, 2013**
- **Income Tax Act, 1961**

## 🤝 Contributing

We welcome contributions to make Micro-VC better! Please follow these guidelines:

### Development Guidelines
1. Follow the existing code style and patterns
2. Use TypeScript for type safety
3. Write clean, documented code
4. Test your changes thoroughly
5. Update documentation as needed

### Pull Request Process
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request with a clear description
6. Wait for review and approval

### Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Focus on technical merit
- Follow open source best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **SEBI** for regulatory framework and guidance
- **Startup Community** for trust and participation
- **Investor Community** for believing in the vision
- **Open Source Community** for the tools and technologies

## 📞 Contact

For any questions, suggestions, or support:
- **Email**: support@micro-vc.com
- **Phone**: +91 8080 808080
- **Website**: [www.micro-vc.com](https://www.micro-vc.com)
- **Support Hours**: Monday to Friday, 9 AM - 6 PM IST

---

**Micro-VC - Democratizing Venture Capital, One Investment at a Time** 🚀
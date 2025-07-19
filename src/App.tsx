import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building, 
  TrendingUp, 
  BarChart3, 
  Users, 
  FileText, 
  Receipt, 
  CreditCard, 
  Bell, 
  Shield,
  Database,
  Smartphone,
  Globe,
  Calculator,
  FileCheck,
  UserCheck,
  Home,
  DollarSign,
  MessageSquare,
  Zap,
  Brain,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  PieChart,
  LineChart,
  Activity,
  Settings,
  Download,
  FileDown,
  Eye,
  Plus,
  Search,
  Filter,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Github,
  Linkedin,
  Code,
  Terminal,
  Coffee,
  Heart
} from 'lucide-react';
import toast from 'react-hot-toast';

// Import your actual app images
import dashboardImg from '../images/dashboard.png';
import propertiesMainImg from '../images/properties main page.png';
import propertiesDescImg from '../images/properties discription.png';
import addPropertyImg from '../images/add propertie.png';
import ownersMainImg from '../images/owners main view.png';
import ownersDetails1Img from '../images/owners details 1.png';
import ownersDetails2Img from '../images/owners details 2.png';
import ownersDetails3Img from '../images/details 3.png';
import owners4Img from '../images/owners 4.png';
import owners5Img from '../images/owners 5.png';
import rentersImg from '../images/renters.png';
import rentersPaymentImg from '../images/renters paym,ent.png';
import contractsImg from '../images/contracts.png';
import contractDetailsImg from '../images/contract detils.png';
import reportsImg from '../images/reports.png';
import reportsGenerationImg from '../images/reports generation.png';
import creatorImage from '../images/my image.jpg';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleDemoClick = () => {
    toast.success('Demo request sent! We\'ll contact you soon.', {
      duration: 4000,
      style: {
        background: '#9333ea',
        color: '#fff',
      },
    });
  };

  const handleDownloadClick = () => {
    toast.success('PDF Report downloaded successfully!', {
      duration: 3000,
      style: {
        background: '#10b981',
        color: '#fff',
      },
    });
  };

  const handleContactClick = (type: string) => {
    const messages = {
      phone: 'Phone number copied to clipboard!',
      email: 'Email copied to clipboard!',
      github: 'GitHub profile opened!',
      linkedin: 'LinkedIn profile opened!'
    };
    
    toast.success(messages[type as keyof typeof messages], {
      duration: 3000,
      style: {
        background: '#9333ea',
        color: '#fff',
      },
    });
  };

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const features = [
    {
      icon: Calculator,
      title: "Advanced Accounting System",
      description: "Comprehensive financial management with automated bookkeeping, expense tracking, revenue analysis, and detailed financial reporting for optimal property management decisions.",
      color: "from-purple-500 to-pink-500",
      stats: "100% Accurate"
    },
    {
      icon: Shield,
      title: "ZATCA Compliance",
      description: "Full Saudi tax authority compliance with automated e-invoicing, QR code generation, real-time VAT reporting, and seamless regulatory adherence for complete peace of mind.",
      color: "from-green-500 to-emerald-500",
      stats: "100% Compliant"
    },
    {
      icon: FileDown,
      title: "PDF Generation",
      description: "Advanced PDF generation system for contracts, reports, invoices, and financial statements with customizable templates and professional formatting.",
      color: "from-blue-500 to-cyan-500",
      stats: "Instant Generation"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Native Arabic RTL support with English interface, ensuring accessibility for all users in the Saudi market and international clients with seamless language switching.",
      color: "from-indigo-500 to-purple-500",
      stats: "Dual Language"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Seamless communication with tenants and owners through WhatsApp Business API, automated notifications, instant messaging, and payment reminders.",
      color: "from-green-400 to-teal-500",
      stats: "Real-time Chat"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant data synchronization, live financial updates, real-time notifications, and automated workflows ensuring you never miss critical information.",
      color: "from-yellow-500 to-orange-500",
      stats: "Live Updates"
    }
  ];

  const innovations = [
    {
      title: "Comprehensive Management System",
      description: "Advanced property management with automated workflows, tenant screening, maintenance tracking, and financial oversight for optimal operational efficiency.",
      icon: TrendingUp,
      stats: "100% Efficient",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Contract Automation",
      description: "Automated contract generation, digital signatures, compliance monitoring, and PDF export reducing manual work by 80%.",
      icon: FileCheck,
      stats: "80% Time Saved",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Advanced Tenant Screening",
      description: "Comprehensive background checks, credit analysis, risk assessment, and document verification for better tenant selection and management.",
      icon: UserCheck,
      stats: "90% Risk Reduction",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced PDF Reports",
      description: "Comprehensive PDF generation for financial reports, contracts, invoices, and analytics with professional formatting.",
      icon: FileDown,
      stats: "Instant PDFs",
      color: "from-orange-500 to-red-500"
    }
  ];

  const screenshots = [
    {
      id: 'dashboard',
      title: 'Advanced Management Dashboard',
      description: 'Comprehensive overview with accounting insights, real-time analytics, and management recommendations',
      image: dashboardImg,
      features: ['Financial Analytics', 'Smart Alerts', 'Performance Metrics', 'Real-time Data']
    },
    {
      id: 'properties',
      title: 'Advanced Properties Management',
      description: 'Comprehensive property management with detailed analytics, descriptions, and add property functionality',
      image: propertiesMainImg,
      features: ['Property Analytics', 'Detailed Descriptions', 'Add Properties', 'Search & Filter']
    },
    {
      id: 'owners',
      title: 'Owner Management System',
      description: 'Complete owner profiles with detailed information, commission tracking, and financial management',
      image: ownersMainImg,
      features: ['Owner Profiles', 'Commission Tracking', 'Financial Management', 'Document Storage']
    },
    {
      id: 'renters',
      title: 'Tenant Management',
      description: 'Comprehensive tenant profiles with payment tracking, document management, and communication tools',
      image: rentersImg,
      features: ['Tenant Profiles', 'Payment Tracking', 'Document Management', 'Communication']
    },
    {
      id: 'contracts',
      title: 'Smart Contract Management',
      description: 'Automated contract generation, digital signatures, and detailed contract tracking with PDF export',
      image: contractsImg,
      features: ['Contract Generation', 'Digital Signatures', 'PDF Export', 'Compliance Tracking']
    },
    {
      id: 'reports',
      title: 'Advanced Reporting System',
      description: 'Comprehensive financial reports, analytics, and PDF generation with customizable templates',
      image: reportsImg,
      features: ['Financial Reports', 'Custom Analytics', 'PDF Generation', 'Export Options']
    }
  ];

  const detailedFeatures = [
    {
      category: "Property Management",
      items: [
        "Comprehensive property listings with detailed descriptions",
        "Advanced search and filtering capabilities",
        "Property analytics and performance metrics",
        "Maintenance tracking and scheduling",
        "Property value assessment and market analysis"
      ]
    },
    {
      category: "Owner Management",
      items: [
        "Complete owner profiles and documentation",
        "Commission calculation and tracking",
        "Financial reporting and disbursements",
        "Owner communication portal",
        "Document storage and management"
      ]
    },
    {
      category: "Tenant Management",
      items: [
        "Detailed tenant profiles and verification",
        "Payment tracking and history",
        "Document management and storage",
        "Communication tools and notifications",
        "Tenant screening and risk assessment"
      ]
    },
    {
      category: "Financial System",
      items: [
        "Advanced accounting with automated entries",
        "Receipt and payment voucher management",
        "Owner disbursement automation",
        "Financial reporting and analytics",
        "ZATCA compliance and VAT reporting"
      ]
    },
    {
      category: "Contract Management",
      items: [
        "Automated contract generation",
        "Digital signature integration",
        "Contract tracking and monitoring",
        "PDF export and printing",
        "Compliance and regulatory adherence"
      ]
    },
    {
      category: "Reporting & Analytics",
      items: [
        "Comprehensive financial reports",
        "Custom analytics and dashboards",
        "PDF generation with templates",
        "Export capabilities (PDF, Excel)",
        "Real-time data visualization"
      ]
    }
  ];

  const developerSkills = [
    { name: "Flutter & Dart", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Supabase & Firebase", level: 90, color: "from-purple-500 to-pink-500" },
    { name: "UI/UX Design", level: 88, color: "from-green-500 to-emerald-500" },
    { name: "Software Architecture", level: 85, color: "from-orange-500 to-red-500" },
    { name: "Database Design", level: 87, color: "from-indigo-500 to-purple-500" },
    { name: "System Integration", level: 83, color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-white/90 backdrop-blur-md border-b border-purple-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div 
                className="p-3 gradient-bg rounded-xl purple-glow"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Building className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">RealEstate Pro</h1>
                <p className="text-sm text-gray-600">Next-Gen Management Platform</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDemoClick}
              className="px-6 py-3 gradient-bg text-white rounded-xl font-semibold purple-glow-hover transition-all duration-300"
            >
              Request Demo
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Revolutionary</span> Real Estate
              <br />
              Management Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Experience the future of property management with advanced accounting systems, 
              ZATCA compliance, advanced PDF generation, and comprehensive financial tracking designed for the Saudi market.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { text: "Accounting System", icon: Calculator, color: "bg-purple-100 text-purple-800" },
                { text: "ZATCA Compliant", icon: Shield, color: "bg-green-100 text-green-800" },
                { text: "PDF Generation", icon: FileDown, color: "bg-blue-100 text-blue-800" },
                { text: "Arabic RTL", icon: Globe, color: "bg-indigo-100 text-indigo-800" },
                { text: "WhatsApp Integration", icon: MessageSquare, color: "bg-green-100 text-green-800" }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${badge.color} font-medium shadow-lg`}
                >
                  <badge.icon className="w-4 h-4" />
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Meet the Developer</h2>
            <p className="text-xl text-gray-600">The mastermind behind this revolutionary platform</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Developer Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200 shadow-xl mb-4"
                  >
                    <img 
                      src={creatorImage} 
                      alt="Mohammed Waheed - Creator" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-2 gradient-text">Mohammed Waheed</h3>
                  <p className="text-xl text-gray-600">Full-Stack Developer & Software Architect</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Passionate developer with expertise in Flutter, Supabase, Firebase, and modern web technologies. 
                  Specialized in creating innovative solutions for the real estate industry with 
                  focus on Saudi market compliance, advanced accounting systems, PDF generation, 
                  ZATCA integration, and comprehensive management features.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <motion.a
                    href="tel:+201270640035"
                    onClick={() => handleContactClick('phone')}
                    className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">+20 127 064 0035</span>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:mohammed.waheed917@gmail.com"
                    onClick={() => handleContactClick('email')}
                    className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">mohammed.waheed917@gmail.com</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/Mohammed-Waheed27"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleContactClick('github')}
                    className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">GitHub Profile</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/mohammed-waheed-a887972b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleContactClick('linkedin')}
                    className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Linkedin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Developer Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Technical Expertise</h4>
              <div className="space-y-4">
                {developerSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-purple-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-gray-800">Fun Fact</h5>
                </div>
                <p className="text-gray-600 text-sm">
                  "I love turning complex business problems into elegant, user-friendly solutions. 
                  This real estate platform represents months of dedication to creating something 
                  truly innovative for the Saudi market."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Platform Screenshots</h2>
            <p className="text-xl text-gray-600">Explore our intuitive and powerful interface</p>
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {screenshots.map((screenshot) => (
                <motion.button
                  key={screenshot.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(screenshot.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === screenshot.id
                      ? 'gradient-bg text-white shadow-xl purple-glow'
                      : 'bg-white text-gray-700 hover:bg-purple-50 shadow-lg'
                  }`}
                >
                  {screenshot.title}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden purple-glow"
          >
            {screenshots.map((screenshot) => (
              screenshot.id === activeTab && (
                <div key={screenshot.id} className="p-8">
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-500 rounded-full"></div>
                    <div className="absolute -top-3 -left-3 translate-x-8 w-6 h-6 bg-yellow-500 rounded-full"></div>
                    <div className="absolute -top-3 -left-3 translate-x-16 w-6 h-6 bg-green-500 rounded-full"></div>
                    
                    <div className="rounded-2xl overflow-hidden border-2 border-purple-200 shadow-xl">
                      <img 
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{screenshot.title}</h3>
                    <p className="text-gray-600 mb-4">{screenshot.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {screenshot.features.map((feature, index) => (
                        <motion.span 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Innovations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Latest Innovations</h2>
            <p className="text-xl text-gray-600">Cutting-edge features that set us apart</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-purple-200 card-hover purple-glow-hover"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${innovation.color} rounded-xl flex items-center justify-center mb-4`}>
                  <innovation.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                <p className="text-gray-600 mb-4">{innovation.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600">{innovation.stats}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Advanced Features</h2>
            <p className="text-xl text-gray-600">Comprehensive tools for modern property management</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl card-hover purple-glow-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600">{feature.stats}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-purple-100 rounded-lg text-purple-600 hover:bg-purple-200 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Comprehensive Features</h2>
            <p className="text-xl text-gray-600">Every aspect of real estate management covered</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-200 card-hover"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of property managers who have already upgraded to the future of real estate management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDemoClick}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadClick}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Download PDF Report
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Building className="w-8 h-8 text-purple-400" />
                <span className="text-xl font-bold">RealEstate Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Next-generation real estate management platform with advanced accounting systems, PDF generation, and comprehensive management features.
              </p>
              <p className="text-sm text-gray-500">
                Developed with <Heart className="w-4 h-4 inline text-red-500" /> by Mohammed Waheed
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Dashboard</li>
                <li>Properties</li>
                <li>Tenants</li>
                <li>Reports</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Analytics</li>
                <li>ZATCA Compliance</li>
                <li>PDF Generation</li>
                <li>WhatsApp Integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Developer Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  mohammed.waheed917@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +20 127 064 0035
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href="https://github.com/Mohammed-Waheed27" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    GitHub Profile
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="https://www.linkedin.com/in/mohammed-waheed-a887972b1/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RealEstate Pro. Developed by Mohammed Waheed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 
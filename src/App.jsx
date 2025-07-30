import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Eye, Target, Upload, Send, Mail, MessageCircle } from 'lucide-react'
import heroImage from './assets/hero-image.jpg'
import expandityLogo from './assets/expandity-logo.png'
import service1 from './assets/service-1-software.png'
import service2 from './assets/service-2-marketing.png'
import service3 from './assets/service-3-consulting.png'
import service4 from './assets/service-4-integration.png'
import service5 from './assets/service-5-branding.png'
import service6 from './assets/service-6-management.png'
import AspNetLogo from './assets/aspnet.png'
import ReactLogo from './assets/react.png'
import MongoDBLogo from './assets/mongodb.png'
import NextJSLogo from './assets/nextjs.png'
import VueLogo from './assets/vuejs-logo.png'
import LaravelLogo from './assets/laravel-logo.png'
import GCloudLogo from './assets/google-cloud-logo.png'
import AWSLogo from './assets/aws-logo.png'
import Python from './assets/python-logo.png'
import WordPressLogo from './assets/wordpress-logo.png'
import NodeJSLogo from './assets/nodejs-logo.png'
import AngularLogo from './assets/angular-logo.png'
import JavaLogo from './assets/java-logo.png'
import FlutterLogo from './assets/flutter-logo.png'
import KotlinLogo from './assets/kotlin-logo.png'
import Portfolio1 from './assets/Portfolio1.png'
import Portfolio2 from './assets/Portfolio2.png'
import Portfolio3 from './assets/Portfolio3.png'
import Portfolio4 from './assets/Portfolio4.png'
import Portfolio5 from './assets/Portfolio5.png'
import Portfolio6 from './assets/Portfolio6.png'
import Portfolio7 from './assets/Portfolio7.png'
import Portfolio8 from './assets/Portfolio8.png'
import Portfolio9 from './assets/Portfolio9.png'
import Portfolio10 from './assets/Portfolio10.png'
import Portfolio11 from './assets/Portfolio11.png'
import BiodermaLogo from './assets/Sliding Logos/bioderma-logo-png_seeklogo-19622.png';
import GucLogo from './assets/Sliding Logos/cropped-logo_guc-1.webp';
import Contentia from './assets/Sliding Logos/AppStore_Icon.png';
import NuxeLogo from './assets/Sliding Logos/nuxe-urunleri-445840_1200x1200.webp';
import VelavitLogo from './assets/Sliding Logos/Velavit_logooo.svg';
import TopluyoruzLogo from './assets/Sliding Logos/Topluyoruz Logo.png';
import NaosLogo from './assets/Sliding Logos/naos_iadeal.jpg';
import MsiLogo from './assets/Sliding Logos/png-transparent-msi-logo-horizontal.png';
import Uzmanlio from './assets/Sliding Logos/10.png';
import HouseOfSuperstep from './assets/Sliding Logos/8e93a2a2-44d0-4483-84b0-95bcc9676d26.png';
import Midsole from './assets/Sliding Logos/Yeni-Proje-1.png';
import Manacoaching from './assets/Sliding Logos/logo.png';
import ESTR from './assets/Sliding Logos/images.png';
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [titleText, setTitleText] = useState('')
  const fullTitle = 'Build the Future Today.'
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('company', formData.company)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('message', formData.message)
      
      if (selectedFile) {
        formDataToSend.append('file', selectedFile)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage(result.message)
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        })
        setSelectedFile(null)
        // Reset file input
        const fileInput = document.getElementById('file-upload')
        if (fileInput) fileInput.value = ''
      } else {
        setSubmitMessage(result.error || 'An error occurred. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      title: "Software & Product Development",
      description: "We build scalable websites, mobile apps, and custom software tailored to your business needs. From frontend to backend, our full-stack team delivers reliable and future-ready digital products.",
      image: service1
    },
    {
      title: "Digital Marketing & Growth",
      description: "We craft data-driven digital marketing strategies to help you attract, convert, and retain customers. Our services include SEO, paid ads, content, and influencer campaigns.",
      image: service2
    },
    {
      title: "Business & Startup Consulting",
      description: "We support startups and growing businesses with strategic planning, budgeting, team setup, and market positioning. Let's turn your ideas into fundable, scalable ventures.",
      image: service3
    },
    {
      title: "API & System Integration",
      description: "Connect your tools and systems with seamless API integrations and automation. We bridge your platforms for better efficiency and data flow.",
      image: service4
    },
    {
      title: "Branding & Creative Strategy",
      description: "We craft unique brand identities, from logos to tone of voice, that reflect your business values and speak to your audience. Build a brand that's memorable and aligned.",
      image: service5
    },
    {
      title: "Project & Product Management",
      description: "We help you plan, prioritize, and launch with agile project management support. Get your digital product delivered on time, with clarity and confidence.",
      image: service6
    }
  ];

  const technologies = [
    { name: "ASP.NET", logo: AspNetLogo, category: "Backend" },
    { name: "React", logo: ReactLogo, category: "Frontend" },
    { name: "MongoDB", logo: MongoDBLogo, category: "Database" },
    { name: "Next.js", logo: NextJSLogo, category: "Frontend" },
    { name: "Vue.js", logo: VueLogo , category: "Frontend" },
    { name: "Laravel", logo: LaravelLogo, category: "Backend" },
    { name: "Google Cloud", logo: GCloudLogo, category: "Cloud" },
    { name: "AWS", logo: AWSLogo , category: "Cloud" },
    { name: "Python", logo: Python, category: "Backend" },
    { name: "WordPress", logo: WordPressLogo , category: "CMS" },
    { name: "Node.js", logo: NodeJSLogo, category: "Backend" },
    { name: "Angular", logo: AngularLogo, category: "Frontend" },
    { name: "Java", logo: JavaLogo, category: "Backend" },
    { name: "Flutter", logo: FlutterLogo, category: "Mobile" },
    { name: "Kotlin", logo: KotlinLogo, category: "Mobile" }
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Platform Development",
      description: "Modern, scalable e-commerce solution with advanced features and payment integration.",
      image: Portfolio1
    },
    {
      title: "Mobile Banking Application", 
      description: "Secure and user-friendly mobile banking app with biometric authentication.",
      image: Portfolio2
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient and doctor management.",
      image: Portfolio3
    },
    {
      title: "Real Estate Portal",
      description: "Advanced property listing and management platform with virtual tours.",
      image: Portfolio4
    },
    {
      title: "Educational Learning Platform",
      description: "Interactive online learning platform with video streaming and assessments.",
      image: Portfolio5
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant operations and ordering system with inventory management.",
      image: Portfolio6
    },
    {
      title: "Social Media Analytics Tool",
      description: "Advanced analytics dashboard for social media insights and reporting.",
      image: Portfolio7
    },
    {
      title: "Logistics Tracking System",
      description: "Real-time package tracking and delivery management with GPS integration.",
      image: Portfolio8
    },
    {
      title: "CRM & Sales Platform",
      description: "Customer relationship management with sales automation and lead tracking.",
      image: Portfolio9
    },
    {
      title: "IoT Dashboard Application",
      description: "Smart device monitoring and control dashboard with real-time data visualization.",
      image: Portfolio10
    },
    {
      title: "Fintech Payment Gateway",
      description: "Secure payment processing system with multi-currency support and fraud detection.",
      image: Portfolio11
    }
  ]

  // Portfolio slider state
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [portfolioItems.length])

  // Reference logos
  const referenceLogos = [
    { name: "Bioderma", logo: BiodermaLogo},
    { name: "GUC", logo: GucLogo},
    { name: "AppStore", logo: Contentia},
    { name: "Nuxe", logo: NuxeLogo},
    { name: "Velavit", logo: VelavitLogo},
    { name: "Topluyoruz", logo: TopluyoruzLogo},
    { name: "Naos", logo: NaosLogo},
    { name: "MSI", logo: MsiLogo},
    { name: "Uzmanlio", logo: Uzmanlio},
    { name: "HouseOfSuperstep", logo: HouseOfSuperstep},
    { name: "MidsoleMag", logo: Midsole },
    { name: "ManaCoaching", logo: Manacoaching},
    { name: "ESTR", logo: ESTR }
  ]

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      company: "Visionary Studio"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      company: "Evoke Creations"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      company: "Design Mosaic"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      company: "Canvas Edge"
    }
  ]

  const articles = [
    {
      title: "Crafting seamless and intuitive digital experiences.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/400/250?random=7"
    },
    {
      title: "Shaping a brand that stands out and resonates.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/400/250?random=8"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={expandityLogo} 
                alt="Expandity" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-[#FF7130] transition-colors">Homepage</a>
              <a href="#about" className="text-gray-300 hover:text-[#FF7130] transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-[#FF7130] transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-[#FF7130] transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-[#FF7130] transition-colors">Contact</a>
            </nav>

                 {/* Get Started Button */}
            <a href="#contact">
              <Button 
                className="bg-[#6366f1] hover:bg-[#5855eb] text-white px-6 py-2 rounded-lg transition-colors"
              >
                  Get Started
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-300 hover:text-[#FF7130] transition-colors">Homepage</a>
                <a href="#about" className="text-gray-300 hover:text-[#FF7130] transition-colors">About</a>
                <a href="#services" className="text-gray-300 hover:text-[#FF7130] transition-colors">Services</a>
                <a href="#portfolio" className="text-gray-300 hover:text-[#FF7130] transition-colors">Portfolio</a>
                <a href="#contact" className="text-gray-300 hover:text-[#FF7130] transition-colors">Contact</a>
                <a href="#contact">
                  <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white px-6 py-2 rounded-full w-fit">
                    Get Started
                  </Button>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gray-900 min-h-screen flex items-center relative overflow-hidden">
        {/* Background gradient circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/6 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-[#FF7130]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                <span className="text-white">{titleText}</span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                We architect cutting-edge digital solutions that transform businesses and accelerate growth through innovative technology.
              </p>
              <a href="#contact">
                <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white px-8 py-3 rounded-lg text-lg">
                  Get started
                </Button>
              </a>
            </div>

            {/* Hero Visual - Modern Dashboard/App Interface */}
            <div className="flex justify-center relative">
              <div className="relative">
                {/* Main Dashboard */}
                <div className="bg-gray-800 rounded-2xl p-6 w-96 h-64 border border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">
                      Marketing Dashboard
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm text-gray-300">Mobile design kick-off</div>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <div className="text-xs text-gray-400 mb-1">Heading</div>
                      <div className="text-sm text-white">This is a brief paragraph.</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-400">Heading / Nested</div>
                      <div className="text-xs text-gray-500">Brief element</div>
                    </div>
                  </div>
                </div>

                {/* Mobile Chat Interface */}
                <div className="absolute -right-8 top-8 bg-gray-800 rounded-2xl p-4 w-64 h-80 border border-gray-700 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">A</span>
                      </div>
                      <div className="text-sm text-white">Ashley</div>
                    </div>
                    <div className="text-xs text-gray-400">10:32</div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-gray-700 rounded-lg p-2">
                      <div className="text-xs text-gray-300">What time is the meeting?</div>
                    </div>
                    <div className="bg-blue-600 rounded-lg p-2 ml-8">
                      <div className="text-xs text-white">It's about 30 minutes!</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-2">
                      <div className="text-xs text-gray-300">Joe completed a task</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-gray-700 rounded-lg px-3 py-2 flex items-center">
                      <input 
                        type="text" 
                        placeholder="Send a message..." 
                        className="bg-transparent text-xs text-gray-300 flex-1 outline-none"
                      />
                      <button className="text-blue-500 text-xs">→</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              Creative Design with Refreshing Ideas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-[#6366f1] mr-3" />
                <h3 className="text-2xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-gray-300">
                To become the most trusted partner for businesses seeking seamless digital transformation — delivering end-to-end consulting solutions that connect strategy, design, technology, and growth.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[#6366f1] mr-3" />
                <h3 className="text-2xl font-bold text-white">Mission</h3>
              </div>
              <p className="text-gray-300">
                Our mission is to empower startups and businesses with 360° consulting services — combining software development, digital marketing, brand strategy, and business advisory under one roof. We build scalable digital products, craft impactful brands, and implement strategic growth plans that help our clients thrive in a competitive, digital-first world.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6366f1] mb-2">80+</div>
              <div className="text-gray-300">Complete Project</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6366f1] mb-2">8+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6366f1] mb-2">20+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:bg-gray-700 transition-all border border-gray-700 group">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Our Technology Stack</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[#FF7130] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7130]/20">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-white font-semibold text-sm mb-1">{tech.name}</h3>
                      <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
            <p className="text-gray-300">
              Explore our latest projects and digital solutions that have transformed businesses across various industries.
            </p>
          </div>

          {/* Auto-sliding Portfolio */}
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center space-x-6">
              {/* Display 3 projects at a time */}
              {[0, 1, 2].map((offset) => {
                const index = (currentSlide + offset) % portfolioItems.length
                const item = portfolioItems[index]
                const isCenter = offset === 1
                
                return (
                  <div
                    key={`${index}-${currentSlide}`}
                    className={`transition-all duration-1000 ease-in-out rounded-lg overflow-hidden group cursor-pointer hover:shadow-2xl ${
                      isCenter 
                        ? 'w-[400px] h-[800px] md:h-[800px] sm:h-[500px] transform scale-105 z-10' 
                        : 'w-[405px] h-[400px] md:h-[400px] sm:h-[250px] opacity-75'
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )
              })}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-[#6366f1]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">References</h2>
            <p className="text-gray-300">
              Trusted by leading brands and companies worldwide
            </p>
          </div>

          {/* Sliding Logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide space-x-12">
              {/* First set of logos */}
              {referenceLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg p-4 hover:shadow-lg transition-all">
                  <img 
                    src={logo.logo} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {referenceLogos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-lg p-4 hover:shadow-lg transition-all">
                  <img 
                    src={logo.logo} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              Let's Start Making Something Amazing Together.
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name Surname *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#6366f1] transition-colors resize-vertical"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-300 mb-2">
                  Attach File (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 cursor-pointer hover:border-[#6366f1] transition-colors"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    {selectedFile ? selectedFile.name : 'Choose file to upload'}
                  </label>
                </div>
                {selectedFile && (
                  <p className="text-sm text-gray-400 mt-2">
                    Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )}
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('error') || submitMessage.includes('Error') ? 'bg-red-900/20 border border-red-700 text-red-300' : 'bg-green-900/20 border border-green-700 text-green-300'}`}>
                  {submitMessage}
                </div>
              )}

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#6366f1] hover:bg-[#5855eb] text-white px-8 py-3 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Expandity Logo */}
            <div className="flex items-center">
              <img 
                src={expandityLogo} 
                alt="Expandity" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Company Information */}
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Uzmanlio Bilgi Teknolojileri Pazarlama ve Ticaret. A.Ş.
              </h3>
              <p className="text-gray-400">
                Maslak Mah. Beybi Giz Plaza No:1 Sarıyer / İstanbul
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#6366f1]" />
                <a 
                  href="mailto:info@uzmanlio.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@uzmanlio.com
                </a>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <a 
                  href="https://wa.me/908503091122" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +90 850 309 11 22
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="pt-6 border-t border-gray-800 w-full text-center">
              <p className="text-gray-400">
                COPYRIGHT © EXPANDITY 2025. ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


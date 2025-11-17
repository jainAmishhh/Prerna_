import React, { useState } from "react";
import {
  Phone,
  Mail,
  AlertTriangle,
  HelpCircle,
  Send,
  HeartHandshake,
  Shield,
  Globe,
  MessageCircle,
  Video,
  Mic,
  MapPin,
  Clock,
  Users,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  ShieldAlert,
  Heart,
  Sparkles,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const faqs = [
  {
    q: "How can I get immediate help in case of an emergency?",
    a: "Click the SOS button at the top right of any page, or call 1091 (Women Helpline) or 112 (Emergency Services) immediately. You can also ask Sakhi 'I need help' for instant emergency guidance with video instructions.",
    category: "Emergency"
  },
  {
    q: "Can I use Sakhi in Hindi?",
    a: "Yes! Sakhi fully supports both Hindi and English. You can speak or type in either language. Voice commands work seamlessly in both languages, and video responses are available in your preferred language.",
    category: "Features"
  },
  {
    q: "How does the voice-to-video feature work?",
    a: "Simply speak your question using the microphone button. Sakhi converts your voice to text, understands your query, and generates a personalized video response explaining the answer step-by-step. This makes it easier for everyone to understand, especially for complex topics.",
    category: "Features"
  },
  {
    q: "Can I report issues anonymously?",
    a: "Yes, absolutely. Your identity remains completely confidential when reporting harassment, violence, or any safety concerns. We never share your personal information without your explicit consent.",
    category: "Safety"
  },
  {
    q: "Is the platform free to use?",
    a: "Yes! All features including Sakhi AI guidance, scheme information, health tracking, career resources, and emergency support are 100% free. We believe every woman deserves access to quality guidance.",
    category: "General"
  },
  {
    q: "Which government schemes can I access through this platform?",
    a: "You can explore 100+ schemes including PMKVY (skill training), Beti Bachao Beti Padhao (education), Stand Up India (entrepreneurship), Mudra loans, maternity benefits, and state-specific schemes based on your location and age.",
    category: "Schemes"
  },
  {
    q: "How can I track my menstrual cycle?",
    a: "Use the Period Tracker feature in the Health section. Tell Sakhi your last period date, and she'll predict your next cycle, send reminders, provide health tips, and help you track symptoms and mood patterns.",
    category: "Health"
  },
  {
    q: "Can I get career guidance based on my education and location?",
    a: "Yes! Sakhi provides personalized career recommendations based on your age, education level, location (urban/rural), and interests. You'll get job opportunities, skill development courses, and entrepreneurship guidance tailored just for you.",
    category: "Career"
  },
  {
    q: "What if I don't have internet access all the time?",
    a: "We're working on an offline mode where you can download essential information, emergency contacts, and basic guidance to access without internet. Key emergency features will always be available.",
    category: "Technical"
  },
  {
    q: "How do I report a technical issue or give feedback?",
    a: "Use the 'Report Issue' button below or fill out the contact form. You can also chat with Sakhi and say 'I want to report an issue' - our team responds within 24 hours.",
    category: "Support"
  }
];

const helplineCategories = [
  {
    title: "Women's Safety",
    color: "from-red-500 to-rose-500",
    icon: <ShieldAlert className="w-6 h-6" />,
    lines: [
      { name: "Women Helpline (24/7)", number: "1091", description: "For women in distress" },
      { name: "Domestic Violence Helpline", number: "181", description: "Support & legal aid" },
      { name: "Police Emergency", number: "100", description: "Immediate police assistance" },
      { name: "Women Safety (Delhi)", number: "1091", description: "Delhi-specific helpline" }
    ]
  },
  {
    title: "Health & Medical",
    color: "from-pink-500 to-purple-500",
    icon: <Heart className="w-6 h-6" />,
    lines: [
      { name: "National Health Helpline", number: "104", description: "Medical assistance" },
      { name: "Mental Health Helpline", number: "9152987821", description: "Counseling support" },
      { name: "Ambulance Service", number: "108", description: "Emergency medical transport" },
      { name: "COVID-19 Helpline", number: "1075", description: "Health information" }
    ]
  },
  {
    title: "Legal & Rights",
    color: "from-purple-500 to-indigo-500",
    icon: <Shield className="w-6 h-6" />,
    lines: [
      { name: "Legal Services Authority", number: "15100", description: "Free legal aid" },
      { name: "National Commission for Women", number: "011-26942369", description: "Women's rights support" },
      { name: "Cyber Crime Helpline", number: "1930", description: "Online harassment/fraud" },
      { name: "Child Helpline", number: "1098", description: "For child safety issues" }
    ]
  },
  {
    title: "General Support",
    color: "from-blue-500 to-cyan-500",
    icon: <Phone className="w-6 h-6" />,
    lines: [
      { name: "Emergency Services", number: "112", description: "All emergency services" },
      { name: "Senior Citizen Helpline", number: "14567", description: "Elderly support" },
      { name: "Railway Helpline", number: "139", description: "Travel safety" },
      { name: "Road Accident Helpline", number: "1073", description: "Accident emergency" }
    ]
  }
];

const communitySupport = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Women Self-Help Groups (SHGs)",
    description: "Join local women's groups for skill development, microfinance, and community support. Over 10 lakh SHGs across India.",
    action: "Find SHG Near You",
    color: "pink"
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Legal Aid Communities",
    description: "Access free legal consultation, document support, and court guidance from volunteer lawyers and NGOs.",
    action: "Get Legal Help",
    color: "purple"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Mental Health Support Circles",
    description: "Anonymous peer support groups, counseling sessions, and mental wellness programs. Safe space to share and heal.",
    action: "Join Support Group",
    color: "pink"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Local NGO Networks",
    description: "Connect with NGOs working on women's education, health, entrepreneurship, and empowerment in your area.",
    action: "Explore NGOs",
    color: "purple"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Survivor Support Forums",
    description: "Anonymous forums where survivors of violence, harassment, or trauma can share experiences and find support.",
    action: "Join Forum",
    color: "pink"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Skill Development Groups",
    description: "Learn together! Join groups for tailoring, cooking, digital skills, entrepreneurship, and more.",
    action: "Find Learning Groups",
    color: "purple"
  }
];

const SupportSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "general",
    message: ""
  });
  const [formStatus, setFormStatus] = useState(null);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("All");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", category: "general", message: "" });
      
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  const faqCategories = ["All", ...new Set(faqs.map(faq => faq.category))];
  const filteredFaqs = selectedFaqCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedFaqCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full mb-6 border border-pink-200">
            <HeartHandshake className="w-5 h-5 text-pink-600" />
            <span className="text-pink-600 font-semibold">24/7 Support Available</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 mb-4">
            We're Here for You
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Emergency support, helplines, guidance, and a community that cares.
            <br />
            <span className="font-semibold text-pink-600">You're never alone.</span>
          </p>
        </div>

        {/* Emergency SOS Banner - Always Visible */}
        <div className="mb-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="w-10 h-10 animate-pulse" />
                <h2 className="text-3xl font-bold">Emergency SOS</h2>
              </div>
              <p className="text-xl text-white/90 mb-4">
                In immediate danger? Click to call emergency services instantly.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                  <div className="text-sm opacity-90">Women Helpline</div>
                  <div className="text-2xl font-bold">1091</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                  <div className="text-sm opacity-90">Emergency Services</div>
                  <div className="text-2xl font-bold">112</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                  <div className="text-sm opacity-90">Domestic Violence</div>
                  <div className="text-2xl font-bold">181</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full md:w-auto bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>Call Emergency Now</span>
              </button>
              <button className="w-full md:w-auto bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center justify-center space-x-2">
                <Video className="w-5 h-5" />
                <span>Watch Safety Video Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Contact Form - 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
                <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
              </div>
            </div>

            {formStatus === "success" && (
              <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-green-800">Message Sent Successfully!</div>
                  <div className="text-sm text-green-700">We'll get back to you soon.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name *"
                  required
                  className="w-full p-4 rounded-xl bg-pink-50 border-2 border-pink-100 focus:border-pink-500 focus:outline-none text-gray-700"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email *"
                  required
                  className="w-full p-4 rounded-xl bg-pink-50 border-2 border-pink-100 focus:border-pink-500 focus:outline-none text-gray-700"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number (Optional)"
                className="w-full p-4 rounded-xl bg-pink-50 border-2 border-pink-100 focus:border-pink-500 focus:outline-none text-gray-700"
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-4 rounded-xl bg-pink-50 border-2 border-pink-100 focus:border-pink-500 focus:outline-none text-gray-700"
              >
                <option value="general">General Inquiry</option>
                <option value="emergency">Emergency Support</option>
                <option value="technical">Technical Issue</option>
                <option value="schemes">Scheme Information</option>
                <option value="career">Career Guidance</option>
                <option value="health">Health Support</option>
                <option value="feedback">Feedback/Suggestion</option>
                <option value="report">Report an Issue</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Write your message here... *"
                required
                className="w-full p-4 rounded-xl bg-pink-50 border-2 border-pink-100 focus:border-pink-500 focus:outline-none text-gray-700"
              ></textarea>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {formStatus === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Alternative Contact Methods */}
            <div className="mt-6 pt-6 border-t-2 border-pink-100">
              <p className="text-sm text-gray-600 mb-3 font-semibold">Or reach us directly:</p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <Mail className="w-4 h-4 text-pink-600" />
                  <span>support@prerna.in</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <Phone className="w-4 h-4 text-pink-600" />
                  <span>+91 1800-XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <Clock className="w-4 h-4 text-pink-600" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Cards - 1 column */}
          <div className="space-y-6">
            
            {/* Ask Sakhi */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-8 h-8" />
                <h3 className="text-xl font-bold">Ask Sakhi</h3>
              </div>
              <p className="text-white/90 mb-4 text-sm">
                Get instant help from our AI assistant. Speak or type your query in Hindi/English.
              </p>
              <button className="w-full bg-white text-pink-600 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                <Mic className="w-5 h-5" />
                <span>Talk to Sakhi Now</span>
              </button>
            </div>

            {/* Find Nearby Help */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-pink-100">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Find Nearby Help</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Police Stations</li>
                <li>• Health Centers</li>
                <li>• Legal Aid Offices</li>
                <li>• NGO Support Centers</li>
              </ul>
              <button className="w-full bg-purple-100 text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-200 transition-all">
                View Map
              </button>
            </div>

            {/* Quick Video Guides */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-pink-100">
              <div className="flex items-center space-x-3 mb-4">
                <Video className="w-6 h-6 text-pink-600" />
                <h3 className="text-lg font-bold text-gray-900">Quick Video Guides</h3>
              </div>
              <div className="space-y-2">
                {[
                  "What to do in emergency",
                  "How to file a complaint",
                  "Your legal rights"
                ].map((title, i) => (
                  <button key={i} className="w-full text-left px-3 py-2 rounded-lg hover:bg-pink-50 transition-all text-sm text-gray-700 flex items-center justify-between">
                    <span>{title}</span>
                    <ChevronRight className="w-4 h-4 text-pink-600" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Helpline Numbers */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Important Helpline Numbers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {helplineCategories.map((category, i) => (
              <div key={i} className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white shadow-xl`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.lines.map((line, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{line.name}</span>
                        <span className="text-2xl font-bold">{line.number}</span>
                      </div>
                      <p className="text-sm text-white/80">{line.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Support Groups */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Community Support Groups
            </h2>
            <p className="text-gray-600 text-lg">
              Connect with support groups, NGOs, and communities that care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communitySupport.map((support, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-pink-100">
                <div className={`bg-gradient-to-br from-${support.color}-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-${support.color}-600`}>
                  {support.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{support.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{support.description}</p>
                <button className={`w-full bg-${support.color}-100 text-${support.color}-600 py-2 rounded-lg font-semibold hover:bg-${support.color}-200 transition-all flex items-center justify-center space-x-2`}>
                  <span>{support.action}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {faqCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedFaqCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedFaqCategory === cat
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    : "bg-pink-50 text-gray-700 hover:bg-pink-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100 hover:shadow-md transition-all">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    <span className="inline-block mt-2 text-xs font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Can't Find Answer */}
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-200">
            <p className="text-gray-900 font-semibold mb-3">Can't find your answer?</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-all flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Ask Sakhi</span>
              </button>
              <button className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-all flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feedback & Report Issue */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feedback */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl border-2 border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Share Feedback</h3>
                <p className="text-gray-600 text-sm">Help us improve Prerna</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Your feedback helps us create better experiences for all women. Share your suggestions, ideas, or appreciation!
            </p>
            <button className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Submit Feedback</span>
            </button>
          </div>

          {/* Report Issue */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl border-2 border-orange-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Report Technical Issue</h3>
                <p className="text-gray-600 text-sm">We'll fix it quickly</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Facing technical problems? Report bugs, errors, or app issues. Our team investigates all reports within 24 hours.
            </p>
            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Report an Issue</span>
            </button>
          </div>
        </div>

        {/* Safety Tips Footer Banner */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-3xl p-8 text-white shadow-2xl">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Your Safety is Our Priority</h3>
            <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
              Remember: You have the right to live without fear, violence, or harassment. Help is always available, and you deserve support, dignity, and respect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <span className="font-semibold">🔒 100% Confidential</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <span className="font-semibold">🌟 Free Support</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <span className="font-semibold">🤝 Always Here for You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            All helpline numbers are toll-free and available 24/7. Your calls are confidential.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            In case of life-threatening emergency, call <span className="font-bold text-red-600">112</span> immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SupportSection;
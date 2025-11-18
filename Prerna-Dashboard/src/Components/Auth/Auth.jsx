import React, { useState } from "react";
import {
  Phone, Mail, User, Shield, Lock, Send, AlertCircle, CheckCircle,
  Globe, MapPin, ArrowLeft, Heart, Mic, ArrowRight
} from "lucide-react";

// --- Custom Theme Colors ---
const COLORS = {
  PRIMARY_ACCENT: '#D9534F',      // Bright Coral/Red
  SECONDARY_ACCENT: '#FFC843',    // Sunny Yellow
  TERTIARY_ACCENT: '#CD4628',     // Deep Burnt Orange
  SOFT_ACCENT: '#F9E8EC',        // Subtle Pink
  NEUTRAL_BASE: '#FBFBFB',       // Creamy White
  DARK_TEXT: '#333333'           // Dark Text/Primary Text
};

// --- Custom Components ---

// Component for the Input Fields
const AuthInput = ({ icon: Icon, type = "text", placeholder, name, value, onChange, required = true }) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: COLORS.PRIMARY_ACCENT }} />
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={{ backgroundColor: COLORS.SOFT_ACCENT, color: COLORS.DARK_TEXT }}
      className="w-full p-4 pl-12 rounded-xl border-2 border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all font-medium"
    />
  </div>
);

// --- View Components ---

// 1. Signup View (Details + Language Preference)
const SignupView = ({ formData, handleChange, setView }) => (
  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setView('otp'); }}>
    <h2 className="text-3xl font-bold" style={{ color: COLORS.DARK_TEXT }}>Create Your Account</h2>
    <p className="mb-6" style={{ color: COLORS.DARK_TEXT }}>Join the movement and unlock your potential.</p>

    <AuthInput icon={User} name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
    <AuthInput icon={Phone} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" minLength="10" maxLength="10" pattern="[0-9]{10}" />
    <AuthInput icon={MapPin} name="address" value={formData.address} onChange={handleChange} placeholder="Your City/Village" />

    <div className="space-y-2">
      <label className="text-sm font-semibold flex items-center ml-1" style={{ color: COLORS.DARK_TEXT }}>
        <Globe className="w-4 h-4 mr-2" style={{ color: COLORS.PRIMARY_ACCENT }} /> Preferred Language *
      </label>
      <div className="flex gap-4">
        {['hi', 'en'].map(lang => (
          <button
            key={lang}
            type="button"
            onClick={() => handleChange({ target: { name: 'language', value: lang } })}
            className={`flex-1 py-3 rounded-xl font-bold transition-all border-2 ${
              formData.language === lang
                ? 'text-white border-purple-700 shadow-md'
                : 'bg-white border-gray-200 hover:text-white'
            }`}
            style={
                formData.language === lang
                  ? { background: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.TERTIARY_ACCENT})` }
                  : { backgroundColor: COLORS.NEUTRAL_BASE, color: COLORS.DARK_TEXT, borderColor: COLORS.SOFT_ACCENT, transition: 'all 0.3s' }
            }
          >
            {lang === 'hi' ? 'हिंदी' : 'English'}
          </button>
        ))}
      </div>
    </div>

    <button 
      type="submit" 
      className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-6"
      style={{ background: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.TERTIARY_ACCENT})` }}
    >
      <span>Get OTP & Sign Up</span>
      <ArrowRight className="w-5 h-5" />
    </button>

    <button type="button" onClick={() => setView('login')} className="w-full text-sm hover:text-purple-600 pt-2 font-semibold transition-colors" style={{ color: COLORS.PRIMARY_ACCENT }}>
      Already have an account? Log In
    </button>
  </form>
);

// 2. Login View (Name + Phone)
const LoginView = ({ formData, handleChange, setView }) => (
  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setView('otp'); }}>
    <h2 className="text-3xl font-bold" style={{ color: COLORS.DARK_TEXT }}>Welcome Back!</h2>
    <p className="mb-6" style={{ color: COLORS.DARK_TEXT }}>Log in to continue your journey with Sakhi.</p>
    
    <AuthInput icon={User} name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
    <AuthInput icon={Phone} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" minLength="10" maxLength="10" pattern="[0-9]{10}" />
    
    <button 
      type="submit" 
      className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-6"
      style={{ background: `linear-gradient(to right, ${COLORS.TERTIARY_ACCENT}, ${COLORS.PRIMARY_ACCENT})` }}
    >
      <Send className="w-5 h-5" />
      <span>Request OTP</span>
    </button>

    <button type="button" onClick={() => setView('signup')} className="w-full text-sm pt-2 font-semibold transition-colors" style={{ color: COLORS.PRIMARY_ACCENT }}>
      New to Prerna? Create an Account
    </button>
  </form>
);

// 3. OTP Verification View
const OtpVerificationView = ({ phone, setView }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length !== 4) {
      setError("Please enter the 4-digit OTP.");
      return;
    }
    
    setError('');
    setIsLoading(true);

    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, check OTP against server code
      if (otp === '1234') { 
        // alert("Success! You are now logged in/signed up."); // Replaced with console log per instruction
        console.log("Success! OTP Verified.");
        setView('login'); 
      } else {
        setError("Invalid OTP. Please try again.");
      }
    }, 1500);
  };

  return (
    <form className="space-y-6" onSubmit={handleVerify}>
      <h2 className="text-3xl font-bold" style={{ color: COLORS.DARK_TEXT }}>Verify Your Phone</h2>
      <p className="mb-6" style={{ color: COLORS.DARK_TEXT }}>A 4-digit OTP has been sent to <span className="font-bold text-purple-600">{phone}</span>.</p>

      <div className="space-y-2">
        <label className="text-sm font-semibold flex items-center ml-1" style={{ color: COLORS.DARK_TEXT }}>Enter OTP *</label>
        <AuthInput icon={Lock} type="number" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="____" required maxLength="4" />
        
        {error && (
          <p className="text-red-500 text-sm flex items-center gap-2 mt-2">
            <AlertCircle className="w-4 h-4" /> {error}
          </p>
        )}
      </div>
      
      <button 
        type="submit" 
        disabled={isLoading} 
        className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        style={{ background: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.TERTIARY_ACCENT})` }}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Verifying...</span>
          </div>
        ) : (
          <><CheckCircle className="w-5 h-5" /> <span>Verify & Continue</span></>
        )}
      </button>

      <div className="text-center">
        <button type="button" onClick={() => setView('login')} className="text-sm text-gray-500 hover:text-purple-600 font-semibold transition-colors flex items-center mx-auto">
            <ArrowLeft className="w-4 h-4 mr-2" /> Change Details
        </button>
      </div>
    </form>
  );
};


// --- Main Component ---
const AuthPage = () => {
  const [currentView, setCurrentView] = useState("login"); // 'login', 'signup', 'otp'
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    language: "en",
    address: ""
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderView = () => {
    switch (currentView) {
      case 'signup':
        return <SignupView formData={formData} handleChange={handleFormChange} setView={setCurrentView} />;
      case 'otp':
        return <OtpVerificationView phone={formData.phone} setView={setCurrentView} />;
      case 'login':
      default:
        return <LoginView formData={formData} handleChange={handleFormChange} setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: COLORS.NEUTRAL_BASE }}>
      
      <div className="grid md:grid-cols-2 max-w-5xl w-full rounded-[2rem] shadow-2xl overflow-hidden" style={{ backgroundColor: COLORS.NEUTRAL_BASE }}>
        
        {/* Left Side: Visual & Motivational */}
        <div className="relative hidden md:flex items-center justify-center p-10" style={{ background: `linear-gradient(to bottom right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.TERTIARY_ACCENT})` }}>
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${COLORS.TERTIARY_ACCENT}E6, ${COLORS.PRIMARY_ACCENT}B3)` }}></div>
          
          <div className="relative z-10 text-white text-center">
            <Heart className="w-16 h-16 mx-auto mb-4 fill-white animate-pulse" style={{ color: COLORS.SECONDARY_ACCENT }}/>
            <h2 className="text-4xl font-extrabold mb-3 leading-tight" style={{ color: COLORS.SECONDARY_ACCENT }}>
              Unlock Your Potential
            </h2>
            <p className="text-xl italic font-light mb-6">
              "Your voice matters. Your strength inspires millions."
            </p>
            <div className="inline-flex items-center backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: COLORS.SECONDARY_ACCENT, color: COLORS.DARK_TEXT }}>
              <Mic className="w-4 h-4 mr-2" /> 
              Speak to Sakhi
            </div>
            <p className="text-sm mt-4 text-white/80">
              [Image of women collaborating on a project]
            </p>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="p-8 md:p-12">
          
          {/* Logo Placeholder */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.TERTIARY_ACCENT})` }}>Prerna</h1>
            <p className="text-gray-500 text-sm" style={{ color: COLORS.DARK_TEXT }}>The Women's Empowerment Platform</p>
          </div>
          
          {renderView()}

        </div>
      </div>
    </div>
  );
};

export default AuthPage;
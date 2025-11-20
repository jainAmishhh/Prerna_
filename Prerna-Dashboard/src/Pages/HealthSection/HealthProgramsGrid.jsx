import React, { useState, useEffect } from "react";
import {
  Heart, Award, Calendar, Briefcase, Layers, Star, ExternalLink, MapPin, Target, Sparkles, Stethoscope, Brain
} from "lucide-react";
import axios from 'axios';

// --- Custom Theme Colors (Self-Contained for simplicity) ---
const COLORS = {
  PRIMARY_ACCENT: '#D9534F',      // Bright Coral/Red
  SECONDARY_ACCENT: '#FFC843',    // Sunny Yellow
  TERTIARY_ACCENT: '#CD4628',     // Deep Burnt Orange
  SOFT_ACCENT: '#F9E8EC',        // Subtle Pink
  NEUTRAL_BASE: '#FBFBFB',       // Creamy White
  DARK_TEXT: '#333333'           // Dark Text/Primary Text
};

// --- Icons and Colors for Health Data ---
const typeIcons = {
    health: <Stethoscope />,
    wellness: <Brain />,
    challenge: <Heart />,
};

const typeColors = {
    health: '#10B981', // Green
    wellness: '#3B82F6', // Blue
    challenge: COLORS.PRIMARY_ACCENT, // Coral
};

// --- Card Component (Reused Logic) ---
const HealthProgramCard = ({ prog }) => {
    // Dynamically assign color based on the first word of the 'type' (e.g., 'health' or 'wellness')
    const typeKey = prog.type.toLowerCase().split(' ')[0];
    const iconColor = typeColors[typeKey] || COLORS.TERTIARY_ACCENT;

    return (
        <div 
            className="group relative bg-white rounded-3xl shadow-xl border-t-8 p-6 pb-4 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            style={{ borderTopColor: iconColor, borderBottom: `1px solid ${COLORS.SOFT_ACCENT}` }}
        >
            
            {/* Image Header with Floating Icon */}
            <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                <img 
                    src={prog.image_url} 
                    alt={prog.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/${iconColor.substring(1)}/${COLORS.NEUTRAL_BASE.substring(1)}?text=Health+Program`; }}
                />
                
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

                {/* Type Icon Tag */}
                <div 
                    className="absolute top-4 left-4 p-3 rounded-full text-white shadow-lg"
                    style={{ backgroundColor: iconColor }}
                >
                    {React.cloneElement(typeIcons[typeKey] || <Layers />, { size: 20 })}
                </div>

                {/* Score Badge */}
                <div className="absolute top-4 right-4 bg-white text-sm font-bold px-3 py-1 rounded-full shadow-md flex items-center" style={{ color: COLORS.TERTIARY_ACCENT }}>
                    <Star className="w-4 h-4 mr-1 fill-yellow-400" style={{ color: COLORS.SECONDARY_ACCENT }}/>
                    {prog.score}%
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2 truncate" style={{ color: COLORS.DARK_TEXT }}>
                {prog.title}
            </h3>
            <p className="text-sm mb-3 line-clamp-2 flex-grow" style={{ color: COLORS.DARK_TEXT, opacity: 0.8 }}>
                {prog.description}
            </p>

            {/* Key Features / Metadata */}
            <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t" style={{ borderColor: COLORS.SOFT_ACCENT }}>
                <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: iconColor }}>
                    {prog.type.toUpperCase()}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: COLORS.SOFT_ACCENT, color: COLORS.DARK_TEXT }}>
                    Age: {prog.age_min}-{prog.age_max}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: COLORS.SOFT_ACCENT, color: COLORS.DARK_TEXT }}>
                    <MapPin className="w-3 h-3 inline mr-1" />{prog.region}
                </span>
            </div>
            
            <p className="text-sm font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.TERTIARY_ACCENT }}>
                <Sparkles className="w-4 h-4" /> {prog.feature_text}
            </p>

            {/* Action Button */}
            <button 
                className="w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:scale-[1.01]"
                style={{ background: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.TERTIARY_ACCENT})`, color: COLORS.NEUTRAL_BASE }}
                onClick={() => window.open(prog.link, '_blank')}
            >
                View Program Details
                <ExternalLink className="w-4 h-4" />
            </button>
        </div>
    );
};


const HealthProgramsGrid = () => {
    const [programs, setPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Filter state (optional but useful)
    const [filterInterest, setFilterInterest] = useState('All');

    useEffect(() => {
        const fetchHealthPrograms = async () => {
            try {
                // *** IMPORTANT: REPLACE WITH YOUR ACTUAL MONGO DB API ENDPOINT ***
                // Example: /api/health/programs OR /api/mongodb/health-programs
                const response = await axios.get("http://localhost:5000/api/health-programs"); 
                
                // Assuming the MongoDB API returns an array directly
                const fetchedData = response.data.map(item => ({
                    ...item,
                    // Ensure image_url has a fallback logic for Pexels links
                    image_url: item.image_url || `https://placehold.co/600x400/${COLORS.PRIMARY_ACCENT.substring(1)}/FFFFFF?text=Health`
                }));

                setPrograms(fetchedData);
            } catch (error) {
                console.error("Error fetching health programs:", error);
                // Fallback to displaying an error message if the API fails
                // In a real app, you might use mock data here
            } finally {
                setIsLoading(false);
            }
        };

        fetchHealthPrograms();
    }, []);

    // Dynamically gather all interests for the filter
    const allInterests = ['All', ...new Set(programs.flatMap(p => p.interest.split(', ').map(i => i.trim())))];
    
    const filteredPrograms = programs.filter(prog => {
        return filterInterest === 'All' || prog.interest.includes(filterInterest);
    }).sort((a, b) => b.score - a.score); // Sort by score descending


    if (isLoading) {
        return (
            <div className="text-center p-20 text-xl font-semibold" style={{ color: COLORS.DARK_TEXT }}>
                <div className="w-8 h-8 border-4 border-t-4 border-t-[#D9534F] border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
                Loading Health & Wellness Programs...
            </div>
        );
    }
    
    return (
        <div style={{ backgroundColor: COLORS.NEUTRAL_BASE }} className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6">
                
                <header className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: COLORS.DARK_TEXT }}>
                        Wellness Programs Matched to You
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: COLORS.DARK_TEXT, opacity: 0.7 }}>
                        Discover government-backed challenges and initiatives for mental health, fitness, and nutrition.
                    </p>
                </header>

                {/* Filter Controls */}
                <div className="mb-10 p-6 rounded-3xl shadow-inner" style={{ backgroundColor: COLORS.SOFT_ACCENT }}>
                    <div className="grid md:grid-cols-2 gap-6">
                        
                        {/* Interest Filter */}
                        <div>
                            <label className="block text-sm font-bold mb-2" style={{ color: COLORS.DARK_TEXT }}>
                                <Target className="w-4 h-4 inline mr-2" style={{ color: COLORS.PRIMARY_ACCENT }} /> Focus Area
                            </label>
                            <select 
                                value={filterInterest}
                                onChange={(e) => setFilterInterest(e.target.value)}
                                className="w-full p-3 rounded-xl border-2 appearance-none cursor-pointer"
                                style={{ backgroundColor: COLORS.NEUTRAL_BASE, borderColor: COLORS.PRIMARY_ACCENT, color: COLORS.DARK_TEXT }}
                            >
                                {allInterests.map(interest => (
                                    <option key={interest} value={interest}>{interest}</option>
                                ))}
                            </select>
                        </div>
                        {/* Empty column for alignment */}{' '}
                        <div></div> 
                    </div>
                    
                    <p className="text-center text-sm mt-4 font-semibold" style={{ color: COLORS.TERTIARY_ACCENT }}>
                        Showing {filteredPrograms.length} Matched Programs (Sorted by Relevance)
                    </p>
                </div>
                
                {/* Programs Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPrograms.map(prog => (
                        <HealthProgramCard key={prog.id} prog={prog} />
                    ))}
                </div>

                {filteredPrograms.length === 0 && (
                     <div className="text-center p-16 rounded-3xl" style={{ backgroundColor: COLORS.SOFT_ACCENT }}>
                        <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.TERTIARY_ACCENT }}>No Health Programs Found</h3>
                        <p className="text-lg" style={{ color: COLORS.DARK_TEXT, opacity: 0.8 }}>Try broadening your search or check back soon for new initiatives!</p>
                     </div>
                )}
            </div>
        </div>
    );
};

export default HealthProgramsGrid;
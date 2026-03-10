import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Trophy, Star, Target, BookOpen, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const coachingStaff = [
  {
    name: "Deana Sotelo",
    role: "Owner/Head Coach",
    description: "Leading our diving program with years of experience and a passion for developing champions. Deana oversees all aspects of Greater Lafayette Area Diving and works directly with our elite competitors.",
    responsibilities: ["Program oversight", "Elite team coaching", "Strategic development", "Team management"],
    icon: Trophy,
    color: "bg-gold text-navy",
    experience: "Head Coach",
    image: "/coaches/deana-sotelo.jpg"
  },
  {
    name: "Caitlin Johnson",
    role: "Mini Gladiators Coach/Lessons",
    description: "Caitlin works with our youngest divers and beginners, building strong foundations and fostering a love for the sport from the ground up.",
    responsibilities: ["Mini Gladiators program", "Beginner lessons", "Fundamental skills", "Age-appropriate training"],
    icon: BookOpen,
    color: "bg-navy text-gold",
    experience: "Mini Gladiators & Lessons",
    image: "/coaches/caitlin-johnson.jpg"
  },
  {
    name: "Brandon Johnson",
    role: "Lessons Coach",
    description: "Brandon focuses on teaching diving fundamentals and helping new divers build confidence and basic skills in a supportive environment.",
    responsibilities: ["Basic diving instruction", "Skill development", "Safety training", "Progressive learning"],
    icon: Award,
    color: "bg-gold text-navy",
    experience: "Lessons Coach",
    image: "/coaches/brandon-johnson.jpg"
  }
];

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gold">Coaching Staff</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Meet the dedicated professionals who guide our divers from beginners to champions
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coachingStaff.map((coach, index) => {
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-t-4 border-gold">
                  <CardHeader className="text-center pb-4">
                    {/* Headshot */}
                    <div className="mx-auto w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                      {coach.image ? (
                        <Image
                          src={coach.image}
                          alt={`Headshot of ${coach.name}`}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <>
                          <User className="w-16 h-16 text-gray-400" />
                          <span className="sr-only">Headshot placeholder for {coach.name}</span>
                        </>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <CardTitle className="text-2xl text-navy">{coach.name}</CardTitle>
                      <Badge className={`${coach.color} text-sm font-semibold`}>
                        {coach.role}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {coach.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-navy text-sm uppercase tracking-wide">
                        Responsibilities
                      </h4>
                      <ul className="space-y-1">
                        {coach.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Coaching Philosophy</h2>
            <p className="text-xl text-gray-600">Building champions through dedication, technique, and passion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-navy">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of diving, from basic skills to advanced techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-navy">Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every diver develops at their own pace with personalized attention and progressive training.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-navy">Achievement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Setting and reaching goals while building confidence and competitive spirit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Coaching Team Structure</h2>
            <p className="text-xl text-gray-600">How our coaches work together to support every diver</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Collaborative Approach</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our coaching staff works as a unified team, sharing expertise and ensuring seamless transitions 
                between programs. Each coach brings specialized knowledge while maintaining consistency in our 
                training methodology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy">Program Continuity</h4>
                    <p className="text-gray-600 text-sm">Smooth progression between skill levels</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy">Specialized Training</h4>
                    <p className="text-gray-600 text-sm">Expert coaching for each program level</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy">Unified Standards</h4>
                    <p className="text-gray-600 text-sm">Consistent quality across all programs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-lg font-semibold text-navy mb-4">Coaching Focus Areas</h4>
              <div className="space-y-3">
                {coachingStaff.map((coach, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-gold">
                    <span className="font-medium text-gray-700">{coach.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {coach.experience}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Our Coaches?</h2>
          <p className="text-xl mb-8">
            Join our diving family and experience the expertise of our dedicated coaching staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/groups" className="bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors">
              Explore Programs
            </a>
            <a href="mailto:info@gladiving.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gold mb-4">Greater Lafayette Area Diving</h3>
          <p className="text-gray-300 mb-6">
            Excellence in springboard diving since our founding
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/groups" className="text-gray-300 hover:text-gold transition-colors">
              Programs
            </Link>
            <Link href="/calendar" className="text-gray-300 hover:text-gold transition-colors">
              Calendar
            </Link>
            <Link href="/results" className="text-gray-300 hover:text-gold transition-colors">
              Results
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2024 GLAD Diving. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
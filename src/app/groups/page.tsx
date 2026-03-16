import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Star, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diving Programs - Lessons & Competitive Teams | GLAD Diving",
  description: "Explore GLAD diving programs: 8-level lessons, Mini Gladiators, Pre-Team, and competitive teams. From beginners to national competitors in West Lafayette, Indiana.",
  keywords: "diving lessons, diving programs, competitive diving, Pre-Team diving, Mini Gladiators, diving West Lafayette, diving Indiana",
  alternates: { canonical: "/groups" },
  openGraph: {
    title: "Diving Programs - Lessons & Competitive Teams | GLAD Diving",
    description: "Explore GLAD diving programs from beginners to national competitors in West Lafayette, Indiana.",
    url: "https://gladiving.com/groups",
  },
};

const divingGroups = [
  {
    name: "Lessons",
    type: "Foundation program",
    description: "This group is where all of our divers start to learn the basics of diving. There are 8 levels in future champion diving.",
    requirements: ["8 progressive levels", "Basic diving fundamentals", "Skill development", "All ages welcome"],
    icon: BookOpen,
    color: "bg-gold text-navy",
    level: "Beginner"
  },
  {
    name: "Mini Gladiators",
    type: "Invitation group",
    description: "This group are 9 and under divers that are working on getting a competitive list for advancement in diving.",
    requirements: ["Ages 9 and under", "Competitive list development", "Advancement focused"],
    icon: Target,
    color: "bg-navy text-gold",
    level: "Intermediate"
  },
  {
    name: "Pre Team",
    type: "Invitation only group",
    description: "This group is where divers move after lessons if they are interested in progressing to the competitive team. This group does 1 meter, 3 meter, and platform and is required to go to Purdue Practices. This group has a year long agreement.",
    requirements: ["Progression from lessons", "1m, 3m, and platform practice", "Purdue practices required", "Yearlong agreement"],
    icon: Star,
    color: "bg-gold text-navy",
    level: "Advanced"
  },
  {
    name: "High School",
    type: "Open group",
    description: "This group is for divers that are interested in getting a list for high school season. This group will do mostly 1 meter with a little bit of 3 meter thrown in to practice.",
    requirements: ["High school season preparation", "Primarily 1m practice", "Some 3m practice"],
    icon: Award,
    color: "bg-navy text-gold",
    level: "High School"
  },
  {
    name: "Team",
    type: "Invitation only group",
    description: "Team divers train 3 or 5 days per week and go to USA diving and AAU national Qualifying events. This group practices 1 meter, 3 meter, and platform. This group is required to attend practices at Purdue. This group has a year long agreement that must be signed.",
    requirements: ["3-5 days per week training", "1m, 3m, and platform practice", "Purdue practices required", "Yearlong agreement"],
    icon: Trophy,
    color: "bg-gold text-navy",
    level: "Elite"
  }
];

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Diving <span className="text-gold">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From beginners to elite competitors, discover the perfect diving program for your journey
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {divingGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-gold">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${group.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-navy">{group.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {group.type}
                          </Badge>
                        </div>
                      </div>
                      <Badge className={`${group.color} text-sm font-semibold`}>
                        {group.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {group.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-navy">Requirements:</h4>
                      <ul className="space-y-1">
                        {group.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span>{req}</span>
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

      {/* Program Levels Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Program Progression</h2>
            <p className="text-xl text-gray-600">Understanding the path from beginner to elite competitor</p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gold transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-12">
              {divingGroups.map((group, index) => (
                <div key={index} className={`flex flex-col lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="border-gold hover:shadow-lg transition-shadow w-full">
                      <CardHeader>
                        <CardTitle className="text-navy flex items-center space-x-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${group.color}`}>
                            <span className="text-sm font-bold">{index + 1}</span>
                          </div>
                          <span>{group.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{group.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-8 h-8 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className={`hidden lg:block lg:flex-1 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    {/* Empty space for layout balance - hidden on mobile */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Diving Journey?</h2>
          <p className="text-xl mb-8">
            Contact us to learn more about our programs and find the perfect fit for your diving goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@gladiving.com" className="bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors">
              Contact Us
            </a>
            <a href="/coaches" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors">
              Meet Our Coaches
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
            <Link href="/coaches" className="text-gray-300 hover:text-gold transition-colors">
              Coaches
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
              © 2025 GLAD Diving. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
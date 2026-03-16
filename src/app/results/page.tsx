import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, Star, TrendingUp, Users, Calendar } from "lucide-react";
import Link from "next/link";

const divingResults = {
  highSchool: {
    sectionals: 39,
    regionals: 102,
    stateQualifiers: 38,
    description: "Our high school divers consistently achieve excellence in springboard diving competitions across Indiana."
  }
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Diving <span className="text-gold">Results</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Celebrating the achievements of our divers in springboard diving competitions
          </p>
        </div>
      </section>

      {/* High School Results Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">High School Diving Results</h2>
            <p className="text-xl text-gray-600 mb-8">
              {divingResults.highSchool.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-4xl font-bold text-navy">
                  {divingResults.highSchool.sectionals}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">Sectional Champions</p>
                <p className="text-gray-500 mt-2">Local champions advancing to regionals</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Award className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-4xl font-bold text-navy">
                  {divingResults.highSchool.regionals}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">Qualifiers</p>
                <p className="text-gray-500 mt-2">Qualifiers across Indiana</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Target className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-4xl font-bold text-navy">
                  {divingResults.highSchool.stateQualifiers}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">State Qualifiers</p>
                <p className="text-gray-500 mt-2">Elite divers competing at state level</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>





      {/* Success Factors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Keys to Our Success</h2>
            <p className="text-xl text-gray-600">What makes our diving program consistently successful</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-navy">Expert Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experienced coaches with proven track records in developing champions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-navy">Progressive Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Systematic approach to skill development from beginner to elite levels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-navy">Team Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strong community and support system for all divers and families.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-navy">Consistent Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular training schedules and commitment to excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Building on Our Success</h2>
          <p className="text-xl mb-8">
            We continue to strive for excellence and look forward to even greater achievements in the future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-navy-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-3">Short Term Goals</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Increase state championship qualifiers</li>
                <li>• Expand regional championship success</li>
                <li>• Develop more sectional champions</li>
              </ul>
            </div>
            <div className="bg-navy-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-3">Long Term Vision</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• National championship representation</li>
                <li>• Olympic development program involvement</li>
                <li>• Continued program growth and excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">Join Our Winning Tradition</h2>
          <p className="text-xl mb-8 text-gray-600">
            Be part of a program that consistently produces champions and develops diving excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/groups" className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors">
              Explore Programs
            </a>
            <a href="/coaches" className="border-2 border-navy text-navy px-8 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors">
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
            <Link href="/groups" className="text-gray-300 hover:text-gold transition-colors">
              Programs
            </Link>
            <Link href="/coaches" className="text-gray-300 hover:text-gold transition-colors">
              Coaches
            </Link>
            <Link href="/calendar" className="text-gray-300 hover:text-gold transition-colors">
              Calendar
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
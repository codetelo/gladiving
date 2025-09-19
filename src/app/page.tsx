import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Trophy, Target, Award } from "lucide-react";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            "name": "Greater Lafayette Area Diving",
            "alternateName": "GLAD",
            "description": "Professional diving instruction and competitive teams in Indiana. Training divers from beginners to national competitors in springboard and platform diving.",
            "url": "https://gladiving.com",
            "logo": "https://gladiving.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/gladiving",
              "https://www.instagram.com/gladiving"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "West Lafayette",
              "addressRegion": "IN",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@gladiving.com"
            },
            "sport": "Diving",
            "areaServed": "Greater Lafayette Area, Indiana",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Diving Programs",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Diving Lessons",
                    "description": "8-level progressive program for beginners"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Competitive Team",
                    "description": "Elite training for national competitions in springboard and platform diving"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Excellence in <span className="text-gold">Diving</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Training champions from beginners to national competitors. Join the Greater Lafayette Area Diving family and discover your potential in the sport of diving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/groups">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold-light transition-colors cursor-pointer">
                Explore Programs
              </Button>
            </Link>
            <Link href="/coaches">
              <Button size="lg" variant="outline" className="bg-white text-navy border-white hover:bg-gray-100 hover:border-gray-200 transition-colors cursor-pointer">
                Meet Our Coaches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">High School Diving Results</h2>
            <p className="text-xl text-gray-600">Celebrating our athletes&apos; achievements in diving</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mx-auto w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-4xl font-bold text-navy">39</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">Sectional Champions</p>
                <p className="text-gray-500 mt-2">Local champions advancing to regionals</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mx-auto w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Award className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-4xl font-bold text-navy">102</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">Regional Champions</p>
                <p className="text-gray-500 mt-2">Regional champions across Indiana</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gold hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mx-auto w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-4">
                  <Target className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-4xl font-bold text-navy">38</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">State Qualifiers</p>
                <p className="text-gray-500 mt-2">Elite divers competing at state level</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gray-50 programs-section">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">From beginners to elite competitors, we have a program for every diver</p>
          </div>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 programs-grid">
            <Card className="hover:shadow-lg transition-shadow w-full" style={{ width: '100%', maxWidth: '100%' }}>
              <CardHeader>
                <CardTitle className="text-navy">Competitive Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Elite training for divers competing at national levels with yearlong commitments.
                </p>
                <Link href="/groups">
                  <Button variant="outline" className="border-navy text-navy hover:bg-gold hover:text-navy hover:border-gold transition-colors cursor-pointer w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow w-full" style={{ width: '100%', maxWidth: '100%' }}>
              <CardHeader>
                <CardTitle className="text-navy">Pre-Team Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bridge program for divers transitioning from lessons to competitive diving.
                </p>
                <Link href="/groups">
                  <Button variant="outline" className="border-navy text-navy hover:bg-gold hover:text-navy hover:border-gold transition-colors cursor-pointer w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow w-full" style={{ width: '100%', maxWidth: '100%' }}>
              <CardHeader>
                <CardTitle className="text-navy">Diving Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Foundation program with 8 levels to build diving fundamentals and skills.
                </p>
                <Link href="/groups">
                  <Button variant="outline" className="border-navy text-navy hover:bg-gold hover:text-navy hover:border-gold transition-colors cursor-pointer w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
            <Link href="/groups" className="text-gray-300 hover:text-gold transition-colors">
              Programs
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
              © 2024 GLAD Diving. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

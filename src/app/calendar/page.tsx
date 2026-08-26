import { Navigation } from "@/components/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diving Schedule & Calendar | GLAD Diving",
  description: "GLAD diving practice schedule, competition dates, and important events. Stay up to date with our calendar for West Lafayette area diving.",
  keywords: "diving schedule, diving calendar, diving practice times, diving competitions Indiana, GLAD calendar",
  alternates: { canonical: "/calendar" },
  openGraph: {
    title: "Diving Schedule & Calendar | GLAD Diving",
    description: "Practice schedules, competitions, and events for Greater Lafayette Area Diving.",
    url: "https://gladiving.com/calendar",
  },
};

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Diving <span className="text-gold">Calendar</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Stay up to date with practice schedules, competitions, and important
            events
          </p>
        </div>
      </section>

      {/* Google Calendar Embed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="bg-gray-50 p-4 rounded-lg">
              {/* Desktop Calendar - Full iframe */}
              <div className="hidden md:block bg-white p-4 rounded border">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=9d8cddf83c17a113ae3c19e9e7103b0f77ac0fcaa7504cd70d9535dba4e7230d%40group.calendar.google.com&ctz=America%2FNew_York&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
                  style={{ border: 0 }}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  scrolling="no"
                  title="Greater Lafayette Area Diving Calendar"
                ></iframe>
              </div>

              {/* Mobile Calendar - Optimized for mobile */}
              <div className="md:hidden">
                <div className="bg-white p-4 rounded border">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      Upcoming Events
                    </h3>
                    <p className="text-sm text-gray-600">
                      View our full calendar on desktop or use the mobile link
                      below
                    </p>
                  </div>

                  {/* Mobile Calendar Link */}
                  <div className="space-y-3">
                    <a
                      href="https://calendar.google.com/calendar/embed?src=9d8cddf83c17a113ae3c19e9e7103b0f77ac0fcaa7504cd70d9535dba4e7230d%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-navy text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
                    >
                      📅 View Full Calendar
                    </a>

                    <a
                      href="https://calendar.google.com/calendar/embed?src=9d8cddf83c17a113ae3c19e9e7103b0f77ac0fcaa7504cd70d9535dba4e7230d%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gold text-navy text-center py-3 px-4 rounded-lg font-semibold hover:bg-gold-light transition-colors"
                    >
                      📱 Mobile Calendar View
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="text-gray-500 text-sm">
                  💡 <strong>Tip:</strong>
                  <span className="hidden md:inline">
                    Click on any event to see full details
                  </span>
                  <span className="md:hidden">
                    Use the mobile calendar links above for the best experience
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Important Information
            </h2>
            <p className="text-xl text-gray-600">
              Please note the following details
            </p>
          </div>

          <div className="bg-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gold mb-6">
              Practice & Competition Guidelines
            </h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  All practices are held at Lafayette Jefferson High School unless specified otherwise
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Divers should arrive 15 minutes before practice time for
                  proper warm-up
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Competition dates are subject to change - check with coaches
                  for updates
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Weather-related cancellations will be communicated via email
                  and text
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Parents are welcome to observe practices from designated
                  viewing areas
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Questions About the Schedule?
          </h2>
          <p className="text-xl mb-8">
            Contact our coaching staff for specific details about practice
            times, competitions, or schedule changes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coaches"
              className="bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors"
            >
              Contact Coaches
            </Link>
            <a
              href="mailto:info@gladiving.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gold mb-4">
            Greater Lafayette Area Diving
          </h3>
          <p className="text-gray-300 mb-6">
            Excellence in springboard diving since our founding
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/groups"
              className="text-gray-300 hover:text-gold transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/coaches"
              className="text-gray-300 hover:text-gold transition-colors"
            >
              Coaches
            </Link>
            <Link
              href="/results"
              className="text-gray-300 hover:text-gold transition-colors"
            >
              Results
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 Greater Lafayette Area Diving. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

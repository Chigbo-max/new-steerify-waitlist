"use client"

import { useState, useEffect } from "react"
import { getWaitlistCount } from "../actions/waitlist"
import { WaitlistForm } from "./waitlist-form"
import { Users, Home, Droplets, MapPin, Clock, Shield, Camera as Naira } from "lucide-react"

export function WaitlistSignup() {
  const [waitlistCount, setWaitlistCount] = useState(1000)

  useEffect(() => {
    getWaitlistCount().then((count) => setWaitlistCount(count + 1000))
  }, [])

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-steerify-blue via-steerify-blue to-steerify-teal">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Find Certified Cleaning Service Providers
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-pretty">
              Search for the best professional cleaning services near you. AI-matched providers, secure payments, and
              effortless scheduling — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Already {waitlistCount}+ customers and providers signed up.</span>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="relative max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-steerify-blue">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center bg-gray-100 rounded-xl p-4">
                      <input
                        type="text"
                        placeholder="Search for cleaning services..."
                        className="flex-1 bg-transparent outline-none text-gray-700"
                        readOnly
                      />
                      <div className="w-8 h-8 bg-steerify-blue rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-steerify-blue rounded-full flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-steerify-blue rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-steerify-teal rounded-full flex items-center justify-center mr-3">
                        <Home className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-steerify-teal rounded w-2/3 mb-1"></div>
                        <div className="h-2 bg-gray-300 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 hidden lg:block">
                  <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-16 h-20 bg-white rounded-lg flex flex-col items-center justify-center">
                      <div className="w-8 h-1 bg-green-600 rounded mb-1"></div>
                      <div className="w-6 h-1 bg-gray-300 rounded mb-1"></div>
                      <div className="w-4 h-1 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-12 top-8 hidden lg:block">
                  <div className="w-16 h-16 bg-steerify-blue rounded-2xl flex items-center justify-center">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-steerify-blue mb-4">
              Finally, Reliable Cleaning Services in Nigeria
            </h2>
            <p className="text-xl text-gray-600">
              No more stress, no more unreliable cleaners. Just quality service when you need it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">Lagos • Abuja • PH</h3>
              <p className="text-gray-600">Starting in major cities, expanding nationwide</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">Verified Cleaners</h3>
              <p className="text-gray-600">Background checks, references, and insurance coverage</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Naira className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent rates, no hidden fees, pay securely</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">On-Time Service</h3>
              <p className="text-gray-600">Book today, clean tomorrow. No more waiting weeks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-steerify-blue mb-4">
              Why Busy Nigerians Choose Steerify
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who are already transforming their cleaning experience
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-steerify-blue mb-2">For Busy Professionals in Lagos & Abuja</h3>
                  <p className="text-gray-600">
                    "I work 12-hour days in Victoria Island. Steerify gives me my weekends back. My cleaner comes every
                    Saturday while I'm at the gym." - <strong>Kemi A., Investment Banker</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-steerify-blue mb-2">For Working Mothers</h3>
                  <p className="text-gray-600">
                    "Between work and kids, I had no time for deep cleaning. Now I book monthly deep cleans and focus on
                    what matters - my family." - <strong>Funmi O., Marketing Manager</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-steerify-blue mb-2">For Small Business Owners</h3>
                  <p className="text-gray-600">
                    "My office in Ikeja needed reliable cleaning. Steerify's commercial cleaners are professional and
                    affordable. My clients notice the difference." - <strong>Chidi M., Tech Startup CEO</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-steerify-blue mb-4">Early Bird Benefits</h3>
                <p className="text-gray-600 mb-6">Join the waitlist now and get:</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">50% off your first 3 bookings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Priority access to top-rated cleaners</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Free cleaning supplies for first month</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">VIP customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup Form Section */}
      <section id="waitlist-form" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-steerify-blue mb-4">
            Be the First to Access Steerify Cleaning.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Early members enjoy priority bookings, premium visibility, and exclusive rewards.
          </p>
          <WaitlistForm onSuccess={handleSuccess} />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-steerify-blue mb-8">
              Trusted by growing providers & excited customers.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-steerify-teal rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-steerify-blue">Sarah M.</h4>
                  <p className="text-gray-600 text-sm">Cleaning Provider</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Finally, a platform that connects me with quality customers. Can't wait for the full launch!"
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-steerify-blue rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-steerify-blue">Mike R.</h4>
                  <p className="text-gray-600 text-sm">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The secure payment system gives me peace of mind. This is exactly what I've been looking for."
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-steerify-gold rounded-full flex items-center justify-center text-steerify-blue font-bold">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-steerify-blue">Lisa K.</h4>
                  <p className="text-gray-600 text-sm">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "AI-powered matching means I'll get the right cleaner for my office. Brilliant concept!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-steerify-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-3xl font-bold text-white">Steerify</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your next cleaning service is just a tap away.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't miss out — secure your spot on the Steerify Cleaning waitlist today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Sign Up
            </button>
            <div className="flex gap-6 text-white/80">
              <a href="#" className="hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

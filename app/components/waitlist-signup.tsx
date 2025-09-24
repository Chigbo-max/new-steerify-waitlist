"use client"

import { useState, useEffect } from "react"
import { getWaitlistCount } from "../actions/waitlist"
import { WaitlistForm } from "./waitlist-form"
import {
  EnhancedUsersIcon,
  EnhancedHomeIcon,
  EnhancedCleaningIcon,
  EnhancedLocationIcon,
  EnhancedShieldIcon,
  EnhancedMoneyIcon,
  EnhancedClockIcon,
  EnhancedSearchIcon,
  EnhancedCheckIcon,
} from "./icons/enhanced-icons"
import Image from "next/image"

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
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/images/steerify-logo-new.png" alt="Steerify" width={40} height={40} className="mr-3" />
              <span className="text-2xl font-bold text-steerify-blue">Steerify</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-steerify-blue transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-steerify-blue transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-600 hover:text-steerify-blue transition-colors">
                About
              </a>
              <button
                onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-steerify-blue hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-steerify-blue via-steerify-blue to-steerify-teal">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3">
                <Image src="/images/steerify-logo-new.png" alt="Steerify" width={48} height={48} className="mr-4" />
                <span className="text-3xl font-bold text-white">Steerify</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              👉 Nigeria's #1 Smart Cleaning Marketplace — Launching Soon
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-pretty">
              Book trusted cleaners in minutes. Grow your cleaning business with AI-powered matching and
              escrow-protected payments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🔵 Join the Waitlist – Get Early Access
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <EnhancedUsersIcon className="w-5 h-5" />
              <span className="font-semibold">Over {waitlistCount}+ customers & providers already signed up.</span>
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
                        <EnhancedSearchIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-steerify-blue rounded-full flex items-center justify-center mr-3">
                        <EnhancedUsersIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-steerify-blue rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-steerify-teal rounded-full flex items-center justify-center mr-3">
                        <EnhancedHomeIcon className="w-5 h-5 text-white" />
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
                    <EnhancedCleaningIcon className="w-8 h-8 text-white" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-steerify-blue mb-4">Benefits for Everyone</h2>
            <p className="text-xl text-gray-600">
              Whether you're looking for cleaning services or providing them, Steerify has you covered.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Customers */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-steerify-blue mb-6 flex items-center">
                <span className="mr-3">🏠</span>
                For Customers
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">🧹</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-steerify-blue mb-1">Book verified cleaners in minutes</h4>
                    <p className="text-gray-600">Quick and easy booking process with trusted professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">🔒</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-steerify-blue mb-1">Pay safely with escrow</h4>
                    <p className="text-gray-600">Funds released only after job completion for your protection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">⭐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-steerify-blue mb-1">Reliable ratings & reviews</h4>
                    <p className="text-gray-600">Peace of mind with transparent feedback system</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Providers */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-steerify-blue mb-6 flex items-center">
                <span className="mr-3">💼</span>
                For Providers
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">📈</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-steerify-blue mb-1">Get AI-matched with quality customers</h4>
                    <p className="text-gray-600">Smart matching in your area for better opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">💰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-steerify-blue mb-1">Guaranteed secure payments</h4>
                    <p className="text-gray-600">Reliable income through our escrow payment system</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-steerify-blue mb-1">Boost your business visibility</h4>
                    <p className="text-gray-600">Increase credibility and reach more customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl border-2 border-red-200">
            <h2 className="text-3xl font-bold text-steerify-blue mb-4">🔥 Limited Early Access</h2>
            <p className="text-xl text-gray-700 mb-6">
              Early members enjoy priority bookings, exclusive discounts, and premium business placement on launch.
            </p>
            <p className="text-lg text-red-600 font-semibold">⚡ Spots are limited — don't miss out.</p>
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
                <EnhancedLocationIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">Lagos • Abuja • PH</h3>
              <p className="text-gray-600">Starting in major cities, expanding nationwide</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <EnhancedShieldIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">Verified Cleaners</h3>
              <p className="text-gray-600">Background checks, references, and insurance coverage</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <EnhancedMoneyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent rates, no hidden fees, pay securely</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <EnhancedClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">On-Time Service</h3>
              <p className="text-gray-600">Book today, clean tomorrow. No more waiting weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup Form Section */}
      <section id="waitlist-form" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-steerify-blue mb-4">
            Be among the first to experience Steerify Cleaning.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Early members enjoy priority bookings, premium visibility, and exclusive rewards.
          </p>
          <WaitlistForm onSuccess={handleSuccess} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-steerify-blue mb-8">Built for Trust, Simplicity, and Reliability</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <EnhancedCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">✅ Secure escrow payments</h3>
              <p className="text-gray-600">Your money is safe — funds released only after job completion</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <EnhancedShieldIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">✅ All providers are verified</h3>
              <p className="text-gray-600">Background checks and verification before joining our platform</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <EnhancedCleaningIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-steerify-blue mb-2">✅ Built for trust & reliability</h3>
              <p className="text-gray-600">Designed with simplicity and dependability at its core</p>
            </div>
          </div>
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
              <Image src="/images/steerify-logo-new.png" alt="Steerify" width={48} height={48} className="mr-4" />
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
              ✨ Join the Waitlist Today
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
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-lg">Cleaning made simple. Payments made safe.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

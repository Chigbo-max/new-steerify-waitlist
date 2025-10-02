import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  Mail, 
  Twitter,
  CheckCircle,
  TrendingUp,
  Shield,
  UserCheck,
  BarChart3,
  Rocket
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="space-y-16">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-steerify-blue via-steerify-blue to-steerify-teal">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Steerify: Where Quality Services Meet Trusted Connections
            </h1>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              Steerify is a concierge-powered marketplace that connects people with
              quality service providers. From cleaning to home services, we bring
              trust, security, and simplicity into every booking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Steerify Cleaning (MVP focus) */}
        <section className="space-y-6 bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900">
            Introducing Steerify Cleaning
          </h2>
          <p className="text-lg text-gray-600">
            Steerify Cleaning is our first step in revolutionizing the service
            industry. It's a platform built to help:
          </p>
          <ul className="space-y-3 text-left">
            <li className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
              <div className="w-2 h-2 bg-steerify-blue rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">
                <b className="text-steerify-blue">Customers</b> → Find trusted, verified cleaners instantly, book
                with confidence, and pay securely using escrow.
              </span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-teal-50">
              <div className="w-2 h-2 bg-steerify-teal rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">
                <b className="text-steerify-teal">Providers</b> → Grow your cleaning business with AI-driven
                matching, exposure to more clients, and guaranteed payments after
                service completion.
              </span>
            </li>
          </ul>
          <p className="text-lg text-gray-600 mt-4">
            This isn't just another cleaning marketplace—it's a system built on
            trust, quality, and growth.
          </p>
        </section>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Why Customers Love Steerify */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Why Customers Love Steerify</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Book trusted cleaners in minutes</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Shield className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700">Pay safely with escrow protection</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <UserCheck className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">Choose from verified, rated providers</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-700">AI-matching ensures the best fit for your needs</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <BarChart3 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                <span className="text-gray-700">Track bookings and manage services in one app</span>
              </li>
            </ul>
          </section>

          {/* Why Providers Choose Steerify */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Why Providers Choose Steerify</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <TrendingUp className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Get matched with the right customers</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Shield className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700">Guaranteed, on-time payments with escrow release</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <UserCheck className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">Verified profile builds trust with new clients</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <BarChart3 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                <span className="text-gray-700">Business dashboard to track earnings and reviews</span>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Rocket className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-700">Scale your cleaning business without expensive ads</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Call-to-Action Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-steerify-blue via-steerify-blue to-steerify-teal rounded-2xl p-12 text-center mb-16">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
          <div className="relative space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Be part of the future of services
            </h3>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto">
              Whether you're looking for trusted cleaners or want to grow your
              cleaning business, Steerify Cleaning is designed for you. Join the
              waitlist today and be among the first to experience a smarter, safer,
              and more rewarding way to connect.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-white text-steerify-blue hover:bg-blue-50 font-semibold">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="text-center space-y-8 pb-16">
          <h3 className="text-2xl font-bold text-gray-900">Stay Connected</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow Steerify for updates, launch announcements, and exclusive
            opportunities:
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/steerifygroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-4 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a 
              href="mailto:info@steerify.com" 
              aria-label="Email"
              className="p-4 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <Mail className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com/SteerifyGroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="p-4 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <Twitter className="w-7 h-7" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}




// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { 
//   Instagram, 
//   Mail, 
//   Twitter,
//   CheckCircle,
//   TrendingUp,
//   Shield,
//   UserCheck,
//   BarChart3,
//   Rocket,
//   Users,
//   Star,
//   Clock,
//   Award
// } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <main className="space-y-16">
//       {/* Hero Section with Gradient Background */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-steerify-blue via-steerify-blue to-steerify-teal">
//         <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="text-center lg:text-left space-y-6">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//                 Where Quality Services Meet Trusted Connections
//               </h1>
//               <p className="text-xl text-blue-50 max-w-2xl">
//                 Steerify is a concierge-powered marketplace that connects people with
//                 quality service providers. From cleaning to home services, we bring
//                 trust, security, and simplicity into every booking.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Link href="/">
//                   <Button size="lg" className="bg-white text-steerify-blue hover:bg-blue-50 font-semibold px-8">
//                     Join Waitlist
//                   </Button>
//                 </Link>
//                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="/images/hero-cleaning.jpg" 
//                   alt="Professional cleaning service" 
//                   className="w-full h-80 lg:h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//               </div>
//               {/* Floating stats */}
//               <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
//                 <div className="flex items-center gap-3">
//                   <div className="bg-green-100 p-2 rounded-full">
//                     <Users className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="text-2xl font-bold text-gray-900">500+</p>
//                     <p className="text-sm text-gray-600">Happy Customers</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Users className="w-6 h-6 text-blue-600" />
//             </div>
//             <p className="text-3xl font-bold text-gray-900">1K+</p>
//             <p className="text-gray-600">Verified Providers</p>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Star className="w-6 h-6 text-green-600" />
//             </div>
//             <p className="text-3xl font-bold text-gray-900">4.9/5</p>
//             <p className="text-gray-600">Average Rating</p>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Clock className="w-6 h-6 text-orange-600" />
//             </div>
//             <p className="text-3xl font-bold text-gray-900">24/7</p>
//             <p className="text-gray-600">Support</p>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Award className="w-6 h-6 text-purple-600" />
//             </div>
//             <p className="text-3xl font-bold text-gray-900">100%</p>
//             <p className="text-gray-600">Secure Payments</p>
//           </div>
//         </div>
//       </section>

//       {/* Steerify Cleaning Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <img 
//               src="/images/cleaning-service.jpg" 
//               alt="Steerify Cleaning Service" 
//               className="rounded-2xl shadow-xl w-full h-96 object-cover"
//             />
//             <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-steerify-blue to-steerify-teal text-white p-6 rounded-xl shadow-lg">
//               <Rocket className="w-8 h-8 mb-2" />
//               <p className="font-bold text-lg">Launching Soon</p>
//               <p className="text-blue-100">Join our waitlist</p>
//             </div>
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Introducing <span className="text-steerify-blue">Steerify Cleaning</span>
//             </h2>
//             <p className="text-lg text-gray-600">
//               Steerify Cleaning is our first step in revolutionizing the service industry. 
//               It's a platform built to create win-win situations for everyone involved.
//             </p>
            
//             <div className="space-y-4">
//               <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
//                 <div className="bg-white p-2 rounded-lg shadow-sm">
//                   <Users className="w-5 h-5 text-steerify-blue" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-steerify-blue">For Customers</h4>
//                   <p className="text-gray-700">
//                     Find trusted, verified cleaners instantly, book with confidence, and pay securely using escrow.
//                   </p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 border border-teal-100">
//                 <div className="bg-white p-2 rounded-lg shadow-sm">
//                   <TrendingUp className="w-5 h-5 text-steerify-teal" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-steerify-teal">For Providers</h4>
//                   <p className="text-gray-700">
//                     Grow your cleaning business with AI-driven matching, exposure to more clients, and guaranteed payments.
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <p className="text-lg text-gray-600 font-medium">
//               This isn't just another cleaning marketplace—it's a system built on trust, quality, and growth.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Why Customers Love Steerify */}
//           <div className="space-y-6">
//             <div className="text-center lg:text-left">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Customers Love Steerify</h3>
//               <p className="text-gray-600">Experience peace of mind with every booking</p>
//             </div>
//             <div className="relative">
//               <img 
//                 src="/images/customer-experience.jpg" 
//                 alt="Happy customer experience" 
//                 className="rounded-2xl shadow-lg w-full h-64 object-cover"
//               />
//             </div>
//             <ul className="space-y-4">
//               {[
//                 { icon: CheckCircle, color: "green", text: "Book trusted cleaners in minutes" },
//                 { icon: Shield, color: "blue", text: "Pay safely with escrow protection" },
//                 { icon: UserCheck, color: "purple", text: "Choose from verified, rated providers" },
//                 { icon: TrendingUp, color: "orange", text: "AI-matching ensures the best fit for your needs" },
//                 { icon: BarChart3, color: "indigo", text: "Track bookings and manage services in one app" }
//               ].map((item, index) => (
//                 <li key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
//                   <item.icon className={`w-6 h-6 text-${item.color}-500 flex-shrink-0`} />
//                   <span className="text-gray-700">{item.text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Why Providers Choose Steerify */}
//           <div className="space-y-6">
//             <div className="text-center lg:text-left">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Providers Choose Steerify</h3>
//               <p className="text-gray-600">Grow your business with the right tools and support</p>
//             </div>
//             <div className="relative">
//               <img 
//                 src="/images/provider-success.jpg" 
//                 alt="Successful service provider" 
//                 className="rounded-2xl shadow-lg w-full h-64 object-cover"
//               />
//             </div>
//             <ul className="space-y-4">
//               {[
//                 { icon: TrendingUp, color: "green", text: "Get matched with the right customers" },
//                 { icon: Shield, color: "blue", text: "Guaranteed, on-time payments with escrow release" },
//                 { icon: UserCheck, color: "purple", text: "Verified profile builds trust with new clients" },
//                 { icon: BarChart3, color: "indigo", text: "Business dashboard to track earnings and reviews" },
//                 { icon: Rocket, color: "orange", text: "Scale your cleaning business without expensive ads" }
//               ].map((item, index) => (
//                 <li key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
//                   <item.icon className={`w-6 h-6 text-${item.color}-500 flex-shrink-0`} />
//                   <span className="text-gray-700">{item.text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-steerify-blue via-steerify-blue to-steerify-teal rounded-3xl mx-4 lg:mx-8">
//         <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//           <div className="text-center space-y-8">
//             <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto">
//               Be Part of the Future of Services
//             </h3>
//             <p className="text-xl text-blue-50 max-w-2xl mx-auto">
//               Whether you're looking for trusted cleaners or want to grow your cleaning business, 
//               Steerify Cleaning is designed for you. Join the waitlist today!
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Link href="/">
//                 <Button size="lg" className="bg-white text-steerify-blue hover:bg-blue-50 font-semibold px-12 py-6 text-lg">
//                   Join the Waitlist
//                 </Button>
//               </Link>
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-12 py-6 text-lg">
//                 Contact Sales
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Social Media Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-16">
//         <h3 className="text-3xl font-bold text-gray-900">Stay Connected</h3>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Follow Steerify for updates, launch announcements, and exclusive opportunities
//         </p>
//         <div className="flex justify-center gap-8">
//           {[
//             { icon: Instagram, href: "https://instagram.com/steerifygroup", color: "pink", label: "Instagram" },
//             { icon: Mail, href: "mailto:info@steerify.com", color: "blue", label: "Email" },
//             { icon: Twitter, href: "https://twitter.com/SteerifyGroup", color: "gray", label: "Twitter" }
//           ].map((social, index) => (
//             <a
//               key={index}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={social.label}
//               className={`p-6 rounded-2xl bg-${social.color}-50 hover:bg-${social.color}-100 text-${social.color}-600 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg`}
//             >
//               <social.icon className="w-8 h-8" />
//             </a>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

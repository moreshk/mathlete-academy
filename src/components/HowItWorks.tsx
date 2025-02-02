import { FaClock, FaUsers, FaMoneyBillWave, FaSmile } from 'react-icons/fa'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FaClock className="text-3xl text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Session Duration</h3>
                <p className="text-gray-700">Lessons are typically 60 minutes long, designed for optimal focus and learning.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaUsers className="text-3xl text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Class Size</h3>
                <p className="text-gray-700">Each lesson has a maximum of 5 students to ensure personalized attention.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaMoneyBillWave className="text-3xl text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Pricing</h3>
                <p className="text-gray-700">Fees are $25 per session, paid in advance for 4 sessions. A 20% discount is available for 12 sessions paid in advance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaSmile className="text-3xl text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Satisfaction Guarantee</h3>
                <p className="text-gray-700">If you&apos;re unhappy after the first 4 sessions, you can request a full refund, no questions asked.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Approach</h3>
            <p className="mb-4 text-gray-700">
              We focus on Maths puzzles, patterns, and coursework geared towards scholarship exams and competitions like Maths Olympiads.
            </p>
            <p className="mb-4 text-gray-700">
              Our teaching method encourages application-first learning, problem-solving, and recognizing patterns, moving away from dry, abstract approaches.
            </p>
            <p className="mb-4 text-gray-700">
              We aim to inculcate a deep love for Maths by demonstrating its real-world applications and relevance.
            </p>
            <p className="text-gray-700">
              Remember, your success depends on your commitment. Be punctual, come prepared, and be ready to engage fully in each session.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
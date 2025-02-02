import { FaChalkboardTeacher, FaUsers, FaClock } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">About Our Tutoring</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <FaChalkboardTeacher className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Guidance</h3>
            <p className="text-gray-700">Learn from a passionate math enthusiast who sees applications in daily life.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <FaUsers className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Small Groups</h3>
            <p className="text-gray-700">Each lesson has a maximum of 5 students for personalized attention.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <FaClock className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">60-Minute Sessions</h3>
            <p className="text-gray-700">Focused, hour-long lessons to maximize learning and engagement.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 
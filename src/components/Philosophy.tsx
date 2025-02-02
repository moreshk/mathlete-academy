import { FaBrain, FaComments, FaCalculator } from 'react-icons/fa'

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              We live in an era which is on the cusp of radical change due to AI. It is absolutely certain that our children will experience a world vastly different than today.
            </p>
            <p className="mb-4">
              As a parent of an 8-year-old, I wrestle with this question: "In a world where everything is changing, what are the skillsets that will remain foundational? What is the base upon which everything is built?"
            </p>
            <p>
              I believe that the answer lies in fostering critical thinking, communication, and more importantly, having a deeper understanding of Maths.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <FaBrain className="text-3xl text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Critical Thinking</h3>
                <p>We encourage problem-solving and analytical skills that are crucial in any field.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaComments className="text-3xl text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Communication</h3>
                <p>We foster clear articulation of mathematical concepts and ideas.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCalculator className="text-3xl text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Deep Understanding</h3>
                <p>We focus on building a strong foundation in mathematics that supports all sciences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
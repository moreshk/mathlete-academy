import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Mastering Mathematics for the Future
          </h1>
          <p className="text-xl text-gray-600">
            Prepare your child for a world of AI and rapid change through expert
            math tutoring that focuses on critical thinking and problem-solving.
          </p>
          <div>
            <a
              href="#booking"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Enquire Now
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/moresh.jpeg"
            alt="Moresh Kokane"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}

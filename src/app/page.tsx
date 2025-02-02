import Hero from '@/components/Hero'
import About from '@/components/About'
import Philosophy from '@/components/Philosophy'
import HowItWorks from '@/components/HowItWorks'
import Booking from '@/components/Booking'
// import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <About />

      <HowItWorks />
      <Booking />
      {/* <ContactForm /> */}
    </main>
  )
}

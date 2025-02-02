export default function Booking() {
  return (
    <section id="booking" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Questions? Queries? Let&apos;s have a quick chat</h2>
        <div className="h-[600px]">
          <iframe
            src={`https://calendly.com/moreshkokane/30min?embed_domain=${process.env.NEXT_PUBLIC_DOMAIN}&embed_type=inline`}
            width="100%"
            height="100%"
            frameBorder="0"
            data-processing-key="calendly-inline-widget"
          ></iframe>
        </div>
      </div>
    </section>
  )
} 
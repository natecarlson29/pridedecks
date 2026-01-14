import ServiceCard from './ServiceCard'

// SVG Icon Components
const WoodIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM4 21a1 1 0 011-1h14a1 1 0 011 1v0a1 1 0 01-1 1H5a1 1 0 01-1-1v0z" />
  </svg>
)

const CompositeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
)

const RepairIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

const WindowIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M12 3.75v16.5m-6.75-8.25h13.5" />
  </svg>
)

const SidingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
)

const GutterIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

export default function Services() {
  const deckingServices = [
    {
      title: 'New Wood Decks',
      description: 'Custom-designed wood decks built with premium lumber. Traditional beauty meets modern construction techniques for lasting durability.',
      icon: <WoodIcon />,
      image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&q=80',
    },
    {
      title: 'Composite Decks',
      description: 'Low-maintenance composite decking that looks beautiful year after year. Resistant to fading, staining, and mold.',
      icon: <CompositeIcon />,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
    {
      title: 'Deck Repairs',
      description: 'Expert repairs and restoration to bring your existing deck back to life. From board replacement to complete structural repair.',
      icon: <RepairIcon />,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
    },
  ]

  const exteriorServices = [
    {
      title: 'Window Replacement',
      description: 'Energy-efficient window installation that improves comfort and reduces utility bills. Professional fitting and finishing.',
      icon: <WindowIcon />,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
    {
      title: 'Siding Installation',
      description: 'Transform your home\'s exterior with quality siding. Multiple materials and styles to match your vision.',
      icon: <SidingIcon />,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    },
    {
      title: 'Gutters',
      description: 'Seamless gutter installation and repair. Protect your home\'s foundation with properly functioning drainage.',
      icon: <GutterIcon />,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-pride-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pride-900 mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-pride-600 max-w-2xl mx-auto">
            From custom deck construction to complete exterior transformations,
            we deliver professional results with pride in every detail.
          </p>
        </div>

        {/* Decking Services */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-pride-800 mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-accent rounded-full"></span>
            Decking Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deckingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Exterior Services */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-pride-800 mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-accent rounded-full"></span>
            Exterior Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exteriorServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-pride-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not sure what you need?
          </h3>
          <p className="text-pride-300 mb-6 max-w-xl mx-auto">
            We offer free consultations to assess your project and provide honest recommendations
            tailored to your needs and budget.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

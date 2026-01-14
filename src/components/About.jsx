export default function About() {
  const values = [
    { title: 'Professional', description: 'Expert craftsmanship on every project' },
    { title: 'Reliable', description: 'Consistent quality you can count on' },
    { title: 'Integrity', description: 'Honest communication and fair pricing' },
    { title: 'Innovative', description: 'Modern solutions and techniques' },
    { title: 'Durable', description: 'Built to last for years to come' },
    { title: 'Excellence', description: 'Nothing less than our best work' },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Professional deck builders at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white px-6 py-4 rounded-xl shadow-lg hidden sm:block">
              <p className="font-bold text-lg">Father & Son Team</p>
              <p className="text-accent-light text-sm">Proudly Serving Omaha</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pride-900 mb-6">
              Proud Local
              <span className="text-accent block">Family Business</span>
            </h2>

            <p className="text-lg text-pride-600 mb-6 leading-relaxed">
              Pride Decks and Exteriors is a local, family-owned business built on
              the foundation of hard work and honest craftsmanship. As a father-son
              team, we take great pride in being on site each and every day — from
              start to finish.
            </p>

            <p className="text-lg text-pride-600 mb-8 leading-relaxed">
              We don't subcontract our work. When you hire Pride Decks, you get us —
              the people who care about your project as much as you do. We take pride
              in being good stewards of your hard-earned money, delivering exceptional
              results that stand the test of time.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-pride-50 rounded-lg p-4 border border-pride-100 hover:border-accent/30 transition-colors"
                >
                  <h3 className="font-semibold text-pride-800 mb-1">{value.title}</h3>
                  <p className="text-sm text-pride-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServiceCard({ title, description, icon, image }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-pride-100 hover:border-accent/30">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-accent">{icon}</span>
          <h3 className="text-xl font-bold text-pride-800">{title}</h3>
        </div>
        <p className="text-pride-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

import FolderCard from './FolderCard'

export default function CardGrid({ title, items }) {
  return (
    <section className="my-6 px-6">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <FolderCard key={index} icon={item.icon} title={item.title} link={item.link} />
        ))}
      </div>
    </section>
  )
}

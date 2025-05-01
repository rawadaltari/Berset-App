export function ContentSection({ title, content, icon: Icon }) {
    return (
      <section className="space-y-4">
        <div className="flex items-center gap-3 text-pink-800">
          {Icon && <Icon className="h-6 w-6" />}
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <p className="text-pink-800 leading-relaxed">{content}</p>
      </section>
    );
  }
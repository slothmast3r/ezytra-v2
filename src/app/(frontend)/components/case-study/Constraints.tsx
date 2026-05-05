export function Constraints({ items }: { items: string[] }) {
  return (
    <div className="cs-challenge__constraints">
      {items.map((text) => (
        <div key={text} className="cs-constraint">
          — {text}
        </div>
      ))}
    </div>
  )
}

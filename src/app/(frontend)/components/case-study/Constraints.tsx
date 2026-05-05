export function Constraints({ items }: { items: string[] }) {
  return (
    <div className="cs-challenge__constraints">
      {items.map((text, j) => (
        <div key={j} className="cs-constraint">
          — {text}
        </div>
      ))}
    </div>
  )
}

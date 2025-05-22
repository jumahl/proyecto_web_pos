import '../styles/PlanCard.css'

export default function PlanCard({ title, price, features }) {
  return (
    <div className="plan-card">
      <h3>{title}</h3>
      <p className="plan-price">{price}</p>
      <p className="plan-renew">Renovación automática, cancela cuando quieras.</p>
      <ul className="plan-features">
        {features.map((f, i) => (
          <li key={i}>✔{f}</li>
        ))}
      </ul>
      <button className="plan-btn">Adquirir Plan</button>
    </div>
  )
}

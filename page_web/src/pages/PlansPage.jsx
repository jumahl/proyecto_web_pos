import Navbar from '../components/Navbar'
import PlanCard from '../components/PlanCard'
import '../styles/PlansPage.css'

const plans = [
  {
    title: 'Plan Basico Mensual',
    price: 'COL$ 40.000',
    features: [
      'Capacidad de 250 productos',
      'Disponible solo la aplicacion de escritorio'
    ]
  },
  {
    title: 'Plan Medio Mensual',
    price: 'COL$ 60.000',
    features: [
      'Capacidad de 500 productos',
      'Disponible solo la aplicacion de escritorio'
    ]
  },
  {
    title: 'Plan Pro Mensual',
    price: 'COL$ 200.000',
    features: [
      'Capacidad de productos ilimitados',
      'Disponible solo la aplicacion de escritorio',
      'Soporte prioritario'
    ]
  }
]

export default function PlansPage() {
  return (
    <>
      <Navbar />
      <div className="plans-bg">
        <div className="plans-container">
          {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </>
  )
}

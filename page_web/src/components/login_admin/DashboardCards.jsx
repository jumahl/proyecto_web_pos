import React from 'react';
import '../../styles/login_admin/dashboardStyles.css';

const cards = [
  { icon: '📋', value: 100, label: 'Empresas Registradas' },
  { icon: '✔️', value: 100, label: 'Suscripciones Activas' },
  { icon: '⏰', value: 100, label: 'Suscripciones en Mora' },
  { icon: '⛔', value: 100, label: 'Suscripciones Canceladas' }
];

const DashboardCards = () => (
  <div className="dashboard-cards">
    {cards.map((card, idx) => (
      <div className="dashboard-card" key={idx}>
        <div className="dashboard-card-icon">{card.icon}</div>
        <div className="dashboard-card-value">{card.value}</div>
        <div className="dashboard-card-label">{card.label}</div>
      </div>
    ))}
  </div>
);

export default DashboardCards;

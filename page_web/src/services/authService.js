const API_URL = import.meta.env.VITE_API_URL;

// Login empresa
export async function loginCompany(email, password) {
  const res = await fetch(`${API_URL}/auth/login/company`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

// Registro empresa
export async function registerCompany(data) {
  const res = await fetch(`${API_URL}/auth/register/company`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

// Login administrador
export async function loginAdmin(email, password) {
  const res = await fetch(`${API_URL}/auth/login/admin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

// Registro administrador
export async function registerAdmin(data) {
  const res = await fetch(`${API_URL}/auth/register/admin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}
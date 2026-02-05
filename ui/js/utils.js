const API_BASE = window.API_BASE || 'http://localhost:3000/api';

const fetchJson = async (endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
};

const formatDate = (value) => {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString();
};

const renderEmptyState = (target, message) => {
  target.innerHTML = `<div class="empty-state">${message}</div>`;
};

window.uiUtils = {
  fetchJson,
  formatDate,
  renderEmptyState,
};

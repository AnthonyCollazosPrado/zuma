import apiClient from './api.js';

export const simulationService = {
  generate(data, params = { page: 1, per_page: 10 }) {
    return apiClient.post('/simulation/generate', data, { params });
  },
  getAvailableTerms(property_id) {
    return apiClient.get(`/property/${property_id}/show`);
  },
  getSimulateByAmount(payload) {
    return apiClient.post('/investments/simulate-by-amount', payload);
  },
  getPaymentFrecuencies() {
    return apiClient.get('/investments/payment-frequencies');
  },
  getGenerateSchedule(payload) {
    return apiClient.post('/investments/generate-schedule', payload);
  }
};

import apiClient from './apiClient';
import { ENDPOINTS } from './endpoints';

export const getClientProfile = async () => {
  const response = await apiClient.get(ENDPOINTS.CLIENT.ME);
  return response.data;
};

export const getOnboardingStatus = async () => {
  const response = await apiClient.get(ENDPOINTS.CLIENT.ONBOARDING);
  return response.data;
};

export const getClientJobs = async () => {
  const response = await apiClient.get(ENDPOINTS.CLIENT.JOBS);
  return response.data;
};

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

export const createJob = async (jobData) => {
  const response = await apiClient.post(ENDPOINTS.JOBS.CREATE, jobData);
  return response.data;
};

export const getCategories = async () => {
  const response = await apiClient.get(ENDPOINTS.CATEGORIES);
  return response.data;
};

export const getSkills = async () => {
  const response = await apiClient.get(ENDPOINTS.SKILLS);
  return response.data;
};

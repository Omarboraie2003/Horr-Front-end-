export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  USER: {
    PROFILE: '/user/profile',
  },
  CLIENT: {
    ME: '/client/me',
    ONBOARDING: '/client/onboarding',
    JOBS: '/client/jobs',
  },
  USER_PROFILE: {
    BASE: '/UserProfile',
    UPDATE_NAME: '/UserProfile/name',
    UPDATE_EMAIL: '/UserProfile/email',
    UPDATE_LOCATION: '/UserProfile/location',
    PAYMENT_METHOD: '/UserProfile/payment-method',
  },
  BILLING: {
    WALLET_BALANCE: '/Billing/wallet-balance',
  },
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    CHANGE_PASSWORD: '/auth/change-password',
  },
  JOBS: {
    CREATE: '/Jobs/create-job',
    LIST: '/Jobs/jobs',
  },
  CATEGORIES: '/Categories',
  SKILLS: '/Skills',
};

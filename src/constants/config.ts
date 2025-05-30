export const DOMAIN = typeof window !== 'undefined' ? window.location.origin : '';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const FE_BASE_URL = process.env.NEXT_PUBLIC_FE_BASE_URL || DOMAIN;
export const MANUAL_TOKEN = process.env.NEXT_PUBLIC_MANUAL_TOKEN;

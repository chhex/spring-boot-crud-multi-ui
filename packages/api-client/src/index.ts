// Types and schemas
export {
  ClientSchema,
  ClientsSchema,
  ClientUpsertSchema,
  TenantInfoSchema,
  type Client,
  type ClientUpsert,
  type TenantInfo,
} from './schemas.js';

// Client API functions
export {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from './clients.js';

// Tenant API functions
export { getTenantInfo } from './tenantInfo.js';

// HTTP utilities (for advanced use)
export { API_BASE, requestJson } from './http.js';

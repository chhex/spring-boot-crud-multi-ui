import * as v from 'valibot';
import { API_BASE } from './http.js';
import { TenantInfoSchema } from './schemas.js';

export async function getTenantInfo() {
  const res = await fetch(`${API_BASE}/tenantInfo`, { credentials: 'include' });
  if (!res.ok) throw new Error(`Tenant load failed: ${res.status}`);
  const data: unknown = await res.json();
  return v.parse(TenantInfoSchema, data);
}

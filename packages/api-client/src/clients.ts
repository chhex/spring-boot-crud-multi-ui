import * as v from 'valibot';
import { API_BASE, requestJson } from './http.js';
import {
  ClientSchema,
  ClientsSchema,
  ClientUpsertSchema,
  type ClientUpsert,
} from './schemas.js';

export function getClients() {
  return requestJson(ClientsSchema, `${API_BASE}/clients`);
}

export function getClient(id: number) {
  return requestJson(ClientSchema, `${API_BASE}/clients/${id}`);
}

export function createClient(input: ClientUpsert) {
  v.parse(ClientUpsertSchema, input);
  return requestJson(ClientSchema, `${API_BASE}/clients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
}

export function updateClient(id: number, input: ClientUpsert) {
  v.parse(ClientUpsertSchema, input);
  return requestJson(ClientSchema, `${API_BASE}/clients/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
}

export async function deleteClient(id: number) {
  const r = await fetch(`${API_BASE}/clients/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!r.ok) throw new Error(`Delete failed (${r.status})`);
}

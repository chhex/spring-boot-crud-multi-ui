import * as v from 'valibot';

// Client schemas
export const ClientSchema = v.object({
  id: v.number(),
  name: v.string(),
  email: v.string(),
});
export type Client = v.InferOutput<typeof ClientSchema>;

export const ClientsSchema = v.array(ClientSchema);

export const ClientUpsertSchema = v.object({
  name: v.string(),
  email: v.pipe(v.string(), v.email()),
});
export type ClientUpsert = v.InferOutput<typeof ClientUpsertSchema>;

// Tenant schemas
export const TenantInfoSchema = v.object({
  tenantDisplay: v.string(),
  clientCount: v.optional(v.number()),
});
export type TenantInfo = v.InferOutput<typeof TenantInfoSchema>;

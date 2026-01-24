import * as v from 'valibot';

export const API_BASE = '/api';

export async function requestJson<TSchema extends v.GenericSchema>(
  schema: TSchema,
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<v.InferOutput<TSchema>> {
  const r = await fetch(input, { credentials: 'include', ...init });

  if (!r.ok) {
    let message = `Request failed (${r.status})`;

    // Try to extract ProblemDetail detail/title from response body
    try {
      const text = await r.text();
      if (text.trim()) {
        try {
          const err = JSON.parse(text);
          if (typeof err?.detail === 'string' && err.detail.trim()) {
            message = err.detail;
          } else if (typeof err?.title === 'string' && err.title.trim()) {
            message = err.title;
          }
        } catch {
          // Not JSON, use plain text
          message = text;
        }
      }
    } catch {
      // ignore read errors
    }

    throw new Error(message);
  }

  const data: unknown = await r.json();
  return v.parse(schema, data);
}

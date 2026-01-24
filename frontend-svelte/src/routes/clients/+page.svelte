<script lang="ts">
	import { onMount } from 'svelte';
	import { getClients, deleteClient, type Client } from '@multiui/api-client';

	let clients = $state<Client[]>([]);
	let loading = $state(true);
	let error = $state<string | null>(null);
	let deletingId = $state<number | null>(null);

	onMount(async () => {
		try {
			clients = await getClients();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load clients';
		} finally {
			loading = false;
		}
	});

	async function handleDelete(client: Client) {
		if (!confirm(`Delete client "${client.name}"?`)) return;

		const prev = clients;
		deletingId = client.id;
		clients = clients.filter((c) => c.id !== client.id);

		try {
			await deleteClient(client.id);
		} catch {
			clients = prev;
		} finally {
			deletingId = null;
		}
	}
</script>

<svelte:head>
	<title>Clients - Svelte CRUD</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Clients</h1>

{#if loading}
	<div class="text-gray-600">Loading clients...</div>
{:else if error}
	<div class="text-red-600 bg-red-50 border border-red-200 rounded p-4">
		Error: {error}
	</div>
{:else}
	<div class="overflow-x-auto rounded-lg border border-gray-300 bg-white shadow-sm">
		<table class="min-w-full border-collapse text-sm">
			<thead class="bg-gray-100 text-left font-semibold text-gray-800">
				<tr>
					<th class="border-b border-gray-300 px-6 py-3">Name</th>
					<th class="border-b border-gray-300 px-6 py-3">Email</th>
					<th class="border-b border-gray-300 px-6 py-3 text-right">Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each clients as client, idx (client.id)}
					{@const isDeleting = deletingId === client.id}
					<tr class={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
						<td class="border-b border-gray-200 px-6 py-3 text-gray-900">{client.name}</td>
						<td class="border-b border-gray-200 px-6 py-3 text-gray-700">{client.email}</td>
						<td class="border-b border-gray-200 px-6 py-3 text-right">
							<button
								class="text-red-600 hover:text-red-700 font-medium disabled:opacity-60"
								onclick={() => handleDelete(client)}
								disabled={isDeleting}
								title="Delete"
							>
								{isDeleting ? 'Deleting...' : 'Delete'}
							</button>
						</td>
					</tr>
				{:else}
					<tr>
						<td colspan="3" class="px-6 py-6 text-gray-600">
							No clients yet.
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

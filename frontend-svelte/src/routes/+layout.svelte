<script lang="ts">
	import '../app.css';
	import { getTenantInfo, type TenantInfo } from '@multiui/api-client';
	import { onMount } from 'svelte';

	let { children } = $props();
	let tenantInfo = $state<TenantInfo | null>(null);

	onMount(async () => {
		try {
			tenantInfo = await getTenantInfo();
		} catch {
			// ignore tenant info errors
		}
	});
</script>

<svelte:head>
	<title>Clients - Svelte CRUD</title>
</svelte:head>

<div class="min-h-screen bg-gray-200 text-gray-900 flex flex-col">
	<main class="flex-1 container mx-auto p-6">
		{@render children()}
	</main>

	<footer class="text-sm text-gray-500 text-center py-4 flex items-center justify-center gap-3">
		&copy; {new Date().getFullYear()} Christoph Henrici &middot; Spring + Svelte CRUD Demo
		{#if tenantInfo}
			<span class="hidden sm:inline">&middot;</span>
			<span class="inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700">
				{tenantInfo.name} ({tenantInfo.clientCount} clients)
			</span>
		{/if}
	</footer>
</div>

<script>
	import HeaderBar from "$lib/components/header-bar.svelte";
</script>

<HeaderBar text="Dit is tekst" />

<div class="content-card bg-white p-5">
	<h2 class="text-2xl text-center mb-5">
		Welkom bij clubkas
	</h2>
	<p class="text-base">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus ut est suscipit sollicitudin. Suspendisse pulvinar venenatis arcu ut vehicula. Donec tristique volutpat magna. Nullam a sollicitudin nulla. Curabitur condimentum aliquam dictum. Aenean quis aliquam turpis. Donec sit amet sollicitudin ligula. Nunc sollicitudin euismod libero, ut faucibus risus mollis quis. Maecenas porttitor est quis massa pharetra, egestas varius enim vestibulum. 
	</p>
	<form>
		<div class="form-item flex flex-col">
			<label for="name">Name</label>
			<input type="text" name="name" class="bg-gray-100 max-w-sm" />
		</div>
	</form>
</div>
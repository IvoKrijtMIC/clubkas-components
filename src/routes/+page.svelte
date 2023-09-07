<script>
	import FooterCard from "$lib/components/footer-card.svelte";
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
	<form class="my-5 flex gap-5 flex-col">
		<div class="form-item flex flex-col gap-2">
			<label for="name" class="block text-base font-medium leading-6 text-gray-900">Naam</label>
			<div class="input max-w-sm">
				<input type="text" name="name" class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-mic" placeholder="" />
			</div>
		</div>
		<div class="form-item flex flex-col gap-2">
			<label for="tel" class="block text-base font-medium leading-6 text-gray-900">Mobiel nummer</label>
			<div class="input max-w-sm">
				<input type="tel" name="tel" class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-mic" placeholder="" />
			</div>
		</div>
		<div class="form-item flex flex-col gap-2">
			<label for="email" class="block text-base font-medium leading-6 text-gray-900">E-mailadres</label>
			<div class="input max-w-sm">
				<input type="email" name="email" class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-mic" placeholder="" />
			</div>
		</div>
		<div class="form-item flex flex-col gap-2 mt-2">
			<div class="button w-full flex justify-center">
				<input type="submit" class="w-full max-w-sm rounded-md bg-dark-pink-mic px-5 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-light-pink-mic hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-pink-mic"  />
			</div>
		</div>
	</form>
</div>

<FooterCard>
	
</FooterCard>
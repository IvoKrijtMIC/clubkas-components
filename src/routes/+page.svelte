<script>
	import FooterCard from '$lib/components/footer-card.svelte';
	import HeaderBar from '$lib/components/header-bar.svelte';
</script>

<HeaderBar text="Dit is tekst" />

<div class="content-card bg-white p-5">
	<h2 class="text-2xl text-center mb-5 max-w-sm">Welkom bij clubkas</h2>
	<p class="text-base max-w-sm">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus ut est suscipit
		sollicitudin. Suspendisse pulvinar venenatis arcu ut vehicula. Donec tristique volutpat magna.
		Nullam a sollicitudin nulla. Curabitur condimentum aliquam dictum. Aenean quis aliquam turpis.
		Donec sit amet sollicitudin ligula. Nunc sollicitudin euismod libero, ut faucibus risus mollis
		quis. Maecenas porttitor est quis massa pharetra, egestas varius enim vestibulum.
	</p>
	<form class="my-5 flex gap-5 flex-col max-w-sm">
		<div class="form-item flex flex-col gap-2">
			<div class="label flex justify-between max-w-sm">
				<label for="name" class="block text-base font-medium leading-6 text-gray-900">Naam</label>
				<p class="block text-sm font-light leading-6 text-gray-600">Verplicht</p>
			</div>
			<div class="input max-w-sm">
				<input
					type="text"
					name="name"
					class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-blue-mic"
					placeholder=""
					required
				/>
			</div>
		</div>
		<div class="form-item flex flex-col gap-2">
			<div class="label flex justify-between max-w-sm">
				<label for="tel" class="block text-base font-medium leading-6 text-gray-900"
					>Mobiel nummer</label
				>
				<p class="block text-sm font-light leading-6 text-gray-600">Verplicht</p>
			</div>
			<div class="input max-w-sm">
				<input
					type="tel"
					name="tel"
					class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-blue-mic"
					placeholder="0612345678"
					required
				/>
			</div>
		</div>
		<div class="form-item flex flex-col gap-2">
			<label for="email" class="block text-base font-medium leading-6 text-gray-900"
				>E-mailadres</label
			>
			<div class="input max-w-sm">
				<input
					type="email"
					name="email"
					class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-blue-mic"
					placeholder="mail@mail.com"
				/>
			</div>
		</div>
		<div class="form-item flex gap-2 mt-2 items-baseline">
			<div class="relative flex gap-x-3">
				<div class="flex h-6 items-center">
					<input
						id="comments"
						name="comments"
						type="checkbox"
						class="h-4 w-4 rounded border-gray-300 text-blue-mic focus:ring-blue-mic"
						required
					/>
				</div>
				<div class="text-base leading-6">
					<label for="comments" class="font-medium text-gray-900">Privacy</label>
					<p class="text-gray-500 text-sm">Ik ga akkoord met de privacyverklaring</p>
				</div>
			</div>
		</div>
		<div class="form-item flex flex-col gap-2 mt-2">
			<div class="button w-full flex justify-center max-w-sm">
				<input
					type="submit"
					class="w-full max-w-sm rounded-md bg-dark-pink-mic px-5 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-light-pink-mic hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-pink-mic"
				/>
			</div>
		</div>
	</form>
</div>

<FooterCard>
	<a
		class="link flex gap-2 items-center"
		href="https://www.mobileinteractioncompany.com/clubkas"
		target="_blank"
	>
		<svg
			class="w-7 h-auto text-dark-pink-mic flex-shrink-0"
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="56.000000pt"
			height="56.000000pt"
			viewBox="0 0 56.000000 56.000000"
			preserveAspectRatio="xMidYMid meet"
		>
			<g
				transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)"
				fill="currentColor"
				stroke="none"
			>
				<path
					d="M227 549 c-61 -15 -112 -45 -154 -93 -98 -111 -86 -278 28 -380 176 -159 459 -24 452 215 -4 160 -174 295 -326 258z m163 -72 c86 -44 135 -154 110 -249 -39 -147 -191 -216 -325 -148 -91 47 -140 155 -115 252 40 150 190 216 330 145z"
				/>
				<path
					d="M263 443 c-15 -6 -17 -49 -3 -58 20 -12 50 6 50 30 0 18 -21 40 -33 34 -1 0 -8 -3 -14 -6z"
				/>
				<path d="M250 225 l0 -115 30 0 30 0 0 115 0 115 -30 0 -30 0 0 -115z" />
			</g>
		</svg>
		Meer over clubkas
	</a>
	<a
		class="link flex gap-2 items-center"
		href="https://www.mobileinteractioncompany.com/privacyverklaring"
		target="_blank"
	>
		<svg
			class="w-7 h-auto text-dark-pink-mic flex-shrink-0"
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="56.000000pt"
			height="56.000000pt"
			viewBox="0 0 56.000000 56.000000"
			preserveAspectRatio="xMidYMid meet"
		>
			<g
				transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)"
				fill="currentColor"
				stroke="none"
			>
				<path
					d="M227 549 c-61 -15 -112 -45 -154 -93 -98 -111 -86 -278 28 -380 176 -159 459 -24 452 215 -4 160 -174 295 -326 258z m163 -72 c86 -44 135 -154 110 -249 -39 -147 -191 -216 -325 -148 -91 47 -140 155 -115 252 40 150 190 216 330 145z"
				/>
				<path
					d="M263 443 c-15 -6 -17 -49 -3 -58 20 -12 50 6 50 30 0 18 -21 40 -33 34 -1 0 -8 -3 -14 -6z"
				/>
				<path d="M250 225 l0 -115 30 0 30 0 0 115 0 115 -30 0 -30 0 0 -115z" />
			</g>
		</svg>
		Privacy verklaring
	</a>
</FooterCard>

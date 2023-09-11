<h2 class="text-2xl text-center mb-5">Welkom bij clubkas</h2>
<p class="text-base">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae risus ut est suscipit
	sollicitudin. Suspendisse pulvinar venenatis arcu ut vehicula. Donec tristique volutpat magna.
	Nullam a sollicitudin nulla. Curabitur condimentum aliquam dictum. Aenean quis aliquam turpis.
	Donec sit amet sollicitudin ligula. Nunc sollicitudin euismod libero, ut faucibus risus mollis
	quis. Maecenas porttitor est quis massa pharetra, egestas varius enim vestibulum.
</p>
<form class="my-5 flex gap-5 flex-col">
	<div class="form-item flex flex-col gap-2">
		<div class="label flex justify-between">
			<label for="name" class="block text-base font-medium leading-6 text-gray-900">Naam</label>
			<label for="name" class="block text-sm font-light leading-6 text-gray-600">Verplicht</label>
		</div>
		<div class="input">
			<input type="text" name="name" class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 accent-dark-pink-mic placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-pink-mic" placeholder="" />
		</div>
	</div>
	<div class="form-item flex flex-col gap-2">
		<div class="label flex justify-between">
			<label for="tel" class="block text-base font-medium leading-6 text-gray-900"
				>Mobiel nummer</label
			>
			<p class="block text-sm font-light leading-6 text-gray-600">Verplicht</p>
		</div>
		<div class="input">
			<input
				type="tel"
				name="tel"
				class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 accent-dark-pink-mic placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-pink-mic"
				placeholder="0612345678"
				required
			/>
		</div>
	</div>
	<div class="form-item flex flex-col gap-2">
		<label for="email" class="block text-base font-medium leading-6 text-gray-900"
			>E-mailadres</label
		>
		<div class="input">
			<input
				type="email"
				name="email"
				class="w-full py-1.5 px-2 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 accent-dark-pink-mic placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-pink-mic"
				placeholder="mail@mail.com"
			/>
		</div>
	</div>
	<div class="form-item flex gap-2 mt-2">
		<div class="relative flex gap-3">
			<div class="flex h-6 items-center">
				<input
					name="privacy"
					type="checkbox"
					class="h-4 w-4 rounded border-gray-300 accent-dark-pink-mic focus:ring-dark-pink-mic"
					required
				/>
			</div>
			<div class="text-base leading-6">
				<label for="privacy" class="font-medium text-gray-900">Privacy</label>
				<p class="text-gray-500 text-sm">Ik ga akkoord met de privacyverklaring</p>
			</div>
		</div>
	</div>
	<div class="form-item flex flex-col gap-2 mt-2">
		<div class="button w-full flex justify-center">
			<input
				type="submit"
				class="w-full rounded-md bg-dark-pink-mic px-5 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-light-pink-mic hover:cursor-pointer"
			/>
		</div>
	</div>
</form>
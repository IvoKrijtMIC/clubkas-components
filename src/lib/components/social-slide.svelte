<script lang="ts">
	export let text: string;
	export let link: string;
	export let title: string;
	export let showExtra = true;
	export let showFb = true;
	export let showLi = true;
	export let showX = true;
	export let showMail = true;
	export let showCopy = true;
	export let showQR = false;

	function copyLink() {
		navigator.clipboard.writeText(link);
	}
	function showOthers() {
		document.getElementById('show-others')?.classList.toggle('hide');
		document.getElementById('show-buttons')?.classList.toggle('show');
		document.getElementById('hide-buttons')?.classList.toggle('show');
	}
</script>

<div class="social-slide">
	<div class="share-container relative flex justify-center items-center gap-2.5 z-10 bg-gray-100">
		<a
			class="share-button flex justify-center gap-2.5 p-5 bg-green-wa rounded-full text-white"
			href={'https://api.whatsapp.com/send?text=' + text}
		>
			<img
				alt="WhatsApp logo"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/KWF/Nederland+geeft+licht/Middel+1%404x.png"
				class="w-7"
			/>
			<span>Deel via WhatsApp</span>
		</a>
		{#if showExtra}
			<button
				class="share-more show p-2 items-center h-fit bg-gray-400 rounded-full hover:cursor-pointer"
				on:click={showOthers}
				id="show-buttons"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="#000000"
					viewBox="0 0 256 256"
				>
					<rect width="256" height="256" fill="none" />
					<path
						d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,192,116ZM64,116a12,12,0,1,0,12,12A12,12,0,0,0,64,116Z"
					/>
				</svg>
			</button>
		{/if}
		<button
			class="share-more p-2 items-center h-fit bg-gray-400 rounded-full hover:cursor-pointer"
			on:click={showOthers}
			id="hide-buttons"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				fill="#000000"
				viewBox="0 0 256 256"
			>
				<rect width="256" height="256" fill="none" />
				<path
					d="M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"
				/>
			</svg>
		</button>
	</div>
	{#if showExtra}
		<div
			class="show-others relative flex justify-center gap-2 my-2 mr-11 z-0 opacity-100 hide"
			id="show-others"
		>
			{#if showFb}
				<a
					class="fb-share block"
					href={'https://www.facebook.com/sharer/sharer.php?u=' + link}
					target="_blank"
				>
					<img
						class="h-auto w-10"
						src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/Facebook+share.png"
						alt="Via Facebook delen"
					/>
				</a>
			{/if}
			{#if showLi}
				<a
					class="li-share"
					href={'https://www.linkedin.com/shareArticle?mini=true&url=' + link + '&title=' + title}
					target="_blank"
				>
					<img
						class="h-auto w-10"
						src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/LinkedIn+share.png"
						alt="Via LinkedIn delen"
					/>
				</a>
			{/if}
			{#if showX}
				<a
					class="x-share"
					href={'https://twitter.com/intent/tweet?text=' + text + link}
					target="_blank"
				>
					<img
						class="h-auto w-10"
						src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/x-logo-white.png"
						alt="Via E-mail delen"
					/>
				</a>
			{/if}
			{#if showMail}
				<a
					class="mail-share"
					href={'mailto:?subject=' + title + '&body=' + text + ' ' + link}
					target="_blank"
				>
					<img
						class="h-auto w-10"
						src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/E-mail+share.png"
						alt="Via E-mail delen"
					/>
				</a>
			{/if}
			{#if showCopy}
				<button
					data-tip="Deellink gekopieerd"
					class="copyurl-share cursor-pointer"
					on:click={copyLink}
				>
					<img
						class="h-auto w-10"
						src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/Link+share.png"
						alt="Kopieer je deellink"
					/>
				</button>
			{/if}
			{#if showQR}
				<a class="qr-share" href="">
					<img
						class="h-auto w-10"
						src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/Hartstichting/QR.png"
						alt="Via E-mail delen"
					/>
				</a>
			{/if}
		</div>
	{/if}
</div>

<style>
	.share-more {
		display: none;
	}
	.share-more.show {
		display: flex;
	}
	.show-others {
		transition: opacity 0.75s ease-in-out 0.75s, margin-top 0.75s ease-in-out 0s;
	}
	.show-others.hide {
		opacity: 0;
		margin-top: -2.5rem;
		transition: opacity 0.75s ease-in-out 0s, margin-top 0.75s ease-in-out 0.75s;
	}
</style>

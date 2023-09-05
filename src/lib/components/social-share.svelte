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
</script>

<div class="social-share">
	<div class="share-container relative flex justify-center items-center gap-2.5 z-10">
		<a class="share-button flex justify-center gap-2.5 p-5 bg-green-wa rounded-full text-white" href={"https://api.whatsapp.com/send?text=" + text + link}>
			<img
				alt="WhatsApp logo"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/KWF/Nederland+geeft+licht/Middel+1%404x.png"
				class="w-7"
			/>
			<span>Deel via WhatsApp</span>
		</a>
	</div>
	{#if showExtra}
		<div
			class="show-others relative flex justify-center gap-2 my-2 z-0 opacity-100 hide"
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
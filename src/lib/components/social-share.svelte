<script lang="ts">
	export let text: string;
	export let link: string;
	export let title: string;
	function copyLink() {
		navigator.clipboard.writeText(link);
	}
</script>

<div class="social-slide">
	<div class="slide-container relative flex justify-center items-center gap-2.5 z-10">
		<a class="slide-button flex justify-center gap-2.5 p-5 bg-green-wa rounded-full text-white" href={"https://api.whatsapp.com/send?text=" + text + link}>
			<img
				alt="WhatsApp logo"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/KWF/Nederland+geeft+licht/Middel+1%404x.png"
				class="w-7"
			/>
			<span>Deel via WhatsApp</span>
		</a>
	</div>
	<div
		class="extra-buttons relative flex justify-center gap-2 my-2 z-0 transition-all ease-in-out duration-1000"
		id="extra-buttons"
	>
		<a class="fb-share" href={"https://www.facebook.com/sharer/sharer.php?u=" + link} target="_blank">
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/Facebook+share.png"
				alt="Via Facebook delen"
			/>
		</a>
		<a class="li-share" href={"https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title} target="_blank">
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/LinkedIn+share.png"
				alt="Via LinkedIn delen"
			/>
		</a>
		<a class="x-share" href={"https://twitter.com/intent/tweet?text=" + text + link} target="_blank">
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/x-logo-white.png"
				alt="Via E-mail delen"
			/>
		</a>
		<a class="mail-share" href={"mailto:?subject=" + title + "&body=" + text + " " + link} target="_blank">
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/E-mail+share.png"
				alt="Via E-mail delen"
			/>
		</a>
		<button data-tip="Deellink gekopieerd" class="copyurl-share cursor-pointer" on:click={copyLink}>
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/Link+share.png"
				alt="Kopieer je deellink"
			/>
		</button>
		<a class="qr-share" href="">
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/Hartstichting/QR.png"
				alt="Via E-mail delen"
			/>
		</a>
	</div>
</div>
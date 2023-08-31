<script lang="ts">
	export let text: string;
	export let link: string;
	export let title: string;
	function callWAApi() {
		window.location.assign('https://api.whatsapp.com/send?text=' + text);
	}
	function callFBApi() {
		window.location.assign('https://www.facebook.com/sharer/sharer.php?u=' + link);
	}
	function callLIApi() {
		window.location.assign(
			'https://www.linkedin.com/shareArticle?mini=true&url=' + link + '&title=' + title
		);
	}
	function callEmailApi() {
		window.location.assign('mailto:?subject=' + title + '&body=' + text + ' ' + link);
	}
	function copyLink() {
		navigator.clipboard.writeText(link);
	}
	function showOthers() {
		document.getElementById('show-others')?.classList.toggle('mt-2');
		document.getElementById('show-buttons')?.classList.toggle('show');
		document.getElementById('hide-buttons')?.classList.toggle('show');
	}
</script>

<div class="social-slide">
	<div class="slide-container relative flex justify-center items-center gap-2.5 z-10">
		<div class="slide-button flex justify-center gap-2.5 p-5 bg-green-wa rounded-full text-white">
			<img
				alt="WhatsApp logo"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/KWF/Nederland+geeft+licht/Middel+1%404x.png"
				class="w-7"
			/>
			<button on:click={callWAApi}>Deel via WhatsApp</button>
		</div>
		<button
			class="slide-more show p-2 items-center h-fit bg-gray-400 rounded-full hover:cursor-pointer"
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
		<button
			class="slide-more p-2 items-center h-fit bg-gray-400 rounded-full hover:cursor-pointer"
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
	<div
		class="show-others relative flex justify-center gap-2 mb-2 mr-11 -mt-10 z-0 transition-all ease-in-out duration-1000"
		id="show-others"
	>
		<button class="fb-share" on:click={callFBApi}>
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/Facebook+share.png"
				alt="Via Facebook delen"
			/>
		</button>
		<button class="li-share" on:click={callLIApi}>
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/LinkedIn+share.png"
				alt="Via LinkedIn delen"
			/>
		</button>
		<button class="mail-share" on:click={callEmailApi}>
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/E-mail+share.png"
				alt="Via E-mail delen"
			/>
		</button>
		<button data-tip="Deellink gekopieerd" class="copyurl-share cursor-pointer" on:click={copyLink}>
			<img
				class="h-auto w-10"
				src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Collecte+365+V2/Link+share.png"
				alt="Kopieer je deellink"
			/>
		</button>
	</div>
</div>

<style>
	.slide-more {
		display: none;
	}
	.slide-more.show {
		display: flex;
	}
</style>
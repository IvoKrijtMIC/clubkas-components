<script>
	import { HeaderBar, Footer } from '$lib/components';
	import ContentCard from '$lib/components/content-card.svelte';
	import '$lib/index.css';
</script>

<div class="content bg-blue-mic">
  	<HeaderBar></HeaderBar>
	<ContentCard>
		<slot />
	</ContentCard>
	<Footer privacyLabel="Privacy statement"></Footer>
</div>

<style>
	.content {
		background-image: url('https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/bergen+bos.jpg');
		background-position: center;
		background-size: cover;
	}
</style>
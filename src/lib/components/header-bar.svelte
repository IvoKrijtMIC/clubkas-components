<script lang="ts">
    export let size = '80px';
    export let src = 'https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/mic-logo.png';
    export let text: string;
</script>

<div class="header-bar pb-20 bg-dark-pink-mic text-white">
    <div class="header-logo p-5 bg-white text-black">
        <img alt="" {src} width="{size}" />
    </div>
    <div class="header-title text-center mt-20 text-3xl">
        {text}
    </div>
</div>
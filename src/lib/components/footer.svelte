<script lang="ts">
    export let privacyLink = 'https://www.mobileinteractioncompany.com/privacyverklaring';
    export let privacyLabel = 'Privacy verklaring';
</script>

<div class="footer-card p-5 flex justify-between bg-light-gray-mic">
    <div class="footer-item flex flex-col gap-2.5">
        <a
            class="home-page-link link flex items-center gap-2"
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
            class="privacy-link link flex gap-2 items-center"
            href={privacyLink}
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
            {privacyLabel}
        </a>
    </div>
    <div class="footer-item self-end">
        <a href="https://www.mobileinteractioncompany.com/">
            <img
                alt=""
                src="https://mic-production-upload-image-share.s3.eu-central-1.amazonaws.com/M.I.C/Powered_by_MIC.png"
                class="w-20 min-w-[5rem]"
            />
        </a>
    </div>
</div>
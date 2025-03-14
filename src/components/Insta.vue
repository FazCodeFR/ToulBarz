<script>
// Supprime les liens pub de ElfSight
document.addEventListener("DOMContentLoaded", function () {
    function removeElfsightLink() {
        const links = document.querySelectorAll('body > a[href*="elfsight.com"]');
        if (links.length > 0) {
            links.forEach(el => {
                el.remove();
            });
        } else {
        }
    }
    removeElfsightLink();
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.tagName === "A" && node.href.includes("elfsight.com")) {
                    node.remove(); // Supprime immédiatement le lien s'il apparaît
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
</script>

<template>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="pb-10 mt-2 text-4xl font-bold tracking-tight underline underline-offset-4 decoration-accent text-gray-900 sm:text-5xl text-center">
            Instagram
        </h2>
        <!-- <p class="pb-10  mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Retrouve-nous sur Instagram et partage tes performances avec nous !
        </p> -->
        <div class="elfsight-app-633bb5bb-c30f-488d-9697-1777a15ae963" data-elfsight-app-lazy></div>
      </div>
    </div>
</template>
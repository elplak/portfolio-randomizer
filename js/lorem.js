export async function getLoremCached(paragraphs = 1) {
    if (!window._loremCache) {
        try {
            const url = `https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text`;
            const res = await fetch(url);
            if (res.ok) {
                window._loremCache = (await res.text()).split("\n");
            }
        } catch (err) {
            console.warn("Bacon Ipsum API failed. Using fallback", err);
            window._loremCache = [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Praesent commodo cursus magna.",
                "Donec ullamcorper nulla non metus auctor fringilla."
            ];
        }
    }
    return window._loremCache.slice(0, paragraphs).join(" ");
}

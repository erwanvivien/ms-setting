const hash = window.location.hash;

if (hash) {
    window.location = (hash.slice(1));
}

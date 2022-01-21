function setContent(id, filename) {
    console.log(`div id ${id}, filename: ${filename}`);

    window.history.replaceState('', '', `/${filename}`);
    document.getElementById(id).src = `/${filename}`;
}
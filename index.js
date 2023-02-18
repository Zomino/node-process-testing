process.on('exit', () => console.log('goodbye world'));

let count = 0;

function executeFirst() {
    setImmediate(() => {
        import('./executeLater.js');
        import('./executeLater.js');
    });
    setImmediate(() => {
        import('./executeEvenLater.js');
    });

    return () => console.log(`hello world ${count++}`);
}

export default executeFirst();

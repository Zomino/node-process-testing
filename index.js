// This callback is only called when the event loop has nothing left to process
process.on('exit', () => console.log('goodbye world'));

let count = 0;

function executeFirst() {
    // These callbacks will be added to the event loop queue to be executed on the next iterations of the loop
    setImmediate(() => {
        // Importing the same file twice does not run the code twice
        import('./executeLater.js');
        import('./executeLater.js');
    });
    setImmediate(() => {
        import('./executeEvenLater.js');
    });

    // The count increases with each separate file that imports and executes this function
    return () => console.log(`hello world ${++count}`);
}

// The export of this file can be accessed in the other files even after this file has run to completion
// This is because the process does not end until the event loop completes execution of the queued callbacks
// The imported function in both of the other files will be the same reference
export default executeFirst();

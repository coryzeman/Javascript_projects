const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(question) {
    return new Promise(resolve => readline.question(question, resolve));
}

async function startCipher() {
    while (true) {
        const direction = await getInput("Type 'encode' to encrypt, 'decode' to decrypt: ");
        const text = await getInput("Type your message: ");
        const shift = parseInt(await getInput("Type the shift number: "), 10);

        caesarCipher(text, shift, direction);

        const restart = await getInput("Type 'yes' to go again, 'no' to exit: ");
        if (restart.toLowerCase() !== "yes") break;
    }

    readline.close();
}

startCipher();

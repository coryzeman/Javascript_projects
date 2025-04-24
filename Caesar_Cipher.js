const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function caesarCipher(originalText, shiftAmount, encodeOrDecode) {
    let outputText = "";
    if (encodeOrDecode === "decode") {
        shiftAmount *= -1;
    }

    for (let letter of originalText.toLowerCase()) {
        if (!alphabet.includes(letter)) {
            outputText += letter; // Keep non-alphabet characters unchanged
        } else {
            let shiftedPosition = (alphabet.indexOf(letter) + shiftAmount) % alphabet.length;
            if (shiftedPosition < 0) shiftedPosition += alphabet.length; // Handle negative shifts
            outputText += alphabet[shiftedPosition];
        }
    }

    document.getElementById("result").textContent = `Here is the ${encodeOrDecode}d result: ${outputText}`;
}

function runCipher() {
    const direction = document.getElementById("direction").value;
    const text = document.getElementById("text").value;
    const shift = parseInt(document.getElementById("shift").value, 10);

    if (!text || isNaN(shift)) {
        alert("Please enter a valid message and shift number.");
        return;
    }

    caesarCipher(text, shift, direction);
}

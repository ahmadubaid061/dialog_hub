const bakhti = document.getElementById('bakhti');
if (!bakhti) console.error("Element 'bakhti' not found");
const sound1 = new Audio('./bakhti.m4a');
sound1.addEventListener('error', () => console.error("Failed to load bakhti.m4a"));
bakhti.addEventListener('mouseenter', () => {
    sound1.currentTime = 0;
    sound1.play().catch(error => console.error("Error playing bakhti:", error));
});

const spenkhan = document.getElementById('spenkhan');
if (!spenkhan) console.error("Element 'spenkhan' not found");
const sound2 = new Audio('./spenkhan.m4a');
sound2.addEventListener('error', () => console.error("Failed to load spenkhan.m4a"));
spenkhan.addEventListener('mouseenter', () => {
    sound2.currentTime = 0;
    sound2.play().catch(error => console.error("Error playing spenkhan:", error));
});

const dawoodshah = document.getElementById('dawoodshah');
if (!dawoodshah) console.error("Element 'dawoodshah' not found");
const sound3 = new Audio('./dowoodshah.m4a'); // Fixed typo
sound3.addEventListener('error', () => console.error("Failed to load dawoodshah.m4a"));
dawoodshah.addEventListener('mouseenter', () => {
    sound3.currentTime = 0;
    sound3.play().catch(error => console.error("Error playing dawoodshah:", error));
});
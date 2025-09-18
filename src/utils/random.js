export function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function randomBool(prob = 0.5) {
    return Math.random() < prob;
}
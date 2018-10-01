export const delay = (ms) => new Promise(res => setTimeout(res, ms));
export const randInt = (max = 10000000007) => parseInt(Math.random() * max);
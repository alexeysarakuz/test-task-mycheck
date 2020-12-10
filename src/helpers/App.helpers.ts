interface CachedValues {
  number: number;
  value: boolean;
}

export const isPrime = (num: number) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const getCachedValues = () => {
  return localStorage.getItem("numbers") || JSON.stringify([]);
};

export const checkIfValueCached = (number: number, values: CachedValues[]) => {
  return values.filter((item) => item.number === number);
};

export const setCachedValues = (
  cached: any,
  number: number,
  value: boolean
) => {
  const newCache = [...cached, { number, value }];
  localStorage.setItem("numbers", JSON.stringify(newCache));
};

function arrayify<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  } else {
    return [item];
  }
}

export default {
  arrayify
};

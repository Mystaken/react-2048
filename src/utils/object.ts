interface Obj {
  [key: string]: any;
}

function eq(obj1: Obj | null, obj2: Obj | null): boolean {
  if (obj1 === null && obj2 === null) return true;
  if (obj1 === null || obj2 === null) return false;
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  return keys1.every(key => obj1[key] === obj2[key]);
}

export default { eq };

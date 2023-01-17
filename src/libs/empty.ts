export function emptyObject<T>(obj?: T): T {
  return obj ? obj : (Object.create(null) as T);
}
export function emptyArray<T>(arr?: T[]): T[] {
  return arr ? arr : new Array<T>(0);
}
export function emptyFunction(): void {
  // ignore
}

export function isEmptyObject(object: any): boolean {
  if (typeof object === 'object') {
    if (Object.keys(object).length > 0) return false;
  }
  return true;
}

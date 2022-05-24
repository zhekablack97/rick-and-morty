export class Loadash {
  compact(aray: any[]) {
    return aray.filter((val) => !!val);
  }
  groubBy(array: any[], prop: any) {
    return array.reduce((acc, i) => {
      const key = typeof prop === "function" ? prop(i) : i[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(i);
      return acc;
    }, {});
  }
}

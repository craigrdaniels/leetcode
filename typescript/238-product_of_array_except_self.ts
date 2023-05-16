function productExceptSelf(nums: number[]): number[] {
  var out: number[] = new Array(nums.length);

  for (let index: number = 0; index < nums.length; index++) {
    out[index] = nums.reduce((a, b, i) => {
      if (i === index) return a;
      if (index === 0 && i === 1) return b;
      return Math.imul(a, b);
    });
  }

  return out;
}

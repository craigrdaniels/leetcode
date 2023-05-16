function groupAnagrams(strs: string[]): string[][] {
  var out: string[][] = new Array();

  strs.forEach((str) => {
    var strArray: string[] = [str];
    strs
      .filter((s) => s !== str)
      .forEach((rem) => {
        if (isAnagram(str, rem)) {
          if (strArray.indexOf(rem) === -1) {
            strArray.push(rem);
          }
        }
      });
    var inArray: boolean = false;
    out.forEach((inner) => {
      if (isAnagram(strArray.toString(), inner.toString())) {
        inArray = true;
      }
    });
    if (inArray === false) {
      out.push(strArray);
    }
  });

  return out;
}

const isAnagram = (s: string, t: string) => {
  if (s.length !== t.length) return false;

  let countS = new Array(26).fill(0);
  let countT = new Array(26).fill(0);

  s.split("").forEach((x) => countS[x.charCodeAt(0) - 97]++);
  t.split("").forEach((x) => countT[x.charCodeAt(0) - 97]++);

  return countS.join("") === countT.join("");
};

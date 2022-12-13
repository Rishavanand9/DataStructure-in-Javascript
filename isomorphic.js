/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const newArr = [];
    for (let i = 0; i < s.length; i++) {
      const key = s[i],
        value = t[i];
  
      const newObj = { key: key, value: value };
  
      if (!newArr.some((item) => item.key === key && item.value !== value)) {
        newArr.push(newObj);
      }
    }
    const uniqValues = [...new Set(newArr.map((i) => i.value))];
    const uniqKeys = [...new Set(newArr.map((i) => i.key))];
  
    if (newArr.length === s.length && uniqKeys.length === uniqValues.length) {
      return true;
    }
    return false;
  };
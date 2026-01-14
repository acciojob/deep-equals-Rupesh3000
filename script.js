function deepEquals(a, b) {
  // Primitive values (including null, undefined)
  if (a === b) {
    // Handle +0 and -0
    return a !== 0 || b !== 0 || 1/a === 1/b;
  }
  
  // Handle NaN
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  
  // Different types or one is null/undefined
  if (typeof a !== typeof b || a === null || b === null || 
      a === undefined || b === undefined) {
    return false;
  }
  
  // Arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, index) => deepEquals(item, b[index]));
  }
  
  // Objects
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    
    if (keysA.length !== keysB.length) return false;
    
    return keysA.every(key => 
      keysB.includes(key) && deepEquals(a[key], b[key])
    );
  }
  
  return false;
}

module.exports=deepEquals;

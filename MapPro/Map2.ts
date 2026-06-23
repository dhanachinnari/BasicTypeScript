let M = new Map();

M.set(34, "Hello");
M.set(true, false);
M.set("Jack", "jill");
M.set(31564, 287954);
M.set("Village", "Hello");
M.set(3474, true);
M.set("Jack", "Bill");
M.set("yes", "No");
M.set(31544, 2585);

M.set(null, undefined);

//console.log(M)
console.log(M.get(null));

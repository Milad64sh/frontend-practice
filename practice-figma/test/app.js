let list = [1, 2, 3, 4, 5, 6, 7];
const arrayChange = () => {
  list.push(list.shift());
  console.log(list);
};
arrayChange();

// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
async function asyncFucntion() {
  const johnProfile = await getJohnProfile();
  console.log(johnProfile);
  const johnOrders = await getJohnOrders();
  console.log(johnOrders);
}

asyncFucntion();
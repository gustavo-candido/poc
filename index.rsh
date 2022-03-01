"reach 0.1";

const User = {
  getMsg: Fun([], Bytes(5)),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    // Specify Alice's interact interface here
    ...User,
    // ...hasConsoleLogger,
  });
  init();
  Alice.only(() => {
    const aliceMsg = declassify(interact.getMsg());
  });
  Alice.publish(aliceMsg);
  // Alice.interact.log({ aliceMsg });
  commit();

  exit();
});

"reach 0.1";

const User = {
  getNumber: Fun([], UInt),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    // Specify Alice's interact interface here
    ...User,
  });
  init();
  // The first one to publish deploys the contract
  Alice.publish();
  commit();

  Alice.only(() => {
    const aliceNumber = declassify(interact.getNumber());
  });

  Alice.publish(aliceNumber);
  commit();

  // write your program here
  exit();
});

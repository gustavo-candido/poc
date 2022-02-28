import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const User = (userNumber) => ({
  getNumber: () => userNumber,
});

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const accAlice = await stdlib.newTestAccount(startingBalance);
  const ctcAlice = accAlice.contract(backend);

  const beforeAlice = await getBalance(accAlice);

  await Promise.all([
    backend.Alice(ctcAlice, {
      // implement Alice's interact object here
      ...User(5),
    }),
  ]);

  const afterAlice = await getBalance(accAlice);

  console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
})();

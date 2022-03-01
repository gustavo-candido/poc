import { loadStdlib } from "@reach-sh/stdlib";
import { ask, yesno, done } from "@reach-sh/stdlib/ask.mjs";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const User = (userMsg) => ({
  getMsg: () => userMsg,
});

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

(async () => {
  stdlib.setProviderByName("TestNet");

  const mnemonic = await ask("Insert your wallet mnemonic: ", (x) => x);
  const accAlice = await stdlib.newAccountFromMnemonic(mnemonic);
  const beforeAlice = await getBalance(accAlice);

  const createNewContract = await ask("Create new contract ? (y/n)", yesno);

  let ctcAlice;

  if (createNewContract) {
    ctcAlice = accAlice.contract(backend);
    ctcAlice.getInfo().then((info) => {
      console.log("Contract id deployed: " + JSON.stringify(info));
    });
  } else {
    const ctcInfo = await ask("Contract info to attach: ", JSON.parse);

    console.log(ctcInfo);

    ctcAlice = accAlice.contract(backend, ctcInfo);
  }

  await Promise.all([
    backend.Alice(ctcAlice, {
      ...User("Hello"),
    }),
  ]);

  const afterAlice = await getBalance(accAlice);

  console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);

  done();
})();

import { loadStdlib, ask as stdlibAsk } from "@reach-sh/stdlib";
const { ask, yesno, done } = stdlibAsk;
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const User = (userMsg) => ({
  getMsg: () => userMsg,
});

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const getAccount = async (env) => {
  if (env === "ALGO") {
    // const mnemonic = await ask("Insert your wallet mnemonic: ", (x) => x);
    return await stdlib.newAccountFromMnemonic(
      "victory age enable hire blue vocal reason accident destroy female dignity panther syrup category shrug enforce safe foot slush wagon prosper mimic anger absorb dragon"
    );
  }

  // const secret = await ask(`What is your account secret?`, (x) => x);
  // return await stdlib.newAccountFromSecret(secret);
};

(async () => {
  stdlib.setProviderByName("TestNet");
  const accAlice = await getAccount("ALGO");

  const beforeAlice = await getBalance(accAlice);

  // const createNewContract = await ask("Create new contract ? (y/n)", yesno);

  let ctcAlice;

  // if (createNewContract) {
  ctcAlice = accAlice.contract(backend);
  ctcAlice.getInfo().then((info) => {
    console.log("Contract id deployed: " + JSON.stringify(info));
  });
  // } else {
  //   const ctcInfo = await ask("Contract info to attach: ", JSON.parse);

  //   console.log(ctcInfo);

  //   ctcAlice = accAlice.contract(backend, ctcInfo);
  // }

  await Promise.all([
    backend.Alice(ctcAlice, {
      ...User("Hello"),
    }),
  ]);

  const afterAlice = await getBalance(accAlice);

  console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);

  done();
})();

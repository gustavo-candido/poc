// @ts-nocheck

import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "../../build/index.main";

const stdlib = loadStdlib("ALGO-live");

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

export default class FingerprintController {
  constructor() {}
  async deployConsensus(msg) {
    stdlib.setProviderByName("TestNet");
    const accAlice = await getAccount("ALGO");
    const beforeAlice = await getBalance(accAlice);
    let ctcAlice;
    ctcAlice = accAlice.contract(backend);
    ctcAlice.getInfo().then((info) => {
      console.log("Contract id deployed: " + JSON.stringify(info));
    });
    await Promise.all([
      backend.Alice(ctcAlice, {
        ...User(msg),
      }),
    ]);
    const afterAlice = await getBalance(accAlice);
    console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
    ask.done();
  }
}

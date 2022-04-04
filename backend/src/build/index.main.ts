// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
// @ts-nocheck
export const _version = "0.1.9";
export const _versionHash = "0.1.9 (d3fd55fe)";
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;

  return {
    infos: {},
    views: {},
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0,
  };
}
export async function Alice(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Alice expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Alice expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, 64)
  );

  const v40 = stdlib.protect(ctc0, await interact.getMsg(), {
    at: "./index.rsh:15:48:application",
    fs: [
      "at ./index.rsh:14:13:application call to [unknown function] (defined at: ./index.rsh:14:17:function exp)",
    ],
    msg: "getMsg",
    who: "Alice",
  });

  const txn1 = await ctc.sendrecv({
    args: [v40],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify("./index.rsh:17:9:dot", stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:17:9:decimal",
        stdlib.UInt_max,
        0
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [v42],
        secs: v44,
        time: v43,
        didSend: v27,
        from: v41,
      } = txn1;

      sim_r.txns.push({
        kind: "halt",
        tok: undefined /* Nothing */,
      });
      sim_r.isHalt = true;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false,
  });
  const {
    data: [v42],
    secs: v44,
    time: v43,
    didSend: v27,
    from: v41,
  } = txn1;
  return;
}
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: [],
  },
  appApproval: `BiACAAEmAQAiNQAxGEEApChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARciEkQiNAESRDQESSISTDQCEhFESTUFNf+ABBbJk3w0/1CwgaCNBogAXEIAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: [],
};
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T0",
                "name": "v42",
                "type": "tuple"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T0",
                "name": "v42",
                "type": "tuple"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516104293803806104298339810160408190526100229161014e565b600080554360035560408051825181526020808401515180518284015201518183015290517fd65085cbdace39add8a62c9d38717ff6d005e1d31c933aa59231f755304fca589181900360600190a161007d34156007610099565b60008080556001819055610093906002906100c2565b50610215565b816100be5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546100ce906101da565b6000825580601f106100de575050565b601f0160209004906000526020600020908101906100fc91906100ff565b50565b5b808211156101145760008155600101610100565b5090565b604080519081016001600160401b038111828210171561014857634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561016157600080fd5b610169610118565b835181526040601f198301121561017f57600080fd5b6040519150602082016001600160401b03811183821017156101b157634e487b7160e01b600052604160045260246000fd5b6040526101bc610118565b60208581015182526040909501518186015282529283015250919050565b600181811c908216806101ee57607f821691505b6020821081141561020f57634e487b7160e01b600052602260045260246000fd5b50919050565b610205806102246000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212202dbe74ad8ae2b0f584fddcffddeedb2b7eadd001c6fe0e2961db7c6528a7a1b564736f6c634300080c0033`,
  BytecodeLen: 1065,
  Which: `oD`,
  version: 6,
  views: {},
};
export const _stateSourceMap = {
  1: {
    at: "./index.rsh:19:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
};
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH,
};
export const _Participants = {
  Alice: Alice,
};
export const _APIs = {};

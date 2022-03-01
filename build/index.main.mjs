// Automatically generated with Reach 0.1.8 (195b98ed)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (195b98ed)';
export const _backendVersion = 8;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  
  
  const v35 = stdlib.protect(ctc0, await interact.getMsg(), {
    at: './index.rsh:15:48:application',
    fs: ['at ./index.rsh:14:13:application call to [unknown function] (defined at: ./index.rsh:14:17:function exp)'],
    msg: 'getMsg',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v35],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:17:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:17:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v37], secs: v39, time: v38, didSend: v28, from: v36 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:17:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v37], secs: v39, time: v38, didSend: v28, from: v36 } = txn1;
  ;
  return;
  
  
  };
const _ALGO = {
  ABI: {
    sigs: []
    },
  appApproval: `BSACAAEmAQAiNQAxGEEA2ChkSSJbNQGBCFs1AjYaABdJQQAJIjUDIzUFQgC5NhoBFzYaAhc1AzYaAzUEIhJEIjQBEkQ0A0kiEkw0AhIRRChINARJFYEgEkRJNf9IgASIfSlANP9QsIGgjQZJQQA0NABJIwg1AExLATgIEkQjSwE4EBJEIksBOAESRDIDSwE4BhJEMgNLATggEkQyCksBOAcSREgisbIII7IQMgmyCTIKsgezIkgxGYEFEkRCAAAoNAEWNAIWUGc0BUEACoAEFR98dTQGULA0AEkjCDIEEkQxFhJEI0MiQzEZIhJEIjUBIjUCQv/J`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 9
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
                  }
                ],
                "internalType": "struct T0",
                "name": "v37",
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
                  }
                ],
                "internalType": "struct T0",
                "name": "v37",
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
  Bytecode: `0x608060405260405161041738038061041783398101604081905261002291610146565b600080554360035560408051825181526020808401515151908201527fbfa46e7171d0b704b47bf6adb358117e89eff4e985d157371dfe07ad2b799e32910160405180910390a161007534156007610091565b6000808055600181905561008b906002906100ba565b50610203565b816100b65760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546100c6906101c8565b6000825580601f106100d6575050565b601f0160209004906000526020600020908101906100f491906100f7565b50565b5b8082111561010c57600081556001016100f8565b5090565b604051602081016001600160401b038111828210171561014057634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303604081121561015957600080fd5b604080519081016001600160401b038111828210171561018957634e487b7160e01b600052604160045260246000fd5b604052835181526020601f19830112156101a257600080fd5b6101aa610110565b91506101b4610110565b602094850151815282529283015250919050565b600181811c908216806101dc57607f821691505b602082108114156101fd57634e487b7160e01b600052602260045260246000fd5b50919050565b610205806102126000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212203150778453733b288047d2d8b3af43a29175df92af6cd89718006cd2e199a29e64736f6c63430008090033`,
  BytecodeLen: 1047,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice
  };
export const _APIs = {
  };

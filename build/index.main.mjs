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
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:14:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:14:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v41, time: v40, didSend: v23, from: v39 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:14:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v41, time: v40, didSend: v23, from: v39 } = txn1;
  ;
  const v45 = stdlib.protect(ctc0, await interact.getNumber(), {
    at: './index.rsh:18:54:application',
    fs: ['at ./index.rsh:17:13:application call to [unknown function] (defined at: ./index.rsh:17:17:function exp)'],
    msg: 'getNumber',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v39, v45],
    evt_cnt: 1,
    funcNum: 1,
    lct: v40,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v47], secs: v49, time: v48, didSend: v34, from: v46 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:21:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v51 = stdlib.addressEq(v39, v46);
      stdlib.assert(v51, {
        at: './index.rsh:21:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
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
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v47], secs: v49, time: v48, didSend: v34, from: v46 } = txn2;
  ;
  const v51 = stdlib.addressEq(v39, v46);
  stdlib.assert(v51, {
    at: './index.rsh:21:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    sigs: []
    },
  appApproval: `BSADAAEIJgEAIjUAMRhBASUoZEkiWzUBJFs1AjYaABdJQQAJIjUDIzUFQgEHNhoBFzYaAhc1AzYaAzUESSMMQABSIxJEIzQBEkQ0A0kiEkw0AhIRRCOvZEk1/0g0BEkVJBJESRc1/kiABNUVGRQ0/hZQsDT/MQASRCKxsggjshAyCbIJMgqyB7MiSDEZgQUSREIAeUgiNAESRDQDSSISTDQCEhFEKEg0BEkVIhJESIAEXw2r+rCBoI0GSUEANDQASSMINQBMSwE4CBJEI0sBOBASRCJLATgBEkQyA0sBOAYSRDIDSwE4IBJEMgpLATgHEkRIMQAjr0sBVwAgZ0gjNQEyBjUCMRkiEkRCAAAoNAEWNAIWUGc0BUEACoAEFR98dTQGULA0AEkjCDIEEkQxFhJEI0MiQzEZIhJEIjUBIjUCQv/J`,
  appClear: `BYEA`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161069838038061069883398101604081905261002291610185565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a1610075341560076100c3565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100bb9291906100ec565b505050610228565b816100e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f8906101ed565b90600052602060002090601f01602090048101928261011a5760008555610160565b82601f1061013357805160ff1916838001178555610160565b82800160010185558215610160579182015b82811115610160578251825591602001919060010190610145565b5061016c929150610170565b5090565b5b8082111561016c5760008155600101610171565b60006040828403121561019757600080fd5b604080519081016001600160401b03811182821017156101c757634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101e157600080fd5b60208201529392505050565b600181811c9082168061020157607f821691505b6020821081141561022257634e487b7160e01b600052602260045260246000fd5b50919050565b610461806102376000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b61004761009036600461031b565b6100b8565b3480156100a157600080fd5b506100aa610203565b604051610064929190610333565b6100c8600160005414600a6102a0565b6100e2813515806100db57506001548235145b600b6102a0565b6000808055600280546100f490610390565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610390565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103c5565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101d1341560086102a0565b80516101e9906001600160a01b0316331460096102a0565b600080805560018190556101ff906002906102c5565b5050565b60006060600054600280805461021890610390565b80601f016020809104026020016040519081016040528092919081815260200182805461024490610390565b80156102915780601f1061026657610100808354040283529160200191610291565b820191906000526020600020905b81548152906001019060200180831161027457829003601f168201915b50505050509050915091509091565b816101ff5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102d190610390565b6000825580601f106102e1575050565b601f0160209004906000526020600020908101906102ff9190610302565b50565b5b808211156103175760008155600101610303565b5090565b60006040828403121561032d57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103675785810183015185820160600152820161034b565b81811115610379576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103a457607f821691505b6020821081141561032d57634e487b7160e01b600052602260045260246000fd5b6000602082840312156103d757600080fd5b6040516020810181811067ffffffffffffffff8211171561040857634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461042257600080fd5b8152939250505056fea2646970667358221220cb4280ac907c56e36bee70655583ef35c62c118863e81a9c563085bd691814ab64736f6c63430008090033`,
  BytecodeLen: 1688,
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

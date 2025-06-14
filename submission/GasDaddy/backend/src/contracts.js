export const gasDaddyAbi = [
  {
    type: 'function',
    name: 'initialize',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'isInitialized',
    inputs: [],
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'executeCall',
    inputs: [
      { name: 'target', type: 'address' },
      { name: 'data', type: 'bytes' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'executeMultiCall',
    inputs: [
      { name: 'targets', type: 'address[]' },
      { name: 'data', type: 'bytes[]' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getContext',
    inputs: [],
    outputs: [
      { name: 'msgSender', type: 'address' },
      { name: 'contractThis', type: 'address' },
      { name: 'txOrigin', type: 'address' },
      { name: 'isInit', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'Initialized',
    inputs: [{ name: 'user', type: 'address', indexed: true }],
  },
  {
    type: 'event',
    name: 'CallSponsored',
    inputs: [
      { name: 'user', type: 'address', indexed: true },
      { name: 'target', type: 'address', indexed: true },
      { name: 'sponsor', type: 'address', indexed: true },
      { name: 'selector', type: 'bytes4', indexed: false },
      { name: 'success', type: 'bool', indexed: false },
    ],
  },
];

export const sbtAbi = [
  {
    type: 'function',
    name: 'mint',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
];

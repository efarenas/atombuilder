
export interface ElementInfo {
  name: string;
  symbol: string;
  atomicNumber: number;
}

export const ELEMENT_DATA: Record<number, ElementInfo> = {
  1: { name: "Hidrógeno", symbol: "H", atomicNumber: 1 },
  2: { name: "Helio", symbol: "He", atomicNumber: 2 },
  3: { name: "Litio", symbol: "Li", atomicNumber: 3 },
  4: { name: "Berilio", symbol: "Be", atomicNumber: 4 },
  5: { name: "Boro", symbol: "B", atomicNumber: 5 },
  6: { name: "Carbono", symbol: "C", atomicNumber: 6 },
  7: { name: "Nitrógeno", symbol: "N", atomicNumber: 7 },
  8: { name: "Oxígeno", symbol: "O", atomicNumber: 8 },
  9: { name: "Flúor", symbol: "F", atomicNumber: 9 },
  10: { name: "Neón", symbol: "Ne", atomicNumber: 10 },
  11: { name: "Sodio", symbol: "Na", atomicNumber: 11 },
  12: { name: "Magnesio", symbol: "Mg", atomicNumber: 12 },
  13: { name: "Aluminio", symbol: "Al", atomicNumber: 13 },
  14: { name: "Silicio", symbol: "Si", atomicNumber: 14 },
  15: { name: "Fósforo", symbol: "P", atomicNumber: 15 },
  16: { name: "Azufre", symbol: "S", atomicNumber: 16 },
  17: { name: "Cloro", symbol: "Cl", atomicNumber: 17 },
  18: { name: "Argón", symbol: "Ar", atomicNumber: 18 },
  19: { name: "Potasio", symbol: "K", atomicNumber: 19 },
  20: { name: "Calcio", symbol: "Ca", atomicNumber: 20 },
  21: { name: "Escandio", symbol: "Sc", atomicNumber: 21 },
  22: { name: "Titanio", symbol: "Ti", atomicNumber: 22 },
  23: { name: "Vanadio", symbol: "V", atomicNumber: 23 },
  24: { name: "Cromo", symbol: "Cr", atomicNumber: 24 },
  25: { name: "Manganeso", symbol: "Mn", atomicNumber: 25 },
  26: { name: "Hierro", symbol: "Fe", atomicNumber: 26 },
  27: { name: "Cobalto", symbol: "Co", atomicNumber: 27 },
  28: { name: "Níquel", symbol: "Ni", atomicNumber: 28 },
  29: { name: "Cobre", symbol: "Cu", atomicNumber: 29 },
  30: { name: "Zinc", symbol: "Zn", atomicNumber: 30 },
  31: { name: "Galio", symbol: "Ga", atomicNumber: 31 },
  32: { name: "Germanio", symbol: "Ge", atomicNumber: 32 },
  33: { name: "Arsénico", symbol: "As", atomicNumber: 33 },
  34: { name: "Selenio", symbol: "Se", atomicNumber: 34 },
  35: { name: "Bromo", symbol: "Br", atomicNumber: 35 },
  36: { name: "Kriptón", symbol: "Kr", atomicNumber: 36 },
  37: { name: "Rubidio", symbol: "Rb", atomicNumber: 37 },
  38: { name: "Estroncio", symbol: "Sr", atomicNumber: 38 },
  39: { name: "Itrio", symbol: "Y", atomicNumber: 39 },
  40: { name: "Zirconio", symbol: "Zr", atomicNumber: 40 },
  41: { name: "Niobio", symbol: "Nb", atomicNumber: 41 },
  42: { name: "Molibdeno", symbol: "Mo", atomicNumber: 42 },
  43: { name: "Tecnecio", symbol: "Tc", atomicNumber: 43 },
  44: { name: "Rutenio", symbol: "Ru", atomicNumber: 44 },
  45: { name: "Rodio", symbol: "Rh", atomicNumber: 45 },
  46: { name: "Paladio", symbol: "Pd", atomicNumber: 46 },
  47: { name: "Plata", symbol: "Ag", atomicNumber: 47 },
  48: { name: "Cadmio", symbol: "Cd", atomicNumber: 48 },
  49: { name: "Indio", symbol: "In", atomicNumber: 49 },
  50: { name: "Estaño", symbol: "Sn", atomicNumber: 50 },
  51: { name: "Antimonio", symbol: "Sb", atomicNumber: 51 },
  52: { name: "Telurio", symbol: "Te", atomicNumber: 52 },
  53: { name: "Yodo", symbol: "I", atomicNumber: 53 },
  54: { name: "Xenón", symbol: "Xe", atomicNumber: 54 },
  55: { name: "Cesio", symbol: "Cs", atomicNumber: 55 },
  56: { name: "Bario", symbol: "Ba", atomicNumber: 56 },
  57: { name: "Lantano", symbol: "La", atomicNumber: 57 },
  58: { name: "Cerio", symbol: "Ce", atomicNumber: 58 },
  59: { name: "Praseodimio", symbol: "Pr", atomicNumber: 59 },
  60: { name: "Neodimio", symbol: "Nd", atomicNumber: 60 },
  61: { name: "Prometio", symbol: "Pm", atomicNumber: 61 },
  62: { name: "Samario", symbol: "Sm", atomicNumber: 62 },
  63: { name: "Europio", symbol: "Eu", atomicNumber: 63 },
  64: { name: "Gadolinio", symbol: "Gd", atomicNumber: 64 },
  65: { name: "Terbio", symbol: "Tb", atomicNumber: 65 },
  66: { name: "Disprosio", symbol: "Dy", atomicNumber: 66 },
  67: { name: "Holmio", symbol: "Ho", atomicNumber: 67 },
  68: { name: "Erbio", symbol: "Er", atomicNumber: 68 },
  69: { name: "Tulio", symbol: "Tm", atomicNumber: 69 },
  70: { name: "Iterbio", symbol: "Yb", atomicNumber: 70 },
  71: { name: "Lutecio", symbol: "Lu", atomicNumber: 71 },
  72: { name: "Hafnio", symbol: "Hf", atomicNumber: 72 },
  73: { name: "Tantalio", symbol: "Ta", atomicNumber: 73 },
  74: { name: "Wolframio", symbol: "W", atomicNumber: 74 },
  75: { name: "Renio", symbol: "Re", atomicNumber: 75 },
  76: { name: "Osmio", symbol: "Os", atomicNumber: 76 },
  77: { name: "Iridio", symbol: "Ir", atomicNumber: 77 },
  78: { name: "Platino", symbol: "Pt", atomicNumber: 78 },
  79: { name: "Oro", symbol: "Au", atomicNumber: 79 },
  80: { name: "Mercurio", symbol: "Hg", atomicNumber: 80 },
  81: { name: "Talio", symbol: "Tl", atomicNumber: 81 },
  82: { name: "Plomo", symbol: "Pb", atomicNumber: 82 },
  83: { name: "Bismuto", symbol: "Bi", atomicNumber: 83 },
  84: { name: "Polonio", symbol: "Po", atomicNumber: 84 },
  85: { name: "Astato", symbol: "At", atomicNumber: 85 },
  86: { name: "Radón", symbol: "Rn", atomicNumber: 86 },
  87: { name: "Francio", symbol: "Fr", atomicNumber: 87 },
  88: { name: "Radio", symbol: "Ra", atomicNumber: 88 },
  89: { name: "Actinio", symbol: "Ac", atomicNumber: 89 },
  90: { name: "Torio", symbol: "Th", atomicNumber: 90 },
  91: { name: "Protactinio", symbol: "Pa", atomicNumber: 91 },
  92: { name: "Uranio", symbol: "U", atomicNumber: 92 },
  93: { name: "Neptunio", symbol: "Np", atomicNumber: 93 },
  94: { name: "Plutonio", symbol: "Pu", atomicNumber: 94 },
  95: { name: "Americio", symbol: "Am", atomicNumber: 95 },
  96: { name: "Curio", symbol: "Cm", atomicNumber: 96 },
  97: { name: "Berkelio", symbol: "Bk", atomicNumber: 97 },
  98: { name: "Californio", symbol: "Cf", atomicNumber: 98 },
  99: { name: "Einstenio", symbol: "Es", atomicNumber: 99 },
  100: { name: "Fermio", symbol: "Fm", atomicNumber: 100 },
  101: { name: "Mendelevio", symbol: "Md", atomicNumber: 101 },
  102: { name: "Nobelio", symbol: "No", atomicNumber: 102 },
  103: { name: "Lawrencio", symbol: "Lr", atomicNumber: 103 },
  104: { name: "Rutherfordio", symbol: "Rf", atomicNumber: 104 },
  105: { name: "Dubnio", symbol: "Db", atomicNumber: 105 },
  106: { name: "Seaborgio", symbol: "Sg", atomicNumber: 106 },
  107: { name: "Bohrio", symbol: "Bh", atomicNumber: 107 },
  108: { name: "Hasio", symbol: "Hs", atomicNumber: 108 },
  109: { name: "Meitnerio", symbol: "Mt", atomicNumber: 109 },
  110: { name: "Darmstatio", symbol: "Ds", atomicNumber: 110 },
  111: { name: "Roentgenio", symbol: "Rg", atomicNumber: 111 },
  112: { name: "Copernicio", symbol: "Cn", atomicNumber: 112 },
  113: { name: "Nihonio", symbol: "Nh", atomicNumber: 113 },
  114: { name: "Flerovio", symbol: "Fl", atomicNumber: 114 },
  115: { name: "Moscovio", symbol: "Mc", atomicNumber: 115 },
  116: { name: "Livermorio", symbol: "Lv", atomicNumber: 116 },
  117: { name: "Teneso", symbol: "Ts", atomicNumber: 117 },
  118: { name: "Oganesón", symbol: "Og", atomicNumber: 118 }
};

export type OrbitalName = '1s' | '2s' | '2p' | '3s' | '3p' | '3d' | '4s' | '4p' | '4d' | '4f' | '5s' | '5p' | '5d' | '5f' | '6s' | '6p' | '6d' | '6f'| '7s' | '7p' | '7d' | '7f' | '5g' | '6g' | '7g' | '8s';

export interface OrbitalDefinition {
  name: OrbitalName;
  capacity: number;
  shell: number; // Principal quantum number n
  l: number; // Azimuthal quantum number l
  mlValues: number[]; // Possible magnetic quantum numbers m_l
}

export const ORBITAL_ORDER: OrbitalDefinition[] = [
    { name: '1s', capacity: 2, shell: 1, l: 0, mlValues: [0] },
    { name: '2s', capacity: 2, shell: 2, l: 0, mlValues: [0] },
    { name: '2p', capacity: 6, shell: 2, l: 1, mlValues: [-1, 0, 1] },
    { name: '3s', capacity: 2, shell: 3, l: 0, mlValues: [0] },
    { name: '3p', capacity: 6, shell: 3, l: 1, mlValues: [-1, 0, 1] },
    { name: '4s', capacity: 2, shell: 4, l: 0, mlValues: [0] },
    { name: '3d', capacity: 10, shell: 3, l: 2, mlValues: [-2, -1, 0, 1, 2] },
    { name: '4p', capacity: 6, shell: 4, l: 1, mlValues: [-1, 0, 1] },
    { name: '5s', capacity: 2, shell: 5, l: 0, mlValues: [0] },
    { name: '4d', capacity: 10, shell: 4, l: 2, mlValues: [-2, -1, 0, 1, 2] },
    { name: '5p', capacity: 6, shell: 5, l: 1, mlValues: [-1, 0, 1] },
    { name: '6s', capacity: 2, shell: 6, l: 0, mlValues: [0] },
    { name: '4f', capacity: 14, shell: 4, l: 3, mlValues: [-3, -2, -1, 0, 1, 2, 3] },
    { name: '5d', capacity: 10, shell: 5, l: 2, mlValues: [-2, -1, 0, 1, 2] },
    { name: '6p', capacity: 6, shell: 6, l: 1, mlValues: [-1, 0, 1] },
    { name: '7s', capacity: 2, shell: 7, l: 0, mlValues: [0] },
    { name: '5f', capacity: 14, shell: 5, l: 3, mlValues: [-3, -2, -1, 0, 1, 2, 3] },
    { name: '6d', capacity: 10, shell: 6, l: 2, mlValues: [-2, -1, 0, 1, 2] },
    { name: '7p', capacity: 6, shell: 7, l: 1, mlValues: [-1, 0, 1] },
];

export interface OrbitalCounts {
  [key: string]: number; 
}

export const calculateElectronConfiguration = (electronCount: number): OrbitalCounts => {
  const config: OrbitalCounts = {};
  let electronsRemaining = electronCount;

  for (const orbital of ORBITAL_ORDER) {
    if (electronsRemaining <= 0) break;
    const electronsInOrbital = Math.min(electronsRemaining, orbital.capacity);
    if (electronsInOrbital > 0) {
      config[orbital.name] = electronsInOrbital;
    }
    electronsRemaining -= electronsInOrbital;
  }
  return config;
};

const superscriptMap: { [key: string]: string } = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
};

export const formatElectronConfigurationString = (config: OrbitalCounts): string => {
  return ORBITAL_ORDER
    .map(o => o.name)
    .filter(orbitalName => config[orbitalName] > 0)
    .map(orbitalName => {
      const count = config[orbitalName];
      const superscript = String(count).split('').map(char => superscriptMap[char] || char).join('');
      return `${orbitalName}${superscript}`;
    })
    .join(' ');
};

export const getElectronsInShells = (config: OrbitalCounts): number[] => {
  const shells: number[] = [0, 0, 0, 0, 0, 0, 0]; // Max 7 shells
  for (const orbitalDef of ORBITAL_ORDER) {
    if (config[orbitalDef.name]) {
      shells[orbitalDef.shell - 1] += config[orbitalDef.name];
    }
  }
  let lastNonZeroIndex = -1;
  for (let i = shells.length - 1; i >= 0; i--) {
    if (shells[i] > 0) {
      lastNonZeroIndex = i;
      break;
    }
  }
  if (lastNonZeroIndex === -1 && config['1s'] > 0) return [config['1s']]; // Handles H, He if shells array logic fails for them
  return shells.slice(0, lastNonZeroIndex + 1);
};

export interface QuantumNumbers {
  n: number | null;
  l: number | null;
  ml: number | null;
  ms: string | null;
}

export const calculateQuantumNumbersForLastElectron = (electronCount: number): QuantumNumbers => {
  if (electronCount === 0) {
    return { n: null, l: null, ml: null, ms: null };
  }

  let targetOrbitalInfo: OrbitalDefinition | null = null;
  let electronsInTargetOrbitalType = 0;
  let filledElectronsCount = 0;

  for (const orbital of ORBITAL_ORDER) {
    if (electronCount > filledElectronsCount && electronCount <= filledElectronsCount + orbital.capacity) {
      targetOrbitalInfo = orbital;
      electronsInTargetOrbitalType = electronCount - filledElectronsCount;
      break;
    }
    filledElectronsCount += orbital.capacity;
    if (filledElectronsCount >= electronCount) { // Fallback if exact match fails, pick current if overshot
        if (!targetOrbitalInfo && electronCount > 0) { // if electronCount = 1, orbital is 1s, electronsInTargetOrbitalType = 1
             targetOrbitalInfo = orbital;
             electronsInTargetOrbitalType = electronCount - (filledElectronsCount - orbital.capacity);
        }
        break;
    }
  }
  
  if (!targetOrbitalInfo) {
     // This case should ideally not be reached if electronCount > 0 and ORBITAL_ORDER is sufficient
     // As a fallback, try to find the last orbital that would contain electrons based on configuration
     const config = calculateElectronConfiguration(electronCount);
     const populatedOrbitals = ORBITAL_ORDER.filter(orb => config[orb.name] > 0);
     if (populatedOrbitals.length > 0) {
        targetOrbitalInfo = populatedOrbitals[populatedOrbitals.length -1];
        electronsInTargetOrbitalType = config[targetOrbitalInfo.name];
     } else {
        return { n: null, l: null, ml: null, ms: null };
     }
  }


  const n = targetOrbitalInfo.shell;
  const l = targetOrbitalInfo.l;
  
  const numIndividualOrbitalsInSubshell = targetOrbitalInfo.mlValues.length;
  
  // electronPosZeroIndexed is the 0-indexed position of the last electron within its specific type of orbital (s, p, d, f)
  // e.g., for 2p³, electronsInTargetOrbitalType is 3. electronPosZeroIndexed is 2.
  // e.g., for 2p⁴, electronsInTargetOrbitalType is 4. electronPosZeroIndexed is 3.
  const electronPosZeroIndexed = electronsInTargetOrbitalType - 1; 

  // The m_l value is determined by which of the individual orbitals (-l to +l) the electron occupies
  // For p-orbitals (mlValues = [-1, 0, 1]):
  // p1 (index 0) -> ml = -1
  // p2 (index 1) -> ml = 0
  // p3 (index 2) -> ml = 1
  // p4 (index 0, pairing) -> ml = -1
  const ml = targetOrbitalInfo.mlValues[electronPosZeroIndexed % numIndividualOrbitalsInSubshell];
  
  // Spin quantum number (m_s)
  // Electrons fill singly first (+1/2), then pair up (-1/2)
  const ms = electronsInTargetOrbitalType <= numIndividualOrbitalsInSubshell ? "+1/2" : "-1/2";

  return { n, l, ml, ms };
};

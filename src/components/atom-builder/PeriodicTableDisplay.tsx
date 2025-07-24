
"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

// Data for the periodic table layout (symbol, atomic number, grid position)
const mainTableElements = [
    { symbol: 'H', number: 1, group: 1, period: 1, category: 'nonmetal' },
    { symbol: 'He', number: 2, group: 18, period: 1, category: 'noble-gas' },
    { symbol: 'Li', number: 3, group: 1, period: 2, category: 'alkali-metal' },
    { symbol: 'Be', number: 4, group: 2, period: 2, category: 'alkaline-earth-metal' },
    { symbol: 'B', number: 5, group: 13, period: 2, category: 'metalloid' },
    { symbol: 'C', number: 6, group: 14, period: 2, category: 'nonmetal' },
    { symbol: 'N', number: 7, group: 15, period: 2, category: 'nonmetal' },
    { symbol: 'O', number: 8, group: 16, period: 2, category: 'nonmetal' },
    { symbol: 'F', number: 9, group: 17, period: 2, category: 'halogen' },
    { symbol: 'Ne', number: 10, group: 18, period: 2, category: 'noble-gas' },
    { symbol: 'Na', number: 11, group: 1, period: 3, category: 'alkali-metal' },
    { symbol: 'Mg', number: 12, group: 2, period: 3, category: 'alkaline-earth-metal' },
    { symbol: 'Al', number: 13, group: 13, period: 3, category: 'post-transition-metal' },
    { symbol: 'Si', number: 14, group: 14, period: 3, category: 'metalloid' },
    { symbol: 'P', number: 15, group: 15, period: 3, category: 'nonmetal' },
    { symbol: 'S', number: 16, group: 16, period: 3, category: 'nonmetal' },
    { symbol: 'Cl', number: 17, group: 17, period: 3, category: 'halogen' },
    { symbol: 'Ar', number: 18, group: 18, period: 3, category: 'noble-gas' },
    { symbol: 'K', number: 19, group: 1, period: 4, category: 'alkali-metal' },
    { symbol: 'Ca', number: 20, group: 2, period: 4, category: 'alkaline-earth-metal' },
    { symbol: 'Sc', number: 21, group: 3, period: 4, category: 'transition-metal' },
    { symbol: 'Ti', number: 22, group: 4, period: 4, category: 'transition-metal' },
    { symbol: 'V', number: 23, group: 5, period: 4, category: 'transition-metal' },
    { symbol: 'Cr', number: 24, group: 6, period: 4, category: 'transition-metal' },
    { symbol: 'Mn', number: 25, group: 7, period: 4, category: 'transition-metal' },
    { symbol: 'Fe', number: 26, group: 8, period: 4, category: 'transition-metal' },
    { symbol: 'Co', number: 27, group: 9, period: 4, category: 'transition-metal' },
    { symbol: 'Ni', number: 28, group: 10, period: 4, category: 'transition-metal' },
    { symbol: 'Cu', number: 29, group: 11, period: 4, category: 'transition-metal' },
    { symbol: 'Zn', number: 30, group: 12, period: 4, category: 'transition-metal' },
    { symbol: 'Ga', number: 31, group: 13, period: 4, category: 'post-transition-metal' },
    { symbol: 'Ge', number: 32, group: 14, period: 4, category: 'metalloid' },
    { symbol: 'As', number: 33, group: 15, period: 4, category: 'metalloid' },
    { symbol: 'Se', number: 34, group: 16, period: 4, category: 'nonmetal' },
    { symbol: 'Br', number: 35, group: 17, period: 4, category: 'halogen' },
    { symbol: 'Kr', number: 36, group: 18, period: 4, category: 'noble-gas' },
    { symbol: 'Rb', number: 37, group: 1, period: 5, category: 'alkali-metal' },
    { symbol: 'Sr', number: 38, group: 2, period: 5, category: 'alkaline-earth-metal' },
    { symbol: 'Y', number: 39, group: 3, period: 5, category: 'transition-metal' },
    { symbol: 'Zr', number: 40, group: 4, period: 5, category: 'transition-metal' },
    { symbol: 'Nb', number: 41, group: 5, period: 5, category: 'transition-metal' },
    { symbol: 'Mo', number: 42, group: 6, period: 5, category: 'transition-metal' },
    { symbol: 'Tc', number: 43, group: 7, period: 5, category: 'transition-metal' },
    { symbol: 'Ru', number: 44, group: 8, period: 5, category: 'transition-metal' },
    { symbol: 'Rh', number: 45, group: 9, period: 5, category: 'transition-metal' },
    { symbol: 'Pd', number: 46, group: 10, period: 5, category: 'transition-metal' },
    { symbol: 'Ag', number: 47, group: 11, period: 5, category: 'transition-metal' },
    { symbol: 'Cd', number: 48, group: 12, period: 5, category: 'transition-metal' },
    { symbol: 'In', number: 49, group: 13, period: 5, category: 'post-transition-metal' },
    { symbol: 'Sn', number: 50, group: 14, period: 5, category: 'post-transition-metal' },
    { symbol: 'Sb', number: 51, group: 15, period: 5, category: 'metalloid' },
    { symbol: 'Te', number: 52, group: 16, period: 5, category: 'metalloid' },
    { symbol: 'I', number: 53, group: 17, period: 5, category: 'halogen' },
    { symbol: 'Xe', number: 54, group: 18, period: 5, category: 'noble-gas' },
    { symbol: 'Cs', number: 55, group: 1, period: 6, category: 'alkali-metal' },
    { symbol: 'Ba', number: 56, group: 2, period: 6, category: 'alkaline-earth-metal' },
    { symbol: 'La-Lu', number: 0, group: 3, period: 6, category: 'lanthanide-placeholder' },
    { symbol: 'Hf', number: 72, group: 4, period: 6, category: 'transition-metal' },
    { symbol: 'Ta', number: 73, group: 5, period: 6, category: 'transition-metal' },
    { symbol: 'W', number: 74, group: 6, period: 6, category: 'transition-metal' },
    { symbol: 'Re', number: 75, group: 7, period: 6, category: 'transition-metal' },
    { symbol: 'Os', number: 76, group: 8, period: 6, category: 'transition-metal' },
    { symbol: 'Ir', number: 77, group: 9, period: 6, category: 'transition-metal' },
    { symbol: 'Pt', number: 78, group: 10, period: 6, category: 'transition-metal' },
    { symbol: 'Au', number: 79, group: 11, period: 6, category: 'transition-metal' },
    { symbol: 'Hg', number: 80, group: 12, period: 6, category: 'transition-metal' },
    { symbol: 'Tl', number: 81, group: 13, period: 6, category: 'post-transition-metal' },
    { symbol: 'Pb', number: 82, group: 14, period: 6, category: 'post-transition-metal' },
    { symbol: 'Bi', number: 83, group: 15, period: 6, category: 'post-transition-metal' },
    { symbol: 'Po', number: 84, group: 16, period: 6, category: 'metalloid' },
    { symbol: 'At', number: 85, group: 17, period: 6, category: 'halogen' },
    { symbol: 'Rn', number: 86, group: 18, period: 6, category: 'noble-gas' },
    { symbol: 'Fr', number: 87, group: 1, period: 7, category: 'alkali-metal' },
    { symbol: 'Ra', number: 88, group: 2, period: 7, category: 'alkaline-earth-metal' },
    { symbol: 'Ac-Lr', number: 0, group: 3, period: 7, category: 'actinide-placeholder' },
    { symbol: 'Rf', number: 104, group: 4, period: 7, category: 'transition-metal' },
    { symbol: 'Db', number: 105, group: 5, period: 7, category: 'transition-metal' },
    { symbol: 'Sg', number: 106, group: 6, period: 7, category: 'transition-metal' },
    { symbol: 'Bh', number: 107, group: 7, period: 7, category: 'transition-metal' },
    { symbol: 'Hs', number: 108, group: 8, period: 7, category: 'transition-metal' },
    { symbol: 'Mt', number: 109, group: 9, period: 7, category: 'transition-metal' },
    { symbol: 'Ds', number: 110, group: 10, period: 7, category: 'transition-metal' },
    { symbol: 'Rg', number: 111, group: 11, period: 7, category: 'transition-metal' },
    { symbol: 'Cn', number: 112, group: 12, period: 7, category: 'transition-metal' },
    { symbol: 'Nh', number: 113, group: 13, period: 7, category: 'post-transition-metal' },
    { symbol: 'Fl', number: 114, group: 14, period: 7, category: 'post-transition-metal' },
    { symbol: 'Mc', number: 115, group: 15, period: 7, category: 'post-transition-metal' },
    { symbol: 'Lv', number: 116, group: 16, period: 7, category: 'post-transition-metal' },
    { symbol: 'Ts', number: 117, group: 17, period: 7, category: 'halogen' },
    { symbol: 'Og', number: 118, group: 18, period: 7, category: 'noble-gas' },
];

const lanthanides = [
    { symbol: 'La', number: 57, group: 4, period: 8, category: 'lanthanide' },
    { symbol: 'Ce', number: 58, group: 5, period: 8, category: 'lanthanide' },
    { symbol: 'Pr', number: 59, group: 6, period: 8, category: 'lanthanide' },
    { symbol: 'Nd', number: 60, group: 7, period: 8, category: 'lanthanide' },
    { symbol: 'Pm', number: 61, group: 8, period: 8, category: 'lanthanide' },
    { symbol: 'Sm', number: 62, group: 9, period: 8, category: 'lanthanide' },
    { symbol: 'Eu', number: 63, group: 10, period: 8, category: 'lanthanide' },
    { symbol: 'Gd', number: 64, group: 11, period: 8, category: 'lanthanide' },
    { symbol: 'Tb', number: 65, group: 12, period: 8, category: 'lanthanide' },
    { symbol: 'Dy', number: 66, group: 13, period: 8, category: 'lanthanide' },
    { symbol: 'Ho', number: 67, group: 14, period: 8, category: 'lanthanide' },
    { symbol: 'Er', number: 68, group: 15, period: 8, category: 'lanthanide' },
    { symbol: 'Tm', number: 69, group: 16, period: 8, category: 'lanthanide' },
    { symbol: 'Yb', number: 70, group: 17, period: 8, category: 'lanthanide' },
    { symbol: 'Lu', number: 71, group: 18, period: 8, category: 'lanthanide' },
];

const actinides = [
    { symbol: 'Ac', number: 89, group: 4, period: 9, category: 'actinide' },
    { symbol: 'Th', number: 90, group: 5, period: 9, category: 'actinide' },
    { symbol: 'Pa', number: 91, group: 6, period: 9, category: 'actinide' },
    { symbol: 'U', number: 92, group: 7, period: 9, category: 'actinide' },
    { symbol: 'Np', number: 93, group: 8, period: 9, category: 'actinide' },
    { symbol: 'Pu', number: 94, group: 9, period: 9, category: 'actinide' },
    { symbol: 'Am', number: 95, group: 10, period: 9, category: 'actinide' },
    { symbol: 'Cm', number: 96, group: 11, period: 9, category: 'actinide' },
    { symbol: 'Bk', number: 97, group: 12, period: 9, category: 'actinide' },
    { symbol: 'Cf', number: 98, group: 13, period: 9, category: 'actinide' },
    { symbol: 'Es', number: 99, group: 14, period: 9, category: 'actinide' },
    { symbol: 'Fm', number: 100, group: 15, period: 9, category: 'actinide' },
    { symbol: 'Md', number: 101, group: 16, period: 9, category: 'actinide' },
    { symbol: 'No', number: 102, group: 17, period: 9, category: 'actinide' },
    { symbol: 'Lr', number: 103, group: 18, period: 9, category: 'actinide' },
];

const allElements = [...mainTableElements, ...lanthanides, ...actinides];

const categoryColors: Record<string, string> = {
    'nonmetal': 'bg-green-200',
    'noble-gas': 'bg-purple-200',
    'alkali-metal': 'bg-red-200',
    'alkaline-earth-metal': 'bg-orange-200',
    'metalloid': 'bg-yellow-200',
    'halogen': 'bg-teal-200',
    'post-transition-metal': 'bg-blue-200',
    'transition-metal': 'bg-indigo-200',
    'lanthanide': 'bg-pink-200',
    'actinide': 'bg-rose-200',
    'lanthanide-placeholder': 'bg-pink-100',
    'actinide-placeholder': 'bg-rose-100',
    'default': 'bg-card'
};

interface PeriodicTableDisplayProps {
  atomicNumber: number;
  children: React.ReactNode;
}

export function PeriodicTableDisplay({ atomicNumber, children }: PeriodicTableDisplayProps) {
  
  const isLanthanideActive = atomicNumber >= 57 && atomicNumber <= 71;
  const isActinideActive = atomicNumber >= 89 && atomicNumber <= 103;

  const renderElement = (el: (typeof allElements)[0]) => {
    let isActive = atomicNumber === el.number;

    if (el.category === 'lanthanide-placeholder' && isLanthanideActive) isActive = true;
    if (el.category === 'actinide-placeholder' && isActinideActive) isActive = true;
    
    const colorClass = categoryColors[el.category] || categoryColors['default'];
    
    return (
        <div
          key={el.symbol}
          className={cn(
            "flex flex-col items-center justify-center p-0.5 rounded text-[8px] sm:text-[10px] md:text-xs transition-all duration-300 border",
            colorClass,
            isActive
              ? "text-primary-foreground font-bold ring-2 ring-primary-foreground shadow-lg scale-110 z-10"
              : "hover:scale-110",
            atomicNumber > 0 && !isActive ? "opacity-60" : "opacity-100",
          )}
          style={{ gridColumnStart: el.group, gridRowStart: el.period }}
        >
          <span className="font-bold">{el.symbol}</span>
          { el.number > 0 && <span className="opacity-70">{el.number}</span>}
        </div>
    );
  }

  return (
    <Card className="w-full shadow-lg bg-card/50 overflow-hidden" data-ai-hint="periodic table science">
      <CardHeader className="py-3">
        <CardTitle className="text-xl font-headline text-center">Tabla Periódica</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-start p-2 md:p-4">
        <div className="overflow-x-auto">
            <div 
              className="grid gap-px p-1 bg-background/50 rounded-lg min-w-[600px] md:min-w-full"
              style={{ 
                  gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
                  gridTemplateRows: 'repeat(9, minmax(0, 1fr))',
               }}
            >
              {mainTableElements.map(renderElement)}
              
              {/* Spacer row */}
              <div style={{gridRow: 8, gridColumn: '1 / -1', height: '0.5rem'}}></div>

              {lanthanides.map(renderElement)}
              {actinides.map(renderElement)}
            </div>
        </div>
        
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}

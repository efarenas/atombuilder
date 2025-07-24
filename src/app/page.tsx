
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ParticlePalette } from '@/components/atom-builder/ParticlePalette';
import { AtomCanvas } from '@/components/atom-builder/AtomCanvas';
import { ElementInfoDisplay } from '@/components/atom-builder/ElementInfoDisplay';
import { ELEMENT_DATA, calculateElectronConfiguration, formatElectronConfigurationString, getElectronsInShells, OrbitalCounts, calculateQuantumNumbersForLastElectron, QuantumNumbers } from '@/lib/elements';
import { useToast } from "@/hooks/use-toast";
import { PeriodicTableDisplay } from '@/components/atom-builder/PeriodicTableDisplay';


interface RootPageProps {
  params: {}; 
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function AtomBuilderPage({ params, searchParams }: RootPageProps) {
  const [protons, setProtons] = useState(0);
  const [neutrons, setNeutrons] = useState(0);
  const [electrons, setElectrons] = useState(0);

  const [elementSymbol, setElementSymbol] = useState<string | null>(null);
  const [elementName, setElementName] = useState<string | null>(null);
  const [atomicNumber, setAtomicNumber] = useState(0);
  const [massNumber, setMassNumber] = useState(0);
  const [electronConfigString, setElectronConfigString] = useState("");
  const [electronsInShellsVisual, setElectronsInShellsVisual] = useState<number[]>([]);
  const [quantumNumbers, setQuantumNumbers] = useState<QuantumNumbers>({ n: null, l: null, ml: null, ms: null });
  const [charge, setCharge] = useState(0);
  const [isUnstable, setIsUnstable] = useState(false);
  
  const { toast } = useToast();

  useEffect(() => {
    const currentElement = ELEMENT_DATA[protons];
    setElementSymbol(currentElement ? currentElement.symbol : null);
    setElementName(currentElement ? currentElement.name : null);
    setAtomicNumber(protons);

    // Stability Check
    if (protons > 0 && neutrons > protons * 1.6) { // Simple stability rule
        setIsUnstable(true);
    } else {
        setIsUnstable(false);
    }

  }, [protons, neutrons]);

  useEffect(() => {
    setMassNumber(protons + neutrons);
  }, [protons, neutrons]);

  useEffect(() => {
    if (electrons > 0) {
      const config: OrbitalCounts = calculateElectronConfiguration(electrons);
      setElectronConfigString(formatElectronConfigurationString(config));
      setElectronsInShellsVisual(getElectronsInShells(config));
      setQuantumNumbers(calculateQuantumNumbersForLastElectron(electrons));
    } else {
      setElectronConfigString("");
      setElectronsInShellsVisual([]);
      setQuantumNumbers({ n: null, l: null, ml: null, ms: null });
    }
    setCharge(protons - electrons);
  }, [electrons, protons]);

  const handleAddParticle = useCallback((particleType: 'proton' | 'neutron' | 'electron') => {
    let message = "";
    switch (particleType) {
      case 'proton':
        setProtons(p => p + 1);
        message = "Protón añadido";
        break;
      case 'neutron':
        setNeutrons(n => n + 1);
        message = "Neutrón añadido";
        break;
      case 'electron':
        setElectrons(e => e + 1);
        message = "Electrón añadido";
        break;
    }
  }, []);

  const handleReset = () => {
    setProtons(0);
    setNeutrons(0);
    setElectrons(0);
     toast({
      title: "Átomo Reiniciado",
      description: "El lienzo ha sido limpiado.",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-6 lg:p-8 bg-background font-body">
      <div className="md:hidden p-2 mb-4 text-center bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg">
        <p className="text-sm">Para una mejor experiencia, te recomendamos girar tu dispositivo a una orientación horizontal.</p>
      </div>

      <header className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground bg-primary py-3 px-2 rounded-lg shadow-md">
          Creador de Átomos Interactivos
        </h1>
        <p className="text-sm md:text-md text-muted-foreground mt-2">
          Haz clic en las partículas para agregarlas al lienzo y construir átomos.
        </p>
      </header>

      <main className="flex-1 flex flex-col gap-6">
        <div className="flex flex-wrap flex-row gap-4 items-start">
          <div className="flex-1 min-w-[280px]">
            <div className="w-full aspect-square max-w-lg mx-auto"> 
              <AtomCanvas
                protons={protons}
                neutrons={neutrons}
                electronsInShells={electronsInShellsVisual}
              />
            </div>
          </div>
          <div className="w-36"> 
            <ParticlePalette onParticleClick={handleAddParticle} />
          </div>
        </div>
        
        <div className="w-full flex justify-center">
           <PeriodicTableDisplay atomicNumber={atomicNumber}>
              <ElementInfoDisplay
                elementSymbol={elementSymbol}
                elementName={elementName}
                atomicNumber={atomicNumber}
                massNumber={massNumber}
                electronConfiguration={electronConfigString}
                protons={protons}
                neutrons={neutrons}
                electrons={electrons}
                quantumNumbers={quantumNumbers}
                charge={charge}
                isUnstable={isUnstable}
                onReset={handleReset}
              />
           </PeriodicTableDisplay>
        </div>
      </main>
      
      <footer className="text-center mt-auto pt-8 py-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Una herramienta educativa para explorar la estructura atómica. Diseñada con ❤️.
        </p>
      </footer>
    </div>
  );
}

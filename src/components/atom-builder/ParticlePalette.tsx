
"use client";

import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProtonIcon } from "./icons/ProtonIcon";
import { NeutronIcon } from "./icons/NeutronIcon";
import { ElectronIcon } from "./icons/ElectronIcon";

interface ParticlePaletteProps {
  onParticleClick: (particleType: 'proton' | 'neutron' | 'electron') => void;
}

export function ParticlePalette({ onParticleClick }: ParticlePaletteProps) {
  const particles = [
    { type: 'proton', name: 'Protón', Icon: ProtonIcon, hint: 'partícula subatómica carga positiva' },
    { type: 'neutron', name: 'Neutrón', Icon: NeutronIcon, hint: 'partícula subatómica carga neutra' },
    { type: 'electron', name: 'Electrón', Icon: ElectronIcon, hint: 'partícula subatómica carga negativa' },
  ] as const;

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="py-2 px-3">
        <CardTitle className="text-md font-headline text-center">Partículas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2 p-2">
        {particles.map((particle) => (
          <div
            key={particle.type}
            onClick={() => onParticleClick(particle.type)}
            className="flex flex-col items-center cursor-pointer p-1 rounded-lg hover:bg-secondary transition-colors active:bg-primary/20 w-full"
            aria-label={`Añadir ${particle.name}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onParticleClick(particle.type)}}
          >
            <particle.Icon className="w-12 h-12 mb-1" data-ai-hint={particle.hint} />
            <span className="text-xs font-medium">{particle.name}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

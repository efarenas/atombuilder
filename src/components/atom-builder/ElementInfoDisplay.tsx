
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Trash2, AlertTriangle } from 'lucide-react';
import type { QuantumNumbers } from '@/lib/elements';

interface ElementInfoDisplayProps {
  elementSymbol: string | null;
  elementName: string | null;
  atomicNumber: number;
  massNumber: number;
  electronConfiguration: string;
  protons: number;
  neutrons: number;
  electrons: number;
  quantumNumbers: QuantumNumbers;
  charge: number;
  isUnstable: boolean;
  onReset: () => void;
}

export function ElementInfoDisplay({
  elementSymbol,
  elementName,
  atomicNumber,
  massNumber,
  electronConfiguration,
  protons,
  neutrons,
  electrons,
  quantumNumbers,
  charge,
  isUnstable,
  onReset,
}: ElementInfoDisplayProps) {
  
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [elementSymbol, elementName, atomicNumber, massNumber, electronConfiguration, protons, neutrons, electrons, quantumNumbers, charge, isUnstable]);

  const getIonStatus = () => {
    if (protons === 0 && electrons === 0) return { text: "Sin Carga", color: ""};
    if (charge > 0) return { text: `Ion Positivo (Catión) +${charge}`, color: "text-red-500" };
    if (charge < 0) return { text: `Ion Negativo (Anión) ${charge}`, color: "text-blue-500" };
    return { text: "Átomo Neutro", color: "text-green-600" };
  };

  const ionStatus = getIonStatus();

  const InfoItem: React.FC<{ label: string; value: string | number | null; animate?: boolean }> = ({ label, value, animate }) => (
    <div className={`flex justify-between items-center py-1.5 border-b border-border/30 ${animate ? 'animate-pulse-once' : ''}`}>
      <span className="text-sm text-muted-foreground">{label}:</span>
      <span className="text-md font-semibold">{value ?? '-'}</span>
    </div>
  );
  
  return (
    <Card className="w-full shadow-lg overflow-hidden bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-headline text-center">
          {elementSymbol ? (
            <div key={`symbol-${key}`} className="animate-pulse-once text-6xl font-bold my-2">
              {elementSymbol}
            </div>
          ) : (
            <div className="text-6xl font-bold my-2 text-muted-foreground">?</div>
          )}
        </CardTitle>
        <CardDescription className="text-center text-lg font-medium min-h-[28px]">
          {elementName || "Elemento Desconocido"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        
        {isUnstable && (
          <Alert variant="destructive" className="animate-pulse-once">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Núcleo Inestable</AlertTitle>
            <AlertDescription className="text-xs">
              Demasiados neutrones para la cantidad de protones. La mayoría de los isótopos con esta proporción son inestables y radiactivos.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
          {/* Columna 1: Información básica del átomo */}
          <div className="space-y-1">
            <InfoItem label="Número Atómico (Z)" value={atomicNumber} animate={!!elementSymbol && atomicNumber > 0} />
            <InfoItem label="Número Másico (A)" value={massNumber} animate={!!elementSymbol && massNumber > 0} />
            <InfoItem label="Protones" value={protons} />
            <InfoItem label="Neutrones" value={neutrons} />
            <InfoItem label="Electrones" value={electrons} />
            <div className={`flex justify-between items-center py-1.5 border-b border-border/30`}>
                <span className="text-sm text-muted-foreground">Carga Neta:</span>
                <span className={`text-md font-bold ${ionStatus.color}`}>{ionStatus.text}</span>
            </div>
          </div>

          {/* Columna 2: Configuración electrónica y números cuánticos */}
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Configuración Electrónica:</h4>
              <p key={`config-${key}`} className={`text-xs sm:text-sm font-mono bg-muted/30 p-2 rounded text-center min-h-[24px] ${electronConfiguration && 'animate-pulse-once'}`}>
                {electronConfiguration || (electrons > 0 ? "Calculando..." : "-")}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Números Cuánticos (último e⁻):</h4>
              {quantumNumbers.n !== null ? (
                <div key={`qn-${key}`} className="space-y-0.5 animate-pulse-once bg-muted/20 p-2 rounded">
                  <InfoItem label="Principal (n)" value={quantumNumbers.n} />
                  <InfoItem label="Azimutal (l)" value={quantumNumbers.l} />
                  <InfoItem label="Magnético (mℓ)" value={quantumNumbers.ml} />
                  <InfoItem label="Espín (ms)" value={quantumNumbers.ms} />
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-2">-</p>
              )}
            </div>
          </div>
        </div>

        <Button onClick={onReset} variant="destructive" className="w-full mt-4">
          <Trash2 className="mr-2 h-4 w-4" /> Reiniciar Átomo
        </Button>
      </CardContent>
    </Card>
  );
}

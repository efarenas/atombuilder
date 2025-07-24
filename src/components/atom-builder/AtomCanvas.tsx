
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface AtomCanvasProps {
  protons: number;
  neutrons: number;
  electronsInShells: number[]; 
}

const SHELL_COLORS = ["#FFC107", "#FF9800", "#FF5722", "#F44336", "#E91E63", "#9C27B0", "#673AB7"];

// Base dimensions (unscaled)
const BASE_NUCLEUS_RADIUS = 30;
const BASE_SHELL_SPACING = 35;
const BASE_ELECTRON_RADIUS = 5;
const ABSOLUTE_MIN_VIEWBOX_SIZE = 150; // Smallest practical render size for the SVG viewBox

export function AtomCanvas({ protons, neutrons, electronsInShells }: AtomCanvasProps) {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [viewBoxSize, setViewBoxSize] = useState({ width: ABSOLUTE_MIN_VIEWBOX_SIZE, height: ABSOLUTE_MIN_VIEWBOX_SIZE });
  const [drawingScale, setDrawingScale] = useState(1);

  useEffect(() => {
    const calculateScaleAndViewBox = () => {
      if (svgContainerRef.current) {
        const containerWidth = svgContainerRef.current.offsetWidth;
        const containerHeight = svgContainerRef.current.offsetHeight;
        
        const currentViewBoxDim = Math.max(ABSOLUTE_MIN_VIEWBOX_SIZE, Math.min(containerWidth, containerHeight));
        setViewBoxSize({ width: currentViewBoxDim, height: currentViewBoxDim });
  
        const numShells = electronsInShells.length > 0 ? electronsInShells.length : 0;
        const effectiveShellsForRadiusCalc = numShells; 
  
        const unscaledAtomRadius = BASE_NUCLEUS_RADIUS + 
                                  (effectiveShellsForRadiusCalc * BASE_SHELL_SPACING) + 
                                  (effectiveShellsForRadiusCalc > 0 ? BASE_ELECTRON_RADIUS : 0) + 
                                  15; 
        
        const requiredDiameter = unscaledAtomRadius * 2;
        const drawableDiameter = currentViewBoxDim; 
  
        if (requiredDiameter > drawableDiameter && drawableDiameter > 0) {
          setDrawingScale(drawableDiameter / requiredDiameter);
        } else {
          setDrawingScale(1);
        }
      }
    };
  
    calculateScaleAndViewBox(); 
    
    let resizeObserver: ResizeObserver | null = null;
    const currentSvgContainer = svgContainerRef.current;
    if (currentSvgContainer) {
      resizeObserver = new ResizeObserver(calculateScaleAndViewBox);
      resizeObserver.observe(currentSvgContainer);
    }
  
    return () => {
      if (resizeObserver && currentSvgContainer) {
        resizeObserver.unobserve(currentSvgContainer);
      }
    };
  }, [electronsInShells, protons, neutrons]); // Added protons, neutrons to dependencies for nucleon count affecting scale.


  const nucleusRadius = BASE_NUCLEUS_RADIUS * drawingScale;
  const shellSpacing = BASE_SHELL_SPACING * drawingScale;
  const electronRadius = BASE_ELECTRON_RADIUS * drawingScale;
  // Make nucleon particle display radius dependent on total nucleons to avoid crowding, and overall drawing scale
  const totalNucleonsForRadius = Math.max(1, protons + neutrons); // Avoid division by zero or too small a number
  const nucleonParticleDisplayRadius = Math.min(10 * drawingScale, nucleusRadius / (Math.sqrt(totalNucleonsForRadius) * 0.6 + 0.5) );


  const centerX = viewBoxSize.width / 2;
  const centerY = viewBoxSize.height / 2;

  const renderNucleons = () => {
    const nucleons = [];
    const totalNucleons = protons + neutrons;
    if (totalNucleons === 0) return null;

    const particleR = nucleonParticleDisplayRadius;
    if (particleR <= 0.1) return null; // Don't render if too small

    // Simple spiral arrangement for nucleons
    for (let i = 0; i < protons; i++) {
      const angle = i * 137.5; 
      const radius = particleR * Math.sqrt(i + 0.5) * 0.9; // Adjust packing factor
      const x = centerX + radius * Math.cos(angle * Math.PI / 180);
      const y = centerY + radius * Math.sin(angle * Math.PI / 180);
      nucleons.push(
        <circle key={`p-${i}`} cx={x} cy={y} r={particleR} fill="#EF4444" className="transition-all duration-300" />
      );
    }
    for (let i = 0; i < neutrons; i++) {
      const angle = (protons + i) * 137.5;
      const radius = particleR * Math.sqrt(protons + i + 0.5) * 0.9; // Adjust packing factor
      const x = centerX + radius * Math.cos(angle * Math.PI / 180);
      const y = centerY + radius * Math.sin(angle * Math.PI / 180);
      nucleons.push(
        <circle key={`n-${i}`} cx={x} cy={y} r={particleR} fill="#3B82F6" className="transition-all duration-300" />
      );
    }
    return nucleons;
  };

  return (
    <Card 
      id="atom-canvas-card"
      className="flex-1 w-full h-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden ring-1 ring-border"
      data-ai-hint="atom visualization"
    >
      <CardContent ref={svgContainerRef} className="p-0 h-full flex justify-center items-center bg-card">
        <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`}>
          <title>Visualización del Átomo</title>
          { (protons > 0 || neutrons > 0) && nucleusRadius > 1 && (
            <circle cx={centerX} cy={centerY} r={nucleusRadius} fill="hsla(var(--muted)/0.1)" stroke="hsla(var(--muted-foreground)/0.2)" strokeWidth={Math.max(0.5, 1 * drawingScale)} />
          )}
          
          {renderNucleons()}

          {(protons > 0 || neutrons > 0) && drawingScale > 0.3 && (
            <>
            {protons > 0 && (
                <text x={centerX - (nucleusRadius * 0.3)} y={centerY + (nucleusRadius * 0.15)} fontSize={Math.max(6, 12 * drawingScale)} fill="#B91C1C" textAnchor="middle" fontWeight="bold" className="transition-opacity duration-300 select-none pointer-events-none">P:{protons}</text>
            )}
            {neutrons > 0 && (
                <text x={centerX + (nucleusRadius * 0.3)} y={centerY + (nucleusRadius * 0.15)} fontSize={Math.max(6, 12 * drawingScale)} fill="#1D4ED8" textAnchor="middle" fontWeight="bold" className="transition-opacity duration-300 select-none pointer-events-none">N:{neutrons}</text>
            )}
            </>
          )}

          {electronsInShells.map((electronCount, shellIndex) => {
            if (electronCount === 0 && shellIndex > 0 && electronsInShells.slice(0, shellIndex).every(s => s===0)) return null;

            const currentShellRadius = nucleusRadius + shellSpacing * (shellIndex + 1);
            
            if (currentShellRadius <= 0 || electronRadius <= 0.1 ) return null; 

            const electronsOnThisShell = [];
            const angleIncrement = electronCount > 0 ? 360 / electronCount : 0;

            for (let i = 0; i < electronCount; i++) {
              const angle = angleIncrement * i + (shellIndex * 15); 
              const electronX = centerX + currentShellRadius * Math.cos(angle * Math.PI / 180);
              const electronY = centerY + currentShellRadius * Math.sin(angle * Math.PI / 180);
              electronsOnThisShell.push(
                <circle
                  key={`shell-${shellIndex}-electron-${i}`}
                  cx={electronX}
                  cy={electronY}
                  r={electronRadius}
                  fill={SHELL_COLORS[shellIndex % SHELL_COLORS.length]}
                  className="transition-all duration-500 animate-pulse-once"
                />
              );
            }

            return (
              <g key={`shell-group-${shellIndex}`}>
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={currentShellRadius}
                  fill="none"
                  stroke={SHELL_COLORS[shellIndex % SHELL_COLORS.length]}
                  strokeWidth={Math.max(0.5, 1.5 * drawingScale)} 
                  strokeDasharray={shellIndex > 0 && electronCount === 0 ? `${4*drawingScale} ${4*drawingScale}` : "none"} 
                  className="transition-all duration-300"
                  opacity={0.5}
                />
                {electronsOnThisShell}
              </g>
            );
          })}
        </svg>
      </CardContent>
    </Card>
  );
}

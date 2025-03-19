
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface SettingSliderProps {
  label: string;
  description?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  valueDisplay?: (value: number) => string;
  className?: string;
}

const SettingSlider: React.FC<SettingSliderProps> = ({
  label,
  description,
  min,
  max,
  step = 1,
  value,
  onChange,
  valueDisplay,
  className,
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <Label className="text-sm font-medium">{label}</Label>
        <span className="text-sm font-mono bg-background/50 rounded px-2 py-0.5 border border-border/30">
          {valueDisplay ? valueDisplay(value) : value}
        </span>
      </div>
      
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
      
      <Slider
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        className="py-2"
      />
    </div>
  );
};

export default SettingSlider;

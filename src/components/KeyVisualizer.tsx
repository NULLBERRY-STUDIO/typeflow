
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface KeyVisualizerProps {
  initialDelay: number;
  repeatRate: number;
  className?: string;
}

const KeyVisualizer: React.FC<KeyVisualizerProps> = ({
  initialDelay,
  repeatRate,
  className,
}) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const visualizerRef = useRef<HTMLDivElement>(null);

  // Convert the rates from macOS settings to milliseconds
  const initialDelayMs = 1000 / (15 - initialDelay);
  const repeatRateMs = 1000 / (repetitionRate());

  function repetitionRate() {
    // Convert macOS repeat rate (1-7) to characters per second
    return 2 + (repeatRate * 15);
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      setText(prev => prev.slice(0, -1));
      
      // Clear existing timers
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      
      // Setup initial delay
      timeoutRef.current = window.setTimeout(() => {
        // Setup interval for continuous backspacing
        intervalRef.current = window.setInterval(() => {
          setText(prev => prev.slice(0, -1));
        }, repeatRateMs);
      }, initialDelayMs);
      
      return;
    }

    if (e.key.length === 1) {
      e.preventDefault();
      
      // Add the key to the text
      setText(prev => prev + e.key);
      setIsTyping(true);
      
      // Clear existing timers
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      
      // Setup initial delay
      timeoutRef.current = window.setTimeout(() => {
        // Setup interval for continuous key presses
        intervalRef.current = window.setInterval(() => {
          setText(prev => prev + e.key);
        }, repeatRateMs);
      }, initialDelayMs);
    }
  };

  const handleKeyUp = () => {
    setIsTyping(false);
    
    // Clear timers
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Clean up on unmount
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom when text changes
    if (visualizerRef.current) {
      visualizerRef.current.scrollTop = visualizerRef.current.scrollHeight;
    }
  }, [text]);

  return (
    <div 
      className={cn(
        "p-6 rounded-lg neo-card focus-within:ring-1 focus-within:ring-accent transition-all duration-200 select-none",
        className
      )}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <div className="text-sm text-muted-foreground mb-4 flex items-center">
        <div className="h-2 w-2 rounded-full bg-accent animate-pulse mr-2"></div>
        Type here or hold a key to test repeat rate
      </div>
      <div 
        ref={visualizerRef}
        className="font-mono text-base min-h-[150px] max-h-[250px] overflow-y-auto whitespace-pre-wrap break-all text-left p-4 bg-background/50 rounded-md border border-border/30"
      >
        {text}
        <span className={cn(
          "inline-block w-2 h-5 align-middle bg-accent animate-text-cursor ml-0.5",
          isTyping && "animate-key-press"
        )}></span>
      </div>
    </div>
  );
};

export default KeyVisualizer;

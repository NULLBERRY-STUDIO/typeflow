
import React, { useState } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface CommandDisplayProps {
  initialDelay: number;
  repeatRate: number;
  className?: string;
}

const CommandDisplay: React.FC<CommandDisplayProps> = ({
  initialDelay,
  repeatRate,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  
  const command = `defaults write -g InitialKeyRepeat -int ${initialDelay} && defaults write -g KeyRepeat -int ${repeatRate}`;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast.success("Command copied to clipboard");
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy command");
      console.error("Failed to copy command:", err);
    }
  };
  
  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="text-sm font-medium">Terminal Command</h3>
      <div className="relative">
        <pre className="p-4 bg-black/90 dark:bg-black/70 text-green-400 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap break-all">
          {command}
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-black/20 hover:bg-black/30 text-white transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={16} /> : <Clipboard size={16} />}
        </button>
      </div>
      <p className="text-xs text-muted-foreground">
        Copy and paste this command into Terminal, then <span className="font-medium">log out and back in</span> for changes to take effect.
      </p>
    </div>
  );
};

export default CommandDisplay;

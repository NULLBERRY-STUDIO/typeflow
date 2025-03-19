import React, { useState } from 'react';
import KeyVisualizer from '@/components/KeyVisualizer';
import SettingSlider from '@/components/SettingSlider';
import CommandDisplay from '@/components/CommandDisplay';
import InfoCard from '@/components/InfoCard';
import { Separator } from '@/components/ui/separator';
import { Settings, Info, Grape, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Default values based on macOS system defaults
  const [initialDelay, setInitialDelay] = useState(15);
  const [repeatRate, setRepeatRate] = useState(2);
  const { theme, setTheme } = useTheme();

  // Helper function to display repeat rate in a human-readable form
  const displayRepeatRate = (value: number) => {
    // Convert the value to characters per second for display
    const charsPerSecond = 2 + (value * 15);
    return `${charsPerSecond.toFixed(0)} chars/sec`;
  };

  // Helper function to display initial delay in a human-readable form
  const displayInitialDelay = (value: number) => {
    // Convert the value to milliseconds for display
    const ms = Math.round(1000 / (15 - value + 1));
    return `${ms} ms`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Simplified Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 py-4 glass-panel subtle-shadow">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Grape className="w-6 h-6 text-berry-500" />
              <span className="text-lg font-medium">TypeFlow</span><span className="text-berry-500">Nullberry Studio</span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full w-9 h-9"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto px-4 py-8 flex-1 animate-scale-in animation-delay-100 mt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-berry-100 text-berry-600 dark:bg-berry-900/30 dark:text-berry-300 text-xs font-medium mb-3 animate-slide-up border border-berry-200 dark:border-berry-800">
            <Settings size={14} className="mr-1.5" />
            <span>Fine-tune your macOS key settings</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-berry-600 dark:text-berry-400">
            TypeFlow Tuner
          </h1>
          <p className="text-base text-muted-foreground max-w-md mx-auto">
            Test and generate macOS key repeat settings without repeatedly logging out.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <KeyVisualizer 
              initialDelay={initialDelay} 
              repeatRate={repeatRate}
              className="h-full bg-card rounded-lg border border-border p-4 shadow-sm"
            />
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-lg bg-card border border-border shadow-sm">
              <h2 className="text-lg font-medium mb-4 flex items-center text-berry-600 dark:text-berry-400">
                <Settings size={18} className="mr-2" />
                Settings
              </h2>
              
              <SettingSlider
                label="Initial Delay"
                description="How long until key repeat starts"
                min={1}
                max={120}
                value={initialDelay}
                onChange={setInitialDelay}
                valueDisplay={displayInitialDelay}
                className="mb-6"
              />
              
              <SettingSlider
                label="Repeat Rate"
                description="How fast keys repeat once started"
                min={1}
                max={7}
                value={repeatRate}
                onChange={setRepeatRate}
                valueDisplay={displayRepeatRate}
              />
            </div>
          </div>
        </section>

        <Separator className="my-8 opacity-30" />
        
        <section className="mb-8">
          <CommandDisplay 
            initialDelay={initialDelay} 
            repeatRate={repeatRate}
            className="bg-card rounded-lg border border-border p-4 shadow-sm" 
          />
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoCard title="About TypeFlow Tuner">
            <p className="mb-2">
              TypeFlow Tuner is a modern tool for fine-tuning macOS key repeat settings, 
              created by Nullberry Studio.
            </p>
            <p>
              It helps you find your perfect keyboard settings without repeatedly 
              logging out to test changes.
            </p>
          </InfoCard>
          
          <InfoCard title="How to Use">
            <p className="mb-2">
              1. Adjust the sliders to find your preferred settings
            </p>
            <p className="mb-2">
              2. Type in the test area to experience how it feels
            </p>
            <p className="mb-2">
              3. Copy the terminal command and run it in Terminal
            </p>
            <p>
              4. Log out and back in for the changes to take effect
            </p>
          </InfoCard>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Grape className="w-5 h-5 text-berry-500 mr-2" />
              <span className="text-sm">
                TypeFlow by <span className="text-berry-500">Nullberry Studio</span>
              </span>
            </div>
            
            <div className="flex space-x-4">
            Made with care. No tracking, no cookies.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

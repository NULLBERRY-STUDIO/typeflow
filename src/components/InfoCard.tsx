import React from 'react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={cn(
      "p-5 rounded-lg bg-card border border-border shadow-sm transition-all duration-300",
      className
    )}>
      <h3 className="text-lg font-semibold mb-3 text-berry-600 dark:text-berry-400">
        {title}
      </h3>
      <div className="space-y-3 text-sm text-foreground dark:text-gray-200">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;

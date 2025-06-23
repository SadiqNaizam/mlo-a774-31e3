import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

/**
 * @interface FormCardProps
 * @description Props for the FormCard component.
 * @property {React.ReactNode} children - The content to be rendered inside the card.
 * @property {string} [className] - Optional additional class names for custom styling.
 */
interface FormCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @component FormCard
 * @description A styled container component that wraps form elements in a card layout.
 * It provides a consistent look and feel for forms across the application, featuring
 * a white background, rounded corners, and a subtle shadow.
 *
 * @example
 * <FormCard>
 *   <LoginForm />
 * </FormCard>
 *
 * @param {FormCardProps} props - The props for the component.
 * @returns {JSX.Element} A card element wrapping the children.
 */
const FormCard: React.FC<FormCardProps> = ({ children, className }) => {
  return (
    <Card
      className={cn(
        'w-96 bg-card text-card-foreground shadow-lg border-0 rounded-md',
        className
      )}
    >
      {children}
    </Card>
  );
};

export default FormCard;

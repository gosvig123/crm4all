// isEditingContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';

const IsEditingContext = createContext<
  [boolean, () => void] | undefined
>(undefined);

interface IsEditingProviderProps {
  children: React.ReactNode;
}

export const IsEditingProvider = ({
  children,
}: IsEditingProviderProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <IsEditingContext.Provider value={[isEditing, toggleEditing]}>
      {children}
    </IsEditingContext.Provider>
  );
};

export const useIsEditing = () => {
  const context = useContext(IsEditingContext);
  if (!context) {
    throw new Error(
      'useIsEditing must be used within an IsEditingProvider'
    );
  }
  return context;
};

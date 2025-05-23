import React from 'react';
import { PageContainer as MuiContainer } from '@toolpad/core/PageContainer';
import { type PageContainerProps } from '@toolpad/core/PageContainer';

export default function PageContainer({ children, ...props }: PageContainerProps) {
  return (
    <MuiContainer {...props}>
      {children}
    </MuiContainer>
  )
}

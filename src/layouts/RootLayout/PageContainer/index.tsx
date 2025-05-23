import React from 'react';
import { PageContainer as MuiContainer } from '@toolpad/core/PageContainer';
import { type PageContainerProps } from '@toolpad/core/PageContainer';

export default function PageContainer({ children, ...props }: PageContainerProps) {
  return (
    <MuiContainer {...props} sx={{ maxWidth: '100% !important', ...props.sx }}>
      {children}
    </MuiContainer>
  )
}

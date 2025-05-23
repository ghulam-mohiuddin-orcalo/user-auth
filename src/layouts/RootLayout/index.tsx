import { NextAppProvider } from '@toolpad/core/nextjs';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NAVIGATION } from './navigation';
import { branding } from './branding';
import PageContainer from './PageContainer';
import theme from '@/theme/theme';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAppProvider
      branding={branding}
      navigation={NAVIGATION}
      theme={theme}
    >
      <DashboardLayout>
        <PageContainer breadcrumbs={[]}>
          {children}
        </PageContainer>
      </DashboardLayout>
    </NextAppProvider>
  );
}

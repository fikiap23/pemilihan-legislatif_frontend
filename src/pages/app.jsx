import { Helmet } from 'react-helmet-async';

import { DashboardView } from 'src/sections/dashboard/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <DashboardView />
    </>
  );
}

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'pengisian suara',
    path: '/pengisian-suara',
    icon: <Iconify icon="radix-icons:pencil-2" />,
  },
  {
    title: 'data keseluruhan',
    path: '/',
    icon: <Iconify icon="tdesign:chart-analytics" />,
  },

  {
    title: 'data kecamatan',
    path: '/blog',
    icon: <Iconify icon="teenyicons:building-outline" />,
  },
  {
    title: 'data kelurahan',
    path: '/blog',
    icon: <Iconify icon="healthicons:village-outline" />,
  },

  {
    title: 'petugas',
    path: '/user',
    icon: <Iconify icon="solar:user-outline" />,
  },
  {
    title: 'login',
    path: '/login',
    icon: <Iconify icon="material-symbols-light:login-sharp" />,
  },
  {
    title: 'Not found',
    path: '/404',
    icon: <Iconify icon="tabler:error-404-off" />,
  },
];

export default navConfig;

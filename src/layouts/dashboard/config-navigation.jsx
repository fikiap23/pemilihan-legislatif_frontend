import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'pengisian suara',
    path: '/pengisian-suara',
    icon: icon('ic_cart'),
  },
  {
    title: 'data keseluruhan',
    path: '/',
    icon: icon('ic_analytics'),
  },

  {
    title: 'data kecamatan',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'data kelurahan',
    path: '/blog',
    icon: icon('ic_blog'),
  },

  {
    title: 'petugas',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;

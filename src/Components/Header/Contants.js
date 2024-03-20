import {
  BASE_URI,
  PATH_CONSTANTS
} from '../../Configurations/Contants';

export const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Dashboard',
    href: `/${BASE_URI}/${PATH_CONSTANTS.DASHBOARD}/${PATH_CONSTANTS.USER}`
  },
  { name: 'Jobs', href: `/${BASE_URI}/auth/jobs` },
  { name: 'About', href: '/' },
  { name: 'Show Statistics', href: '/', isMobileMenu: true }
];

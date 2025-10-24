import {
  Album,
  Armchair,
  GraduationCap,
  Image,
  LayoutDashboard,
  SquareMenu,
  Star,
  Users,
} from 'lucide-react';

export const SIDEBAR_MENU_LIST = {
  admin: [
    {
      title: 'Dashboard',
      url: '/admin',
      icon: LayoutDashboard,
    },
    {
      title: 'Order',
      url: '/order',
      icon: Album,
    },
    {
      title: 'Menu',
      url: '/admin/menu',
      icon: SquareMenu,
    },
    {
      title: 'Table',
      url: '/admin/table',
      icon: Armchair,
    },
    {
      title: 'User',
      url: '/admin/user',
      icon: Users,
    },
  ],
  cashier: [
    {
      title: 'Order',
      url: '/order',
      icon: Album,
    },
  ],
  kitchen: [
    {
      title: 'Order',
      url: '/order',
      icon: Album,
    },
  ],
  attin: [
    {
      title: 'Dashboard',
      url: '/admin',
      icon: LayoutDashboard,
    },
    {
      title: 'Informasi Gambar',
      url: '/admin/informasi-gambar',
      icon: Image,
    },
    {
      title: 'Blog',
      url: '/admin/blog',
      icon: Star,
    },
    {
      title: 'Santri',
      url: '/admin/santri',
      icon: Users,
    },
    {
      title: 'Alumni',
      url: '/admin/alumni',
      icon: GraduationCap,
    },
  ],
  avbc: [
    {
      title: 'Dashboard',
      url: '/admin',
      icon: LayoutDashboard,
    },
    {
      title: 'Pendaftar',
      url: '/admin/pendaftar',
      icon: Users,
    },
  ],
};

export type SidebarMenuKey = keyof typeof SIDEBAR_MENU_LIST;

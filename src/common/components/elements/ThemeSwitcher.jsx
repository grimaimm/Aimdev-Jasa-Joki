// common/components/elements/ThemeSwitcher.jsx

import React from 'react';
import { useTheme } from 'next-themes';
import { CiCloudMoon, CiCloudSun } from 'react-icons/ci';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Menunggu hingga tema selesai dimuat dari localStorage
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Jika tema belum dimuat, tampilkan null untuk menghindari perubahan ikon yang tidak diinginkan
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className='flex items-center text-default-500 transition-all duration-300'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <CiCloudMoon size={32} /> : <CiCloudSun size={32} />}
    </button>
  );
}

// common/components/elements/ThemeSwitcher.jsx
import { useTheme } from 'next-themes';
import { CiCloudMoon, CiCloudSun } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import { Button } from '@heroui/react';

const ThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Menunggu hingga tema selesai dimuat dari localStorage
  useEffect(() => {
    setMounted(true);
  }, []);

  // Jika tema belum dimuat, tampilkan null untuk menghindari perubahan ikon yang tidak diinginkan
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    // Toggle between dark and light themes
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <button
        // isIconOnly
        // variant="light"
        // onPress={toggleTheme}
        className='flex items-center text-default-500 transition-all duration-300'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <CiCloudMoon size={32} />
        ) : (
          <CiCloudSun size={32} />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;

'use client';

import Dock from './Dock';
import { VscInfo, VscServerProcess, VscCreditCard, VscMail } from 'react-icons/vsc';

export default function DockWrapper() {
  const handleNavigation = (page: string) => {
    if (page === 'about') {
      // Navigate to homepage
      window.location.href = '/';
    } else if (page === 'services') {
      // Handle services page
      window.location.href = '/services';
    } else if (page === 'pricing') {
      // Handle pricing page
      window.location.href = '/pricing';
    } else if (page === 'contact') {
      // Handle contact page
      window.location.href = '/contact';
    }
  };

  const items = [
    { icon: <VscInfo size={18} />, label: 'About', onClick: () => handleNavigation('about') },
    { icon: <VscServerProcess size={18} />, label: 'Services', onClick: () => handleNavigation('services') },
    { icon: <VscCreditCard size={18} />, label: 'Pricing', onClick: () => handleNavigation('pricing') },
    { icon: <VscMail size={18} />, label: 'Contact', onClick: () => handleNavigation('contact') },
  ];

  return (
    <Dock
      items={items}
      panelHeight={70}
      baseItemSize={120}
      magnification={120}
      distance={0}
    />
  );
}
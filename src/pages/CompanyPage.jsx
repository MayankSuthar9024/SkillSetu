import React from 'react';
import { ComingSoonPage } from '../components/ComingSoonPage';

export function CompanyPage({ onNavigate, onBack }) {
  return (
    <ComingSoonPage
      title="Pharma & Industry Portal"
      onBack={onBack || (() => {
        if (onNavigate) onNavigate('feed');
        else window.history.back();
      })}
    />
  );
}

export default CompanyPage;

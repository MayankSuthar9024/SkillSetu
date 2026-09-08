import React from 'react';
import { ComingSoonPage } from '../ComingSoonPage';

export const CompanyProfileView = ({ user, onNavigate, onBack, isPublicView = false }) => {
  return (
    <ComingSoonPage
      title="Pharma & Industry Portal"
      onBack={onBack || (() => {
        if (onNavigate) onNavigate('feed');
        else window.history.back();
      })}
    />
  );
};

export default CompanyProfileView;

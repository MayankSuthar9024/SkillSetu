import React from 'react';
import { ComingSoonPage } from '../ComingSoonPage';

export const CollegeProfileView = ({ user, onNavigate, onBack }) => {
  return (
    <ComingSoonPage
      title="College & Institute Hub"
      onBack={onBack || (() => {
        if (onNavigate) onNavigate('feed');
        else window.history.back();
      })}
    />
  );
};

export default CollegeProfileView;

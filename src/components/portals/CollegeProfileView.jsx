import React from 'react';
import { CollegePortalView } from './CollegePortalView';

export const CollegeProfileView = ({ user, onNavigate, onBack }) => {
  return (
    <CollegePortalView
      user={user}
      onBack={onBack || (() => {
        if (onNavigate) onNavigate('feed');
        else window.history.back();
      })}
    />
  );
};

export default CollegeProfileView;

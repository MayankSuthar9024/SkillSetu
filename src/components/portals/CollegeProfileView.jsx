import React from 'react';
import { CollegePortalView } from './CollegePortalView';

export const CollegeProfileView = ({ user, onNavigate, onBack }) => {
  return (
    <div className="space-y-6">
      <CollegePortalView
        user={user}
        onBack={onBack || (() => {
          if (onNavigate) onNavigate('feed');
          else window.history.back();
        })}
      />
    </div>
  );
};

export default CollegeProfileView;

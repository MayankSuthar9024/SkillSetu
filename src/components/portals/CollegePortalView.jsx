import React from 'react';
import { ComingSoonPage } from '../ComingSoonPage';

export const CollegePortalView = ({ user, onBack }) => {
  return (
    <ComingSoonPage
      title="College & Institute Hub"
      onBack={onBack || (() => window.history.back())}
    />
  );
};

export default CollegePortalView;

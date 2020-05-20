import React, { memo } from 'react';

export const NotFoundPageComponent: React.FC = () => <div>Not Found</div>;

const NotFoundPage = memo(NotFoundPageComponent);
NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;

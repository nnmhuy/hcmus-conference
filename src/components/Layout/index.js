import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DesktopLayout from './DesktopLayout'
import MobileLayout from './MobileLayout'
import { withRouter } from 'react-router-dom';

const Layout = (props) => {
  const isMobileLayout = useMediaQuery('(max-width:800px)');
  const { children, location } = props
  if (isMobileLayout) {
    return <MobileLayout curPath={location.pathname}>
      {children}
    </MobileLayout>
  } else {
    return <DesktopLayout curPath={location.pathname}>
      {children}
    </DesktopLayout>
  }
}

export default withRouter(Layout)
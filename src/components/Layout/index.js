import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DesktopLayout from './DesktopLayout'
import MobileLayout from './MobileLayout'
import { withRouter } from 'react-router-dom';

const Layout = (props) => {
  const isMobileLayout = useMediaQuery('(max-width:800px)');
  const { children, location } = props

  const [themeColor, setTheme] = useState(true)

  useEffect(() => {
    const listenScrollEvent = e => {
      if (location.pathname === '/') {
        setTheme(false)
        if (window.scrollY > 50) {
          setTheme(true)
        }
      } else {
        setTheme(true);
      }
    }
    if (location.pathname === '/') {
      setTheme(false)
      window.addEventListener('scroll', listenScrollEvent)
      return () => {
        window.removeEventListener('scroll', listenScrollEvent)
      }
    } else {
      setTheme(true)
    }
  }, [location])

  if (isMobileLayout) {
    return <MobileLayout themeColor={themeColor}>
      {children}
    </MobileLayout>
  } else {
    return <DesktopLayout themeColor={themeColor}>
      {children}
    </DesktopLayout>
  }
}

export default withRouter(Layout)
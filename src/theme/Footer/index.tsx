import React, {type ReactNode} from 'react';
import Footer from '@theme-original/Footer';

/** Wrapper for footer layout hooks (logo comes from themeConfig). */
export default function FooterWrapper(props: React.ComponentProps<typeof Footer>): ReactNode {
  return (
    <div className="rv-footer-root">
      <Footer {...props} />
    </div>
  );
}

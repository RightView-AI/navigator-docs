import React, {type CSSProperties, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Footer from '@theme-original/Footer';

export default function FooterWrapper(props: React.ComponentProps<typeof Footer>): ReactNode {
  const logoUrl = useBaseUrl('/img/rightview-white.png');

  return (
    <div
      style={
        {
          '--rv-footer-logo': `url("${logoUrl}")`,
        } as CSSProperties
      }>
      <Footer {...props} />
    </div>
  );
}

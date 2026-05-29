import type {ReactNode} from 'react';
import type {Props} from '@theme/Logo';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Logo(props: Props): ReactNode {
  const wordmarkUrl = useBaseUrl('/img/rightview-white.png');

  return (
    <img
      {...props}
      src={wordmarkUrl}
      alt="Rightview"
      className={`navbar__wordmark ${props.className ?? ''}`}
    />
  );
}

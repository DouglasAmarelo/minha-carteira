import PageAside from '../PageAside';
import PageContent from '../PageContent';
import PageHeader from '../PageHeader';

import * as S from './styles';

const Layout = () => {
  return (
    <S.Grid>
      <PageHeader />
      <PageAside />
      <PageContent />
    </S.Grid>
  );
};

export default Layout;

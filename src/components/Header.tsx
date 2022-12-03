import styled from '@emotion/styled';
import { mdiMenu } from '@mdi/js';
import { Button, SvgIcon } from '@mui/material';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from './Image';
import { RootState } from '../redux';
import ProfileButton from './ProfileButton';

type Props = ReturnType<typeof mapStateToProps> & {
  onHambuger?: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = (props: Props) => {
  return (
    <Root>
      <div className="centering" style={{ minWidth: 64, padding: '0 4px' }}>
        <Button color="inherit" onClick={props.onHambuger}>
          <SvgIcon>
            <path d={mdiMenu} />
          </SvgIcon>
        </Button>
      </div>
      <Title>Mindfully For Business Portal</Title>
      <div className="expanded" />
      <OrgContainer>
        <OrgLogo />
        <OrgName>Biti's Việt Nam</OrgName>
      </OrgContainer>
      <div>
        <ProfileButton />
      </div>
    </Root>
  );
};

const mapStateToProps = (state: RootState) => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Header);

const Root = styled.div`
  height: 64px;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  background: linear-gradient(90.1deg, #00a5c2 0%, #14ada6 100%);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 600px) {
    display: none;
  }
`;

const OrgContainer = styled.div`
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
`;

const OrgLogo = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  margin-right: 6px;
`;

const OrgName = styled.span`
  font-weight: 500;
`;

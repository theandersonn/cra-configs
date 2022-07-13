import { renderWithTheme } from '../../../utils/tests/helpers';
import Welcome from '..';

const props = {
  img:
    'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
  title: 'CRA Storybook',
  subtitle: 'Configurações básicas: Storybook + Styled Components',
};

describe('Welcome', () => {
  it('should render correctly', () => {
    renderWithTheme(<Welcome {...props} />);
  });
});

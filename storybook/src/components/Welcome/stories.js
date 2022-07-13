import Welcome from '.';

const welcomeParams = {
  title: 'Welcome',
  component: Welcome,
};

export const Default = (args) => <Welcome {...args} />;

Default.args = {
  title: 'CRA Storybook',
  subtitle: 'Configurações básicas: Storybook + Styled Components',
  img:
    'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
};

export default welcomeParams;

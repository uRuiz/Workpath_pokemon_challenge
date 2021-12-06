import Header from './Header';

const Template = (args) => <Header {...args} />;

export const HeaderDefault = Template.bind({});

HeaderDefault.args = {
  cartItems: 6,
};

export default {
  title: 'Header',
  component: Header,
};

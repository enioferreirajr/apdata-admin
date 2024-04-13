import Icons from '../icons/MuiIcons';  // Importa todos os ícones como 'Icons'

const MenuItems = [
  {
    title: "Dashboard",
    icon: <Icons.Dashboard />,  // Uso do ícone como componente JSX
    link: "/dashboard",
    subMenu: []
  },

  {
    title: "Financeiro",
    icon: <Icons.LocalAtm />,  // Uso do ícone como componente JSX
    link: "/financeiro",
    subMenu: []
  },
  {
    title: "Operacional",
    icon: <Icons.Build />,  // Uso do ícone como componente JSX
    link: "/operacional",
    subMenu: []
  },
  // Outros itens de menu...
];

export default MenuItems;

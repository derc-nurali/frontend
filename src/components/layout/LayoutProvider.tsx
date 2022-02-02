import Cookies from 'js-cookie';
import { ComponentType, createContext, ReactNode, useEffect, useState } from 'react';
import { MegaMenu } from '../mega-menu';

const LayoutDrawerStorage = () => Cookies.get('layoutDrawer') === 'true';

type renderType = () => ReactNode;
interface LayoutDrawerProps {
  anchor: 'left' | 'top' | 'right' | 'bottom';
  open: boolean;
  render?: renderType;
}

export interface LayoutContextInterface {
  layoutDrawer: LayoutDrawerProps;
  toggleLayoutDrawer: any;
  closeLayoutDrawer: any;
}

export const LayoutContext = createContext<LayoutContextInterface>({
  layoutDrawer: {
    anchor: 'top',
    open: LayoutDrawerStorage(),
    render: () => <MegaMenu />,
  },
  toggleLayoutDrawer: (child: ReactNode) => {},
  closeLayoutDrawer: (child: ReactNode) => {},
});

export const LayoutProvider: ComponentType = (props) => {
  const [layoutDrawer, setLayoutDrawer] = useState<LayoutDrawerProps>({
    anchor: 'top',
    open: LayoutDrawerStorage(),
    render: () => <MegaMenu />,
  });

  const closeLayoutDrawer = () => {
    Cookies.set('layoutDrawer', `false`);
    setLayoutDrawer({
      anchor: layoutDrawer.anchor,
      open: false,
    });
  };

  const toggleLayoutDrawer = (render?: renderType) => {
    Cookies.set('layoutDrawer', `${!layoutDrawer.open}`);
    setLayoutDrawer({
      anchor: layoutDrawer.anchor,
      open: !layoutDrawer.open,
      render,
    });
  };

  const openLayoutDrawer = (render?: renderType) => {
    Cookies.set('layoutDrawer', 'true');
    setLayoutDrawer({
      anchor: layoutDrawer.anchor,
      open: false,
      render,
    });
  };

  useEffect(() => {
    openLayoutDrawer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        layoutDrawer,
        toggleLayoutDrawer,
        closeLayoutDrawer,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

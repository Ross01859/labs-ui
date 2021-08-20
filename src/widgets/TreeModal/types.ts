import { BoxProps } from "../../components/Box";

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface TreeInjectedProps {
  onDismiss?: Handler;
}

export interface TreeModalProps extends TreeInjectedProps, BoxProps {
  title?: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  headerBackground?: string;
  minWidth?: string;
}

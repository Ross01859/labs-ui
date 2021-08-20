import React from "react";
import { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import { TreeModalBody, TreeModalHeader, TreeModalTitle, TreeModalContainer, TreeModalCloseButton, TreeModalBackButton } from "./styles";
import { TreeModalProps } from "./types";

const TreeModal: React.FC<TreeModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "0px",
  headerBackground = "transparent",
  minWidth = "320px",
  ...props
}) => {
  const theme = useTheme();
  return (
    <TreeModalContainer minWidth={minWidth} {...props}>
      <TreeModalHeader background={getThemeValue(`colors.${headerBackground}`, headerBackground)(theme)}>
        <TreeModalTitle>
          {onBack && <TreeModalBackButton onBack={onBack} />}
          <Heading>{title}</Heading>
        </TreeModalTitle>
        {!hideCloseButton && <TreeModalCloseButton onDismiss={onDismiss} />}
      </TreeModalHeader>
      <TreeModalBody p={bodyPadding}>{children}</TreeModalBody>
    </TreeModalContainer>
  );
};

export default TreeModal;

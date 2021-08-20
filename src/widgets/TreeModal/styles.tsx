import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { TreeModalProps } from "./types";

export const TreeModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  // background: ${({ background }) => background || "transparent"};
  // border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  // justify-content: flex-end;
  // padding: 12px 24px;
`;

export const TreeModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const TreeModalBody = styled(Flex)`
  // flex-direction: column;
  // max-height: 90vh;
  // overflow-y: auto;
`;

export const TreeModalCloseButton: React.FC<{ onDismiss: TreeModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
      <CloseIcon color="primary" />
    </IconButton>
  );
};

export const TreeModalBackButton: React.FC<{ onBack: TreeModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  );
};

export const TreeModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  // background: ${({ theme }) => theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  // border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  // border-radius: 32px;
  // width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    // width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`;

import React from "react";
import { Box, Button } from "@mui/material";

interface OMLeftNavProps {
  isVisible: boolean;
  onCollapse: () => void;
  onExpand: () => void;
  children: React.ReactNode; // For nesting OMNavFileInfo
}

const OMLeftNav: React.FC<OMLeftNavProps> = ({
  isVisible,
  onCollapse,
  onExpand,
  children,
}) => {
  if (!isVisible) {
    return (
      <Box sx={{ position: "absolute", bottom: 16, left: 16 }}>
        <Button onClick={onExpand}>Expand</Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: "#f0f0f0",
        padding: 2,
        position: "absolute",
        top: 64,
        left: 0,
        height: "calc(100% - 64px)",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
      }}
    >
      {children} {/* Nest OMNavFileInfo here */}
      <Box sx={{ marginTop: 2 }}>
        <Button onClick={onCollapse}>Collapse Nav</Button>
      </Box>
    </Box>
  );
};

export default OMLeftNav;

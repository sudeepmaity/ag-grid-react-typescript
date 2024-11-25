// OMLeftNav.tsx
import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

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
      <Box
        sx={{
          width: "40px", // Adjust the width as needed
          backgroundColor: "#f0f0f0",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <IconButton onClick={onExpand}>
          <ChevronRight />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "300px",
        backgroundColor: "#f0f0f0",
        padding: 2,
        height: "100%",
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

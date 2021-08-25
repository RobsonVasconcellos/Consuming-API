import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Text, UnstyledLink } from "@sparkpost/matchbox";

const SelectedItem = styled(Text)`
  text-decoration: underline;
`;

const SelectableItem = styled(UnstyledLink)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavItem = ({ children, onClick, selected }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <Box marginBottom="200">
      {selected ? (
        <SelectedItem aria-current={true}>{children}</SelectedItem>
      ) : (
        <SelectableItem href="#" onClick={handleClick}>
          {children}
        </SelectableItem>
      )}
    </Box>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default NavItem;

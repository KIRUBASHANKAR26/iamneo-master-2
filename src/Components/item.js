import React from "react";
import styled from "@xstyled/styled-components";

const CardHeader = styled.div`
  font-weight: 500;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;
function userItem(props) {
  const { user, provided } = props;

  return (
    <DragItem
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <CardHeader>{user?.name?.first + " " + user?.name?.last}</CardHeader>
      <span>{user?.mail}</span>
      <CardFooter>
        <span>{user?.cell}</span>
      </CardFooter>
    </DragItem>
  );
}

export default React.memo(userItem);

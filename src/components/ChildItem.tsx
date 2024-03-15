import { Box, Stack } from "@mui/material";
import { Component } from "react";
import { styles } from "./styles";
import { Delete, EditNote } from "@mui/icons-material";
interface Iprops {
  data: { id: number; task: string }[];
  handlerDelete: (itemId: number) => void;
  handlerEdit: (itemId: number) => void;
  onEdit: boolean;
}

export default class ChildItem extends Component<Iprops> {
  render() {
    const { data, handlerDelete, handlerEdit } = this.props;
    const myData = data.map((item: { id: number; task: string }) => (
      <Stack
        sx={styles.childItem}
        key={item.id}
        direction={"row"}
        justifyContent={"space-between"}
        gap={1}
        alignItems={"center"}
      >
        <Box sx={styles.itemTxt}>{item.task}</Box>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <EditNote
            onClick={() => handlerEdit(item.id)}
            sx={styles.iconStyles}
          />

          <Delete
            onClick={() => handlerDelete(item.id)}
            sx={styles.iconStyles}
          />
        </Stack>
      </Stack>
    ));
    return <Box sx={styles.childItem_Container}>{myData}</Box>;
  }
}

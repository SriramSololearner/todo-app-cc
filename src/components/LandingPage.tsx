import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, Component } from "react";
import { styles } from "./styles";
import ChildItem from "./ChildItem";
interface Istate {
  data: { id: number; task: string }[];
  value: string;
  onEdit: boolean;
  index: number;
}

class LandingPage extends Component {
  state: Istate = {
    value: "",
    data: [],
    onEdit: false,
    index: 0,
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState({ value: event.target.value });

  handlerAdd = () => {
    const { value, data } = this.state;
    const obj = {
      id: data.length + 1,
      task: value,
    };
    if (value !== "") {
      this.setState({ data: [...data, obj], value: "" });
    } else alert("Please enter a valid");
  };
  handlerDelete = (itemId: number) => {
    let newData = this.state.data.filter((el) => el.id !== itemId);
    this.setState({ data: newData });
  };
  handlerEdit = (itemId: number) => {
    const indexData = this.state.data.find((el) => el.id === itemId);
    this.setState({ onEdit: true, value: indexData?.task, index: itemId });
  };
  handlerUpdate = () => {
    const { value, data, index } = this.state;
    const newData = data.findIndex((el) => el.id === index);
    data[newData].task = value;
    this.setState({ data: data, onEdit: false, value: "", index: 0 });
  };

  render() {
    const { data, value, onEdit } = this.state;

    return (
      <Box sx={styles.root}>
        <Typography>Notes App</Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={1}
          alignItems={"center"}
          sx={styles.inputContainer}
        >
          <TextField
            placeholder="Type notes here..."
            onChange={this.handleChange}
            value={value}
            sx={styles.input}
          />

          {onEdit ? (
            <Button
              variant="outlined"
              onClick={this.handlerUpdate}
              sx={styles.addBtn}
            >
              update
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={this.handlerAdd}
              sx={styles.addBtn}
            >
              Add
            </Button>
          )}
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
          sx={styles.childContainer}
        >
          {this.state.data.length > 0 ? (
            <ChildItem
              data={data}
              handlerDelete={this.handlerDelete}
              handlerEdit={this.handlerEdit}
              onEdit={onEdit}
            />
          ) : (
            " no data available"
          )}
        </Stack>
      </Box>
    );
  }
}

export default LandingPage;

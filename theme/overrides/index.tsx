import { merge } from "lodash";
import Card from "./Card";
import Lists from "./Lists";
import Paper from "./Paper";
import Input from "./Input";
import Button from "./Button";
import Fab from "./Fab";
import Tooltip from "./Tooltip";
import Backdrop from "./Backdrop";
import Typography from "./Typography";
import IconButton from "./IconButton";
import Autocomplete from "./Autocomplete";
import TextField from "./TextField";
import Toggle from "./Toggle";
import Table from "./Table";
import Link from "./Link";
import Appbar from "./Appbar";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return merge(
    Card(theme),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    TextField(theme),
    Fab(theme),
    Toggle(theme),
    Table(theme),
    Link(theme),
    Appbar(theme)
  );
}

import React from "react";
import { TextField } from "@material-ui/core";

export function InputText({id, name, label, autoFocus, register, error, errorMsg}) {

    return(
    <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id={id}
        label={label}
        name={name}
        autoFocus={autoFocus}
        inputRef={register}
        helperText={error && errorMsg}
        error={!!error}
    />            
    )
}
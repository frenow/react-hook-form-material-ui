import React from "react";
import { TextField } from "@material-ui/core";
import InputMask from "react-input-mask";

export function InputTextMask({id, name, label, autoFocus, register, error = null, errorMsg = null, mask}) {

    return(
    <InputMask
        mask={mask}
        maskChar=" "
    >
    {() => <TextField
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
    /> }
    </InputMask>   
 
    )
}
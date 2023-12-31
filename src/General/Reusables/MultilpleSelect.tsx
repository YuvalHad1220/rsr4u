import { Autocomplete, TextField } from "@mui/material";
import React from "react";
// a multiple selection component, based on fadida5's animated multiple selection: https://github.com/fadida5/kasham/blob/main/backend/frontend/src/components/general/Select/AnimatedMultiSelect.js

interface MultipleSelectProps {
    label: string, 
    options: string[],
    readOnly?: boolean
    value?: string[]
    onSelection: Function // will get values as an array 
};


const MultipleSelect: React.FC<MultipleSelectProps> = ({label,value, options, onSelection, readOnly, ...rest}) => {
    
return (
    <Autocomplete
      multiple
      readOnly = {false}
      disableCloseOnSelect
      filterSelectedOptions
      freeSolo
      defaultValue={value}
      onChange={(_, v) => onSelection(v)}
      options={options}
    // getOptionLabel={(option) => option} if we wont get an array of string this is how we filter
      renderInput={(params) => (<TextField {...params} label={label} inputProps={{...params.inputProps, readOnly: readOnly !== undefined}}/>)}
      {...rest}

    />

);

}

export default MultipleSelect;
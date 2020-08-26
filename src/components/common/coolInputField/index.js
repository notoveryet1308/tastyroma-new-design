import React, { useState } from 'react';
import {
  InputFieldWrapper,
  Label,
  Input
} from './style';



function Index({ name, getValue, type }) {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value)
    getValue({ [name]: e.target.value })
  }

  return (
    <InputFieldWrapper>
      <Label
        htmlFor="firstname"
        top={value.length > 0 ? "0" : ".9rem"}
        left={value.length > 0 ? "0" : "1.4rem"}
        opacity={value.length > 0 ? "1" : "0"}
      >{name}
      </Label>
      <Input
        name={name}
        placeholder={name}
        value={value}
        type={type}
        onChange={onChangeHandler}
      // required
      />
    </InputFieldWrapper>
  )
}

export default Index

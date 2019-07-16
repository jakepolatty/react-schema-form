const inputTypeMap = {
  string: [
    "TextInput",
    "TextAreaInput",
    "PasswordInput",
    "EmailInput",
    "UrlInput",
    "FileInput",
    "SelectInput",
    "DateInput",
    "DatetimeInput",
    "GeoBoundingBoxInput",
    "HiddenInput",
  ],
  number: [
    "NumberInput",
    "NumberSliderInput",
    "TextInput",
    "RangeInput",
    // "SelectInput",
    "HiddenInput",
  ],
  boolean: [
    "RadioInput",
    "CheckboxInput",
    "HiddenInput",
  ],
  integer: [
    "NumberInput",
    "NumberSliderInput",
    "TextInput",
    "RangeInput",
    // "SelectInput",
    "HiddenInput",
  ],
  array: [
    "MultiSelectInput",
    "MultiCheckboxInput",
    "MultiFileInput",
    "HiddenInput",
  ],
};

export default inputTypeMap;
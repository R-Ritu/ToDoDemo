import type DropdownAlert from "react-native-dropdownalert";

export type DropDownHolderType = DropdownAlert;
export class DropDownHolder {
  static dropDown: DropdownAlert;
  static setDropDown(dropDown: DropdownAlert) {
    this.dropDown = dropDown;
  }
  static getDropDown() {
    return this.dropDown;
  }
}

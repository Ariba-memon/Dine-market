export interface NavbarItemType{
    label: string,
href:string,
    isDropDown: boolean,
    dropDownData :any,
};

export const NavbarArray : Array<NavbarItemType> =[
    {
        label:'Female',
        href:'/female',
        isDropDown: false,
        dropDownData: null,
    },
    {
        label:'Male',
        href:'/male',
        isDropDown: false,
        dropDownData: null,
    },
    {
        label:'Kids',
        href:'/kids',
        isDropDown: false,
        dropDownData: null,

    },
    {
        label:'All Products',
        href:'/allproducts',
        isDropDown: false,
        dropDownData: null,

    },
]
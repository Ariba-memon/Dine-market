
import { defineField } from "sanity";
export const product ={
    name:"product",
    type:'document',
    title:'Product',
    fields:[
        {
            name:"title",
            title:'Product Title',
            type:"string"
        },
        {
            name:"description",
            title:'Product Description',
            type:"string"
        },
        {
            name:"price",
            title:'Product Price',
           type:'number'
        },
        {
            name:"image",
            title:'Product Image',
            type:"image"
        },
        
        defineField({
            name:"category",
            title:"Product Category",
            type:"reference",
        to:[ 
                {
                type: "category"
            },
            
        ]
        })
    ]
}



import {defineField, defineType} from 'sanity'
//import { AiOutlineMenu } from 'react-icons/ai'
//import {PlayIcon,MenuIcon} from "@sanity/icons" doeasnt work with schema
export default defineType({
  name: 'item',
  title: 'Item',
  type: 'document',
  //icon:AiOutlineMenu,
  fields: [
    
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
      //validation: rule=>rule.required()
    }),
     defineField({
      name: 'type',
      title: 'Item Type(Household, Everyday, etc)',
      type: 'string',
    }),
    defineField({
      name:'link',
      title:'Offerings',
      type:'string'
    }),
    defineField({
      name: 'slug',
      title: 'ItemID',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      /*validation: (Rule) =>
        Rule.custom(async (value, context) => {
          /*const isUnique = await isUniqueColour(value, context);
          if (!isUnique) return 'Colour is not unique';
          return true;
        }),*/
    }),
    defineField({
      name: 'image',
      title: 'Main image',
      type: 'image',
      //validation: rule=>rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'price',
      title: 'Cost/Price',
      type:'number',
      //validation: rule=>rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type:'string',
      //validation: rule=>rule.required()
    }),
    defineField({
      name: 'cat',
      title: 'Category',
      type: 'reference',
      //validation: rule=>rule.required(),
      to: {type:'cat' }
      //[{type: 'reference', to: {type: 'category'}}],
    }),
    /*defineField({
      name: 'subDishes',
      title: 'Sub Dishes',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'subDish' } }],
    })*/
  ],

  /*preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'image',
    },
    /*prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  }*/
})
/* */
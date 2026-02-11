import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            label: 'Title (Japanese)',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug (URL)',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedAt',
            label: 'Published Date',
            type: 'date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        {
            name: 'excerpt',
            label: 'Excerpt (Japanese)',
            type: 'textarea',
        },
        {
            name: 'coverImage',
            label: 'Cover Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'content',
            label: 'Content',
            type: 'richText',
        },
        {
            name: 'tags',
            label: 'Tags',
            type: 'array',
            fields: [
                {
                    name: 'tag',
                    type: 'text',
                },
            ],
        },
    ],
}

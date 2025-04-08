import type { CollectionConfig } from 'payload'

import {
  defaultColors,
  FixedToolbarFeature,
  lexicalEditor,
  TextStateFeature,
  TreeViewFeature,
} from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),

          TextStateFeature({
            // prettier-ignore
            state: {
              color: {
                ...defaultColors.background,
                ...defaultColors.text,
                // fancy gradients!
                galaxy: { label: 'Galaxy', css: { background: 'linear-gradient(to right, #0000ff, #ff0000)', color: 'white' } },
                sunset: { label: 'Sunset', css: { background: 'linear-gradient(to top, #ff5f6d, #6a3093)' } },
              },
              // You can have both colored and underlined text at the same time. 
              // If you don't want that, you should group them within the same key.
              // (just like I did with defaultColors and my fancy gradients)
              underline: {
                'solid': { label: 'Solid', css: { 'text-decoration': 'underline', 'text-underline-offset': '4px' } },
                'yellow-dashed': { label: 'Yellow Dashed', css: { 'text-decoration': 'underline dashed', 'text-decoration-color': 'light-dark(dark-yellow,yellow)', 'text-underline-offset': '4px' } },
              },
            },
          }),

          TreeViewFeature(),
        ],
      }),
    },
  ],
}

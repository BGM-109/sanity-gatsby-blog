export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600edd73e75f9a69b8a889a5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b38xf8ou',
                  apiId: '18b0a3e9-c384-4be3-9359-552d163be1ef'
                },
                {
                  buildHookId: '600edd73ad07d4debacec15f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-z8kx8n33',
                  apiId: '6b71875f-159f-4ca9-972d-23df9eb62c50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BGM-109/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-z8kx8n33.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

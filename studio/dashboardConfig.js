export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d12c7d1f0e7fc48c90f6593',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-poc-studio',
                  apiId: '0efa942b-b7f0-4e6c-becd-47b26f645850'
                },
                {
                  buildHookId: '5d12c7d202c318962c16c1d2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-poc',
                  apiId: '8c556c13-dcd6-4828-b06a-dd3e7c763d4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dijalmasilva/sanity-nextjs-poc',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-poc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

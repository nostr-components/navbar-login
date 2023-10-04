import { html, render } from '../js/standalone.module.js'
import Navbar from '../lib/navbar2.js'

render(html`<${Navbar}
links=${[
    {
      '@id':
        'https://github.com/ursuscamp/nomen/blob/master/docs/SPEC.md',
      label: 'Nomen'
    },
    {
      '@id': 'https://nomenexplorer.com/explorer',
      label: 'Explorer'
    },
    {
      '@id': 'https://nomenexplorer.com/stats',
      label: 'Stats'
    },
    {
      '@id': 'https://nomenexplorer.com/newname',
      label: 'Create'
    },
    {
      '@id': 'https://nomenexplorer.com/api/name',
      label: 'API'
    },
    {
      '@id': 'https://github.com/play-grounds/nomen',
      label: 'Source'
    }
  ]}
/>
`, document.body)

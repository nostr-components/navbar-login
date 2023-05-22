import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      isAuthenticated: false,
      user: { name: 'John Doe' }
    };
  }

  handleLogin = async () => {
    const cacheUri = 'https://nostr.social';
    console.log('handleLogin');
    var pubkey = await window.nostr.getPublicKey();
    fetch(`${cacheUri}/.well-known/nostr/pubkey/${pubkey}/index.json`).then(response => response.json()).then(data => {
      console.log(data);
      this.setState({ user: data });
    });




    this.setState({ user: { name: pubkey.substring(0, 8) } });

    this.setState({ isAuthenticated: !this.state.isAuthenticated });

  };

  render() {
    const links = [
      { '@id': '#home', label: 'Home' },
      { '@id': '#about', label: 'About' },
      { '@id': '#contact', label: 'Nostr' }
    ]

    const loginButtonText = this.state.isAuthenticated ? `Welcome, ${this.state.user.name}` : 'Login';

    return html`
      <nav style="display: flex; justify-content: space-between; padding: 10px 50px; background-color: #f8f9fa; border-bottom: 1px solid #e5e5e5; box-sizing: border-box;">
        <div>
          ${links.map(link => html`
          
            <a href=${link['@id']} 
              style="color: #6c757d; text-decoration: none; margin-left: 140px; padding: 0 15px;"
              onmouseover=${e => e.currentTarget.style.color = '#343a40'}
              onmouseout=${e => e.currentTarget.style.color = '#6c757d'}
            >
              ${link.label}
            </a>
          `)}
        </div>
        <button 
          style="color: #6c757d; text-decoration: none; padding: 0 15px; border: none; background: none;"
          onmouseover=${e => { e.currentTarget.style.color = '#343a40'; e.currentTarget.style.cursor = 'pointer'; }}
          onmouseout=${e => { e.currentTarget.style.color = '#6c757d'; e.currentTarget.style.cursor = 'default'; }}
          onclick=${this.handleLogin}
        >
          ${loginButtonText}
        </button>
      </nav>
    `;
  }
}

export default Navbar

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

  handleLogin = () => {
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
      <nav style="display: flex; justify-content: space-between; padding: 10px 50px; background-color: #f8f9fa; borderBottom: 1px solid #e5e5e5; boxSizing: border-box;">
        <div>
          ${links.map(link => html`
            <a href=${link['@id']} 
              style="color: #6c757d; text-decoration: none; padding: 0 15px;"
              onMouseOver="this.style.color='#343a40'; this.style.cursor='pointer';"
              onMouseOut="this.style.color='#6c757d'; this.style.cursor='default';"
            >
              ${link.label}
            </a>
          `)}
        </div>
        <button 
          style="color: #6c757d; text-decoration: none; padding: 0 15px; border: none; background: none;"
          onMouseOver="this.style.color='#343a40'; this.style.cursor='pointer';"
          onMouseOut="this.style.color='#6c757d'; this.style.cursor='default';"
          onClick=${this.handleLogin}
        >
          ${loginButtonText}
        </button>
      </nav>
    `;
  }
}

export default Navbar

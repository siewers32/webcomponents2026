// site-nav.js
class SiteNav extends HTMLElement {
  connectedCallback() {
    const siteName = this.getAttribute('site-name') || 'Sans-serif';
    // Omdat we hier geen Shadow DOM gebruiken, 
    // hoeven we de adoptedStyleSheets niet te zetten.
    // De browser pakt de @scope uit main.css automatisch op.
    this.innerHTML = `
      <div class="logo">${siteName}</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projecten</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    `;

  }
}

customElements.define('site-nav', SiteNav);
class UserCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || 'Onbekend';
    const avatar = this.getAttribute('avatar') || 'https://via.placeholder.com/150';
    const userContent = this.innerHTML;

    this.innerHTML = `
      <div class="user-card-wrapper">
        <img src="${avatar}" alt="${name}">
        <h3>${name}</h3>
        <div class="bio">
          <p>${userContent}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('user-card', UserCard);
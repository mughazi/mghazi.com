class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <a href="/"><h1>Fikri Ghazi</h1></a>
            <nav>
                <a href="mailto:fikri@mghazi.com">
                  <small>Email</small>
                </a>
                <a href="https://www.linkedin.com/in/fikrigha/" target="_blank">
                  <small>LinkedIn</small>
                </a>
                <a href="https://github.com/fikrigha" target="_blank">
                  <small>GitHub</small>
                </a>
                <a href="https://twitter.com/fikrigha" target="_blank">
                  <small>Twitter</small>
                </a>
            </nav>
        </header>
    `;
  }
}

customElements.define("header-component", CustomHeader);

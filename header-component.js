class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <a href="/"><h1>Fikri Ghazi</h1></a>
            <nav>
              <a href="mailto:fikri@mghazi.com">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/fikrigha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mughazi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </nav>
        </header>
    `;
  }
}

customElements.define("header-component", CustomHeader);

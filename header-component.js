class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <a href="/"><h1>Fikri Ghazi</h1></a>
            <nav>
                <a href="mailto:fikri@mghazi.com">Email</a>
                <a href="https://www.linkedin.com/in/fikrigha/" target="_blank">LinkedIn</a>
                <a href="https://github.com/fikrigha" target="_blank">GitHub</a>
                <a href="https://twitter.com/fikrigha" target="_blank">Twitter</a>
            </nav>
        </header>
    `;
  }
}

customElements.define("header-component", CustomHeader);

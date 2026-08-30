const Header = {
  render: (selector) => {
    const element = document.querySelector(selector);
    if (!element)  return;
    
    {
      element.innerHTML = `
        <div class="header-container">
          <h1>Dragon Ball</h1>
        </div>
      `;
    }
  }
};
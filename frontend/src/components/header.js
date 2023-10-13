const header = () => {
    const template = `
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <h1>Header</h1>
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item"><a class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/transferir" class="nav-link">Transferir</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>`;

  return template;
};

export default header;


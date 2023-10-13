import { LAMPORTS_PER_SOL } from "../global";

const product = async ( product ) => {
    const template = `
    <a href = '${product.id}'>
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src='${product.imageUrl}' class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text"><small class="text-body-secondary">${product.price / LAMPORTS_PER_SOL} SOL</small></p>
        </div>
      </div>
    </div>
  </div>
  </a>
    `;

    return template;
};

export default product;
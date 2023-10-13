import { LAMPORTS_PER_SOL } from '@solana/web3.js'; 
const card = async (product) => {
    const template = `<a href="${product.id}"><div class="card">
        <img class="card-img-top" src="${product.imgUrl}" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title text-center">${product.name}</h4>
          <p class="card-text">${product.description}</p>
          <p class="card-text">${product.price / LAMPORTS_PER_SOL} SOL</p>
        </div>
      </div>
      </a>`

      return template;
}

export default card;

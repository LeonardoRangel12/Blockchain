import { LAMPORTS_PER_SOL } from '@solana/web3.js'; 
const card = async (product) => {
        const template = `<a href="gamePage?id=${product._id}"><div class="card">
        <img alt='No image found' class="card-img-top" src="https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs=" alt="Card image cap">
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

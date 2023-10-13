const landing = () => {
    const template = `
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/b56a18e0eacdf51aa2a5306b0f533204.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/7b5ad0c52e58076e34f393efe9019ed2.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/8df3fa2645a0d3c10128e04c4d64e0e4.jpg" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <div class="container">
    <h2 class="text-black">Tarjetas</h2>
    <p>Estas son algunas tarjetas con imágenes y nuevos textos.</p>
    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5e93ee9a764cf2326a92f61f8fefdb1f.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Destiny 2 es un juego de disparos en primera persona con elementos de rol. Explora el universo y combate a las fuerzas oscuras en esta emocionante aventura.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/b5209fa882c43a2d47dc6f0243e9d64f.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Fallout 4 te sumerge en un mundo postapocalíptico lleno de peligros y misterios. Sobrevive y descubre la verdad detrás del yermo.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/aa9264d85b7225106a396c7816efc645.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Firewatch es un juego de aventuras en primera persona que te lleva a un bosque de Wyoming. Explora, descubre secretos y enfrenta desafíos emocionales.</p>
        </div>
      </div>
    </div>
    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5ed6a5e2ae1fb654c27be4095e2c51cf.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Tetris Effect es una experiencia única de Tetris con efectos visuales y música envolventes. Relájate y disfruta de este juego clásico reinventado.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/6d34508bd51862304942e803f8888de5.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Devil May Cry 5 es un juego de acción frenética con demonios y héroes. Embárcate en una misión para salvar el mundo de las fuerzas demoníacas.</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5d6a917d026791bf7a5e0032df000f71.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Baldur's Gate 3 es un juego de rol épico en un mundo de fantasía. Embárcate en una aventura llena de magia, monstruos y decisiones impactantes.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="card">
        <div class="card-body">
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Collection</th>
                        <th scope="col">Price</th>
                        <th scope="col">Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/84ddfb34126fc3a48ee38d7044e87276/32/64x64.png" alt="Elongevity Enigma" class="mr-2">Grand Theft Auto V</td>
                        <td> 0.01 sol</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td><img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/ab968680ad9fa9909541f1225dcf0711/32/64x64.png" alt="Elongevity Enigma" class="mr-2">Baldurs Gate 3</td>
                      <td> 0.01 sol</td>
                      <td>2000</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td><img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/7316e11fe78963395fbab4a85d0b8f85/32/64x64.png" alt="Elongevity Enigma" class="mr-2">Elden Ring</td>
                    <td> 0.01 sol</td>
                    <td>2000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td><img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/29dc30ad86f873300d82df7ede9a0441/32/64x64.png" alt="Elongevity Enigma" class="mr-2">Counter-Strike: Global Offensive</td>
                  <td> 0.01 sol</td>
                  <td>2000</td>
              </tr>
                    <!-- Repite el código de <tr> para los otros elementos de la lista -->
                </tbody>
            </table>
        </div>
    </div>
</div>
    `;
  return template;
}

export default landing;
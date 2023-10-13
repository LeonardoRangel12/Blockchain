import "../styles/search.css";
import $ from "jquery";
import axios from "axios";
import product from "./product";
import { backendEndpoint } from "../global";
const searchPage = async () => {
  const searchPage = `    
  <div class="d-flex justify-content-center align-items-center vh-100">
        <form class="card card-sm text-center">
            <div class="card-body row no-gutters align-items-center">
                <div class="col-auto">
                    <i class="fas fa-search h4 text-body"></i>
                </div>
                <div class="col">
                    <input
                        class="form-control form-control-lg form-control-borderless"
                        type="text"
                        id="searchInput"
                        placeholder="Search topics or keywords"
                    />
                </div>
                <div class="col-auto">
                    <button class="btn btn-lg btn-success" id="search" type="button">Search</button>
                </div>
            </div>
        </form>
    </div>
    <div class="container">
    <div class="row" id = "">
    
    </div>
    <h2 class="text-white">Lo mas vendido</h2>
    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5e93ee9a764cf2326a92f61f8fefdb1f.jpg" alt="Card image cap">
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/b5209fa882c43a2d47dc6f0243e9d64f.jpg" alt="Card image cap">
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/aa9264d85b7225106a396c7816efc645.jpg" alt="Card image cap">
      </div>
    </div>

    <div class="container">
    <h2 class="text-white">Lo mas buscado</h2>
    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5e93ee9a764cf2326a92f61f8fefdb1f.jpg" alt="Card image cap">
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/b5209fa882c43a2d47dc6f0243e9d64f.jpg" alt="Card image cap">
      </div>
      <div class="card">
        <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/aa9264d85b7225106a396c7816efc645.jpg" alt="Card image cap">
      </div>
    </div>
    <div class="container">
    <h2 class="text-white">Ofertas</h2>
    <div class="card-group">
    <div class="card">
    <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5ed6a5e2ae1fb654c27be4095e2c51cf.jpg" alt="Card image cap">
  </div>
  <div class="card">
    <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/6d34508bd51862304942e803f8888de5.jpg" alt="Card image cap">
  </div>
  <div class="card">
    <img class="card-img-top" src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5d6a917d026791bf7a5e0032df000f71.jpg" alt="Card image cap">
  </div>
    </div>

  </div>`;

  return searchPage;
};

$("#content").on("click", "#search", async () => {
  $("form").addClass("was-validated");
  const searchText = $("#searchInput").val();
  if(searchText === '') return;
  const res = await axios.get(backendEndpoint + `/api/search${searchText}`);

  // const res.data.forEach(async (element) => {}
});

export default searchPage;

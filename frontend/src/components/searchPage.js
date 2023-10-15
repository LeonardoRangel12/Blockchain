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

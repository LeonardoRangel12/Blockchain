import $ from "jquery";
import axios from "axios";
import {backendEndpoint} from "../global";
const upload = async () => {
  const template = `

  <div class="my-5  row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
        <form>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" id="name" placeholder="NFT Name" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Description</label>
          <div class="col-sm-10">
          <input type="text" id="description" placeholder="NFT Description" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
          <input type="number" min="0" id="price" placeholder="NFT Price in SOL" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">File</label>
          <div class="col-sm-10">
          <input type="file" id="file" placeholder="NFT File" />
          </div>
        </div>
        <input type="button" id="submit" value="Subir NFT" />

        </div>
        <div class="mb-3 d-flex justify-content-center">
  <div id="spinner" class="spinner-border" role="status" hidden>
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
      </form>
      <p id=resp></p>
        </div>
      </div>
    </div>
  </div>
</div>

    `;
  return template;
};

$("#content").on("click", "#submit", async () => {
  const name = $("#name").val();
  const description = $("#description").val();
  const price = $("#price").val();
  const file = document.getElementById("file").files[0];

  if(name == "" || price == "" || !file) return alert("Faltan campos");

  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("file", file);

  $("#spinner").removeAttr("hidden");
  const url = backendEndpoint + "/ipfs/upload";
  const res = await axios.post(url, formData, {
    withCredentials: true,
  });
  $("#spinner").attr("hidden", "true");

  $("#resp").html(res.data);
});

export default upload;

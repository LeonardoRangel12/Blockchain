import "../styles/search.css";
const searchPage = async () => {
  const searchPage = `    
  <link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
  integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
  crossorigin="anonymous"
/>
<div class="d-flex justify-content-center align-items-center vh-100">
  <form class="card card-sm">
    <div class="card-body row no-gutters align-items-center">
      <div class="col-auto">
        <i class="fas fa-search h4 text-body"></i>
      </div>
      <div class="col">
        <input
          class="form-control form-control-lg form-control-borderless"
          type="search"
          placeholder="Search topics or keywords"
        />
      </div>
      <div class="col-auto">
        <button class="btn btn-lg btn-success" type="submit">Search</button>
      </div>
    </div>
  </form>
</div>`;

  return searchPage;
};

export default searchPage;

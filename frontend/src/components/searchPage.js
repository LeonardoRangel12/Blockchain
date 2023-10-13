import "../styles/search.css";
const searchPage = async () => {
    const searchPage = `    
    <div class="video-container">
        <video autoplay muted loop id="myVideo">
            <!-- Reemplaza 'video.mp4' con la URL de tu video -->
            <source src="../assets/Video.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
        </video>
        
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8">
                    <form class="card card-sm">
                        <div class="card-body row no-gutters align-items-center">
                            <div class="col-auto">
                                <i class="fas fa-search h4 text-body"></i>
                            </div>
                            <div class="col">
                                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords">
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-lg btn-success" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
`;

  return searchPage;
}

export default searchPage;
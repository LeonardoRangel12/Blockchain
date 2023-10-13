import "../styles/searchPage.css";
const searchPage = async () => {
    const searchPage = `    
    <div class="video-background">
        <iframe
            src="https://www.youtube.com/watch?v=3iXCS04h2CA&t=2s"
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>

    <div class="container">
        <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-6">
                <div class="form">
                    <i class="fa fa-search"></i>
                    <input type="text" class="form-control form-input" placeholder="Search anything...">
                    <span class="left-pan"><i class="fa fa-microphone"></i></span>
                </div>
            </div>
        </div>
    </div>
 
`;

  return searchPage;
}

export default searchPage;
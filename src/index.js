import React , {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';
function MusicIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="20" height="20"
      viewBox="0 0 172 172"
      style={{fill:'#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" 
      stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" 
      style={{mixBlendMode: 'normal'}}
      ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M144.96403,21.5c-0.34642,0.01105 -0.69096,0.05559 -1.02881,0.13298l-70.46989,16.01302c-7.3124,1.66265 -12.54866,8.23144 -12.54866,15.72607v2.1696v17.91667v42.25114c-4.60921,-2.81171 -10.0577,-4.62614 -16.125,-4.62614c-7.02639,0 -13.48699,2.08948 -18.42757,5.79492c-4.94058,3.70544 -8.44743,9.31571 -8.44743,15.70508c0,6.38937 3.50684,11.99964 8.44743,15.70508c4.94058,3.70544 11.40118,5.79492 18.42757,5.79492c7.02639,0 13.48699,-2.08948 18.42757,-5.79492c4.94059,-3.70544 8.44743,-9.31571 8.44743,-15.70508c0,-0.1892 -0.13388,-0.33708 -0.13997,-0.5249c0.09673,-0.41521 0.14371,-0.84045 0.13997,-1.26677v-53.04313l68.08333,-15.47412v39.10173c-4.60921,-2.81171 -10.0577,-4.62614 -16.125,-4.62614c-7.02639,0 -13.48699,2.08948 -18.42757,5.79492c-4.94059,3.70544 -8.44743,9.31571 -8.44743,15.70508c0,6.38937 3.50684,11.99964 8.44743,15.70508c4.94059,3.70544 11.40118,5.79492 18.42757,5.79492c7.02639,0 13.48699,-2.08948 18.42757,-5.79492c4.94059,-3.70544 8.44743,-9.31571 8.44743,-15.70508c0,-0.1892 -0.13388,-0.33708 -0.13997,-0.5249c0.09673,-0.41521 0.14371,-0.84045 0.13997,-1.26677v-60.91667v-10.75v-17.91667c0.0005,-1.45383 -0.58788,-2.84586 -1.63094,-3.85859c-1.04306,-1.01273 -2.45185,-1.5598 -3.90503,-1.51641zM139.75,33.60775v11.18392v6.4598l-68.08333,15.47412v-11.18392v-2.1696c0,-2.53649 1.70434,-4.6806 4.17822,-5.24202c0.00233,0 0.00467,0 0.007,0zM123.625,107.5c4.84774,0 9.1339,1.51566 11.97477,3.64632c2.84088,2.13066 4.15023,4.58746 4.15023,7.10368c0,2.51622 -1.30935,4.97302 -4.15023,7.10368c-2.84088,2.13066 -7.12703,3.64632 -11.97477,3.64632c-4.84774,0 -9.1339,-1.51566 -11.97477,-3.64632c-2.84088,-2.13066 -4.15023,-4.58745 -4.15023,-7.10368c0,-2.51622 1.30935,-4.97302 4.15023,-7.10368c2.84088,-2.13066 7.12703,-3.64632 11.97477,-3.64632zM44.79167,121.83333c4.84774,0 9.1339,1.51566 11.97477,3.64632c2.84088,2.13066 4.15023,4.58746 4.15023,7.10368c0,2.51622 -1.30935,4.97302 -4.15023,7.10368c-2.84088,2.13066 -7.12703,3.64632 -11.97477,3.64632c-4.84774,0 -9.13389,-1.51566 -11.97477,-3.64632c-2.84088,-2.13066 -4.15023,-4.58746 -4.15023,-7.10368c0,-2.51622 1.30935,-4.97302 4.15023,-7.10368c2.84088,-2.13066 7.12703,-3.64632 11.97477,-3.64632z"></path></g></g></svg>
  )
}
function Card(){

  const [info,setInfo] = useState([])

  useEffect(()=>{
    $.ajax({
      url:'https://picsum.photos/v2/list?page=2&limit=10',
      type:'GET',
      success:function(res){
        console.log(res)
        setInfo(res)
      },
      error: function (res) {
        
      }
    })
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>

      <header class="navbar sticky-top flex-md-nowrap p-0">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">PlayList</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">nav</span>
        </button>
        <input class="search-input w-50" type="text" placeholder="Search" aria-label="Search"></input>
        {/* <img src="https://picsum.photos/id/249/30/30" class="rounded" alt="..."></img> */}
        <div class ="navbar-nav mx-3">
          <div class ="nav-item text-nowrap">
            {/* <a class ="nav-link px-3" href="#">Sign out</a> */}
            <img src="https://picsum.photos/id/883/30/30" class="rounded-circle" alt="..." ></img>
          </div>
        </div>
      </header>

      <div class="container-fluid" id="content">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <span><MusicIcon /></span>
                    My Playlist
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span><MusicIcon /></span>
                    <i class="fas fa-music"></i> Last Listned
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span><MusicIcon /></span>
                    Top recommendations
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-sec">
                <span>Saved reports</span>
                <a class="link-secondary" href="#" aria-label="Add a new report">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="container-fluid">
              <div class="row mt-5">
                <div class="col-md-12">
                  <div class="p-4 p-md-5 mb-4 text-white rounded" id="coverPic">
                    <div class="col-md-6 px-0">
                      <h1 class="display-4 fst-italic">Flume : Skin</h1>
                      <p class="lead my-3">Flume Walk us through his 'weird' new album 'Skin'.He has one goal: "I wanna make a weird stuff"</p>
                      {/* <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p> */}
                      <button class="btn btn-primary ">Play</button><button class="btn btn-outline-primary mx-3">Follow</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid">
              <div class="row my-2">
                <div class="col-md-12">
                  <Slider {...settings}>

                    {
                      info.map((ele)=>{
                        return(
                          <div class="p-5">
                            <div class="card" >
                              <img src={ele.download_url} class="card-img-top" alt="..."></img>
                              <div class="card-body">
                                <h5 class="card-title">{ele.author}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-sm btn-primary">View album</a>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                    
                    
                  </Slider>
                </div>
              </div>
            </div>


          </main>
        </div>
      </div>
        </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

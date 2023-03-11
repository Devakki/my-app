import Navbar from "./Components/Navbar";
import download from "./Assets/images/download.jpeg";
import download_2 from "./Assets/images/download-2.jpeg";
import download_3 from "./Assets/images/download-3.jpeg";
import { BlogArray } from "./utils/Constant";

function Home() {
  return (
    <>
      <div className="Blogsection">
        <div className="container text-center">
          <div className="row">
            {BlogArray.length > 0 &&
              BlogArray.map((blog) => (
                <div className="col-3">
                  <div className="card">
                    <img src={download} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text">{blog.desc}</p>
                      <a href="/blog/1" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

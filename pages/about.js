import About from "../components/about";
import Sidebar from "../components/sidebar/Sidebar";
import Seo from "../components/Seo";

const index = () => {
  return (
    <>
      <Seo pageTitle="About" />
      <Sidebar />
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <About />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

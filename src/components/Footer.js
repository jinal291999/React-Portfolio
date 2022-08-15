import React from "react";
import axios from "axios";
class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        socialmedia:[]
      };
    }
    componentDidMount() {
      axios({
        url: "http://127.0.0.1:8000/api/socialmedia",
        method: "GET",
      }).then((res) => {     
        this.setState({
          socialmedia:res.data
        });
      });
    }
    render() {
      const { socialmedia} = this.state;
      return (
        <footer id="footer" className="foot"> 
        <h3>Get In Touch</h3>
        <div class="social">         
          {socialmedia.map((Media) => (
            <div className="logo" key={Media.id}>              
             <a href={Media.url}> <p className="socialmedia" dangerouslySetInnerHTML={{ __html: Media.logo }}></p></a>
            </div>
          ))}
           </div>
           <div className="copyright">&copy; 2022 Jinal Patel</div>   
        </footer>
      );
    }
  }
  export default Footer;
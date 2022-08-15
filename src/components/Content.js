import React from "react";
import axios from "axios";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      credential: "",
      details: "",
      yearCompleted: "",
      type:"",
      details:""

    };
  }

  componentDidMount() {
    axios({
      url: "http://127.0.0.1:8000/api/contents",
      method: "GET"
    }).then((res) => {
      console.log(res.data);
      this.setState({
        // id: res.data.results[0].id,
        content: res.data[0].content

        // revealed: res.data.results[0].revealed
      });
    });
    axios({
      url: "http://127.0.0.1:8000/api/qualifications",
      method: "GET",
    }).then((res) => {
      this.setState({
        credential: res.data[0].credential,
        details: res.data[0].details,
        yearCompleted: res.data[0].yearCompleted,
        credential1: res.data[1].credential,
        details1: res.data[1].details,
        yearCompleted1: res.data[1].yearCompleted,
      });
    });
    axios({
      url: "http://127.0.0.1:8000/api/skills",
      method: "GET",
    }).then((res) => {      
      this.setState({
        fontawesomeHTML : res.data[0].fontawesomeHTML,
        detailsskill : res.data[0].details,
        type:res.data[0].type,
        fontawesomeHTML1 : res.data[1].fontawesomeHTML,
        detailsskill1 : res.data[1].details,
        type1:res.data[1].type,
        fontawesomeHTML2 : res.data[2].fontawesomeHTML,
        detailsskill2 : res.data[2].details,
        type2:res.data[2].type,
        fontawesomeHTML3 : res.data[3].fontawesomeHTML,
        detailsskill3 : res.data[3].details,
        type3:res.data[3].type,
        
      });
    });
  }

  render() {
    //load memes state variable
    // const {id } = this.state;
    const { content } = this.state;
    const { credential } = this.state;
    const { details } = this.state;
    const { yearCompleted } = this.state;
    const { credential1 } = this.state;
    const { details1 } = this.state;
    const { yearCompleted1 } = this.state;
    const { fontawesomeHTML}= this.state;
    const {detailsskill}=this.state;
    const{type}=this.state;
    const { fontawesomeHTML1}= this.state;
    const {detailsskill1}=this.state;
    const{type1}=this.state;
    const { fontawesomeHTML2}= this.state;
    const {detailsskill2}=this.state;
    const{type2}=this.state;
    const { fontawesomeHTML3}= this.state;
    const {detailsskill3}=this.state;
    const{type3}=this.state;



    // Usage

    return (
      <div class="Main-section">
        <div class="page-container">
          <div id="About">About Me</div>
          <div class="description">
            <div class="content">
              <p id="text">
                {content}
              </p>
              <div class="qualify">
                <div class="quali">
                  <h2>Qualifications</h2>
                </div>
                <h4>{credential} {yearCompleted}</h4>
                <h5>{details}</h5>
                <h4>{credential1}{yearCompleted1}</h4>
                <h5>{details1}</h5>
              </div>
            </div>
            <div class="image">
              <img src="./images/Jinal.jpeg" width={253} height={328} className="imgs" alt="profile"></img>
            </div>
          </div>
         
        </div>
        <section  className="skills">
          <div id="skill">
          <h2 className="skill1">My Skills</h2>
          <div className="divide1">
          <div className="font1">
               <h3>{type}</h3>
               <div  className="data" dangerouslySetInnerHTML={{__html:fontawesomeHTML}}></div>
               <h4>{detailsskill}</h4>
          </div>
          <div className="font2" >
               <h3>{type1}</h3>
               <div className="data" dangerouslySetInnerHTML={{__html:fontawesomeHTML1}}></div>
               <h4>{detailsskill1}</h4>
          </div>
          </div>
          <div className="divide2">
          <div className="font3">
               <h3>{type2}</h3>
               <div className="data" dangerouslySetInnerHTML={{__html:fontawesomeHTML2}}></div>
               <h4>{detailsskill2}</h4>
          </div>
          <div className="font4">
               <h3>{type3}</h3>
               <div className="data" dangerouslySetInnerHTML={{__html:fontawesomeHTML3}}></div>
               <h4>{detailsskill3}</h4>
          </div>
          </div>
          </div>
        </section>
      </div>


    )

  }
}
export default Content;
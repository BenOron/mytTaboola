import { useEffect,useState } from "react";
import axios from "axios";

export default function App() {
  const [extractData,setExtractData] = useState({})
  const [dom,setDom] = useState({})
  const [suggestions,setSuggestions] = useState([])
  const [imageSuggestions,setImageSuggestions] = useState()

  function getTitleSuggestions() {
      console.log("Title suggestion1")
    const url = "https://sre-hackathon-ads-backend-srv-ayfqltafia-ey.a.run.app/chat_headings_rephrase";
    axios.post(url, {"message": '01' }).then((res) => {
      console.log("Title suggestion:", res.data.response)
      setSuggestions(res?.data?.response)
    }).catch((err) => {
      console.error(err);
    })
  }

  function getImageSuggestions() {
    console.log("Title suggestion1")
    const url = "https://sre-hackathon-ads-backend-srv-ayfqltafia-ey.a.run.app/image_reco";
    axios.get(url).then((res) => {
      console.log("image", res.data)
      setImageSuggestions(res.data)

    }).catch((err) => {
      console.error(err);
    })
  }


  useEffect(() => {
    if(dom?.title){
      getTitleSuggestions()
    }
     if(dom.images){
       getImageSuggestions()
     }
  },[extractData]);


  useEffect(() => {
    extractDataFromHtml( document.getElementsByTagName('article')[0].innerHTML)
  },[]);

  const extractDataFromHtml = (html) =>{
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const title = doc.querySelectorAll("h1, h2, h3, h4, h5, h6, title");
    const description = doc.querySelectorAll("P");
    const images = doc.querySelectorAll(".imageWrapper");
    debugger
    setDom((prevState) => ({
      ...prevState,
      title: title[0].className,
      images:images[0]
    }));

    setExtractData( {
      title: title.length > 0 ? title[0].textContent : "",
      description: description.length > 0 ? [].map.call(doc.querySelectorAll("p"), function(el) {
        return el?.innerHTML;
      }) : "",
      images: Array.from(images).map(img => img.src)

    });
  }

  const setTitle = (suggestions)=>{
    const random = Math.floor(Math.random() * suggestions.length);
    document.getElementsByClassName(dom.title)[0].textContent = suggestions[random]
  }

  const FooterElm ='<div className="footer-mytaboola-title" style="border: 1px solid rgb(0 0 0 / 9%); border-radius: 7px;position: relative;width: 100%;height: 30px; vertical-align: top; color: white;text-align: center;">' +
      '<div style="vertical-align: inherit;" > ' +
      '<div style="font-size: 20px;color: black;float: left;padding: 7px;">' +
      '<img style="height: 20px" src="data:image/png;base64,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\n'+
      'alt="Suggest" />' +
      '</div>' +
      '<div style="vertical-align: inherit;float: right;padding: 5px;cursor: pointer;color: black"  >' +
      '<button class="next_title"  role="button" style="cursor: pointer;display: flex;flex-direction: column;align-items: center;font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;' +
    'border-radius: 6px;border: none;color: #fff;font-weight: 600;background: linear-gradient(180deg, rgb(0, 75, 122) 0%, #367af6d6 100%);background-origin: border-box;box-shadow: 0px 0.5px 1.5px rgb(54 122 246 / 25%), inset 0px 0.8px 0px -0.25px rgb(255 255 255 / 20%);touch-action: manipulation;">' +
      'Suggested</button>' +
      '</div>' +
      '</div>' +
      '</div>'

  useEffect(() => {
    console.log('starting...')
    if(dom?.title){
      let titleElm = document.getElementsByClassName(dom?.title)[0]
      let child = document.createElement('div')
      child.innerHTML = FooterElm;
      titleElm.insertAdjacentElement('afterend',child)
      console.log('end...')
      document.getElementsByClassName("next_title")[0].addEventListener('click', () => {
        if(suggestions){
          setTitle(suggestions)
        }

      });
    }

  },[suggestions]);



  useEffect(() => {
    console.log('starting...')
    if(dom?.images){
      let imageElm = document.getElementsByClassName(dom?.images.className)[0]
      let child = document.createElement('div')
      child.innerHTML = FooterElm;
      imageElm.parentElement.insertAdjacentElement('afterend',child)
      console.log('end...')
      document.getElementsByClassName("next_title")[1].addEventListener('click', () => {
        if(imageSuggestions){
          imageElm.childNodes[0].srcset = 'data:image/png;base64,'+ imageSuggestions
        }

      });
    }
  },[imageSuggestions]);

  return <div className="contentviewben"></div>;


}

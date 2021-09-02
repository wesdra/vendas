import React, { useRef, useState, useEffect } from "react";
//import Image from 'next/image';
import axios from 'axios';
const API = 'https://megaoutletsofa.com.br/api/vendedor/';

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};


interface Ivendedor { 
  id: number ,
  nome: string,
  urlwhatsapp: string,
} 

const mainVideo = "/edicaofinal.mp4";

function aoclicar(e: any) {
  e.preventDefault()


  axios.post(API).then(res => {
         console.log(res);
       }).catch(err => {
         console.log(err.response);
       });




  // try {

  //   axios.defaults.baseURL = 'http://localhost:3000';
  //   axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  //   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  //   const result = axios.post<Ivendedor>(API);
  //   console.log(result);
  //   let id = result.urlwhatsapp.replace('https://bit.ly/','');
  
  //     console.log(id);
  //   let status = idc(id) ;
  //   if (status === "online") {
  //     add(id);
  //     redirect(id);
  //   }

  //   if (status === "offline") {
  //     var atual = get();
  //     var redir = atual != null ? atual : id;
  //     redirect(redir);
  //   }
    
  // } catch (error) {
   
  //   console.log(error);
  // }


  // fetch(API)
  //   .then(response => response.json())
  //   .then(data => {

  //     console.log(data);
  //     let id = data.urlwhatsapp?.replace('https://bit.ly/','');
  //     console.log(id);
  //     let status = idc(id) ;
  //     if (status === "online") {
  //       add(id);
  //       redirect(id);
  //     }

  //     if (status === "offline") {
  //       var atual = get();
  //       var redir = atual != null ? atual : id;
  //       redirect(redir);
  //     }

  //   });
}

function redirect(id: string) {
  setTimeout(function () {
    //window.location.assign("https://bit.ly/" + id);
    window.location.href = "https://bit.ly/" + id;
  }, 100);
}

function add(id: string) {
  localStorage.setItem("movend", id);
}
function get() {
  return localStorage.getItem("movend");
}

function limpar() {
  //e.preventDefault()
  localStorage.removeItem("movend");

  setTimeout(function () {
    //window.location.assign("/");
    window.location.href = "/";
  }, 500);
}

function idc(id: string) {
  var atual = localStorage.getItem("movend");
  var idc = atual === id ? "online" : "offline";
  if (atual === null)
    idc = "online";
  return idc
}
//<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement></VideoHTMLAttributes>

export default function App() {
  const videoParentRef = useRef<HTMLDivElement>(null)
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0] as HTMLVideoElement;

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        //player.playsinline = true;
        player.muted = false;
        player.setAttribute("muted", "false"); // leave no stones unturned :)
        player.autoplay = true;
        player.setAttribute('playsinline', 'true'); // fixes autoplay in webkit (ie. mobile safari)

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => { })
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 100);
      }
    }
  }, []);

  return shouldUseImage ? (
    // <img src={mainVideo} alt="Muted Video" /> 
    <div className="base">  <span>aqui</span>
       <img src={mainVideo} alt="Muted Video" />
    </div>
  ) : (
    <div className="base"> <div ref={videoParentRef}
      dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${mainVideo}" type="video/mp4" />
        `
      }}
    />
      <div className="styles sc-bdfBwQ snEmw">
        <div data-testid="StyledContainer" className="sc-bdfBwQ sc-ctaXAZ gQMCNA gsOFqj">
          <a href="" rel="" onClick={(e) => aoclicar(e)} data-id="" data-status=""

            className={`sc-pFZIQ sc-tYoTV fxPOXp exGbzQ`}>
            <svg
              width="50" height="50" version="1.1" viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg" >
              <path d="M256.064,0h-0.128l0,0C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104  l98.4-31.456C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z" fill="#4CAF50" />
              <path d="m405.02 361.5c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.62-127.46-112.58-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016 0.16 8.576 0.288 7.52 0.32 11.296 0.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744s-7.36 7.68-11.136 12.352c-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z" fill="#FAFAFA" />
            </svg>
            <span className="sc-hKgILt cdcUDS">&nbsp;Atendimento</span>
          </a>
        </div>
      </div>
    </div>
  );
}

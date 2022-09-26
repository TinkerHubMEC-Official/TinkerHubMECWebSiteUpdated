document.addEventListener('DOMContentLoaded', (event) => {
    console.log("I am ready");

    setInterval(()=>{
        if( document.getElementsByClassName("w-webflow-badge").length!=0)
        {
        document.getElementsByClassName("w-webflow-badge")[0].remove();
        console.log("Gone Boom!!!!");
        }else{}
    },0.1);
  }) 
  window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) nav.className = 'navigation w-nav'; else nav.className = 'navbar-container-scroll';
  };
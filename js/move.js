const moveEl = document.querySelector(".goToVideo");

const onMouseHover = () =>{
    console.log("fdsaf");
    gsap.to(".goToVideo",{
        duration:0.1, ease: 'elastic'
    }
    )
}

moveEl.addEventListener("mouseover", onMouseHover);
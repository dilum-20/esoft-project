(function() {
    // Add event listener
    document.addEventListener("mousemove", body);
    const elem = document.querySelector("body");
    // Magic happens here
    function body(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
    
        let x = `${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
var contents = [10,9,8,7,6,5,4,3,2,1,"Happy Independence Day"]
var displaycontents = (display) => {
    setTimeout(() => {
        display(contents[0]);       
        setTimeout(() => {          
            display(contents[1]);
            setTimeout(() => {
                display(contents[2]);
                setTimeout(() => {            
                    display(contents[3]);
                    setTimeout(() => {
                        display(contents[4]);
                        setTimeout(() => {
                            display(contents[5]);
                            setTimeout(() => {                  
                                display(contents[6]);
                                setTimeout(() => {
                                    display(contents[7]);
                                    setTimeout(() => {
                                        display(contents[8]);
                                        setTimeout(() => {
                                            display(contents[9]);
                                            setTimeout(() => {
                                                display(contents[10]);
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

var display = (content) => {
      document.getElementById("content").innerHTML = content;
}
displaycontents(display);

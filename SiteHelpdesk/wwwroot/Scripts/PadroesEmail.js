
const inputPesquisa = document.querySelector("#myInput")
const inputResult = document.querySelector("[data-type='nav-menu']")

const details = Array.from(inputResult.querySelectorAll("details"))
const lis = Array.from(inputResult.querySelectorAll("details li"))
const lisToggle = Array.from(inputResult.querySelectorAll("li.toggle"))


inputPesquisa.addEventListener('input',  ()=>{
    
    const  srt = inputPesquisa.value;

    if(srt){ 
        
        filterData(srt);
        
    } else{
        
    }
    
    
})
function allitens(){
    lis.forEach(li => li.classList.remove("hide"))
    details.forEach(detail => detail.removeAttribute("open"));

}

function filterData(srt){
    
    lisToggle.forEach(lisToggle =>{
        const details = lisToggle.querySelector("details");
        if(!details){
            return;
        }
        
        const summary =  details.querySelector("summary");
 
        if(summary && summary.textContent.toLowerCase().includes(srt.toLowerCase)){
            
           return details.setAttribute("open", "")
           
        }
        const lis = details.querySelectorAll("li")
        
        let found = false
        for (let i = 0; i < lis.length; i++) {
            let li = lis[i]
           
            if (li.textContent.toLowerCase().includes(srt.toLowerCase())){
                found = true
                li.classList.remove("hide")
                console.log(li.textContent)
                
            }else{
                li.classList.add("hide")
            }
        }
            
        
    })
}



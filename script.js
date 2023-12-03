// Use Javascript 

// AlL Object Define Here like On Content
const SearchBTN = document.getElementById("search_btn_?"),
    OtherVideos = document.getElementById("other_search_videos"),
    CarryMinatiVideos = document.getElementById("CarryMinati_Videos"),
    Search_Input = document.getElementById("Search_Input").value ,
    Media_Search = document.getElementById("media_search");


// Search Btn Proccess 
SearchBTN.addEventListener("click" , () => {
    
    // Check Search
    if (Search_Input == "Carryminati") {
        OtherVideos.style.display = 'none'
        CarryMinatiVideos.style.display = 'block'
    }
    else {
        alert("please search type is correct !")
    }

} )

Media_Search.addEventListener("click" , () => {
    let a = promot(" Search On YouTube ");
}

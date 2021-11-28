let dragUpload = document.querySelector("#dragUpload");
let button = document.querySelector(".chooseFile");
let dropArea = document.querySelector(".dropArea");
let tab = document.querySelector("#tab");


button.onclick = function(){
    dragUpload.click();
    
}

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
})

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    let files = Array.from(e.dataTransfer.files);
    
    files.forEach(file => {
        showImage(file);
    })
})

function showImage(file) {
    if(file.type !== "image/png" && file.type !== "image/jpeg"){
        alert("Please choose image file");
        return;
    }

    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener("loadend", () => {
        let tr = document.createElement("tr");
        let imageNum = document.createElement("td");
        let imageName = document.createElement("td");
        let imageType = document.createElement("td");
        let imageSize = document.createElement("td");
        let imageBtn = document.createElement("td");
        let btn = document.createElement("button");
        
        

        btn.className = "btn btn-outline-danger";
        btn.innerText = "Delete";

        btn.onclick = function() {
            let conf = confirm("Do you want delete this file?");
            if(conf) {
                tab.remove();
            }
        }

        img.src = fileReader.result;
        img.style.width = "100%";

        imageNum.innerText = "1";
        imageName.append(img);
        imageType.innerText = file.type;
        imageSize.innerText = file.target.files.size;
        imageBtn.innerHTML = btn;
        let data = [imageNum,imageName,imageType,imageSize,imageBtn];
        

        tbody.append(tr);
        tr.appendChild(imageNum);
        tr.appendChild(imageName);
        tr.appendChild(imageType);
        tr.appendChild(imageSize);
        tr.appendChild(imageBtn);

        data.forEach(d => {
            tr.innerHTML = `<td>${d}</td>`;
        })
    })
}


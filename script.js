bigdata()
async function bigdata() {
    try {
        var data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        var obj = await data.json();
        console.log(obj);

        var heddiv = document.createElement("div");
        heddiv.setAttribute("id", "hed");
        heddiv.innerText = "MAKEUP";
        document.body.appendChild(heddiv);
        for (var i = 0; i < obj.length; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "card");
            var img = document.createElement("img");
            img.setAttribute("id", "image");
            img.src = obj[i].image_link;
            div.appendChild(img);
            var para6 = document.createElement("p");
            para6.setAttribute("id","para6");
            para6.innerText = "Brand name - " + obj[i].brand;
            div.appendChild(para6);
            var para = document.createElement("p");
            para.setAttribute("id","para1");
            para.innerText = "Product name - "+obj[i].name;
            div.appendChild(para);
            var para2 = document.createElement("p");
            para2.setAttribute("id","para2");
            para2.innerText ="price - $"+ obj[i].price;
            div.appendChild(para2);
            var para3 = document.createElement("p");
            para3.setAttribute("id","para3");
            para3.innerText ="description - " + obj[i].description;
            div.appendChild(para3);
            var para4 = document.createElement("p");
            para4.setAttribute("id","para4");
            var link = document.createElement("a");
            link.setAttribute("id","link");
            link.setAttribute("href",obj[i].product_link);
            link.innerText ="buy link";
            para4.appendChild(link);
            div.appendChild(para4);
            document.body.appendChild(div);

        }





    } catch (error) {
        console.log(error);
    }
}

const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    //  all input values
    const candy = document.getElementById("candy").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    
    const candyItem = {
        candy: candy,
        description: description,
        price: price,
        quantity: quantity
    };

    // Post 
    axios.post("https://crudcrud.com/api/646f3119d2ca4a0093fc7765474fd89d/details", candyItem)
    .then((response) => {
        console.log(response.data);
        showCandyOnScreen(response.data)
    })
    .catch(error => {
        console.error(error);
    })

})

//display candy 
function showCandyOnScreen(candyItem) {
    const ul = document.getElementById("listofitem");
    const li = document.createElement("li");
    li.textContent = `${candyItem.candy} -- ${candyItem.description} -- ${candyItem.price} -- ${candyItem.quantity} `;

   
    const buttonNames = ["Buy1", "Buy2", "Buy3"];
    for (let i = 0; i < buttonNames.length; i++) {
        const name = buttonNames[i];
        const button = document.createElement("button");
        button.textContent = name;
        button.type = "button"; // Prevents form submission
        li.appendChild(button);
    }


    ul.appendChild(li);
}

window.addEventListener("DOMContentLoaded", function(){
    axios.get("https://crudcrud.com/api/646f3119d2ca4a0093fc7765474fd89d/details")
    .then((response) => {
        for(let i=0;i<response.data.length;i++)
        {
            showCandyOnScreen(response.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
    
    
   
   
let areas =["land", "water"];

let world = document.querySelector(".world");
let input = document.querySelector(".world_area");
let count = document.querySelector(".count");

count.innerText="0";

input.addEventListener("keydown", function(e){
    if(e.key =="Enter"){
        world.innerHTML="";
        count.value="0"
        if(Number(input.value)>=20 || Number(input.value)<=1){
            alert("Enter a valid number between 2 and 20");
        }else{
            let ipVal = Number(input.value);
            for(let i=0; i<ipVal; i++){
                let r = document.createElement("div");
                r.setAttribute("class", "row");
                let h = 100/ipVal;
                r.style.height=`${h}%`;
                for(let j=0; j<ipVal; j++){
                    let c= document.createElement("div");
                    c.setAttribute("class","col");
                    c.classList.add(areas[parseInt(2*Math.random())]);
                    c.style.width=`${h}%`;
                    r.appendChild(c);
                }
                world.appendChild(r);
            } 
            let row = document.querySelectorAll(".row");
            let col = document.querySelectorAll(".col"); 
            count.addEventListener("keydown", function(e){
                if(e.key=="Enter"){
                    if(count.value==getIsland(world)){
                        alert("You won, try again with new input");
                    }else{
                        alert("haar jeet to chalta rehta hai, dobara koshish karen");
                    }
                }
                // count.innerText = getIsland(world);
            });
            function getIsland(world){
                let visited =[];
                for(let i=0; i<row.length; i++){
                    visited[i]=[];
                }
                for(let i=0; i<row.length; i++){
                 for(let j=0; j<row.length; j++){
                    visited[i][j]=false;
                 }
                }
                let count=0;
                for(let i=0; i<row.length; i++){
                    for(let j=0; j<row.length; j++){
                        if(visited[i][j]==false && world.children[i].children[j].classList[1] == "land"){
                            getIs(world, visited, i,j)
                            count++;
                        }
                    }
                }
            
                return count;
            }
            
            function getIs(world, visited, i, j){
                //let currClass = world.children.get(i).children.get(j);
                if(i<0 || j<0 || j>=world.children.length || i>=world.children.length || visited[i][j]==true|| world.children[i].children[j].classList[1] == "water"){
                    return;
                }
                visited[i][j]=true;
                getIs(world, visited, i-1, j);//north
                getIs(world, visited, i, j+1);//east
                getIs(world, visited, i-1, j+1);//north-east
                getIs(world, visited, i, j-1);//west
                getIs(world, visited, i-1, j-1);//north-west
                getIs(world, visited, i+1, j);//south
                getIs(world, visited, i+1, j+1);//south-east
                getIs(world, visited, i+1, j-1);//south-west
            
            }
        }

    }
});









let search=document.getElementById('search')
let name1=document.getElementById('namecountry');  

document.getElementById('search').addEventListener('click',()=>{
name1=document.getElementById('namecountry').value;
  const base = `https://restcountries.com/v3.1/name/${name1}`;
  //   console.log(base);
  fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          var r="";
          for(i in data){
            // const name2=data[0].name.common;
            console.log(data[i])
            r+="<tr>";
            let im=Object.values(data[i].flags)
            // console.log(im[0])
            // console.log(String(im[0]))
            let im1=String(im[0])

            r+=`<td><img src=${im1}></td>`
            r+="<td>"+data[i].name.common+"</td>"
            // console.log(data[i].name)
            r+="<td><ol>"
            for(j in data[i].borders)
            {
              r+="<li>"+data[i].borders[j]+"</li>"
              // console.log(data[i].borders[j])
            }
            r+="</ol></td>"
            r+="<td>"+data[i].capital+"</td>"
            // console.log(data[i].capital)
            
            var ab=Object.values(data[i].languages);
            // console.log(ab)
            r+="<td><ol>"
            for(let j=0;j<ab.length;j++)
            {
              
              r+="<li>"+ab[j]+"</li>"
              // console.log(ab[j])
            }
            r+="</ol></td>"
            // console.log(data[i].languages)
            let currency=Object.values(data[i].currencies)
            // console.log(currency)
            r+="<td><ol>"
            for(let j=0;j<currency.length;j++){
            r+="<li>"+currency[j].name+"</li>"
          }
            r+="</ol></td>"
            r+="<td>"+data[i].population+"</td>"
            // console.log(data[i].currency)
            // r+="<td>"+data[i].borders+"</td>"
            r+="</tr>"
            // console.log(name2);
            // const lang=data[1].languages;
            // console.log(lang);
          }
          document.getElementById('result').innerHTML=r;

        })

      })


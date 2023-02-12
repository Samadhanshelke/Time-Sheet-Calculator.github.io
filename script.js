const calculate = document.getElementById("calculate");
const starthour = document.querySelectorAll(".tr .start_hour");
const startmin = document.querySelectorAll(".tr .start_min");
const endmin = document.querySelectorAll(".tr .end_min");
const endhour = document.querySelectorAll(".tr .end_hour");
const breakhour = document.querySelectorAll(".break_hour");
const breakmin = document.querySelectorAll(".break_min");
const tr = document.querySelectorAll(".tr td>input");
const total = document.querySelectorAll(".total");
const total_time = document.querySelector(".total_time");

const ampm1 = document.querySelectorAll(".am_pm1");
const ampm2 = document.querySelectorAll(".am_pm2");

calculate.addEventListener("click", (e) => {

  e.preventDefault;
  let arr = [];
  starthour.forEach((shour, i) => {

    if(parseInt(starthour[i].value)>12 || parseInt(startmin[i].value)>60 ||  parseInt(endhour[i].value)>12 || parseInt(endmin[i].value)>60){
      alert("enter valid time")
    }
    else{

      if (ampm1[i].value == "AM" && ampm2[i].value == "AM" && parseInt(starthour[i].value) < parseInt(endhour[i].value)) {
        const rem_hour = Math.floor((parseInt(startmin[i].value) + parseInt(endmin[i].value)) / 60);
        const rem_min =(parseInt(startmin[i].value) + parseInt(endmin[i].value)) % 60;
  
        let endhour_output = parseInt(endhour[i].value);
        let starthour_output = parseInt(starthour[i].value);
        let breakhour_output = parseInt(breakhour[i].value);
        if(total[i].innerHTML < 0){
          // alert("please check break deduction value")
             breakhour[i].value = 0;
             let totals = endhour_output - starthour_output + rem_hour -  breakhour[i].value; 
             totals=parseInt(totals)
            //  console.log(typeof(totals))
             totals=parseInt(totals)
            //  console.log(typeof(totals))
             total[i].innerHTML = totals;


            // total[i].innerHTML = 00
            // console.log( total[i].innerHTML)
        }
        else{
          let totals = endhour_output - starthour_output + rem_hour - breakhour_output; 
          totals=parseInt(totals)
                // console.log(typeof(totals))
  
          total[i].innerHTML = totals;
          // console.log( total[i].innerHTML)
        }
        arr.push(parseInt(total[i].innerHTML))
        // console.log(arr)
          // if(parseInt(total[i].innerHTML<0)){
              
          //   console.log("error")
          // }
      }
  
      else if (ampm1[i].value == "AM" && ampm2[i].value == "AM" && parseInt(starthour[i].value) >= parseInt(endhour[i].value)) {
        const rem_hour = Math.floor((parseInt(startmin[i].value) + parseInt(endmin[i].value)) / 60);
        const rem_min =(parseInt(startmin[i].value) + parseInt(endmin[i].value)) % 60;
  
        let endhour_output = parseInt(endhour[i].value);
        let starthour_output = parseInt(starthour[i].value);
        let breakhour_output = parseInt(breakhour[i].value);
        // let totals =12 - starthour_output + 12 + endhour_output + rem_hour - breakhour_output;
        // total[i].innerHTML = totals;
        console.log( total[i].innerHTML + typeof(total[i].innerHTML))
        if(total[i].innerHTML < 0){
                breakhour[i].value = 0;
                let totals =12 - starthour_output + 12 + endhour_output + rem_hour - breakhour[i].value;     
                totals=parseInt(totals)
                // console.log(typeof(totals)) 
                 total[i].innerHTML = totals;
        }
        else{
            let totals =12 - starthour_output + 12 + endhour_output + rem_hour - breakhour[i].value;    
            totals=parseInt(totals)
                // console.log(typeof(totals))
            total[i].innerHTML = totals;
        }
        arr.push(parseInt(total[i].innerHTML))
        // console.log(arr)
      } 
      
      else if ( ampm1[i].value == "PM" && ampm2[i].value == "PM" && parseInt(starthour[i].value) < parseInt(endhour[i].value)) {
        const rem_hour = Math.floor((parseInt(startmin[i].value) + parseInt(endmin[i].value)) / 60);
        const rem_min =(parseInt(startmin[i].value) + parseInt(endmin[i].value)) % 60;
  
        let endhour_output = parseInt(endhour[i].value);
        let starthour_output = parseInt(starthour[i].value);
        let breakhour_output = parseInt(breakhour[i].value);
        let totals =endhour_output - starthour_output + rem_hour - breakhour_output;
        total[i].innerHTML = totals;
        // console.log( total[i].innerHTML)
        // ///////////////
        if(total[i].innerHTML < 0){
                breakhour[i].value = 0;
                let totals =endhour_output - starthour_output + rem_hour -  breakhour[i].value;
                totals=parseInt(totals)
                // console.log(typeof(totals))
                total[i].innerHTML = totals;
                // console.log( total[i].innerHTML)
        }
        else{
           let totals =endhour_output - starthour_output + rem_hour - breakhour_output;
           totals=parseInt(totals)
          //  console.log(typeof(totals))
            total[i].innerHTML = totals;
            // console.log( total[i].innerHTML)
        }
        arr.push(parseInt(total[i].innerHTML))
        // console.log(arr)
      } 

      else if ( ampm1[i].value == "PM" && ampm2[i].value == "PM" && parseInt(starthour[i].value) > parseInt(endhour[i].value)) {
        const rem_hour = Math.floor((parseInt(startmin[i].value) + parseInt(endmin[i].value)) / 60);
        const rem_min =(parseInt(startmin[i].value) + parseInt(endmin[i].value)) % 60;
  
        let endhour_output = parseInt(endhour[i].value);
        let starthour_output = parseInt(starthour[i].value);
        let breakhour_output = parseInt(breakhour[i].value);
        // let totals =12 - starthour_output + 12 + endhour_output + rem_hour - breakhour_output;
        // total[i].innerHTML = totals;
        // console.log( total[i].innerHTML)
        if(total[i].innerHTML < 0){
                breakhour[i].value = 0;
                 let totals =12 - starthour_output + 12 + endhour_output + rem_hour - breakhour[i].value ;
                 totals=parseInt(totals)
                //  console.log(typeof(totals))
                 total[i].innerHTML = totals;
                //  console.log( total[i].innerHTML)
        }
        else{
           let totals =12 - starthour_output + 12 + endhour_output + rem_hour - breakhour[i].value;
           totals=parseInt(totals)
                // console.log(typeof(totals))
            total[i].innerHTML = totals;
            // console.log( total[i].innerHTML)
        }
        arr.push(parseInt(total[i].innerHTML))
        // console.log(arr)


      } 
      
      else if (ampm1[i].value == "AM" && ampm2[i].value == "PM" && parseInt(starthour[i].value) > parseInt(endhour[i].value) ) {
  
        const rem_hour = Math.floor((parseInt(startmin[i].value) + parseInt(endmin[i].value)) / 60);
        const rem_min =(parseInt(startmin[i].value) + parseInt(endmin[i].value)) % 60;
  
        let endhour_output = parseInt(endhour[i].value);
        let starthour_output = parseInt(starthour[i].value);
        let breakhour_output = parseInt(breakhour[i].value);
        // let totals =12 - starthour_output + endhour_output + rem_hour - breakhour_output;
        // total[i].innerHTML = totals;
        // console.log( total[i].innerHTML)
        if(total[i].innerHTML < 0){
                breakhour[i].value = 0;
                let totals =12 - starthour_output + endhour_output + rem_hour - breakhour[i].value ;
                totals=parseInt(totals)
                // console.log(typeof(totals))
                 total[i].innerHTML = totals;
                //  console.log( total[i].innerHTML)
        }
        
        else{
            let totals =12 - starthour_output + endhour_output + rem_hour - breakhour[i].value ;
            totals=parseInt(totals)
            // console.log(typeof(totals))
            total[i].innerHTML = totals;
            // console.log( total[i].innerHTML)
        }
        arr.push(parseInt(total[i].innerHTML))
        // console.log(arr)

      } 

      else if (ampm1[i].value == "AM" && ampm2[i].value == "PM" && parseInt(starthour[i].value) <= parseInt(endhour[i].value) ) {
  
        const rem_hour = Math.floor((parseInt(startmin[i].value) + parseInt(endmin[i].value)) / 60);
        const rem_min =(parseInt(startmin[i].value) + parseInt(endmin[i].value)) % 60;
  
        let endhour_output = parseInt(endhour[i].value);
        let starthour_output = parseInt(starthour[i].value);
        let breakhour_output = parseInt(breakhour[i].value);
        // let totals =12 - starthour_output + endhour_output + rem_hour - breakhour_output;
        // total[i].innerHTML = totals;
        // console.log( total[i].innerHTML)
        if(total[i].innerHTML < 0){
                breakhour[i].value = 0;
                let totals =12 - starthour_output + endhour_output + rem_hour - breakhour[i].value ;
                totals=parseInt(totals)
                // console.log(typeof(totals))
                 total[i].innerHTML = totals;
                //  console.log( total[i].innerHTML)
        }
        else{
            let totals =12 - starthour_output + endhour_output + rem_hour - breakhour[i].value ;
            totals=parseInt(totals)
            // console.log(typeof(totals))
            total[i].innerHTML = totals;
            // console.log( total[i].innerHTML)
        }
        arr.push(parseInt(total[i].innerHTML))
        // console.log(arr)



      }






      
      else if (ampm1[i].value == "PM" && ampm2[i].value == "AM") {
        const rem_hour = Math.floor((parseInt(startmin[i].value) + parseInt(endmin[i].value)) / 60);
        const rem_min =(parseInt(startmin[i].value) + parseInt(endmin[i].value)) % 60;
  
        let endhour_output = parseInt(endhour[i].value);
        let starthour_output = parseInt(starthour[i].value);
        let breakhour_output = parseInt(breakhour[i].value);
        let totals =12 -starthour_output + endhour_output +rem_hour - breakhour_output;
        // console.log(totals);
        total[i].innerHTML = totals;
        // console.log( total[i].innerHTML)
         if(total[i].innerHTML < 0){
                breakhour[i].value = 0;
                 let totals =12 -starthour_output + endhour_output +rem_hour - breakhour[i].value;
                 totals=parseInt(totals)
                //  console.log(typeof(totals))
                 total[i].innerHTML = totals;
                 total[i].innerHTML = totals;
                //  console.log( total[i].innerHTML)
        }
        else{
             let totals =12 -starthour_output + endhour_output +rem_hour - breakhour[i].value;
             totals=parseInt(totals)
            //  console.log(typeof(totals))
             total[i].innerHTML = totals;

            //  console.log( total[i].innerHTML)
        }

        arr.push(parseInt(total[i].innerHTML))
        // console.log(arr)


      }
      // arr.push(total[i].innerHTML)
      // console.log(arr)

      // console.log(typeof(arr[0]))
      // console.log(typeof(arr[1]))
      // console.log(typeof(arr[2]))
      // console.log(typeof(arr[3]))
      // console.log(typeof(arr[4]))
      // console.log(typeof(arr[5]))
      // console.log(typeof(arr[6]))
    }
    // console.log(arr)
   

  });
  // console.log(typeof(arr[0]))
  let sum = 0 
  for (let i = 0; i < 
    arr.length; i += 1) {
    // take every item in the array and add it to sum variable
    sum += arr[i]
    console.log(sum) 
    total_time.innerHTML=sum;

  }
})
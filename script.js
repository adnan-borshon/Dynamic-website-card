let container = document.querySelector(".main-class");
let button = document.querySelector(".button");
function calculateViews(views) {
  let viewsCopy = views;
  if (viewsCopy > 1000000) {
    viewsCopy /= 1000000;
    return `${viewsCopy.toFixed(1)}M`;
  } else if (viewsCopy > 100000) {
    viewsCopy /= 1000;
    return `${viewsCopy.toFixed(1)}K`;
  } else {
    return viewsCopy;
  }
}
function fixingDuration(duration) {
  let str= duration.toString();
  
  for(let i=0; i<str.length; i++) {
    if(i === 1 && str[i] === ":"){
      str= "0"+str;
    }
  }
  return str; 
}

function getNewCard(tittle, duration, channelName, views, months, thumbnails) {
  return ` <div class="container bg-gray-900 h-[20vh] w-[97vw] flex m-4 rounded-lg">
        <div class="image w-[15vw] h-[15vh] m-4 flex relative overflow-hidden">
            <><img class="h-full w-full rounded-lg"
                src="${thumbnails}">
               
                <div
                    class="duration bg-gray-700 bg-opacity-75 absolute bottom-1 right-1 rounded-md px-2 text-sm text-white ">
                    ${fixingDuration(duration)}</div>
            </div>
            <div class="text">
                    <div class="tittle ml-2 mt-3">
                        <p class="text-lg font-[Lato] font-bold text-white">
                            ${tittle}
                        </p>
                    </div>
                    <div class="info ml-2 font-[Lato] text-gray-400">
                        <span class="channel_name">${channelName}</span>
                        <span>.</span>
                        <span class="views">${calculateViews(views)} Views</span>
                        <span>.</span>
                        <span class="date">${months} months ago</span>
                    </div>
                </div>
                </div>
    </div>`;
}
button.addEventListener("click", () => {
  let tittle = prompt("Tittle name: ");
  let duration = prompt("Duration: ");
  let channelName = prompt("Channel name: ");
  let views = prompt("Views: ");
  let months = prompt("Months: ");
  let thumbnails = prompt("Thumbnails link: ");

  let newCard = getNewCard(
    tittle,
    duration,
    channelName,
    views,
    months,
    thumbnails
  );

  container.innerHTML += newCard;
});

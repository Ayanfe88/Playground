import "./styles.css";
const fs = require("fs");

const dataString = fs.readFileSync(`${__dirname}/file.json`).toString();
// console.log(JSON.parse(dataString).items[2]);
const videos = JSON.parse(dataString);
// const views1 = 5843915;

// Task 1 => Create a function that returns a youtube iframe(youtube) - Aljona
// Task 2 => Extract youtube video IDs from the json object - Ayanfe
// Task 3 => A function to iterate through json items list - K_consult
// extractId()

// document.getElementById("app").innerHTML
function extractInfo(item) {
  const id = item.id;
  const title = item.snippet.title;
  const description = item.snippet.description;
  const viewCount = item.statistics.viewCount;
  return {
    id,
    title,
    description,
    viewCount
  };
}

function youtubeFrame(youtubeId) {
  const view = `
  <div>
    <iframe width="100%" height="315"
    src="https://www.youtube.com/embed/${youtubeId}?autoplay=0">
    </iframe>
  </div>
  `;
  return view;
}

function extractItems() {
  let allVideosView = "";
  const items = videos.items;
  for (let i = 0; i < items.length; i++) {
    const videoInfo = extractInfo(videos.items[i]);
    allVideosView += youtubeFrame(videoInfo.id);
  }
  return allVideosView;
}

document.getElementById("app").innerHTML = extractItems();
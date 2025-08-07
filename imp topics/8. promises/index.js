// * synchronous vs async

//sync code:
// console.log("First");
// console.log("Middle");
// console.log("End");

//async code:
// console.log("First");
// setTimeout(() => {
//   console.log("Middle");
// }, 0);
// console.log("End");

// * callback:
// console.log("First");
// function action(username, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${username}`);
//   }, 0);
// }
// function likeVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the video ${video}`);
//   }, 0);
// }
// function shareVideo(share, cb) {
//   setTimeout(() => {
//     cb(share);
//   }, 0);
// }
// const msg = action("SandipYT", (msg) => {
//   console.log(msg);
//   likeVideo("Js Interview video", (msg) => {
//     console.log(msg);
//     shareVideo("Share this video", (msg) => {
//       console.log(msg);
//     });
//   });
// }); // callback hell
// console.log("End");

// * promise
const sub = new Promise((resolve, reject) => {
  fetch("https://dummyjson.com/test")
    .then((res) => {
      if (res.ok) {
        resolve(res);
      } else {
        reject("Something went wrong!");
      }
    })
    .catch((err) => reject(err));
});

sub
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// now we dont need to pass callback
function action(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 0);
  });
}
function likeVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the video ${video}`);
    }, 0);
  });
}
function shareVideo(share) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(share);
    }, 0);
  });
}
// promise chaining
action("SandipYT")
  .then((res) => {
    // console.log(res);
    return likeVideo("Js video");
  })
  .then((res) => {
    // console.log(res);
    return shareVideo("Share all videos");
  })
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    // console.log(err);
  });

// promise combinators:
Promise.all([
  action("SandipYT"),
  likeVideo("Js Video"),
  shareVideo("Share this video"),
])
  .then((res) => {
    // console.log(res);
  })
  .catch(() => console.log("Promise Rejected"));

// Promise.allSettled((res, rej) => {});

// * async-await:
const result = async () => {
  try {
    console.log(await action("SandipYT")),
      console.log(await likeVideo("Js Video")),
      console.log(await shareVideo("Share this video"));
  } catch (error) {
    console.log(error+"XXXXXXX");
  }
};
result();

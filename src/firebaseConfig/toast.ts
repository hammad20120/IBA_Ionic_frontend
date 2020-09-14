export function toast(message: string, duration = 2000) {
  const toast = document.createElement("ion-toast");
  toast.message = message;
  toast.duration = duration;

  document.body.appendChild(toast);
  return toast.present();
}


   var today = new Date();
  export var Created_At =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

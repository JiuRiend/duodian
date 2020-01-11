export function formatDate(now) {
    let year = new Date(now).getFullYear();
    let month = new Date(now).getMonth() + 1;
    let date = new Date(now).getDate();
    let hour = new Date(now).getHours();
    let minute = new Date(now).getMinutes();
    let second = new Date(now).getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}


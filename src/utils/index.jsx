export const emojis = [
    "🙂",
    "😊",
    "🤗",
    "😄",
    "😅",
    "😆",
    "😂",
    "🤣",
    "😘",
    "🥰",
    "😍",
    "🤩",
    "😇",
    "😎",
    "😋",
    "😜",
    "🙃",
    "😴",
    "🤯",
    "🥳",
];

export const upload_image = async (mediaNewPost) => {
    const dataForCloudinary = new FormData();
    dataForCloudinary.append("file", mediaNewPost);
    dataForCloudinary.append("upload_preset", "loop_preset");
    dataForCloudinary.append("cloud_name", "dojsq93dk");
    const urlToReturn = fetch(
        "https://api.cloudinary.com/v1_1/dojsq93dk/image/upload",
        {
            method: "post",
            body: dataForCloudinary,
        }
    )
        .then((res) => res.json())
        .then((data) => data)
        .catch((e) => console.log(e));

    return urlToReturn;
};
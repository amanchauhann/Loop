import { toast } from "react-toastify";

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

// TOASTS


export const successToast = (success_text) => {
    return (
        toast.success(`${success_text}`, {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    )
}

export const errorToast = (red_toast_text) => {
    return (
        toast.error(`${red_toast_text}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    )
}

export const infoToast = (blue_toast_text) => {
    return (
        toast.info(`${blue_toast_text}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    )
}

export const warnToast = (yellow_toast_text) => {
    return (
        toast.warn(`${yellow_toast_text}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    )
}

export const defaultToast = (white_toast_text) => {
    return (
        toast(`${white_toast_text}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    )
}

export const darkToast = (dark_toast_text) => {
    return (
        toast(`${dark_toast_text}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    )
}

export const darkSuccessToast = (dark_success_toast_text) => {
    return (
        toast.success(`${dark_success_toast_text}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    )
}

export const darkRedToast = (dark_red_toast) => {
    return (
        toast.error(`${dark_red_toast}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    )
}

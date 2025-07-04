import './style.css'

const elements = { 
    detected_id : document.querySelector<HTMLDivElement>("#detected-id")!,
      open_link : document.querySelector<HTMLAnchorElement>("#open-link")!,
      copy_link : document.querySelector<HTMLDivElement>("#copy-link")!,
}

const class_func = {
      deactivate : (element: HTMLElement) => element.classList.add("deactivated"),
        activate : (element: HTMLElement) => element.classList.remove("deactivated"),
    remove_error : (element: HTMLElement) => element.classList.remove("error"),
}

function update() {
    const video_id = getVideoID(document.querySelector<HTMLTextAreaElement>("#textarea")!.value);
    console.log(video_id);

    if (video_id !== null) {
        const video_url = getVideoURL(video_id);
        Object.values(elements).forEach(class_func.activate);

        elements.detected_id.innerText = video_id;
        elements.open_link.setAttribute("href", video_url);
        elements.copy_link.setAttribute("onclick", `navigator.clipboard.writeText("${video_url}")`);
        elements.detected_id!.setAttribute("onclick", `navigator.clipboard.writeText("${video_id}")`);

    } else {
        Object.values(elements).forEach(class_func.deactivate);
        elements.detected_id.innerText = "✕";
        elements.open_link.removeAttribute("href");
        elements.copy_link.removeAttribute("onclick");
        elements.detected_id.removeAttribute("onclick");
    }
}

Object.values(elements).forEach(class_func.remove_error);
update();

document.querySelector<HTMLTextAreaElement>("#textarea")!.addEventListener('input', () => {
    update();
})

document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'Enter') {
        document.querySelector<HTMLAnchorElement>("#open-link")!.click();
    }
});

function getVideoID(text: string): string | null {
    let id;

    id = regexMatchAdVideoID(text);
    if (id) return id;

    id = regexMatchVideoID(text);
    return id;
}

function regexMatchAdVideoID(text: string): string | null {
    const match_array: RegExpMatchArray | null = text.match(/(?<=addebug_videoId"\s*:\s*").*?(?=")/)

    return match_array ? match_array[0] : null;
}

function regexMatchVideoID(text: string): string | null {
    const match_array: RegExpMatchArray | null = text.match(/(?<=videoid"\s*:\s*").*?(?=")/)

    return match_array ? match_array[0] : null;
}

function getVideoURL(id: string): string {
    return `https://www.youtube.com/watch?v=${id}`;
}

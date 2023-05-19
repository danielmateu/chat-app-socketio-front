import { animateScroll } from "react-scroll";

export const scrollToBottom = () => {

    setTimeout(() => {
        animateScroll.scrollToBottom({
            containerId: "mensajes",
            duration: 500,
            delay: 0,
            smooth: "easeInOutQuint",
            isDinamic: true,
            offset: -10,
        });
    }, 10);
}

export const scrollToBottomAnimated = () => {

    animateScroll.scrollToBottom({
        containerId: "mensajes",
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuint",
        isDinamic: true,
        offset: -10,
    });
}
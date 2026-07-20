// 复制文本到剪贴板
function copyToClipboard(text, successCallback) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            if (successCallback) successCallback();
        }).catch(() => {
            fallbackCopy(text, successCallback);
        });
    } else {
        fallbackCopy(text, successCallback);
    }
}

function fallbackCopy(text, callback) {
    const input = document.createElement('input');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        if (callback) callback();
    } catch (err) {
        console.error('复制失败', err);
    }
    document.body.removeChild(input);
}
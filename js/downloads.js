const downloads = [
    { name: '营销助手', version: 'v3.1.1', icon: '📦', file: '../app/营销助手_v3.1.1.zip' },
    { name: '营销助手', version: 'v3.2.1 适配1.5.5版本', icon: '📦', file: '../app/营销助手_v3.2.1.zip' },
    { name: '21tb助手', version: 'v1.0.0', icon: '📚', file: '../app/21tb助手.zip' }
];

function renderDownloadList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    downloads.forEach(item => {
        html += `<li class="software-item">
                    <div class="software-info">
                        <span class="software-icon">${item.icon}</span>
                        <div>
                            <div class="software-name">${item.name}</div>
                            <div class="software-version">${item.version}</div>
                        </div>
                    </div>
                    <a class="download-btn" href="${item.file}" download>⬇️ 下载</a>
                </li>`;
    });
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderDownloadList('softwareList');
});

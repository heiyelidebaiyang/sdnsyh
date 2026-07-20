document.addEventListener('DOMContentLoaded', function() {
    // ========== 侧滑菜单控制 ==========
    const menuBtn = document.getElementById('menuBtn');
    const sideNav = document.getElementById('sideNav');
    const navClose = document.getElementById('navClose');
    const navOverlay = document.getElementById('navOverlay');

    function openNav() {
        sideNav.classList.add('open');
        navOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        sideNav.classList.remove('open');
        navOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', openNav);
        navClose.addEventListener('click', closeNav);
        navOverlay.addEventListener('click', closeNav);
    }

    // ========== 卡片隐藏/显示 ==========
    const mainCard = document.getElementById('mainCard');
    const toggleBtn = document.getElementById('toggleBtn');
    if (mainCard && toggleBtn) {
        let isHidden = false;
        toggleBtn.addEventListener('click', () => {
            isHidden = !isHidden;
            mainCard.classList.toggle('hidden', isHidden);
        });
    }

    // ========== 打字机标题 ==========
    const titleEl = document.getElementById('typewriter');
    const cursor = document.getElementById('cursor');
    if (titleEl && cursor) {
        const highlightText = '云雪';
        const normalText = '星球';
        titleEl.innerHTML = '';
        const hlSpan = document.createElement('span');
        hlSpan.className = 'highlight';
        hlSpan.textContent = highlightText;
        titleEl.appendChild(hlSpan);
        const normalSpan = document.createElement('span');
        titleEl.appendChild(normalSpan);
        let index = 0;
        const speed = 100;
        function typeNext() {
            if (index < normalText.length) {
                normalSpan.textContent += normalText.charAt(index);
                index++;
                setTimeout(typeNext, speed);
            } else {
                cursor.style.animation = 'blink 0.9s step-end infinite';
            }
        }
        setTimeout(typeNext, 400);
        cursor.style.animation = 'blink 0.9s step-end infinite';
    }

    // ========== 循环打字副标题 ==========
    const subTextEl = document.getElementById('subText');
    if (subTextEl) {
        const fullText = '❄ 永久不退的热情 才是天分';
        let charIndex = 0;
        let isDeleting = false;
        let timer = null;
        function typeLoop() {
            if (!isDeleting) {
                if (charIndex < fullText.length) {
                    subTextEl.textContent = fullText.substring(0, charIndex + 1);
                    charIndex++;
                    timer = setTimeout(typeLoop, 80);
                } else {
                    isDeleting = true;
                    timer = setTimeout(typeLoop, 2500);
                }
            } else {
                if (charIndex > 0) {
                    subTextEl.textContent = fullText.substring(0, charIndex - 1);
                    charIndex--;
                    timer = setTimeout(typeLoop, 40);
                } else {
                    isDeleting = false;
                    timer = setTimeout(typeLoop, 800);
                }
            }
        }
        setTimeout(typeLoop, 1600);
    }

    // ========== 弹窗通用控制 ==========
    function openModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    function closeAllModals() {
        ['modalOverlay', 'qrModalOverlay', 'gzhModalOverlay'].forEach(id => closeModal(id));
    }

    // 微信弹窗
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) contactBtn.addEventListener('click', () => openModal('modalOverlay'));
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => closeModal('modalOverlay'));

    // 复制微信号
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            copyToClipboard('iPYJ1202', () => {
                copyBtn.textContent = '✅ 已复制！';
                setTimeout(() => { copyBtn.textContent = '📋 复制微信号'; }, 2000);
            });
        });
    }

    // 青草弹窗
    const fishBtn = document.getElementById('fishBtn');
    if (fishBtn) fishBtn.addEventListener('click', () => openModal('qrModalOverlay'));
    const closeQrBtn = document.getElementById('closeQrBtn');
    if (closeQrBtn) closeQrBtn.addEventListener('click', () => closeModal('qrModalOverlay'));

    // 白羊信弹窗
    const gzhBtn = document.getElementById('gzhBtn');
    if (gzhBtn) gzhBtn.addEventListener('click', () => openModal('gzhModalOverlay'));
    const closeGzhBtn = document.getElementById('closeGzhBtn');
    if (closeGzhBtn) closeGzhBtn.addEventListener('click', () => closeModal('gzhModalOverlay'));

    // 点击遮罩关闭
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ESC 关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
            if (sideNav.classList.contains('open')) closeNav();
        }
    });
});
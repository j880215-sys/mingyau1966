/* ===== 明曜長期照護 主要 JavaScript ===== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 導覽列漢堡選單 ---------- */
  const toggle = document.querySelector('.navbar-toggle');
  const nav = document.querySelector('.navbar-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      this.classList.toggle('open');
      nav.classList.toggle('open');
    });

    // 點選選單項目後關閉選單
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  /* ---------- 滾動時導覽列陰影加深 ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.12)';
      } else {
        navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
      }
    });
  }

  /* ---------- 標記目前頁面的導覽項目 ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- 滾動進場動畫 ---------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* ---------- 聯絡表單送出 ---------- */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '送出中...';
      btn.disabled = true;

      // 使用 Formspree 服務（免費）
      fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      })
        .then(res => {
          if (res.ok) {
            showMessage('感謝您的來信！我們將盡快與您聯絡。', 'success');
            this.reset();
          } else {
            showMessage('送出失敗，請直接撥打電話與我們聯繫。', 'error');
          }
        })
        .catch(() => {
          showMessage('網路錯誤，請直接撥打電話與我們聯繫。', 'error');
        })
        .finally(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        });
    });
  }

  function showMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `form-message form-message-${type}`;
    msg.textContent = text;
    msg.style.cssText = `
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      background: ${type === 'success' ? '#1a6b4a' : '#e53e3e'};
      color: white; padding: 16px 32px; border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2); font-size: 1rem;
      font-weight: 600; z-index: 9999; animation: slideUp 0.3s ease;
    `;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
  }

  /* ---------- 數字計數動畫 ---------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 16);
  }

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

});

/* CSS 動畫補充 */
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
  @keyframes slideUp { from { opacity: 0; transform: translateX(-50%) translateY(16px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
`;
document.head.appendChild(style);

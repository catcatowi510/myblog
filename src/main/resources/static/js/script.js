
// Certificates data
const certificates = [
    { 
        id: 1, 
        title: "JavaScript Essentials 1", 
        issuer: "Cisco",
        date: "2025",
        image: "images/certificates/cert1.jpg",
        placeholder: "https://via.placeholder.com/400x300/6366f1/ffffff?text=JavaScript+Certificate"
    },
    { 
        id: 2, 
        title: "JavaScript Essentials 2", 
        issuer: "Cisco",
        date: "2025",
        image: "images/certificates/cert2.jpg",
        placeholder: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Python+Certificate"
    },
    { 
        id: 3, 
        title: "Networking Basics", 
        issuer: "Cisco",
        date: "2025",
        image: "images/certificates/cert3.jpg",
        placeholder: "https://via.placeholder.com/400x300/ec4899/ffffff?text=Web+Dev+Certificate"
    }
];
function loadCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    if (!certificatesGrid) return;

    certificatesGrid.innerHTML = '';

    certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card';

        certCard.innerHTML = `
            <div class="certificate-image">
                <img 
                    src="${cert.image}" 
                    alt="${cert.title}" 
                    loading="lazy"
                    onerror="this.src='${cert.placeholder}'"
                >
            </div>
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p class="certificate-issuer">
                    <i class="fas fa-award"></i> ${cert.issuer}
                </p>
                <p class="certificate-date">
                    <i class="far fa-calendar"></i> ${cert.date}
                </p>
            </div>
        `;

        // 👉 Click ảnh để phóng to
        const img = certCard.querySelector('img');
        img.addEventListener('click', () => {
            openImageModal(img.src, cert.title);
        });

        certificatesGrid.appendChild(certCard);
    });
}
// ================= MENU =================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.onclick = () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    };
}

// Close menu on click
document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = () => {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    };
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ================= ACTIVE MENU FIX (QUAN TRỌNG) =================
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id;

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // FIX RIÊNG CHO CONTACT (section cuối)
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#contact') {
                link.classList.add('active');
            }
        });
    }
});

// ================= BACK TO TOP =================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (!backToTop) return;
    backToTop.classList.toggle('show', window.scrollY > 300);
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', () => {
    loadCertificates();
    
    // Set first section as visible
    document.querySelector('.hero').style.opacity = '1';
    document.querySelector('.hero').style.transform = 'translateY(0)';
});
const contactForm = document.getElementById('contactForm');
const contactAlert = document.getElementById('contactAlert');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    const data = {
        title: formData.get('title'),
        email: formData.get('email'),
        content: formData.get('content')
    };

    try {
        const response = await fetch('/messages/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(response);
        const result = await response.json();

        if (response.ok && result.success) {
            showAlert(result.message, 'success');
            contactForm.reset();
        } else {
            showAlert('Gửi thất bại, vui lòng thử lại!', 'error');
        }

    } catch (error) {
        console.log(error);
        showAlert('Không thể kết nối server!', 'error');
        console.error(error);
    }
});

function showAlert(message, type) {
    contactAlert.textContent = message;
    contactAlert.className = `contact-alert ${type}`;
    contactAlert.style.display = 'block';

    setTimeout(() => {
        contactAlert.style.display = 'none';
    }, 3000);
}
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.image-modal-close');

function openImageModal(src, title) {
    modal.style.display = 'block';
    modalImg.src = src;
    modalCaption.textContent = title;
}

// Đóng modal
closeBtn.onclick = () => modal.style.display = 'none';

// Click nền tối để đóng
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};

// ESC để đóng
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
});

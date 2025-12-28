// ================= BLOG POSTS =================
const blogPosts = [
    {
        id: 1,
        title: "JavaScript - Ngôn Ngữ Của Web",
        excerpt: "Khám phá sức mạnh của JavaScript...",
        date: "20/12/2024",
        category: "JavaScript",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop"
    },
    {
        id: 2,
        title: "Python - Ngôn Ngữ Đa Năng",
        excerpt: "Tìm hiểu về Python...",
        date: "15/12/2024",
        category: "Python",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop"
    }
];

// Load blog posts
function loadBlogPosts() {
    const postsGrid = document.getElementById('postsGrid');
    if (!postsGrid) return;

    blogPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-image" style="background-image:url('${post.image}')"></div>
            <div class="post-content">
                <div class="post-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-tag"></i> ${post.category}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
            </div>
        `;
        postCard.onclick = () => location.href = `post${post.id}.html`;
        postsGrid.appendChild(postCard);
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

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
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


// Sample blog posts data with images from Unsplash
const blogPosts = [
    {
        id: 1,
        title: "JavaScript - Ngôn Ngữ Của Web",
        excerpt: "Khám phá sức mạnh của JavaScript và tại sao nó là ngôn ngữ phổ biến nhất cho phát triển web...",
        date: "20/12/2024",
        category: "JavaScript",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop"
    },
    {
        id: 2,
        title: "Python - Ngôn Ngữ Đa Năng",
        excerpt: "Tìm hiểu về Python, ngôn ngữ lập trình dễ học nhưng mạnh mẽ cho AI, Data Science và nhiều hơn nữa...",
        date: "15/12/2024",
        category: "Python",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        title: "HTML & CSS - Nền Tảng Web",
        excerpt: "Hướng dẫn cơ bản về HTML và CSS, những công nghệ nền tảng để xây dựng giao diện web đẹp mắt...",
        date: "10/12/2024",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&h=600&fit=crop"
    },
    {
        id: 4,
        title: "React - Thư Viện UI Hàng Đầu",
        excerpt: "Chia sẻ kinh nghiệm học và sử dụng React để xây dựng ứng dụng web hiện đại...",
        date: "05/12/2024",
        category: "React",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    {
        id: 5,
        title: "Git & GitHub - Quản Lý Code",
        excerpt: "Hướng dẫn sử dụng Git và GitHub để quản lý mã nguồn hiệu quả và làm việc nhóm...",
        date: "01/12/2024",
        category: "Tools",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop"
    },
    {
        id: 6,
        title: "Tips Học Lập Trình Hiệu Quả",
        excerpt: "Những kinh nghiệm và phương pháp học lập trình hiệu quả mà tôi đã áp dụng thành công...",
        date: "25/11/2024",
        category: "Learning",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    }
];

// Load blog posts
function loadBlogPosts() {
    const postsGrid = document.getElementById('postsGrid');
    
    blogPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-image" style="background-image: url('${post.image}'); background-size: cover; background-position: center;">
            </div>
            <div class="post-content">
                <div class="post-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-tag"></i> ${post.category}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
            </div>
        `;
        postCard.addEventListener('click', () => {
            window.location.href = `post${post.id}.html`;
        });
        postsGrid.appendChild(postCard);
    });
}

// Load gallery
// Load certificates
function loadCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    
    certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card';
        certCard.innerHTML = `
            <div class="certificate-image">
                <img src="${cert.image}" alt="${cert.title}" loading="lazy" onerror="this.src='${cert.placeholder}'">
            </div>
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p class="certificate-issuer"><i class="fas fa-award"></i> ${cert.issuer}</p>
                <p class="certificate-date"><i class="far fa-calendar"></i> ${cert.date}</p>
            </div>
        `;
        certificatesGrid.appendChild(certCard);
    });
}
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message (you can customize this)
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
    
    // Reset form
    contactForm.reset();
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    
    // Set first section as visible
    document.querySelector('.hero').style.opacity = '1';
    document.querySelector('.hero').style.transform = 'translateY(0)';
});ument.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    loadGallery();
    
    // Set first section as visible
    document.querySelector('.hero').style.opacity = '1';
    document.querySelector('.hero').style.transform = 'translateY(0)';
});

// Add hover effect to post cards
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', function() {
                // You can add navigation to a detailed post page here
                console.log('Post clicked:', this.querySelector('.post-title').textContent);
            });
        });
    }, 100);
});

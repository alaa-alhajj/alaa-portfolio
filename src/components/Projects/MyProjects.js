export const projects = [
    {
        id: 10,
        title: 'Trello-style To-Do App',
        description: 'A simple and interactive task management app built with Next.js and TypeScript.',
        innerDescription: 'A simple and interactive task management app built with Next.js and TypeScript.',
        image: './images/todo-app.png',
        hmoeImage: `${process.env.PUBLIC_URL}/images/todo-app.png`,
        features: ['✅ 3-column board (To Do, In Progress, Done)', '✏️ Add/Edit tasks with title, description, deadline, priority, and project', '⏳ Drag & drop support using @hello-pangea/dnd', '💾 LocalStorage persistence', '🎨 Responsive UI with animations', '⚛️ Built with Next.js 14 & TypeScript',],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', '@hello-pangea/dnd'],
        link: 'https://trello-todo-app-eta.vercel.app/',
        github: 'https://github.com/alaa-alhajj/trello-todo-app'
    },
    {
        id: 9,
        title: 'News Aggregator Web Application',
        description: 'A responsive and interactive news aggregator built with React.js, aggregating articles from multiple trusted news APIs.',
        innerDescription: 'A responsive and interactive news aggregator built with React.js, aggregating articles from multiple trusted news APIs.',
        image: './images/news-app.png',
        hmoeImage: `${process.env.PUBLIC_URL}/images/news-app-home.png`,
        features: ['🔍 Advanced Search: Search articles by keywords with instant filtering.', '🗂️ Multi-level Filtering: Filter news by date, category, and source to get relevant content.', '🎯 Personalized Feed: Customize your news feed by selecting preferred sources, categories, and authors.', '📱 Mobile Responsive: Seamless experience across all devices — mobile, tablet, and desktop.', '🐳 Dockerized: Easy deployment with Docker container support.', '🧩 Clean Code Architecture: Implements best practices like DRY, KISS, and SOLID principles for maintainability and scalability.'],
        technologies: ['React.js', 'REST APIs: NewsAPI, The Guardian, New York Times', 'CSS3 & Responsive Design', 'Docker', 'Axios'],
        github: 'https://github.com/alaa-alhajj/news-aggregator-website'
    },
    {
        id: 7,
        title: 'E-Commerce App',
        description: 'A modern, responsive e-commerce web app that allows users to browse products, manage their shopping cart, and complete secure purchases smoothly.',
        innerDescription: 'A modern, responsive e-commerce web app that allows users to browse products, manage their shopping cart, and complete secure purchases smoothly.',
        image: './images/e-commerce-app.png',
        hmoeImage: `${process.env.PUBLIC_URL}/images/e-commerce-app-home.png`,
        features: ['🛍️ Product Browsing: View product listings with images, prices, and details.', '🛒 Shopping Cart: Add, remove, and update product quantities seamlessly across the app.', '🔍 Search & Filter: Search products by name and filter by category, price, or rating.', '💳 Checkout: Secure payment process with order summary and confirmation.'],
        technologies: ['Next.js', 'Tailwind CSS', 'React Context API', 'Jest', 'React Testing Library'],
        link: "https://ecommerce-app-three-liart.vercel.app/",
        github: 'https://github.com/alaa-alhajj/ecommerce-app'
    },
    {
        id: 6,
        title: 'BARKA',
        description: 'A platform offering personalized services and digital solutions.',
        innerDescription: 'Developed a modern, responsive website for Barka, a platform offering personalized services and digital solutions. Focused on creating a seamless, user-friendly experience with a custom theme, optimized for performance. The site features smooth animations, intuitive navigation, and a visual storytelling approach to enhance user engagement.',
        image: `./images/baraka1.png`,
        hmoeImage: `${process.env.PUBLIC_URL}/images/baraka-home.png`,
        technologies: ['WordPress/Custom Theme', 'Elementor', 'PHP/MySQL', 'Google Analytics', 'Google Fonts', 'Font Awesome', 'Google Tag Manager'],
        link: "https://barka.me/"
    },
    {
        id: 5,
        title: 'AFSIA',
        description: 'A company specializing in solar energy solutions.',
        innerDescription: "Developed a clean and professional website for Afsia Solar, a company specializing in solar energy solutions. The site, built with WordPress, focuses on presenting the company's products and services in an easy-to-navigate and visually engaging way. I contributed to designing a user-friendly layout, ensuring fast load times, and optimizing the site for mobile responsiveness. The website integrates clear calls-to-action, service details, and contact information, helping customers learn about solar solutions effortlessly.",
        image: "./images/afsia1.png",
        hmoeImage: `${process.env.PUBLIC_URL}/images/afsia-home.jpg`,
        technologies: ['WordPress/Custom Theme', 'Elementor', 'PHP/MySQL', 'Google Analytics', 'Google Fonts', 'Font Awesome', 'Google Tag Manager'],
        link: "https://www.afsiasolar.com/"
    },
    {
        id: 4,
        title: 'Bconnection Information Technology llc.',
        description: 'A platform connecting businesses with clients',
        innerDescription: "Developed a sleek, modern, and fully responsive website for Bconnection, a platform connecting businesses with clients. Built with HTML and CSS, I focused on creating a clean, minimalist design with a strong emphasis on user experience and mobile responsiveness. The site features smooth animations, intuitive navigation, and a clear structure to present services and contact information effectively.",
        image: './images/bconnection1.png',
        hmoeImage: `${process.env.PUBLIC_URL}/images/bconnection-home.png`,
        technologies: ['Static Site Built with: HTML5, CSS3, JavaScript', 'Bootstrap (for responsive design)', 'Google Analytics', 'Google Fonts'],
        link: "https://bconnection.me/"
    },
    {
        id: 3,
        title: 'UAE Fablab',
        description: 'A platform dedicated to promoting innovation and creativity through advanced fabrication tools and technologies.',
        innerDescription: "Designed and developed the website for FabLab UAE, a platform dedicated to promoting innovation and creativity through advanced fabrication tools and technologies. Built with Liferay CMS, I focused on delivering a visually appealing, user-friendly experience with a clean design and smooth navigation. The site is fully responsive, ensuring optimal performance across all devices, and showcases the various services, workshops, and projects that FabLab UAE offers to its community.",
        image: './images/fablab1.png',
        hmoeImage: `${process.env.PUBLIC_URL}/images/fablab-home.png`,
        technologies: ['Liferay (Java-based)', 'Java, JSP (JavaServer Pages)', 'Tomcat Server', 'Liferay Portal Framework', 'HTML5, CSS3, JavaScript']
    },
    {
        id: 2,
        title: 'Hamdan Bin Rashed Al Maktoum Award.',
        description: 'A leading company in providing high-quality services and solutions.',
        innerDescription: "Developed the official website for HA UAE, a leading company in providing high-quality services and solutions. Built using Liferay, the website features a modern, clean, and responsive design aimed at showcasing the company's services, projects, and expertise. The focus was on creating an intuitive layout with easy navigation, enhancing user experience, and ensuring mobile optimization for seamless access on any device.",
        image: './images/hamdan1.png',
        hmoeImage: `${process.env.PUBLIC_URL}/images/hamdan-home.png`,
        technologies: ['Liferay (Java-based)', 'Java, JSP (JavaServer Pages)', 'Tomcat Server', 'Liferay Portal Framework', 'HTML5, CSS3, JavaScript']
    }
];
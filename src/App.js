import React, { useState, useEffect } from 'react';
import { Wrench, Phone, Mail, MapPin, Globe, CheckCircle, Image } from 'lucide-react';

// Main App component
const App = () => {
  // State to manage the current language (en for English, ar for Arabic)
  const [lang, setLang] = useState('en');

  // Function to toggle language
  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  // Content object for different languages
  const content = {
    en: {
      nav: {
        home: 'Home',
        about: 'Our Story',
        services: 'Services',
        ourProducts: 'Products',
        ourBrands: 'Brands',
        ourGuarantee: 'Guarantee',
        gallery: 'Our Work',
        whyChooseUs: 'Why Choose Us',
        contact: 'Contact Us',
      },
      hero: {
        title: '',
        subtitle: '',
        description: '',
       // button: 'Explore Our Products',
      },
      about: {
        title: 'Our Story',
        text1: 'Established in 1986, Masdar Al-Adawat is a proud, second-generation family-owned business specializing in the distribution of automotive spare parts. Founded on the principles and vision of our founder—my father—his legacy remains the cornerstone of our operations and continues to inspire our journey.Under the strategic leadership of our CEO, Mr. Haval Ezzalddin Mohialdeen, we have expanded our footprint across Iraq, proudly serving over 400 clients nationwide. Headquartered in Erbil, our company continues to grow with a progressive outlook and a commitment to excellence.Masdar Al-Adawat is the exclusive distributor in Iraq for three of the most respected Turkish brands in the automotive industry:Elbir Oto (ETS), ABA Automotive, and Yavuzsan Automotive.As we look toward the future, we remain steadfast in honoring our heritage, delivering high-quality products, and fostering long-term partnerships throughout the country.',
        text2: 'At Masdar Al-Adawat, our mission is to provide dependable, high-quality automotive spare parts while offering exceptional customer service. We aspire to be Iraq’s leading distributor, delivering innovative solutions and contributing to the advancement of the automotive sector.',
      },
      services: {
        title: 'Our Services',
        intro: 'Discover quality auto spare parts at Masdar Al-Adawat Company, a trusted distributor since 1986. As the exclusive distributor of ETS,aba and Yavuzsan in Iraq, we offer a diverse range of top-tier components. Shop with us for reliability, competitive pricing, and nationwide coverage.',
        item1: {
          title: 'Engine Parts',
          description: 'From spark plugs to complete engine assemblies, we stock a comprehensive range of engine components.',
        },
        item2: {
          title: 'Brake Systems',
          description: 'Ensure your safety with our high-performance brake pads, discs, and calipers.',
        },
        item3: {
          title: 'Suspension & Steering',
          description: 'Improve your ride comfort and handling with our quality suspension and steering parts.',
        },
      },
      ourProducts: {
        title: 'Our Products',
        intro: 'Explore our extensive catalog of high-quality car spare parts, meticulously selected to meet your vehicle\'s needs.',
        products: [
          {
            name: 'Brake Discs',
            description: 'High-performance braking components for superior safety and durability.',
            image: 'brake_discs_drums_medium.png',
          },
          {
            name: 'AUXILIARY & TIMING IDLER PULLEYS',
            description: 'different belt systems and The auxiliary idler pulleys.',
            image: 'engine_filters.png',
          },
          {
            name: 'Suspension Systems',
            description: 'Complete suspension kits for enhanced ride comfort and stability.',
            image: 'suspension_systems.png',
          },
          {
            name: 'BELT TENSIONERS',
            description: 'different Belt tensioners types according to the belts they are in',
            image: 'BELT-TENSIONERS.jpeg',
          },
          {
            name: 'Drums',
            description: 'High quality and different type drums.',
            image: 'drums.png',
          },
          {
            name: 'Other Items',
            description: 'other items available for different car types',
            image: 'others.jpg', // Reusing for now
          },
        ],
      },
      ourBrands: {
        title: 'Our Brands',
        intro: 'We are proud to be the exclusive distributor in Iraq for these renowned brands:',
        brands: [
          { name: 'Yavuzsan', description: 'Specializing in high-quality brake disks and brake drums.',  image:'yavuzsan-logo.png' },
          { name: 'A.b.a Automotive', description: 'A leading provider of various automotive components.', image: 'aba-logo.png' },
          { name: 'ETS Auto', description: 'Offering a wide range of reliable auto spare parts.', image: 'ets-logo.png' },
        ],
      },
      ourGuarantee: {
        title: 'Our Guarantee',
        text: 'At Masdar Al-Adawat Company, we stand behind our work. We offer a 12-month warranty on all parts. If you\'re not completely satisfied with our services, we\'ll do everything we can to make it right.',
      },
      gallery: {
        title: 'Snapshots of Our Auto Spare Parts Services',
        intro: 'A visual journey through our extensive range of auto spare parts and services.',
        images: [
          'gallery1.png',
          'gallery2.png',
          'gallery3.png',
          'gallery4.png',
        ]
      },
      whyChooseUs: {
        title: 'Why Choose Us?',
        reason1: {
          title: 'Quality Assurance',
          description: 'We only offer genuine and high-quality aftermarket parts from trusted brands.',
        },
        reason2: {
          title: 'Competitive Prices',
          description: 'Get the best value for your money with our competitive pricing.',
        },
        reason3: {
          title: 'Expert Support',
          description: 'Our knowledgeable team is here to assist you in finding the right parts.',
        },
        reason4: {
          title: 'Fast Delivery',
          description: 'Efficient delivery services to get your parts to you quickly.',
        },
      },
      contact: {
        title: 'Contact Us',
        intro: 'Have a question or need a specific part? Reach out to us!',
        addressDetails: 'Erbil. North industril zone, Masif Road',
        workingHoursTitle: 'Working Hours:',
        workingHours: [
          'Sat 08:00 – 17:00',
          'Sun 08:00 – 17:00',
          'Mon 08:00 – 17:00',
          'Tue 08:00 – 17:00',
          'Wed 08:00 – 17:00',
          'Thu 08:00 – 17:00',
          'Fri Closed',
        ],
        googleMapLink: 'https://maps.app.goo.gl/8A8NDL6YLiqJLzUK6',
        googleMapText: 'View on Google Maps',
      },
      footer: {
        copyright: '© 2024 Car Spare Parts Dealer. All rights reserved.',
      },
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'قصتنا',
        services: 'خدماتنا',
        ourProducts: 'منتجاتنا',
        ourBrands: 'علاماتنا التجارية',
        ourGuarantee: 'ضماننا',
        gallery: 'أعمالنا',
        whyChooseUs: 'لماذا تختارنا',
        contact: 'اتصل بنا',
      },
      hero: {
        title: '',
        subtitle: '',
        description: '',
        button: '',
      },
      about: {
        title: 'قصتنا',
        text1: 'تأسست شركة مصدر الادوات عام ١٩٨٦، وهي شركة عائلية رائدة، مملوكة لجيلها الثاني، متخصصة في توزيع قطع غيار السيارات. انطلاقًا من مبادئ ورؤية مؤسسنا - والدي - لا يزال إرثه حجر الزاوية في عملياتنا، ويواصل إلهام رحلتنا. تحت القيادة الاستراتيجية لرئيسنا التنفيذي، السيد هفال عز الدين محي الدين، وسّعنا نطاق أعمالنا في جميع أنحاء العراق، حيث نخدم بفخر أكثر من ٤٠٠ عميل على مستوى البلاد. يقع مقرنا الرئيسي في أربيل، وتواصل شركتنا نموها برؤية مستقبلية والتزام بالتميز. مصدر الأجهزة هي الموزع الحصري في العراق لثلاث من أعرق العلامات التجارية التركية في صناعة السيارات: إلبير أوتو (ETS)، وأبا أوتوموتيف، وياووزسان أوتوموتيف. ونحن نتطلع إلى المستقبل، نؤكد تمسكنا بتراثنا العريق، وتقديم منتجات عالية الجودة، وبناء شراكات طويلة الأمد في جميع أنحاء البلاد.',
        text2: 'في مصدر الادوات ، مهمتنا هي توفير قطع غيار سيارات موثوقة وعالية الجودة، مع خدمة عملاء استثنائية. نطمح لأن نكون الموزع الرائد في العراق، ونقدم حلولاً مبتكرة، ونساهم في تطوير قطاع السيارات.',
      },
      services: {
        title: 'خدماتنا',
        intro: 'اكتشف قطع غيار السيارات عالية الجودة في شركة مصدر الأدوات، الموزع الموثوق به منذ عام 1986. بصفتنا الموزع الحصري لـ ETS ويافوزسان في العراق، نقدم مجموعة متنوعة من المكونات عالية الجودة. تسوق معنا للحصول على الموثوقية والأسعار التنافسية والتغطية على مستوى البلاد.',
        item1: {
          title: 'قطع غيار المحرك',
          description: 'من شمعات الإشعال إلى تجميعات المحرك الكاملة، لدينا مجموعة شاملة من مكونات المحرك.',
        },
        item2: {
          title: 'أنظمة الفرامل',
          description: 'ضمان سلامتك من خلال وسادات الفرامل والأقراص والمكابس عالية الأداء لدينا.',
        },
        item3: {
          title: 'التعليق والتوجيه',
          description: 'حسن راحة قيادتك وتحكمك بقطع غيار التعليق والتوجيه عالية الجودة لدينا.',
        },
        
      },
      ourProducts: {
        title: 'منتجاتنا',
        intro: 'استكشف كتالوجنا الواسع من قطع غيار السيارات عالية الجودة، المختارة بعناية لتلبية احتياجات سيارتك.',
        products: [
          {
            name: 'أقراص ومكابح الفرامل',
            description: 'مكونات فرامل عالية الأداء لسلامة ومتانة فائقتين.',
            image: 'suspension_systems2222.png',
          },
          {
            name: 'بكرات التباطؤ المساعدة وبكرات التوقيت',
            description: 'أنظمة الحزام المختلفة وبكرات التباطؤ المساعدة.',
            image: 'engine_filters.png',
          },
          {
            name: 'أنظمة التعليق',
            description: 'مجموعات تعليق كاملة لراحة قيادة واستقرار محسنين.',
            image: 'suspension_systems.png',
          },
          {
            name: 'شدّادات السيور',
            description: 'أنواع مختلفة من شدادات الحزام حسب نوع الأحزمة التي توجد بها.',
            image: 'BELT-TENSIONERS.jpeg',
          },
          {
            name: 'الطبول',
            description: 'طبول عالية الجودة ومختلفة الأنواع.',
            image: 'drums.png',
          },
          {
            name: 'أدوات أخرى',
            description: 'عناصر أخرى متاحة لأنواع مختلفة من السيارات.',
            image: 'others.jpg', // Reusing for now
          },
        ],
      },
      ourBrands: {
        title: 'علاماتنا التجارية',
        intro: 'نحن فخورون بأن نكون الموزع الحصري في العراق لهذه العلامات التجارية الشهيرة:',
        brands: [
          { name: 'يافوزسان', description: 'متخصصة في أقراص الفرامل وأسطوانات الفرامل عالية الجودة.', image: 'yavuzsan-logo.png' },
          { name: 'أ.ب.أ للسيارات', description: 'مورد رائد لمختلف مكونات السيارات.', image: 'aba-logo.png' },
          { name: 'إي تي إس للسيارات', description: 'تقدم مجموعة واسعة من قطع غيار السيارات الموثوقة.', image: 'ets-logo.png' },
        ],
      },
      ourGuarantee: {
        title: 'ضماننا',
        text: 'في شركة مصدر الأدوات، نحن نلتزم بعملنا. نقدم ضمانًا لمدة 12 شهرًا على جميع القطع. إذا لم تكن راضيًا تمامًا عن خدماتنا، فسنبذل قصارى جهدنا لتصحيح الأمر.',
      },
      gallery: {
        title: 'لقطات من خدمات قطع غيار السيارات لدينا',
        intro: 'رحلة بصرية عبر مجموعتنا الواسعة من قطع غيار السيارات وخدماتنا.',
        images: [
          'gallery1.png',
          'gallery2.png',
          'gallery3.png',
          'gallery4.png',
        ]
      },
      whyChooseUs: {
        title: 'لماذا تختارنا؟',
        reason1: {
          title: 'ضمان الجودة',
          description: 'نقدم فقط قطع غيار أصلية وعالية الجودة من علامات تجارية موثوقة.',
        },
        reason2: {
          title: 'أسعار تنافسية',
          description: 'احصل على أفضل قيمة مقابل أموالك بأسعارنا التنافسية.',
        },
        reason3: {
          title: 'دعم الخبراء',
          description: 'فريقنا المطلع هنا لمساعدتك في العثور على القطع المناسبة.',
        },
        reason4: {
          title: 'توصيل سريع',
          description: 'خدمات توصيل فعالة لتصلك قطع الغيار بسرعة.',
        },
      },
      contact: {
        title: 'اتصل بنا',
        intro: 'هل لديك سؤال أو تحتاج إلى قطعة معينة؟ تواصل معنا!',    
        addressDetails: 'Erbil. North industril zone, Masif Road',
        workingHoursTitle: 'ساعات العمل:',
        workingHours: [
          'Sat 08:00 – 17:00',
          'Sun 08:00 – 17:00',
          'Mon 08:00 – 17:00',
          'Tue 08:00 – 17:00',
          'Wed 08:00 – 17:00',
          'Thu 08:00 – 17:00',
          'Fri Closed',
        ],
        googleMapLink: 'https://maps.app.goo.gl/8A8NDL6YLiqJLzUK6',
        googleMapText: 'View on Google Maps',
      },
      footer: {
        copyright: '© 2024 تاجر قطع غيار السيارات. جميع الحقوق محفوظة.',
      },
    },
  };

  // Get current language content
  const currentContent = content[lang];

  // Set text direction based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Brand Name */}
          <a href="https://masdaraladawat.com/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img
              src="logo.png"
              alt="Masdar Al-adawat Logo"
              className="h-16 w-auto" // Increased logo size here
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x50/e0f2fe/000000?text=Logo+Fallback"; }}
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
            <a href="#home" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.home}</a>
            <a href="#about" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.about}</a>
            <a href="#services" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.services}</a>
            <a href="#our-products" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.ourProducts}</a>
            <a href="#our-brands" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.ourBrands}</a>
            <a href="#our-guarantee" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.ourGuarantee}</a>
            <a href="#gallery" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.gallery}</a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.whyChooseUs}</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-medium transition duration-300 font-medium">{currentContent.nav.contact}</a>
          </nav>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-primary-medium text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-medium focus:ring-opacity-50"
          >
            <Globe size={20} />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </header>

      {/* Hero Section - Updated with image background and new colors */}
      <section
        id="home"
        className="relative bg-cover bg-center text-white py-20 md:py-48 overflow-hidden rounded-b-3xl shadow-lg"
        style={{ backgroundImage: 'url("image_logo_banner.svg")' }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            {currentContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            {currentContent.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-80">
            {currentContent.hero.description}
          </p>
       
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            {currentContent.about.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p>{currentContent.about.text1}</p>
              <p>{currentContent.about.text2}</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="our-story.jpg"
                alt="Our Story"
                className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 md:py-24 bg-light-bg rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            {currentContent.services.title}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {currentContent.services.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(currentContent.services).filter(item => typeof item === 'object' && item.title).map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
                <Wrench className="text-primary-medium mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="our-products" className="py-16 md:py-24 bg-white rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            {currentContent.ourProducts.title}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {currentContent.ourProducts.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.ourProducts.products.map((product, index) => (
              <div key={index} className="bg-light-bg p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands Section - Updated to display logos */}
      <section id="our-brands" className="py-16 md:py-24 bg-white rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            {currentContent.ourBrands.title}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {currentContent.ourBrands.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.ourBrands.brands.map((brand, index) => (
              <div key={index} className="bg-light-bg p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
                <img
                  src={brand.image}
                  alt={`${brand.name} Logo`}
                  className="h-20 w-auto object-contain mb-4" // Adjust size as needed
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x80/1A2B4D/FFFFFF?text=Logo+Fallback"; }}
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{brand.name}</h3>
                <p className="text-gray-600 leading-relaxed">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantee Section */}
      <section id="our-guarantee" className="py-16 md:py-24 bg-light-bg rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            {currentContent.ourGuarantee.title}
          </h2>
          <CheckCircle className="text-green-600 mx-auto mb-6" size={64} />
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {currentContent.ourGuarantee.text}
          </p>
        </div>
      </section>

      {/* Snapshots of Our Auto Spare Parts Services Section (Gallery) */}
      <section id="gallery" className="py-16 md:py-24 bg-white rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            {currentContent.gallery.title}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {currentContent.gallery.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.gallery.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={image}
                  alt={`Spare Part ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image className="text-white" size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-white rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {currentContent.whyChooseUs.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(currentContent.whyChooseUs).filter(item => typeof item === 'object').map((item, index) => (
              <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse bg-light-bg p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-light-accent text-primary-medium text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 md:py-24 bg-light-bg rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            {currentContent.contact.title}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">{currentContent.contact.intro}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Phone className="text-primary-medium" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{currentContent.contact.phone}</h3>
                  <p className="text-gray-600">07504500404 - 07704800123 - 07824500404 
                   </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Mail className="text-primary-medium" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{currentContent.contact.email}</h3>
                  <p className="text-gray-600">Email: haval@masdaraladawat.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <MapPin className="text-primary-medium" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{currentContent.contact.address}</h3>
                  <p className="text-gray-600">{currentContent.contact.addressDetails}</p>
                </div>
              </div>
              {/* Working Hours */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 rtl:space-x-reverse">
                  <Globe className="text-primary-medium" size={24} />
                  <span>{currentContent.contact.workingHoursTitle}</span>
                </h3>
                <ul className="text-gray-600">
                  {currentContent.contact.workingHours.map((hour, index) => (
                    <li key={index}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            
          </div>

          {/* Google Map Embed */}
           <div className="mt-12 w-full max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Find Us on the Map</h3>
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d804.6578801423074!2d44.04571853788987!3d36.22415027101701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4007213bcb51c639%3A0x1cbb1ce95d6aaba!2zSGF2YWwgRXphZGVlbiDYtNix2YPYqSDZhdi12K_YsSDYp9mE2KPYr9mI2KfYqg!5e0!3m2!1sen!2siq!4v1753391969223!5m2!1sen!2siq"
                width="100%" // Changed to 100% for responsiveness
                height="450" // Adjusted height for better responsiveness
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 rounded-t-3xl shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">{currentContent.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

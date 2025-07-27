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
        services: 'Our Services',
        ourProducts: 'Our Products',
        ourBrands: 'Our Brands',
        ourGuarantee: 'Our Guarantee',
        gallery: 'Our Work',
        whyChooseUs: 'Why Choose Us',
        contact: 'Contact Us',
      },
      hero: {
        title: 'Your Trusted Partner for Car Spare Parts',
        subtitle: 'Quality Parts, Exceptional Service',
        description: 'We provide a wide range of genuine and aftermarket car spare parts for all makes and models. Your vehicle deserves the best, and we deliver it.',
        button: 'Explore Our Products',
      },
      about: {
        title: 'Our Story',
        text1: 'Embarking on our journey in 1986, we are a second-generation family business specializing in the distribution of auto spare parts. Rooted in the rich legacy passed down by our founder, my dad, we began our humble venture in Duhok, Iraq. Over the years, through dedication and commitment of our CEO Haval Ezzalddin Mohialdeen, we have grown into the exclusive distributor in Iraq for the renowned Turkish brands, ETS and Yavuzsan.',
        text2: 'As we continue our journey, we remain dedicated to upholding the values instilled by our founder and delivering top-notch products and services to our customers. Explore with us the legacy of a family-driven business that has stood the test of time and is poised for an even brighter future.',
      },
      services: {
        title: 'Our Services',
        intro: 'Discover quality auto spare parts at Masdar Al-Adawat Company, a trusted distributor since 1986. As the exclusive distributor of ETS and Yavuzsan in Iraq, we offer a diverse range of top-tier components. Shop with us for reliability, competitive pricing, and nationwide coverage.',
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
        item4: {
          title: 'Electrical Components',
          description: 'Batteries, alternators, starters, and more – reliable electrical parts for your vehicle.',
        },
        item5: {
          title: 'Body Parts',
          description: 'Fenders, bumpers, lights, and mirrors to restore your vehicle\'s appearance.',
        },
        item6: {
          title: 'Accessories',
          description: 'Enhance your driving experience with our wide selection of car accessories.',
        },
      },
      ourProducts: {
        title: 'Our Products',
        intro: 'Explore our extensive catalog of high-quality car spare parts, meticulously selected to meet your vehicle\'s needs.',
        products: [
          {
            name: 'Brake Discs & Drums',
            description: 'High-performance braking components for superior safety and durability.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=Brake+Discs',
          },
          {
            name: 'Engine Filters',
            description: 'Premium filters for optimal engine performance and longevity.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=Engine+Filters',
          },
          {
            name: 'Suspension Systems',
            description: 'Complete suspension kits for enhanced ride comfort and stability.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=Suspension',
          },
          {
            name: 'Lighting Components',
            description: 'Headlights, tail lights, and interior lighting for clear visibility.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=Lighting',
          },
          {
            name: 'Spark Plugs',
            description: 'Reliable spark plugs for efficient engine ignition.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=Spark+Plugs',
          },
          {
            name: 'Wiper Blades',
            description: 'Durable wiper blades for clear vision in all weather conditions.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=Wiper+Blades',
          },
        ],
      },
      ourBrands: {
        title: 'Our Brands',
        intro: 'We are proud to be the exclusive distributor in Iraq for these renowned brands:',
        brands: [
          { name: 'Yavuzsan', description: 'Specializing in high-quality brake disks and brake drums.' },
          { name: 'A.b.a Automotive', description: 'A leading provider of various automotive components.' },
          { name: 'ETS Auto', description: 'Offering a wide range of reliable auto spare parts.' },
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
          'https://placehold.co/400x250/e0f2fe/000000?text=Part+Image+1',
          'https://placehold.co/400x250/e0f2fe/000000?text=Part+Image+2',
          'https://placehold.co/400x250/e0f2fe/000000?text=Part+Image+3',
          'https://placehold.co/400x250/e0f2fe/000000?text=Part+Image+4',
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
        phone: 'Phone:',
        email: 'Email:',
        address: 'Address:',
        formName: 'Your Name',
        formEmail: 'Your Email',
        formMessage: 'Your Message',
        formSubmit: 'Send Message',
        addressDetails: '123 Car Parts Street, Auto City, Country',
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
        title: 'شريكك الموثوق لقطع غيار السيارات',
        subtitle: 'قطع غيار عالية الجودة، خدمة استثنائية',
        description: 'نقدم مجموعة واسعة من قطع غيار السيارات الأصلية والتجارية لجميع الماركات والموديلات. سيارتك تستحق الأفضل، ونحن نقدمه.',
        button: 'استكشف منتجاتنا',
      },
      about: {
        title: 'قصتنا',
        text1: 'بدأنا رحلتنا في عام 1986، ونحن شركة عائلية من الجيل الثاني متخصصة في توزيع قطع غيار السيارات. متجذرين في الإرث الغني الذي تركه مؤسسنا، والدي، بدأنا مشروعنا المتواضع في دهوك، العراق. على مر السنين، ومن خلال تفاني والتزام الرئيس التنفيذي هفال عزالدين محي الدين، نمت شركتنا لتصبح الموزع الحصري في العراق للعلامتين التجاريتين التركيتين الشهيرتين، ETS ويافوزسان.',
        text2: 'بينما نواصل رحلتنا، نظل ملتزمين بالتمسك بالقيم التي غرسها مؤسسنا وتقديم منتجات وخدمات عالية الجودة لعملائنا. استكشف معنا إرث عمل تجاري عائلي صمد أمام اختبار الزمن ومستعد لمستقبل أكثر إشراقًا.',
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
        item4: {
          title: 'المكونات الكهربائية',
          description: 'بطاريات، مولدات، بادئات، والمزيد – قطع كهربائية موثوقة لسيارتك.',
        },
        item5: {
          title: 'قطع غيار الهيكل',
          description: 'مصدات، مصابيح، ومرايا لاستعادة مظهر سيارتك.',
        },
        item6: {
          title: 'إكسسوارات',
          description: 'عزز تجربتك في القيادة من خلال مجموعتنا الواسعة من إكسسوارات السيارات.',
        },
      },
      ourProducts: {
        title: 'منتجاتنا',
        intro: 'استكشف كتالوجنا الواسع من قطع غيار السيارات عالية الجودة، المختارة بعناية لتلبية احتياجات سيارتك.',
        products: [
          {
            name: 'أقراص ومكابح الفرامل',
            description: 'مكونات فرامل عالية الأداء لسلامة ومتانة فائقتين.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=أقراص+الفرامل',
          },
          {
            name: 'فلاتر المحرك',
            description: 'فلاتر فاخرة لأداء المحرك الأمثل وطول العمر.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=فلاتر+المحرك',
          },
          {
            name: 'أنظمة التعليق',
            description: 'مجموعات تعليق كاملة لراحة قيادة واستقرار محسنين.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=التعليق',
          },
          {
            name: 'مكونات الإضاءة',
            description: 'مصابيح أمامية، مصابيح خلفية، وإضاءة داخلية لرؤية واضحة.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=الإضاءة',
          },
          {
            name: 'شمعات الإشعال',
            description: 'شمعات إشعال موثوقة لإشعال المحرك بكفاءة.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=شمعات+الإشعال',
          },
          {
            name: 'شفرات المساحات',
            description: 'شفرات مساحات متينة لرؤية واضحة في جميع الظروف الجوية.',
            image: 'https://placehold.co/400x300/e0f2fe/000000?text=شفرات+المساحات',
          },
        ],
      },
      ourBrands: {
        title: 'علاماتنا التجارية',
        intro: 'نحن فخورون بأن نكون الموزع الحصري في العراق لهذه العلامات التجارية الشهيرة:',
        brands: [
          { name: 'يافوزسان', description: 'متخصصة في أقراص الفرامل وأسطوانات الفرامل عالية الجودة.' },
          { name: 'أ.ب.أ للسيارات', description: 'مورد رائد لمختلف مكونات السيارات.' },
          { name: 'إي تي إس للسيارات', description: 'تقدم مجموعة واسعة من قطع غيار السيارات الموثوقة.' },
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
          'https://placehold.co/400x250/e0f2fe/000000?text=صورة+قطعة+1',
          'https://placehold.co/400x250/e0f2fe/000000?text=صورة+قطعة+2',
          'https://placehold.co/400x250/e0f2fe/000000?text=صورة+قطعة+3',
          'https://placehold.co/400x250/e0f2fe/000000?text=صورة+قطعة+4',
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
        phone: 'الهاتف:',
        email: 'البريد الإلكتروني:',
        address: 'العنوان:',
        formName: 'اسمك',
        formEmail: 'بريدك الإلكتروني',
        formMessage: 'رسالتك',
        formSubmit: 'إرسال الرسالة',
        addressDetails: '123 Car Parts Street, Auto City, Country',
        workingHoursTitle: 'ساعات العمل:',
        workingHours: [
          'السبت 08:00 – 17:00',
          'الأحد 08:00 – 17:00',
          'الاثنين 08:00 – 17:00',
          'الثلاثاء 08:00 – 17:00',
          'الأربعاء 08:00 – 17:00',
          'الخميس 08:00 – 17:00',
          'الجمعة مغلق',
        ],
        googleMapLink: 'https://maps.app.goo.gl/8A8NDL6YLiqJLzUK6',
        googleMapText: 'عرض على خرائط جوجل',
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
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Brand Name */}
          <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img
              src="logo.png"
              alt="Masdar Al-adawat Logo"
              className="h-10 w-auto"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x50/e0f2fe/000000?text=Logo+Fallback"; }}
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.home}</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.about}</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.services}</a>
            <a href="#our-products" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.ourProducts}</a>
            <a href="#our-brands" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.ourBrands}</a>
            <a href="#our-guarantee" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.ourGuarantee}</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.gallery}</a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.whyChooseUs}</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">{currentContent.nav.contact}</a>
          </nav>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <Globe size={20} />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-lg">
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
          <a
            href="#services"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            {currentContent.hero.button}
          </a>
        </div>
        {/* Abstract shapes for background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-64 h-64 bg-blue-500 opacity-10 rounded-full -top-16 -left-16 transform rotate-45"></div>
          <div className="absolute w-96 h-96 bg-blue-400 opacity-10 rounded-full -bottom-32 -right-32 transform -rotate-30"></div>
        </div>
      </section>

      {/* Our Story Section (formerly About Us) */}
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
                src="https://placehold.co/500x300/e0f2fe/000000?text=Our+Story+Image"
                alt="Our Story"
                className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 md:py-24 bg-blue-50 rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
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
                <Wrench className="text-blue-600 mb-4" size={48} />
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
              <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
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

      {/* Our Brands Section */}
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
              <div key={index} className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
                <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-3xl font-bold mb-4">
                  {brand.name.charAt(0)}
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{brand.name}</h3>
                <p className="text-gray-600 leading-relaxed">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantee Section */}
      <section id="our-guarantee" className="py-16 md:py-24 bg-blue-50 rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
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
              <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse bg-blue-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
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
      <section id="contact" className="py-16 md:py-24 bg-blue-50 rounded-xl shadow-md mx-4 md:mx-auto my-8 max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            {currentContent.contact.title}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">{currentContent.contact.intro}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Phone className="text-blue-600" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{currentContent.contact.phone}</h3>
                  <p className="text-gray-600">+123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Mail className="text-blue-600" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{currentContent.contact.email}</h3>
                  <p className="text-gray-600">info@carpartspro.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <MapPin className="text-blue-600" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{currentContent.contact.address}</h3>
                  <p className="text-gray-600">{currentContent.contact.addressDetails}</p>
                  <a href={currentContent.contact.googleMapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-1 block">
                    {currentContent.contact.googleMapText}
                  </a>
                </div>
              </div>
              {/* Working Hours */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 rtl:space-x-reverse">
                  <Globe className="text-blue-600" size={24} />
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
            <form className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  {currentContent.contact.formName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={currentContent.contact.formName}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  {currentContent.contact.formEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={currentContent.contact.formEmail}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  {currentContent.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={currentContent.contact.formMessage}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {currentContent.contact.formSubmit}
                </button>
              </div>
            </form>
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

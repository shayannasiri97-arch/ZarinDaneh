import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'saffron-1g',
    name: 'زعفران سوپر نگین صادراتی (۱ گرم)',
    subtitle: 'بسته‌بندی کریستال خاتم • عیار کروسین ۲۸۰+',
    category: 'saffron',
    categoryLabel: 'زعفران قائنات',
    province: 'قائنات',
    price: 245000,
    originalPrice: 280000,
    badge: 'برداشت امسال',
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxOFePrYaHUFrj1xnS6wk2-Lzs_S03wVv0UmtDdHhnvfdXPWUqWdTLfG5xi4eUudPYRhqUxoYU3YNeyu9ZJyoSkgdlX1NluIyjga9JgvWOV5IqP71PY8c0IOFnaWlbOnt0FaoSm6DhcrmLc8o4DhKXGnnbXRYqPnimXrUoA2InM7dyjG7J5E-BegqXEFrn1IpZ7aaB8uVWbRco_wEQO5R7ywbKcwjN7Gen5QzfKHZO-2YkzVsRqiqV',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCxOFePrYaHUFrj1xnS6wk2-Lzs_S03wVv0UmtDdHhnvfdXPWUqWdTLfG5xi4eUudPYRhqUxoYU3YNeyu9ZJyoSkgdlX1NluIyjga9JgvWOV5IqP71PY8c0IOFnaWlbOnt0FaoSm6DhcrmLc8o4DhKXGnnbXRYqPnimXrUoA2InM7dyjG7J5E-BegqXEFrn1IpZ7aaB8uVWbRco_wEQO5R7ywbKcwjN7Gen5QzfKHZO-2YkzVsRqiqV',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTlX7HDUeNzUc-F3mPBCjMOHAt9cna5MrHXgA_kVpzmLBqlihj4ux_1ON5WDhoSbsSxEUQzWR0HDAAguN5A0r_Sad91X1aTYqtH2HfRB0pJ6iLWPX8ZkRpN-PRJ6ri5756ZVeXDmBTCCfoF88XdoQEbVl9tzP9qxTWJSM9k79zK79qghMeyc9worybQLaUP_6wXieW1A34h-rZ5HF6ZhEWXZmrC8bj98hg9xC9ZjyiKaN9ReWHUqno',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkbFBTkr7NKZacmjU0QZegc7s516wyyTOSPwvnS0gnVpoVNTvOp4yaQOeql0Vbxx7mwCAFv-nnUmAKfg7rgLFgM03Qv1w1tbmjBU07JUz0OBIRJnTTzNmlcILfGrNs1c09NJKNyZPes4mDdXNs342XpeCsGI6AOv5N4S58a_G6g5GzTq9XWdcex7CLTqkIFuKuze0PgA_9AYLOk0aUkTMKXxcL-2upqXErgzxrV_8rfp-7OMPQfALV',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxkVAX48yk10Z2v5WcZ-UVYIegZDRPDw7vajMk4bk-XQkTuCC2M1yQk4sydlhK9UHlZR3_y3RQZrvhBjoYDhnas8XYPy66WcIMvq3bzL_tuB3TQpEHxNnmPhM85daDX3OYDWB4TCQia1eAz34L7jUmGGH2LjMWn6UzKykZPQQKnKpMcGZ8fBpLzNXem5L7jmY57VAOuwdu9di104kPAS6PHNDo2Lvs4qZpCdzC79IRPNuiaebpwSTD'
    ],
    description: 'زعفران سوپر نگین دستچین مزارع اختصاصی قائنات خراسان جنوبی. دارای بلندترین کلاله‌های تمام‌قرمز و عیار رنگ‌دهی بالای ۲۸۰ با ضمانت آزمایشگاهی خلوص و عطر استثنایی.',
    features: [
      'رشته‌های یکدست و درشت بدون خامه (سفیدی)',
      'تست آزمایشگاهی معتبر با شاخص کروسین ۲۸۰+',
      'خشک‌شده با متد نوین فرآوری حرارتی کنترل‌شده',
      'بسته‌بندی نفیس عایق هوا جهت حفظ عطر تا دو سال'
    ],
    specs: {
      crocinLevel: '۲۸۰+ (گرید ممتاز صادراتی)',
      harvestYear: 'پاییز ۱۴۰۴',
      origin: 'خراسان جنوبی، دشت قائنات',
      packaging: 'ظرف کریستالی نشکن با هولوگرام اصالت',
      shelfLife: '۲ سال در محیط خشک و خنک'
    },
    variants: [
      { weight: '۱ گرم', price: 245000, label: 'بسته تک‌گرمی کریستال' },
      { weight: '۲ گرم', price: 475000, label: 'بسته دو گرمی خاتم' },
      { weight: '۴.۶ گرم (یک مثقال)', price: 1050000, label: 'یک مثقال کامل اعلا' },
    ],
    featured: true,
    bestseller: true,
  },
  {
    id: 'pistachio-500g',
    name: 'پسته اکبری دستچین خندان (۵۰۰ گرم)',
    subtitle: 'برشته ملایم با نمک دریا و زعفران اعلا',
    category: 'nuts',
    categoryLabel: 'خشکبار رفسنجان',
    province: 'رفسنجان',
    price: 480000,
    originalPrice: 530000,
    badge: 'دستچین ممتاز',
    rating: 4.8,
    reviewsCount: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxQ6bVb3w5IznkHlvKcqRl9QzZKH2w8VhzMN3ZNAG1vo1Uk81rNlpb8Qv6CJa6aVvf8WEtWrADwNgjtIgAT0b1hQC4C7KNAwDYcqPjDV3jZAngY3DDiJkchqQ4kYCMcUtJbkWydjHWSTvALaydhoDL2XwW9mUykhppG6mw5VBI8_jbe_5xqCSGFErRTjLC5ERGVMKVgCxtxjmbxsnIaK3_ETuoqW0jN_36NN0qlkI6DNmW2ecn-c4K',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxQ6bVb3w5IznkHlvKcqRl9QzZKH2w8VhzMN3ZNAG1vo1Uk81rNlpb8Qv6CJa6aVvf8WEtWrADwNgjtIgAT0b1hQC4C7KNAwDYcqPjDV3jZAngY3DDiJkchqQ4kYCMcUtJbkWydjHWSTvALaydhoDL2XwW9mUykhppG6mw5VBI8_jbe_5xqCSGFErRTjLC5ERGVMKVgCxtxjmbxsnIaK3_ETuoqW0jN_36NN0qlkI6DNmW2ecn-c4K',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRCwUdjqP6dCV-Hou2AqKEa8aOm9GD8JPZp3pnLT5D4uqt2QWSVKkiJtpifU66ZBqgBWKkNmTYQJRP-10EBtApcGgmUtclJDno-KVTSlmOr9fGpLR6eujmksmClbpVcJvi_8C9CvP0T_T_lgbloRKul1Wgin3zySJlIGSoT-RiZQLbIZo8rwfigH3mnbZEPB4T3TmbhJMZcupysasQu5ERXyyzVrnrW8-gM_1ulkZeHJv9YoAVnZiV'
    ],
    description: 'پسته اکبری سوپر لوکس رفسنجان، دانه‌بلند، ۱۰۰٪ خندان طبیعی و برشته‌شده سنتی همراه با نمک دریایی و اندکی زعفران قائنات.',
    features: [
      'انس ۲۰-۲۲ دانه‌درشت کشیده',
      'خندان طبیعی روی درخت بدون دخالت مکانیکی',
      'برشتگی یکنواخت و ملایم بدون سوختگی',
      'فاقد هرگونه مواد نگه‌دارنده یا اسانس مصنوعی'
    ],
    specs: {
      harvestYear: 'امسال',
      origin: 'کرمان، باغات کهن رفسنجان',
      packaging: 'زیپ‌کیپ متالایز سوپاپ‌دار بهداشتی',
      shelfLife: '۹ ماه'
    },
    variants: [
      { weight: '۵۰۰ گرم', price: 480000, label: 'بسته نیم کیلویی' },
      { weight: '۱ کیلوگرم', price: 930000, label: 'بسته یک کیلویی خانواده' }
    ],
    featured: true,
    bestseller: true,
  },
  {
    id: 'gaz-400g',
    name: 'گز لقمه‌ای انگبین ۴۰٪ پسته (۴۰۰ گرم)',
    subtitle: 'عصاره خالص گون و انگبین خوانسار • بدون شکر صنعتی',
    category: 'sweets',
    categoryLabel: 'شیرینی اصیل اصفهان',
    province: 'اصفهان',
    price: 360000,
    badge: '۴۰٪ مغز پسته',
    rating: 4.9,
    reviewsCount: 114,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABdmtdIYCBdZMdmBqLbn1jgEa8Y-rJlFeCerZntyU1yHDqUjH628UbHFJPrasMLQdAdAOMgQWWKw8dP9pDMaI2YHxH8uAiaTPX0DQ7-t7ySfHE6axPsAx4yb86NiODSEYxaxPj5VerA0XvqiHpvvCHdqmf02ZYpC84ybis7xAxnzskmDOV0AoPQlQpRps7EvLPvIffiNvMBF7ZCzEPF792Sdslbz_nkPq2L2Fg9ct6C7b8mZ8KTHyF',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABdmtdIYCBdZMdmBqLbn1jgEa8Y-rJlFeCerZntyU1yHDqUjH628UbHFJPrasMLQdAdAOMgQWWKw8dP9pDMaI2YHxH8uAiaTPX0DQ7-t7ySfHE6axPsAx4yb86NiODSEYxaxPj5VerA0XvqiHpvvCHdqmf02ZYpC84ybis7xAxnzskmDOV0AoPQlQpRps7EvLPvIffiNvMBF7ZCzEPF792Sdslbz_nkPq2L2Fg9ct6C7b8mZ8KTHyF',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiYQcQg9A_SohPZ7sxqDdQKR7hRv1yjTvWTKGQMsGPB0kQUuTFKNFEPbk2cFQ473asR_66xzYknlTVPWAt_LgFJERJPXY1-2ISEOlyglsQLR2s7XR80oFpqzGfG2LmBsa4AYFk4RpBNJoRe-8YaGwK0YhHI5qrDv5FZKR_xPLmgNKW-tyJ5Q9WBzpYbN2nqNeb51kE9L0g82X__6apqU_EirqK2YCYoTDL43UGO8_4249nVsDJX_Fk'
    ],
    description: 'گز اعلای اصفهان فرآوری‌شده به شیوه سنتی استادکاران، با بهره‌گیری از گز انگبین طبیعی خوانسار و ۴۰ درصد مغز پسته خلال‌شده تازه.',
    features: [
      'حاوی ۴۰ درصد مغز پسته تازه رفسنجان',
      'شیرین‌شده با شهد طبیعی گون و انگبین',
      'بدنه‌ای نرم و کشسان بدون سفتی',
      'جعبه چوبی فاخر و مناسب پیشکش و میزبانی'
    ],
    specs: {
      origin: 'اصفهان',
      packaging: 'جعبه نفیس سنتی وکیوم‌شده',
      shelfLife: '۴ ماه در جای خشک و خنک'
    },
    variants: [
      { weight: '۴۰۰ گرم', price: 360000, label: 'جعبه ۴۰۰ گرمی' },
      { weight: '۸۰۰ گرم', price: 690000, label: 'جعبه دوطبقه ۸۰۰ گرمی' }
    ],
    featured: true,
    bestseller: true,
  },
  {
    id: 'sohan-500g',
    name: 'سوهان گل کره‌ای اعلا با مغز پسته',
    subtitle: 'کره خالص حیوانی، جوانه گندم و زعفران قائنات',
    category: 'sweets',
    categoryLabel: 'سوغات قم',
    province: 'قم',
    price: 290000,
    badge: 'کره حیوانی',
    rating: 4.7,
    reviewsCount: 82,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0aNs0nKn1qLAumTfHbkP2yY5H8ccHiqMs8fDyUelgxw8YgQz47tEBU6Wai5ezWPi_XlERCZzIWxjiMi0XEJWZytJCzjw1HnIQ9erpomXqgsisu3lKT6F9et9JEUwS8H3E_T8H41AXgkjZCpFkcYFMTnf35bODoenB94EOAjd2isxhFgMsyh0RYQWy2Sv6cfpjVmK4mR1JpBu4hScp3rEIxJPeRmzRu6RB_J2yKd7yqebtxMKM-Z6',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0aNs0nKn1qLAumTfHbkP2yY5H8ccHiqMs8fDyUelgxw8YgQz47tEBU6Wai5ezWPi_XlERCZzIWxjiMi0XEJWZytJCzjw1HnIQ9erpomXqgsisu3lKT6F9et9JEUwS8H3E_T8H41AXgkjZCpFkcYFMTnf35bODoenB94EOAjd2isxhFgMsyh0RYQWy2Sv6cfpjVmK4mR1JpBu4hScp3rEIxJPeRmzRu6RB_J2yKd7yqebtxMKM-Z6'
    ],
    description: 'سوهان اصیل گل با عطر مست‌کننده هل و کره حیوانی ناب، پر شده با خلال بادام و خلال پسته سبز تازه در قوطی فلزی طرح دار سنتی.',
    features: [
      '۱۰۰٪ پخته‌شده با کره طبیعی گوسفندی',
      'جوانه گندم ارگانیک و عسل طبیعی',
      'ترد، سبک و بدون چسبندگی به دندان'
    ],
    specs: {
      origin: 'قم',
      packaging: 'قوطی فلزی منقوش بهداشتی',
      shelfLife: '۳ ماه'
    },
    featured: false,
    bestseller: true,
  },
  {
    id: 'honey-1kg',
    name: 'عسل کوهستان خام و ارگانیک (۱ کیلو)',
    subtitle: 'عسل چندگیاه دامنه سبلان • ساکارز زیر ۲٪',
    category: 'honey',
    categoryLabel: 'عسل طبیعی دامنه سبلان',
    province: 'اردبیل',
    price: 390000,
    badge: 'ساکارز زیر ۲٪',
    rating: 4.9,
    reviewsCount: 77,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT1U9_MmEeDRLayWVmrZciJR_jYPK4G7wUyuisHwY-21P87uIsQjPI_GKs6XnsieTRTbiw5A3bmEXDLn5TQs5sDpmcOk4NE-AqoKai7fr7FnvQaw1K6kKeJdc5sVzcPaSCEtJ_S5ONFfn0sI3ZNkorTNA6WuK4wJFEQmFguNqmyHRE48V6mmaHr0iqpqoy_avzxNoC6paYuZ9PsdiXt12Who51_E6RJBDLNqvhw_Owd1xk9wSvdwAg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBT1U9_MmEeDRLayWVmrZciJR_jYPK4G7wUyuisHwY-21P87uIsQjPI_GKs6XnsieTRTbiw5A3bmEXDLn5TQs5sDpmcOk4NE-AqoKai7fr7FnvQaw1K6kKeJdc5sVzcPaSCEtJ_S5ONFfn0sI3ZNkorTNA6WuK4wJFEQmFguNqmyHRE48V6mmaHr0iqpqoy_avzxNoC6paYuZ9PsdiXt12Who51_E6RJBDLNqvhw_Owd1xk9wSvdwAg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCWUUHSXLYZkJ5sPrm7QpdWHgJi0X60rPtft6oAgJr2KfBMYXvNeKrGJTR44DKc3o77hXsTl2vA9w0ozgiHwwtLh3UHkuU5fSDAOYr6193y8eBfvnK5cXavrpXzMx0Zjmo4qCgVxOYvu2b62r2lV9OeoKJRYd96cYOsjCHZ5P_YoQVmHPzJg1L3iqwFa8Y1PuvvYlqQ-abjn4F57yqEKS4Dlc2AhajvpFhRSkpacsIEw88wTZljO2z'
    ],
    description: 'عسل طبیعی کوهستان سبلان برداشته‌شده از کندوهای مستقر در ارتفاعات ۲۵۰۰ متری، کاملاً خام، حرارت‌ندیده و سرشار از آنزیم‌های فعال زنده.',
    features: [
      'میزان ساکارز ۱.۴ درصد (مجاز برای افراد حساس)',
      'طیف گیاهی گون، آویشن و گل‌گاوزبان کوهی',
      'دارای برگه رسمی آنالیز آزمایشگاه عسل ایران'
    ],
    specs: {
      origin: 'دامنه‌های البرز غربی و سبلان',
      packaging: 'جار شیشه‌ای اختصاصی طلایی',
      shelfLife: 'نامحدود در دمای اتاق'
    },
    featured: true,
    bestseller: false,
  },
  {
    id: 'almond-500g',
    name: 'مغز بادام مامایی گرید A (۵۰۰ گرم)',
    subtitle: 'شیرین، طلایی و بدون حتی یک دانه تلخ',
    category: 'nuts',
    categoryLabel: 'خشکبار چهارمحال',
    province: 'چهارمحال و بختیاری',
    price: 420000,
    badge: 'مامایی صادراتی',
    rating: 4.8,
    reviewsCount: 53,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwhX_YIqTD-GFydjXy5RHVwru9ssMh-hF1cwvQ0__-3UmdY5bd5XZPhzW9cDqLIJY94MSla6vKEQTNzAdvU3rhpn6yerbITq7YXnpIwkoWTiASf-5uOi-gs-Jx8QVWnSDaGKhb341dD3X7oEXoLlX_j6q73rshG42EpZ1X-tWmrChi_pnh-2NS6CjKzRO3caiwiZ8bml_KSo3KfjZOG0uer5fQ61qlmklKm62oOFOmmxRZBVpYpsu2',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwhX_YIqTD-GFydjXy5RHVwru9ssMh-hF1cwvQ0__-3UmdY5bd5XZPhzW9cDqLIJY94MSla6vKEQTNzAdvU3rhpn6yerbITq7YXnpIwkoWTiASf-5uOi-gs-Jx8QVWnSDaGKhb341dD3X7oEXoLlX_j6q73rshG42EpZ1X-tWmrChi_pnh-2NS6CjKzRO3caiwiZ8bml_KSo3KfjZOG0uer5fQ61qlmklKm62oOFOmmxRZBVpYpsu2'
    ],
    description: 'بادام مامایی سامان در استان چهارمحال و بختیاری، گران‌بهاترین نژاد بادام ایران با پوست بسیار نازک، چربی طبیعی فوق‌العاده و تردی بی‌نظیر.',
    features: [
      'سورت دستی بدون ضایعات و شکستگی',
      'تضمین ۱۰۰٪ شیرین بودن تمام دانه‌ها',
      'سرشار از منیزیم، ویتامین E و کلسیم'
    ],
    specs: {
      origin: 'شهرستان سامان، حاشیه زاینده‌رود',
      packaging: 'بسته‌بندی پاکتی پنجره‌دار زیپ‌دار'
    },
    featured: false,
    bestseller: false,
  },
  {
    id: 'fig-500g',
    name: 'انجیر خشک استهبان اعلا (۵۰۰ گرم)',
    subtitle: 'گرید ۱۰۰A • خشک‌شده با آفتاب بدون گوگرد',
    category: 'nuts',
    categoryLabel: 'سوغات فارس',
    province: 'فارس',
    price: 260000,
    badge: 'گرید ۱۰۰A',
    rating: 4.7,
    reviewsCount: 64,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw2Pv1cM_tkrHzXIYOzp5kiKhgpzwaj71T9DszAWIiMqkVGyVnPkkxaJgfCbCnbaghnKV08kX_-C-7cGc9YxRlcUX0hfIkSCX1FDYlgf9TyLfvNLGD93lDqT_kHv44kN1gF3wMXFnih9sMwl8w_wkebTvqC-ckotw_sZzcoaTE93W0_WjHNCcQYBtVCTjQM8-hyVDNinSUJuPWKzexX8UhV88t-Ms9pmKz_lnW-uRpIoyaoIgPPDRk',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDw2Pv1cM_tkrHzXIYOzp5kiKhgpzwaj71T9DszAWIiMqkVGyVnPkkxaJgfCbCnbaghnKV08kX_-C-7cGc9YxRlcUX0hfIkSCX1FDYlgf9TyLfvNLGD93lDqT_kHv44kN1gF3wMXFnih9sMwl8w_wkebTvqC-ckotw_sZzcoaTE93W0_WjHNCcQYBtVCTjQM8-hyVDNinSUJuPWKzexX8UhV88t-Ms9pmKz_lnW-uRpIoyaoIgPPDRk'
    ],
    description: 'انجیر مرغوب دیم باغات استهبان، بزرگ‌ترین انجیرستان دیم جهان. خندان طبیعی، با بافت عسلی و پوستی نرم بدون استفاده از مواد شیمیایی.',
    features: [
      'دانه‌درشت و پر شهد',
      'خشک‌شده با نور مستقیم آفتاب',
      'بهترین میان‌وعده سالم و تقویت‌کننده دستگاه گوارش'
    ],
    specs: {
      origin: 'استهبان فارس',
      packaging: 'بسته مقوایی محافظ رطوبت'
    },
    featured: false,
    bestseller: false,
  },
  {
    id: 'walnut-500g',
    name: 'مغز گردو سفید تویسرکان (۵۰۰ گرم)',
    subtitle: 'روغن‌دار و خوش‌طعم • باغات الوند همدان',
    category: 'nuts',
    categoryLabel: 'خشکبار همدان',
    province: 'همدان',
    price: 380000,
    badge: 'سفید و روغنی',
    rating: 4.9,
    reviewsCount: 88,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRCwUdjqP6dCV-Hou2AqKEa8aOm9GD8JPZp3pnLT5D4uqt2QWSVKkiJtpifU66ZBqgBWKkNmTYQJRP-10EBtApcGgmUtclJDno-KVTSlmOr9fGpLR6eujmksmClbpVcJvi_8C9CvP0T_T_lgbloRKul1Wgin3zySJlIGSoT-RiZQLbIZo8rwfigH3mnbZEPB4T3TmbhJMZcupysasQu5ERXyyzVrnrW8-gM_1ulkZeHJv9YoAVnZiV',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRCwUdjqP6dCV-Hou2AqKEa8aOm9GD8JPZp3pnLT5D4uqt2QWSVKkiJtpifU66ZBqgBWKkNmTYQJRP-10EBtApcGgmUtclJDno-KVTSlmOr9fGpLR6eujmksmClbpVcJvi_8C9CvP0T_T_lgbloRKul1Wgin3zySJlIGSoT-RiZQLbIZo8rwfigH3mnbZEPB4T3TmbhJMZcupysasQu5ERXyyzVrnrW8-gM_1ulkZeHJv9YoAVnZiV'
    ],
    description: 'مغز گردوی درجه یک پایتخت گردوی ایران تویسرکان. رنگ روشن صدفی، پرروغن و سرشار از امگا ۳ با ماندگاری بالا.',
    features: [
      'بدون تلخی و سیاهی',
      'درصد چربی طبیعی بالا',
      'سورت دوبار دستی'
    ],
    specs: {
      origin: 'تویسرکان همدان',
      packaging: 'پاکت کرافت زیپ‌کیپ وکیوم'
    },
    featured: false,
    bestseller: true,
  },
  {
    id: 'tea-lahijan-500g',
    name: 'چای سرگل بهاره دستچین لاهیجان (۵۰۰ گرم)',
    subtitle: 'چین اول اردیبهشت • رنگ یاقوتی و عطر طبیعی گیلان',
    category: 'tea',
    categoryLabel: 'چای اصیل شمال',
    province: 'گیلان',
    price: 195000,
    badge: 'بهاره لاهیجان',
    rating: 4.8,
    reviewsCount: 71,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFoKlkppM8FCNbl6oTbSeNGbaYaO8MNY3rPeZ33MJ4GK_BVXXMARDR23t3Lidph6Y6PZbU8lsH9-w_o7xN2ltl4YxxkuzFs_GTuZLjcAW3p-hEhaANI2pcVirDt-sZSLTXdj9Rd0IW_bU8N6rfOOX8jUH9w7MpzPcm1bdt913Rnz4F1xZVoWgOOcuCMBYjJWAiyxHcTpbA_n9uu0O9LZrgYV6wGJH1qpdUz3Z5ROJy-ZeRA9lIxaAk',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDFoKlkppM8FCNbl6oTbSeNGbaYaO8MNY3rPeZ33MJ4GK_BVXXMARDR23t3Lidph6Y6PZbU8lsH9-w_o7xN2ltl4YxxkuzFs_GTuZLjcAW3p-hEhaANI2pcVirDt-sZSLTXdj9Rd0IW_bU8N6rfOOX8jUH9w7MpzPcm1bdt913Rnz4F1xZVoWgOOcuCMBYjJWAiyxHcTpbA_n9uu0O9LZrgYV6wGJH1qpdUz3Z5ROJy-ZeRA9lIxaAk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA71cQOSXJmMIeBaD0IkuG-LJ9uHiC0LpXIyN5cyFDhX_aNbBUdZirHRuEfdWrtRc2wDb9b_eG7ivEyngvohgmLWqwyqYdwRdeoyGCkH3yNLIOeGMEtWDqXgsGJ4DqN7Qb7raxWUxhEIkTEtuZR7jO5SK_8GsThWAb0MbJFvpFh1PvcclSVkB9MHgJnN9O9ONNIaEv1-k6ZLiLt54vQ9cbm2TmKKSz9bD5IFK-VeWM8tIkccuVdRVNh'
    ],
    description: 'چای دستچین شده از غنچه‌های نورس بوته‌های چای در شیب تپه‌های لاهیجان. بدون رنگ و اسانس شیمیایی، با طعم گس ملایم و رنگ یاقوتی شفاف.',
    features: [
      'برگ‌های پیچیده و خوش‌دم',
      'دم‌کشی عالی در قوری چینی ظرف ۱۵ دقیقه',
      'طبیعی ۱۰۰٪ با عطر اصیل چای شمال'
    ],
    specs: {
      origin: 'لاهیجان گیلان',
      packaging: 'بسته‌بندی قوطی فلزی محافظ عطر'
    },
    featured: false,
    bestseller: false,
  },
  {
    id: 'rockcandy-800g',
    name: 'نبات شاخه‌ای زعفرانی اعلا (۸۰۰ گرم)',
    subtitle: 'بلورهای الماس‌گون پرچم‌دار زعفران قائنات',
    category: 'sweets',
    categoryLabel: 'سوغات مشهد',
    province: 'خراسان رضوی',
    price: 120000,
    badge: 'بلورهای زعفرانی',
    rating: 4.8,
    reviewsCount: 58,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiYQcQg9A_SohPZ7sxqDdQKR7hRv1yjTvWTKGQMsGPB0kQUuTFKNFEPbk2cFQ473asR_66xzYknlTVPWAt_LgFJERJPXY1-2ISEOlyglsQLR2s7XR80oFpqzGfG2LmBsa4AYFk4RpBNJoRe-8YaGwK0YhHI5qrDv5FZKR_xPLmgNKW-tyJ5Q9WBzpYbN2nqNeb51kE9L0g82X__6apqU_EirqK2YCYoTDL43UGO8_4249nVsDJX_Fk',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiYQcQg9A_SohPZ7sxqDdQKR7hRv1yjTvWTKGQMsGPB0kQUuTFKNFEPbk2cFQ473asR_66xzYknlTVPWAt_LgFJERJPXY1-2ISEOlyglsQLR2s7XR80oFpqzGfG2LmBsa4AYFk4RpBNJoRe-8YaGwK0YhHI5qrDv5FZKR_xPLmgNKW-tyJ5Q9WBzpYbN2nqNeb51kE9L0g82X__6apqU_EirqK2YCYoTDL43UGO8_4249nVsDJX_Fk'
    ],
    description: 'نبات بلورین زعفرانی سنتی تولیدشده با شکر تصفیه‌شده مرغوب و شربت غلیظ زعفران قائنات همراه با پرچم‌های سرخ طبیعی.',
    features: [
      'بلورهای شفاف و شکننده',
      'رنگ‌دهی زرد کهربایی طبیعی به چای',
      'طبع گرمابخش و تسکین‌دهنده گوارش'
    ],
    specs: {
      origin: 'مشهد مقدس',
      packaging: 'جعبه هاردباکس بهداشتی'
    },
    featured: false,
    bestseller: false,
  },
  {
    id: 'giftbox-deluxe',
    name: 'جعبه هدیه نفیس زرین‌دانه (مخمل و چوب گردو)',
    subtitle: 'زعفران سوپر نگین، هاون قلم‌زنی برنجی و هل اکبر بنفش',
    category: 'gift',
    categoryLabel: 'هدایای تشریفاتی',
    province: 'اصفهان و مشهد',
    price: 1850000,
    originalPrice: 2100000,
    badge: 'هدیه فاخر',
    rating: 5.0,
    reviewsCount: 46,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO3u_voSCM5ujcpwWsoIWxb6BM-JxUSQj-kVBYXQshOrHKwNkOZUol_eqBnE537a_1VFXhDT8dehT7oceBvR9rbqan1RwHMHaRorIsoPsbfqlPJ8696qF1MMbhdJDccSrIdpvHMD4WTtlHDg0dbCm3sO8x4EW_hznig21cofmR_e_tIkDEZlVCk9ZDWHsD-hA17BAPNIUpMvfgI8wQ0ZAtO3bkMJ-vn8vNzJdVwH7FUrM4LTSWfJK8',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAO3u_voSCM5ujcpwWsoIWxb6BM-JxUSQj-kVBYXQshOrHKwNkOZUol_eqBnE537a_1VFXhDT8dehT7oceBvR9rbqan1RwHMHaRorIsoPsbfqlPJ8696qF1MMbhdJDccSrIdpvHMD4WTtlHDg0dbCm3sO8x4EW_hznig21cofmR_e_tIkDEZlVCk9ZDWHsD-hA17BAPNIUpMvfgI8wQ0ZAtO3bkMJ-vn8vNzJdVwH7FUrM4LTSWfJK8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAz2XUcp0d-zoi0Q0tClLPVPB3l-wEM8nsBs_ihwAZDTYEsXUQCfuzrc4pr0EcP-SjpdIVs2oRJyXWOkknYm7oQZjbRRA6UhPmQjKlksLl30xWwVM_aKS7yt3QhTGYtPpOuMVRMgBYCFzZPtmnt8BuW-lKS6e0NLNazLIuvxGRF-aEXv8e6RnY_WQYapFwYAZ7-ybYId3VpJRmq9yI9f_KmNRakU2rWy8KZXCPSncphbwR9UYN4OQ_O'
    ],
    description: 'ست هدیه دیپلماتیک و مدیریتی زرین‌دانه شامل یک مثقال زعفران سوپر نگین صادراتی در هاون برنجی دست‌ساز قلم‌زنی‌شده، قوری شاه‌عباسی و ۵۰ گرم هل سبز دانه‌درشت.',
    features: [
      'جعبه چوب گردوی خاتم‌کاری‌شده با آستر مخمل زرشکی',
      'یک مثقال زعفران ممتاز قائنات با برگه سرتیفیکیت خلوص',
      'هاون برنجی قلم‌زنی اصیل صنایع دستی اصفهان',
      'قابلیت حک پلاک اختصاصی لوگو و نام برای سازمان‌ها'
    ],
    specs: {
      origin: 'اصفهان و قائنات',
      packaging: 'هاردباکس مخمل با قفل برنجی سنتی'
    },
    featured: true,
    bestseller: false,
  }
];

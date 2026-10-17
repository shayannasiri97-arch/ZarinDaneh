import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CategoryId } from './types';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageParams, setPageParams] = useState<Record<string, string>>({});

  // Sync state from URL hash if available
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPage('home');
        setPageParams({});
        return;
      }
      const [route, queryStr] = hash.split('?');
      const params: Record<string, string> = {};
      if (queryStr) {
        const searchParams = new URLSearchParams(queryStr);
        searchParams.forEach((val, key) => {
          params[key] = val;
        });
      }
      setCurrentPage(route || 'home');
      setPageParams(params);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, params?: Record<string, string>) => {
    setCurrentPage(page);
    setPageParams(params || {});
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let hash = `#${page}`;
    if (params && Object.keys(params).length > 0) {
      const query = new URLSearchParams(params).toString();
      hash += `?${query}`;
    }
    window.location.hash = hash;
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'products':
      case 'shop':
        return (
          <ProductsPage
            initialCategory={(pageParams.category as CategoryId) || 'all'}
            initialSearch={pageParams.search || ''}
            onNavigate={handleNavigate}
          />
        );
      case 'product-detail':
      case 'product':
        return (
          <ProductDetailPage
            productId={pageParams.id || 'saffron-1g'}
            onNavigate={handleNavigate}
          />
        );
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage onNavigate={handleNavigate} />;
      case 'order-success':
        return <OrderSuccessPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-[#fff8f5] text-[#261910] font-sans selection:bg-[#c89b3c] selection:text-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <div className="flex-1">{renderCurrentPage()}</div>
        <Footer onNavigate={handleNavigate} />
        <Toast />
      </div>
    </CartProvider>
  );
};

export default App;
